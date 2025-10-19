import User from '../models/User.js';
import { parseTransactionData, categorizeTransactions, calculateCategoryTotals, getTopSpendingCategories } from '../utils/transactionProcessor.js';

// Import transactions for a user
export const importTransactions = async (req, res) => {
  try {
    const { email, transactionData } = req.body;
    
    // Validate input
    if (!email || !transactionData) {
      return res.status(400).json({ message: 'Email and transaction data are required' });
    }
    
    // Parse the transaction data
    const transactions = parseTransactionData(transactionData);
    const { income, expenses } = categorizeTransactions(transactions);
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // Process income transactions
    const incomeSources = income.map(transaction => ({
      source: transaction['Transaction Description'],
      amount: transaction.Amount,
      frequency: 'irregular' // Default to irregular since we're importing historical data
    }));
    
    // Process expense transactions
    const expenseCategories = calculateCategoryTotals(expenses);
    const userExpenses = Object.entries(expenseCategories).map(([category, total]) => ({
      category,
      amount: total,
      frequency: 'monthly' // Default to monthly
    }));
    
    // Update user data
    user.incomeSources = incomeSources;
    user.expenses = userExpenses;
    
    // Save updated user data
    await user.save();
    
    res.status(200).json({ 
      message: 'Transactions imported successfully',
      incomeCount: income.length,
      expenseCount: expenses.length,
      topSpendingCategories: getTopSpendingCategories(expenses)
    });
  } catch (error) {
    console.error('Error importing transactions:', error);
    res.status(500).json({ message: 'Error importing transactions', error: error.message });
  }
};

// Get transaction analysis for a user
export const getTransactionAnalysis = async (req, res) => {
  try {
    const { email } = req.params;
    
    // Validate email
    if (!email) {
      return res.status(400).json({ message: 'Email is required' });
    }
    
    // Find user
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    
    // For now, we'll return the user's current financial data
    // In a more complete implementation, we would analyze the imported transaction data
    
    res.status(200).json({
      incomeSources: user.incomeSources,
      expenses: user.expenses,
      savingsGoal: user.savingsGoal,
      investments: user.investments,
      debt: user.debt
    });
  } catch (error) {
    console.error('Error getting transaction analysis:', error);
    res.status(500).json({ message: 'Error getting transaction analysis', error: error.message });
  }
};