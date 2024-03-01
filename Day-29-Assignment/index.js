// Problem 29: Error Handling Middleware

// Problem Statement: You are developing a complex web application with multiple routes and
// middleware in Node.js and Express.You want to implement a centralized error handling mechanism to
// catch and handle errors gracefully without crashing the server.Design a middleware function that
// intercepts errors thrown by route handlers or other middleware and sends an appropriate error
// response to the client.

const express = require("express");
const app = express();

app.get("/route", (req, res, next) => {
  const error = new Error("Sample Error");
  error.statusCode = 400;
  next(error);
});

app.use(errorHandler);

function errorHandler(err, req, res, next) {
  // Your implementation here
  if (err.statusCode) {
    res.status(err.statusCode).json({ error: err.message });
  } else {
    console.error(err.stack);
    res.status(500).json({ error: "Server Error" });
  }
}

const PORT = 5000;

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
