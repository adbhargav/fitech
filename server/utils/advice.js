// Generate dynamic advice based on user data
export function generateAdvice(user) {
  let advice = [];

  // ------------------------
  // 1. Check Income & Expenses
  // ------------------------
  const totalExpenses = user.expenses?.reduce((sum, exp) => sum + exp.amount, 0) || 0;
  const totalIncome = user.incomeSources?.reduce((sum, inc) => sum + inc.amount, 0) || 0;
  const extraFunds = totalIncome - totalExpenses;

  if (totalIncome === 0) {
    advice.push("We couldn't find your income details. Please provide your income to get personalized advice.");
  }

  if (totalExpenses > totalIncome * 0.8) {
    advice.push("You're spending a large portion of your income. Consider reducing discretionary expenses.");
  }

  // ------------------------
  // 2. Savings Goal
  // ------------------------
  if (user.savingsGoal?.amount) {
    if (user.savingsGoal.amount > extraFunds) {
      advice.push("Your savings goal may be too high based on your current income and expenses. Consider adjusting it.");
    } else {
      advice.push(`Great! You can save ${user.savingsGoal.amount} this month towards your goal.`);
    }
  } else {
    advice.push("Consider setting a monthly savings goal to secure your future.");
  }

  // ------------------------
  // 3. Investments
  // ------------------------
  if (!user.investments || user.investments.length === 0) {
    if (extraFunds > 0) {
      advice.push("You have extra funds. Consider starting small investments to grow your wealth.");
    }
  } else {
    advice.push("Keep monitoring your investments regularly to stay on track.");
  }

  // ------------------------
  // 4. Emergency Fund for Irregular Income
  // ------------------------
  const irregularIncome = user.incomeSources?.some(inc => inc.frequency !== "monthly");
  if (irregularIncome) {
    advice.push("Since your income is irregular, maintain at least 3 months of expenses in an emergency fund.");
  }

  // ------------------------
  // 5. Behavior Patterns
  // ------------------------
  if (user.behaviorPatterns?.impulsiveSpending) {
    advice.push("You tend to spend impulsively. Track your daily expenses and set limits.");
  }

  // ------------------------
  // 6. Adaptive Tips based on debt
  // ------------------------
  if (user.debt?.length > 0) {
    advice.push("Manage your debt carefully and prioritize high-interest debt first.");
  }

  return advice;
}
