// simplified-server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Import controllers (but don't use them yet)
import { createUser, getUser, addChatMessage } from "./controllers/userController.js";
import { getAdvice, getContextualAdvice } from "./controllers/aiController.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test endpoint to verify the route is working
app.get("/api/test", (req, res) => {
  console.log("Test endpoint called");
  res.json({ message: "Test endpoint is working!" });
});

// Simple test POST endpoint
app.post("/api/test-post", (req, res) => {
  console.log("Test POST endpoint called with body:", req.body);
  res.json({ message: "Test POST endpoint is working!", body: req.body });
});

// Chat endpoint — fake AI reply
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  const reply = `🤖 AI Bot: You said "${message}". That's interesting!`;
  res.json({ reply });
});

// AI Advice endpoint - Rule-based engine (simplified)
app.post("/api/ai/advice", (req, res) => {
  res.json({ advice: ["This is a simplified advice endpoint."] });
});

// Contextual AI Advice endpoint - NLP enhanced (simplified)
app.post("/api/ai/contextual", (req, res) => {
  res.json({ advice: "This is a simplified contextual advice endpoint." });
});

const PORT = 5001; // Changed port to avoid conflict
app.listen(PORT, () => console.log(`✅ Simplified server running on port ${PORT}`));