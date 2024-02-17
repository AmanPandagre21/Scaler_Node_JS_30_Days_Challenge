// 17. Problem: Mongoose Schema and Model

// Problem Statement: Define a Mongoose schema for a "User" with properties: "username"(string)
// and "email"(string).Create a Mongoose model for the User schema.Implement a function to add a
// new user to the MongoDB database.

const express = require("express");

const app = express();
const { connectDB, addUserToDatabase } = require("./db");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

connectDB();
addUserToDatabase({ username: "Bhupendra jogi", email: "america@gmail.com" });

app.get("/", (req, res) => {
  res.send("Hello Scaler...!");
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
