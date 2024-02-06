// 6. Problem: Express Route Handling

// Problem Statement: You are building a web application using Express in Node.js.
// Create an Express route to handle GET requests to the endpoint "/greet"
// that takes a query parameter "name" and returns a personalized greeting.
// If the name parameter is not provided, the default greeting should be "Hello, Guest!".

//  * Handles GET requests to "/greet" endpoint
//  * @param {Object} req - Express request object
//  * @param {Object} res - Express response object

const express = require("express");
const app = express();
const PORT = 5000;

function greetHandler(req, res) {
  // Your implementation here
  const name = req.query.name || "Guest";

  res.status(200).send(`Hello, ${name}!`);
}

//  endpoints
app.get("/greet", greetHandler);
app.get("/greet?name", greetHandler);

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
