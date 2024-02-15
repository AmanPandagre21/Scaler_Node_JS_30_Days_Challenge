// 16. Problem: MongoDB Connection Setup

// Problem Statement: Create an Express application with MongoDB integration using Mongoose.
// Implement a function to establish a connection to a MongoDB database.Ensure that the
// connection is successful and log a success message.

const express = require("express");
const mongoose = require("mongoose");

const app = express();

const connectToMongoDB = () => {
  mongoose.connect("mongodb://127.0.0.1/testDatabase");

  const db = mongoose.connection;

  db.on("error", (error) => console.error("MongoDB connection error:", error));
  db.once("open", () => console.log("Connected to MongoDB"));
};

connectToMongoDB();

app.get("/", (req, res) => {
  res.send("Hello Scaler..!");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
