import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Test endpoint
app.get("/api/test", (req, res) => {
  console.log("Test endpoint called");
  res.json({ message: "Test endpoint is working!" });
});

// Simple test POST endpoint
app.post("/api/test-post", (req, res) => {
  console.log("Test POST endpoint called with body:", req.body);
  res.json({ message: "Test POST endpoint is working!", body: req.body });
});

app.listen(3002, () => console.log(`✅ Minimal test server running on port 3002`));