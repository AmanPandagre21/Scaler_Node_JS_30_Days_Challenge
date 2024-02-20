// 20. Problem: Express Route with MongoDB Aggregation

// Problem Statement: Create an Express route that uses MongoDB aggregation to
// calculate and return the average age of all users in the database.

const express = require("express");
const mongoose = require("mongoose");

//  Databse Connection
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
  age: Number,
});

const User = mongoose.model("User", userSchema);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello Scaler..!");
});

app.get("/average-age", averageAgeOfUsers);

async function averageAgeOfUsers(req, res) {
  try {
    const avegAge = await User.aggregate([
      {
        $group: {
          _id: null,
          averageAge: { $avg: "$age" },
        },
      },
    ]);

    if (avegAge.length === 0) {
      res.status(400).json({ success: false, message: "No Users Find" });
    }

    res.status(202).json({ succes: true, Average_Age: avegAge[0].averageAge });
  } catch (error) {
    res.status(500).json({ success: false, error: "Internal Sever Error" });
  }
}

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
