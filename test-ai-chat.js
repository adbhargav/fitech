const axios = require('axios');

// Test data
const testEmail = 'test@example.com';
const testMessage = 'How should I save money?';

async function testAIChat() {
  try {
    console.log('Testing AI chat functionality...');
    const chatResponse = await axios.post('http://localhost:5001/api/ai/contextual', {
      email: testEmail,
      message: testMessage
    });
    console.log('AI chat response:', chatResponse.data);

    console.log('\nTesting chat message saving...');
    const chatSaveResponse = await axios.post(`http://localhost:5001/api/users/chat/${testEmail}`, {
      sender: 'User',
      message: testMessage
    });
    console.log('Chat message saved:', chatSaveResponse.data);

    console.log('\nAI chat test passed!');
  } catch (error) {
    console.error('AI chat test failed:', error.response?.data || error.message);
  }
}

testAIChat();