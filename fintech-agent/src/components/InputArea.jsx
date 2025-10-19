import React, { useState, useContext } from 'react';
import { UserContext } from '../context/UserContext';

const InputArea = () => {
  const [input, setInput] = useState('');
  const { sendMessage } = useContext(UserContext);

  const handleSend = () => {
    if (!input.trim()) return;
    sendMessage(input);
    setInput('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') handleSend();
  };

  return (
    <div className="flex mt-4 gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={handleSend}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
      >
        Send
      </button>
    </div>
  );
};

export default InputArea;
