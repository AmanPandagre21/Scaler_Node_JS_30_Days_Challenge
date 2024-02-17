// 18. Problem: Express Route with MongoDB Query

// Problem Statement: Create an Express route that retrieves
// all users from the MongoDB database and returns them as
// a JSON response.

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
  },
});

const User = mongoose.model("User", userSchema);

// Api Routes
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();

    if (!users) {
      res.status(400).json({ success: false, message: "Users Not Found!" });
    }
    res.status(202).json({ success: true, users });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something Went Wrong!" });
  }
});

// creating a Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
