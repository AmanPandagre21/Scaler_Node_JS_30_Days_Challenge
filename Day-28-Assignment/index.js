// Problem 28: WebSocket Integration

// Problem Statement: You are developing a real - time collaborative editing tool
// using Node.js and Express.You need to integrate WebSocket functionality to
// allow users to see changes made by others in real - time.Design a solution to
// establish WebSocket connections, handle incoming messages, and broadcast
// changes to all connected clients efficiently.

const express = require("express");

const http = require("http");
const app = express();
const server = http.createServer(app);

function setupWebSocketServer(server) {
  const WebSocket = require("ws");
  const connectedClients = new Set();

  const wss = new WebSocket.Server({ server });

  wss.on("connection", (ws) => {
    connectedClients.add(ws);

    ws.on("message", (message) => {
      const data = JSON.parse(message);
    });

    ws.on("close", () => {
      connectedClients.delete(ws);
    });
  });
}

function broadcastChanges(data) {
  connectedClients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data));
    }
  });
}

setupWebSocketServer(server);

app.use(express.json());
app.post("/message", (req, res) => {
  const message = req.body.message;
  res.send("Your message is: " + message);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
