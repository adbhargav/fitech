const axios = require('axios');

// Test data
const testEmail = 'test@example.com';
const testTransactionData = `Date	Type	Transaction Description	Amount	Category
01-10-2023	Income	Salary	5000	Salary
02-10-2023	Expense	Rent	1500	Housing
03-10-2023	Expense	Groceries	200	Food
04-10-2023	Expense	Utilities	150	Utilities
05-10-2023	Expense	Transportation	100	Transportation`;

async function testTransactionImport() {
  try {
    console.log('Testing transaction import...');
    const importResponse = await axios.post('https://fitech.onrender.com/api/users/import-transactions', {
      email: testEmail,
      transactionData: testTransactionData
    });
    console.log('Transaction import result:', importResponse.data);

    console.log('\nTesting transaction analysis...');
    const analysisResponse = await axios.get(`https://fitech.onrender.com/api/users/analysis/${testEmail}`);
    console.log('Transaction analysis:', analysisResponse.data);

    console.log('\nTransaction import test passed!');
  } catch (error) {
    console.error('Transaction import test failed:', error.response?.data || error.message);
  }
}

testTransactionImport();
