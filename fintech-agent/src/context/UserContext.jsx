// src/context/UserContext.jsx
import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [userData, setUserData] = useState(null);
  const [chatHistory, setChatHistory] = useState([]);

  useEffect(() => {
    if (email) {
      fetchUser();
    }
  }, [email]);

  const fetchUser = async () => {
    try {
      const res = await axios.get(`https://fitech.onrender.com/api/users/${email}`);
      setUserData(res.data);
      // Ensure we're setting chatHistory correctly
      const history = Array.isArray(res.data.chatHistory) ? res.data.chatHistory : [];
      setChatHistory(history);
    } catch (err) {
      console.log("User not found, creating new user...");
      try {
        // Extract name from email if needed, or use a default
        const name = email.split("@")[0] || "User";
        const res = await axios.post("https://fitech.onrender.com/api/users", { name, email });
        setUserData(res.data);
        setChatHistory([]);
      } catch (createErr) {
        console.error("Error creating user:", createErr);
      }
    }
  };

  const updateUserData = async (data) => {
    try {
      const res = await axios.put(`https://fitech.onrender.com/api/users/update/${email}`, data);
      setUserData(res.data);
      return res.data;
    } catch (err) {
      console.error("Error updating user data:", err);
      throw err;
    }
  };

  const saveMessage = async (message) => {
    // Update UI immediately
    setChatHistory((prev) => [...prev, message]);
    
    try {
      // Send the message to the backend
      await axios.post(`https://fitech.onrender.com/api/users/chat/${email}`, {
        sender: message.sender,
        message: message.message
      });
    } catch (err) {
      console.error("Error saving chat:", err);
      // Note: We don't remove the message from UI on error to maintain perceived performance
    }
  };

  return (
    <UserContext.Provider value={{ email, setEmail, userData, updateUserData, chatHistory, setChatHistory, saveMessage }}>
      {children}
    </UserContext.Provider>
  );
};
