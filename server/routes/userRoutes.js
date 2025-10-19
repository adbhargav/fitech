import express from 'express';
import { 
  createUser, 
  getUser, 
  updateUserData, 
  addChatMessage, 
  getAdvice 
} from '../controllers/userController.js';
import { importTransactions, getTransactionAnalysis } from '../controllers/transactionController.js';

const router = express.Router();

// Create a new user
router.post('/', createUser);

// Get user by email
router.get('/:email', getUser);

// Update user data (income, expenses, savings, etc.)
router.put('/update/:email', updateUserData);

// Add a chat message to history
router.post('/chat/:email', addChatMessage);

// Get AI advice based on current user data
router.get('/advice/:email', getAdvice);

// Import transactions for a user
router.post('/import-transactions', importTransactions);

// Get transaction analysis for a user
router.get('/analysis/:email', getTransactionAnalysis);

export default router;