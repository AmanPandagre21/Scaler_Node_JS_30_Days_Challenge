# Scaler_Node_JS_30_Days_Challenge

## Challenges

### 1 - Problem 1: File Reader

Problem Statement: Create a function readFileContent(filePath) that takes the path to a file as input and reads its content asynchronously using the fs module. The function should print the content to the console.

### 2 - Problem 2: File Writer

Problem Statement: Create a function writeToFile(filePath, content) that takes the path to a file and user input content as input. The function should write the content to the specified file using the fs module.

### 3 - Problem 3: Execute Command

Problem Statement: Create a function executeCommand(command) that takes a shell command as input and executes it using the child_process module. The function should print the output of the command to the console.

### 4 - Problem 4: Resolve Path

Problem Statement: Create a function resolvePath(relativePath) that takes a relative path as input and resolves it to an absolute path using the path module. The function should print the resolved path to the console.

### 5 - Problem 5: File Extension Checker

Problem Statement: Create a function checkFileExtension(filePath, expectedExtension) that takes a file path and an expected file extension as input. The function should check if the file has the expected extension using the path module and print the result to the console.

### 6 - 6. Problem: Express Route Handling

Problem Statement: You are building a web application using Express in Node.js. Create an Express route to handle GET requests to the endpoint "/greet" that takes a query parameter "name" and returns a personalized greeting. If the name parameter is not provided, the default greeting should be "Hello, Guest!".

### 7 - 7. Problem: Express Middleware

Problem Statement: Implement an Express middleware function that logs the timestamp and the HTTP method of every incoming request to the server.

### 8 - 8. Problem: Express Error Handling

Problem Statement: Create an Express route that throws an error if the request parameter "number" is not a positive integer. Implement an error handling middleware to catch and handle this specific error, returning a custom error message and a 400 Bad Request status.

### 9 - Which of the following are examples of node modules?

a. Express

b. Body-parser

c. Socket.io

d. All of the above

### 10 - . Problem: Express Static Files

Problem Statement: Create an Express application that serves static files (e.g., HTML, CSS, images) from a "public" directory. Ensure that accessing the root ("/") returns the "index.html" file from the "public" directory.

### 11 - 11. Problem: Express Authentication Middleware

Problem Statement: Implement an authentication middleware for an Express application. The middleware should check for the presence of a valid JWT (JSON Web Token) in the request headers. If a valid token is present, allow the request to proceed; otherwise, return a 401 Unauthorized status.

### 12 - 12. Problem: Express Rate Limiting

Problem Statement: Implement a rate-limiting middleware for an Express application. The middleware should limit the number of requests from a single IP address to a specified rate, and return a 429 Too Many Requests status if the limit is exceeded.

### 13 - 13. Problem: Express WebSocket Integration

Problem Statement: Extend an existing Express application to include WebSocket support. Create a WebSocket server that echoes back any message it receives from a client. Implement an endpoint "/websocket" that serves an HTML page with JavaScript to establish a WebSocket connection.

### 14 - 14. Problem: Express Caching Middleware

Problem Statement: Implement a caching middleware for an Express application. The middleware should cache responses based on the request URL and return cached responses for subsequent identical requests. Allow cache expiration after a specified time.

### 15 - 15. Problem: Express Logging Middleware

Problem Statement: Create a logging middleware for an Express application. The middleware should log detailed information about each incoming request, including the timestamp, HTTP method, URL, request headers, and request body.

### 16 - 16. Problem: MongoDB Connection Setup

Problem Statement: Create an Express application with MongoDB integration using Mongoose. Implement a function to establish a connection to a MongoDB database. Ensure that the connection is successful and log a success message.

### 17 - 17. Problem: Mongoose Schema and Model

Problem Statement: Define a Mongoose schema for a "User" with properties: "username" (string) and "email" (string). Create a Mongoose model for the User schema. Implement a function to add a new user to the MongoDB database.

### 18 - 18. Problem: Express Route with MongoDB Query

Problem Statement: Create an Express route that retrieves all users from the MongoDB database and returns them as a JSON response.

### 19 - 19. Problem: Mongoose Validation

Problem Statement: Enhance the user schema from the previous question to include validation for the "email" property (must be a valid email address). Implement a function to add a new user to the MongoDB database with validation.

### 20 - 20. Problem: Express Route with MongoDB Aggregation

Problem Statement: Create an Express route that uses MongoDB aggregation to calculate and return the average age of all users in the database.

### 21 - Project building challenge

### 22 - 22. Problem: MongoDB CRUD Operations

Problem Statement: Implement a set of CRUD (Create, Read, Update, Delete) operations for a "Product" entity using MongoDB and Mongoose. Define a Mongoose schema for the product with properties like "name," "price," and "quantity." Implement functions to create, read, update, and delete products.

### 23 - 23. Problem: Mongoose Population

Problem Statement: Extend the previous "Product" schema to include a reference to a "Category" entity. Implement a Mongoose population query to retrieve all products with their corresponding category details.

### 24 - 24. Problem: Express Route for Product CRUD Operations

Problem Statement: Create Express routes for handling CRUD operations on products using MongoDB and Mongoose. Implement routes for creating, reading, updating, and deleting products.

### 25 - 25. Problem: Mongoose Indexing

Problem Statement: Implement indexing on the "name" field of the "Product" collection to optimize query performance. Write a function to create the index.

### 26 - 26. Problem: Aggregation Pipeline for Product Stats

Problem Statement: Create an aggregation pipeline to calculate statistics for products in MongoDB. Implement a function to execute the pipeline and return aggregated results like the total number of products, the average price, and the highest quantity.

### 27 - Problem 27: Authentication Middleware

Problem Statement: You are developing a web application with Node.js and Express, and you need to implement an authentication middleware to protect certain routes. The authentication should be token-based and support user roles (e.g., admin, regular user). Design a middleware function that verifies the authenticity of incoming requests and checks if the user has the required role to access certain routes.

### 28 - Problem 28: WebSocket Integration

Problem Statement: You are developing a real-time collaborative editing tool using Node.js and Express. You need to integrate WebSocket functionality to allow users to see changes made by others in real-time. Design a solution to establish WebSocket connections, handle incoming messages, and broadcast changes to all connected clients efficiently.

### 29 - Problem 29: Error Handling Middleware

Problem Statement: You are developing a complex web application with multiple routes and middleware in Node.js and Express. You want to implement a centralized error handling mechanism to catch and handle errors gracefully without crashing the server. Design a middleware function that intercepts errors thrown by route handlers or other middleware and sends an appropriate error response to the client.
