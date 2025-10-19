import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import axios from "axios";
import Message from "./Message";

const ChatWindow = () => {
  const { email, setEmail, chatHistory, setChatHistory, saveMessage } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [tempEmail, setTempEmail] = useState("");
  const [inputText, setInputText] = useState("");

  const handleEmailSubmit = () => {
    if (tempEmail.trim()) {
      setEmail(tempEmail.trim());
      localStorage.setItem("userEmail", tempEmail.trim());
    }
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;
    if (!email) return alert("Please enter your email first to start chatting.");

    const userMsg = { sender: "User", message: inputText };
    
    // Use the saveMessage function from context to save message to user history
    saveMessage(userMsg);
    setInputText("");

    setIsLoading(true);
    try {
      // Get contextual AI advice from the new endpoint
      const res = await axios.post(`https://fitech.onrender.com/api/ai/contextual`, {
        email: email,
        message: inputText,
      });

      // Add AI response to chat
      const botMsg = {
        sender: "AI",
        message: res.data.advice || "I'm here to help with your financial questions!",
      };
      // Save AI response to user history as well
      saveMessage(botMsg);
    } catch (err) {
      console.error("Chat error:", err);
      // Fallback to the simple chat endpoint
      try {
        const fallbackRes = await axios.post(`https://fitech.onrender.com/api/chat`, {
          message: inputText,
        });
        
        const botMsg = {
          sender: "AI",
          message: fallbackRes.data.reply || "Got it! I'll analyze your data shortly.",
        };
        saveMessage(botMsg);
      } catch (fallbackErr) {
        console.error("Fallback chat error:", fallbackErr);
        const errorMsg = {
          sender: "AI",
          message: "⚠️ Server is not responding. Please try again later.",
        };
        setChatHistory(prev => [...prev, errorMsg]);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 📨 Ask for email if not set yet
  if (!email) {
    return (
      // Changed background to white and adjusted text colors accordingly
      <div className="bg-white text-gray-800 p-6 rounded-xl shadow-lg w-full max-w-md mx-auto mt-10 text-center border border-gray-200">
        <h2 className="text-lg font-semibold mb-3">Enter your email to begin</h2>
        <input
          type="email"
          value={tempEmail}
          onChange={(e) => setTempEmail(e.target.value)}
          placeholder="you@example.com"
          className="p-2 w-full rounded-md text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onKeyPress={(e) => {
            if (e.key === 'Enter') handleEmailSubmit();
          }}
        />
        <button
          onClick={handleEmailSubmit}
          className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-semibold"
        >
          Start Chat
        </button>
      </div>
    );
  }

  return (
    // Changed background to white and adjusted text colors accordingly
    <div className="flex flex-col bg-white text-gray-800 rounded-xl shadow-lg p-6 w-full max-w-3xl mx-auto mt-10 border border-gray-200">
      <div className="h-[400px] overflow-y-auto space-y-4 mb-4 scrollbar-thin scrollbar-thumb-gray-300">
        {chatHistory && chatHistory.length > 0 ? (
          chatHistory.map((msg, idx) => {
            // Add a key check to ensure proper rendering
            if (!msg || !msg.sender || msg.message === undefined) {
              return null;
            }
            return <Message key={idx} sender={msg.sender} text={msg.message} />;
          })
        ) : (
          <div className="text-center text-gray-500 py-4">
            No messages yet. Start a conversation!
          </div>
        )}
        {isLoading && (
          <p className="text-gray-500 text-sm italic animate-pulse">
            AI is thinking...
          </p>
        )}
      </div>
      <div className="flex">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask about your finances..."
          className="flex-1 p-3 rounded-l-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-r-lg font-semibold disabled:opacity-50"
          disabled={isLoading || !inputText.trim()}
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatWindow;
