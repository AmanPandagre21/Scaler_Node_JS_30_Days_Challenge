// Problem: Express Middleware
// Problem Statement: Implement an Express middleware function that
// logs the timestamp and the HTTP method of every incoming request
// to the server.

/**
 * Express middleware to log incoming requests
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 * @param {Function} next - Express next function
 */

const express = require("express");
const app = express();

const PORT = 5000;

// middleawares
app.use(requestLoggerMiddleware);

function requestLoggerMiddleware(req, res, next) {
  // Your implementation here
  const timeStamp = new Date().toLocaleString();
  const httpMethod = req.method;

  console.log(`${timeStamp} - ${httpMethod} request received.`);

  next();
}

app.get("/", (req, res) => {
  res.send("Hello, Scaler..!");
});

app.listen(PORT, () => {
  console.log(`Server Listening on Port Number ${PORT}`);
});
