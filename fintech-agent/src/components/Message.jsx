import React from 'react';

const Message = ({ sender, text }) => {
  // Check if props are valid
  if (!sender || text === undefined) {
    return null;
  }
  
  const isUser = sender === 'User';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-2`}>
      <div
        className={`max-w-xs px-4 py-2 rounded-lg ${
          isUser ? 'bg-blue-500 text-white rounded-br-none' : 'bg-gray-300 text-gray-800 rounded-bl-none'
        }`}
      >
        {text}
      </div>
    </div>
  );
};

export default Message;