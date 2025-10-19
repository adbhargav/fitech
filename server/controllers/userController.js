import User from '../models/User.js';
import { generateAdvice } from '../utils/advice.js';

// Create a new user
export const createUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    
    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }
    
    // Validate name
    if (!name) {
      return res.status(400).json({ message: 'Name is required' });
    }
    
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: 'User already exists' });
    }
    const user = new User({ name, email });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get user by email
export const getUser = async (req, res) => {
  try {
    const { email } = req.params;
    
    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }
    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update user data (income, expenses, savings, investments, debt)
export const updateUserData = async (req, res) => {
  try {
    const { email } = req.params;
    const updates = req.body; // incomeSources, expenses, savingsGoal, investments, debt, preferences
    
    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }
    
    const user = await User.findOneAndUpdate({ email }, updates, { new: true });
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Add chat message
export const addChatMessage = async (req, res) => {
  try {
    const { email } = req.params;
    const { sender, message } = req.body;
    
    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }
    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.chatHistory.push({ sender, message });
    await user.save();
    res.json(user.chatHistory);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get AI advice based on current user data
export const getAdvice = async (req, res) => {
  try {
    const { email } = req.params;
    
    // Validate email format
    if (!email || !email.includes('@')) {
      return res.status(400).json({ message: 'Valid email is required' });
    }
    
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const advice = generateAdvice(user); // rule-based engine
    res.json({ advice });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};