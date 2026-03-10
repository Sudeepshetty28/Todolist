const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Usermodel = require('./models/user');

const app = express();

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://sudeepshetty:sudeepshetty@todocluster.plhndrz.mongodb.net/Crud?retryWrites=true&w=majority";
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

app.post("/createuser", async (req, res) => {
  try {
    const user = await Usermodel.create(req.body);
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(3001, () => {
  console.log("Server started on port 3001");
});