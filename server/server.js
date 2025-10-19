// server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoutes from "./routes/userRoutes.js";
import { getContextualAdvice } from "./controllers/aiController.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/fintech", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

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

// User routes
app.use("/api/users", userRoutes);

// Chat endpoint — fake AI reply
app.post("/api/chat", (req, res) => {
  const { message } = req.body;
  const reply = `🤖 AI Bot: You said "${message}". That's interesting!`;
  res.json({ reply });
});

// Contextual AI Advice endpoint - NLP enhanced
console.log("Registering /api/ai/contextual endpoint");
app.post("/api/ai/contextual", getContextualAdvice);

const PORT = process.env.PORT || 5001; // Changed port to 5001
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));