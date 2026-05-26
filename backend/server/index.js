
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Usermodel = require('./models/user');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
// MongoDB connection function
async function connectDB() {
  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("MongoDB connection failed:", error);
  }
}

connectDB();


// Create user
app.post("/createuser", async (req, res) => {
  try {
    const user = await Usermodel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all users
app.get("/users", async (req, res) => {
  try {
    const users = await Usermodel.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update user by ID
app.put("/updateuser/:id", async (req, res) => {
  try {
    const user = await Usermodel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete user by ID
app.delete("/deleteuser/:id", async (req, res) => {
  try {
    const user = await Usermodel.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    res.json({ message: "User deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});