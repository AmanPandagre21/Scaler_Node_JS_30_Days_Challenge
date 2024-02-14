// 15. Problem: Express Logging Middleware

// Problem Statement: Create a logging middleware for an Express application.The middleware
// should log detailed information about each incoming request, including the timestamp,
// HTTP method, URL, request headers, and request body.

// Expected Output:

// Each incoming request should be logged with detailed information.
// Test Cases:

// Make multiple requests and check the server logs for detailed information.

const express = require("express");

const app = express();

function loggingMiddleware(req, res, next) {
  // Your implementation here
  const url = req.originalUrl;
  const timeStamp = new Date().toISOString();
  const httpMethod = req.method;
  const headers = req.headers;
  const { name } = req.body;

  console.log("--------------------------------");
  console.log("Full URL:", url);
  console.log("Timestamp:", timeStamp);
  console.log("HTTP Method:", httpMethod);
  if (name) console.log("Name:", name);

  for (const header in headers) {
    console.log(`Header: ${header}, Value: ${headers[header]}`);
  }
  console.log("--------------------------------");

  next();
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(loggingMiddleware);

app.get("/", (req, res) => {
  res.send("Hey! Scaler..");
});

app.post("/data", (req, res) => {
  const { name } = req.body;
  res.send(`My Name is ${name}`);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listen on Port ${PORT}`);
});
