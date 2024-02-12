// 12. Problem: Express Rate Limiting

// Problem Statement: Implement a rate - limiting middleware for an Express application.
// The middleware should limit the number of requests from a single IP address to a specified rate,
// and return a 429 Too Many Requests status if the limit is exceeded.

// /**
//  * Rate-limiting middleware for Express
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object
//  * @param {Function} next - Express next function
//  */
//
// Expected Output:

// If the number of requests from a single IP is below the limit, allow the request to proceed.
// If the limit is exceeded, return a 429 Too Many Requests status.
// Test Cases:

// Send requests within the limit; all should proceed.
// Send requests exceeding the limit; some should return a 429 status.

const express = require("express");
const app = express();

const rateLimitMiddleware = require("./rateLimitMiddleware");
const PORT = 5000;

app.use(express.json());

app.use(rateLimitMiddleware);

app.get("/", (req, res) => {
  res.status(202).send("Hello Buddy! Your Request is Accepted");
});

app.listen(PORT, () => {
  console.log(`Server is runnig fine at port ${PORT}.`);
});
