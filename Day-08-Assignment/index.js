// 8. Problem: Express Error Handling

// Problem Statement: Create an Express route that throws an error
// if the request parameter "number" is not a positive integer.
// Implement an error handling middleware to catch and handle
// this specific error, returning a custom error message and a
// 400 Bad Request status.

const express = require("express");
const app = express();
const PORT = 5000;

function positiveIntegerHandler(req, res) {
  const num = parseInt(req.query.number);

  if (!isNaN(num) && num > 0) {
    res.status(200).send(`Success! The Number ${num} is an positive number`);
  } else {
    throw new Error("Number is not a positive number");
  }
}

const errorHandler = (err, req, res, next) => {
  const num = parseInt(req.query.number);
  if (err.message === "Number is not a positive number") {
    res.status(400).send(`Error! The Number ${num} is not an positive number`);
  } else {
    next();
  }
};

app.get("/positive", positiveIntegerHandler);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running fine at port number ${PORT}`);
});
