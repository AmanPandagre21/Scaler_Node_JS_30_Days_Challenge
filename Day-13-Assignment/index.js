// 13. Problem: Express WebSocket Integration

// Problem Statement: Extend an existing Express application to include WebSocket support.Create a WebSocket
// server that echoes back any message it receives from a client.Implement an endpoint "/websocket" that serves
// an HTML page with JavaScript to establish a WebSocket connection.

// Expected Output:

// Clients should be able to establish a WebSocket connection to "/websocket".
// Messages sent by clients should be echoed back by the server.
// Test Cases:

// Establish a WebSocket connection and send a message; it should be echoed back.

const express = require("express");
const http = require("http");
const setupWebSocket = require("./setupWebSocket.js");

const app = express();
const server = http.createServer(app);

app.use(express.json());

setupWebSocket(server);

app.get("/websocket", (req, res) => {
  res.sendFile(__dirname + "/websocket.html");
});

const PORT = 5000;

server.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
