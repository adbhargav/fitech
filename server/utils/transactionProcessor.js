// Utility to process transaction data
export function parseTransactionData(rawData) {
  const lines = rawData.trim().split('\n');
  const headers = lines[0].split('\t');
  const transactions = [];

  // Skip header row
  for (let i = 1; i < lines.length; i++) {
    const values = lines[i].split('\t');
    if (values.length === headers.length) {
      const transaction = {};
      headers.forEach((header, index) => {
        transaction[header.trim()] = values[index].trim();
      });
      
      // Convert date string to Date object
      transaction.Date = new Date(transaction.Date.split('-').reverse().join('-'));
      
      // Convert amount to number
      transaction.Amount = parseFloat(transaction.Amount);
      
      transactions.push(transaction);
    }
  }

  return transactions;
}

// Categorize transactions by type
export function categorizeTransactions(transactions) {
  const income = transactions.filter(t => t.Type === 'Income');
  const expenses = transactions.filter(t => t.Type === 'Expense');
  
  return { income, expenses };
}

// Calculate totals by category
export function calculateCategoryTotals(transactions) {
  const categoryTotals = {};
  
  transactions.forEach(transaction => {
    const category = transaction.Category;
    if (!categoryTotals[category]) {
      categoryTotals[category] = 0;
    }
    categoryTotals[category] += transaction.Amount;
  });
  
  return categoryTotals;
}

// Calculate monthly spending
export function calculateMonthlySpending(transactions) {
  const monthlyData = {};
  
  transactions.forEach(transaction => {
    if (transaction.Type === 'Expense') {
      const monthYear = `${transaction.Date.getFullYear()}-${String(transaction.Date.getMonth() + 1).padStart(2, '0')}`;
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = 0;
      }
      monthlyData[monthYear] += transaction.Amount;
    }
  });
  
  return monthlyData;
}

// Identify top spending categories
export function getTopSpendingCategories(transactions, limit = 5) {
  const categoryTotals = calculateCategoryTotals(
    transactions.filter(t => t.Type === 'Expense')
  );
  
  return Object.entries(categoryTotals)
    .sort(([,a], [,b]) => b - a)
    .slice(0, limit)
    .map(([category, total]) => ({ category, total }));
}