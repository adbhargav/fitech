const axios = require('axios');

// Test data
const testEmail = 'test@example.com';
const testUserData = {
  name: 'Test User',
  email: testEmail,
  incomeSources: [
    { source: 'Salary', amount: 5000, frequency: 'monthly' }
  ],
  expenses: [
    { category: 'Rent', amount: 1500, frequency: 'monthly' },
    { category: 'Groceries', amount: 400, frequency: 'monthly' }
  ],
  savingsGoal: {
    amount: 1000,
    deadline: '2024-12-31'
  }
};

async function testEndpoints() {
  try {
    console.log('Testing user creation...');
    const createUserResponse = await axios.post('https://fitech.onrender.com/api/users', {
      name: testUserData.name,
      email: testUserData.email
    });
    console.log('User created:', createUserResponse.data);

    console.log('\nTesting user data update...');
    const updateResponse = await axios.put(`https://fitech.onrender.com/api/users/update/${testEmail}`, {
      incomeSources: testUserData.incomeSources,
      expenses: testUserData.expenses,
      savingsGoal: testUserData.savingsGoal
    });
    console.log('User data updated:', updateResponse.data);

    console.log('\nTesting user data retrieval...');
    const getResponse = await axios.get(`http://localhost:5001/api/users/${testEmail}`);
    console.log('User data retrieved:', getResponse.data);

    console.log('\nTesting AI advice generation...');
    const adviceResponse = await axios.get(`https://fitech.onrender.com/api/users/advice/${testEmail}`);
    console.log('AI advice:', adviceResponse.data);

    console.log('\nAll tests passed!');
  } catch (error) {
    console.error('Test failed:', error.response?.data || error.message);
  }
}

testEndpoints();
