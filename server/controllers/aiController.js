console.log("aiController.js loaded");

import { generateAdvice } from '../utils/advice.js';
import { findBestResponse } from '../data/financialDataset.js';
import User from '../models/User.js';

console.log("Dependencies imported");

// Get AI advice based on current user data
export const getAdvice = async (req, res) => {
  console.log("getAdvice called");
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const advice = generateAdvice(user); // rule-based engine
    res.json({ advice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Enhanced chat endpoint that provides contextual financial advice
export const getContextualAdvice = async (req, res) => {
  console.log("getContextualAdvice called with:", req.body);
  try {
    const { email, message } = req.body;
    const user = await User.findOne({ email });
    console.log("User found:", user);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // First, check if we have a predefined response in our dataset
    const predefinedResponse = findBestResponse(message);
    if (predefinedResponse) {
      const responseWithPrefix = `I understand you're asking about "${message}". Here's some expert financial advice:\n\n${predefinedResponse}`;
      return res.json({ advice: responseWithPrefix });
    }

    // Analyze the user's message to determine what kind of advice they need
    const lowerCaseMessage = message.toLowerCase();
    let advice = [];

    // Income-related queries
    if (lowerCaseMessage.includes('income') || lowerCaseMessage.includes('earn') || lowerCaseMessage.includes('salary')) {
      const totalIncome = user.incomeSources?.reduce((sum, inc) => sum + inc.amount, 0) || 0;
      advice.push(`Your total monthly income is ₹${totalIncome}.`);
      
      if (user.incomeSources && user.incomeSources.length > 0) {
        advice.push("Here's a breakdown of your income sources:");
        user.incomeSources.forEach(source => {
          advice.push(`- ${source.source}: ₹${source.amount} (${source.frequency})`);
        });
      }
    }

    // Expense-related queries
    else if (lowerCaseMessage.includes('spend') || lowerCaseMessage.includes('expense') || lowerCaseMessage.includes('cost')) {
      const totalExpenses = user.expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
      advice.push(`Your total monthly expenses are ₹${totalExpenses}.`);
      
      if (user.expenses && user.expenses.length > 0) {
        advice.push("Here's a breakdown of your expenses:");
        user.expenses.forEach(expense => {
          advice.push(`- ${expense.category}: ₹${expense.amount} (${expense.frequency})`);
        });
      }
      
      const totalIncome = user.incomeSources?.reduce((sum, inc) => sum + inc.amount, 0) || 0;
      if (totalExpenses > totalIncome * 0.8) {
        advice.push("⚠️ You're spending a large portion of your income. Consider reducing discretionary expenses.");
      }
    }

    // Savings-related queries
    else if (lowerCaseMessage.includes('save') || lowerCaseMessage.includes('savings') || lowerCaseMessage.includes('goal')) {
      if (user.savingsGoal?.amount) {
        advice.push(`Your savings goal is ₹${user.savingsGoal.amount}.`);
        
        const totalExpenses = user.expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
        const totalIncome = user.incomeSources?.reduce((sum, inc) => sum + inc.amount, 0) || 0;
        const extraFunds = totalIncome - totalExpenses;
        
        if (user.savingsGoal.amount > extraFunds) {
          advice.push("⚠️ Your savings goal may be too high based on your current income and expenses. Consider adjusting it.");
        } else {
          advice.push(`✅ Great! You can save ₹${user.savingsGoal.amount} this month towards your goal.`);
        }
      } else {
        advice.push("You haven't set a savings goal yet. Consider setting a monthly savings goal to secure your future.");
      }
    }

    // Investment-related queries
    else if (lowerCaseMessage.includes('invest') || lowerCaseMessage.includes('investment')) {
      if (!user.investments || user.investments.length === 0) {
        const totalExpenses = user.expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
        const totalIncome = user.incomeSources?.reduce((sum, inc) => sum + inc.amount, 0) || 0;
        const extraFunds = totalIncome - totalExpenses;
        
        if (extraFunds > 0) {
          advice.push("You have extra funds. Consider starting small investments to grow your wealth.");
        } else {
          advice.push("Once you have extra funds, consider starting small investments to grow your wealth.");
        }
      } else {
        advice.push("Here are your current investments:");
        user.investments.forEach(investment => {
          advice.push(`- ${investment.type}: ₹${investment.amount} (Risk: ${investment.riskLevel})`);
        });
        advice.push("Keep monitoring your investments regularly to stay on track.");
      }
    }

    // Debt-related queries
    else if (lowerCaseMessage.includes('debt') || lowerCaseMessage.includes('loan')) {
      if (user.debt?.length > 0) {
        advice.push("Here's your debt information:");
        user.debt.forEach(debtItem => {
          advice.push(`- ${debtItem.type}: ₹${debtItem.amount} (Monthly payment: ₹${debtItem.monthlyPayment})`);
        });
        advice.push("Manage your debt carefully and prioritize high-interest debt first.");
      } else {
        advice.push("You don't have any debt recorded. That's great!");
      }
    }

    // General advice if no specific query is detected
    else {
      // Use the existing rule-based advice engine
      const generalAdvice = generateAdvice(user);
      advice = [...generalAdvice];
      
      // Add a contextual response
      advice.unshift(`I understand you're asking about "${message}". Here's some personalized financial advice based on your profile:`);
    }

    console.log("Advice generated:", advice);
    res.json({ advice: advice.join('\n') });
  } catch (error) {
    console.error("Error in getContextualAdvice:", error);
    res.status(500).json({ message: error.message });
  }
};

console.log("Functions exported");