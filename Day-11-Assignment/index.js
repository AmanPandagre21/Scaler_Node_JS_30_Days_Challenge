// 11. Problem: Express Authentication Middleware

// Problem Statement: Implement an authentication middleware for an Express application.
// The middleware should check for the presence of a valid JWT(JSON Web Token) in the request headers.
// If a valid token is present, allow the request to proceed; otherwise, return a 401 Unauthorized
// status.

// /**
//  * Authentication middleware for Express
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  * @param {Function} next - Express next function
//  */

const express = require("express");
const app = express();

const authenticationMiddleware = require("./authenticationMiddleware.js");
const { generateToken } = require("./tokenServices.js");

const PORT = 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to my App");
});

app.get("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.send("All fields are required");
  }

  const token = generateToken({ email, password });

  res.status(202).send(`Token = ${token}`);
});

app.get("/protected", authenticationMiddleware, (req, res) => {
  res.send("Token Verified ✅! \n User has successfully authorized.");
});

app.listen(PORT, () => console.log(`Server is Running at Port number ${PORT}`));
