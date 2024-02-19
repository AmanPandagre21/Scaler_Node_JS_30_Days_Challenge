// 19. Problem: Mongoose Validation

// Problem Statement: Enhance the user schema from the
// previous question to include validation for the
// "email" property(must be a valid email address).
// Implement a function to add a new user to the MongoDB
// database with validation.

const express = require("express");
const mongoose = require("mongoose");

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect Database
const connectDB = () => {
  mongoose.connect("mongodb://127.0.0.1/testDatabase");

  const db = mongoose.connection;
  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

connectDB();

//  User Schema
const userSchema = new mongoose.Schema({
  username: String,
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: (v) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Invalid email format",
    },
  },
});

const User = mongoose.model("User", userSchema);

// Api Routes
app.post("/users", async (req, res) => {
  try {
    const { username, email } = req.body;
    if (!username || !email) throw new Error("All fields are required");

    const user = new User({ username, email });
    await user.save();

    res.status(202).json({ success: true, user });
  } catch (error) {
    if (error.name === "ValidationError")
      res.status(400).json({ success: false, message: error.message });
    else
      res
        .status(500)
        .json({ success: false, message: "Something Went Wrong!" });
  }
});

// creating a Server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
