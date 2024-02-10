// 10. Problem: Express Static Files

// Problem Statement: Create an Express application that serves static files(e.g., HTML, CSS, images)
// from a "public" directory.Ensure that accessing the root("/") returns the "index.html" file from the
// "public" directory.

// Expected Output: Accessing the root ("/") should return the content of "public/index.html".

// Test Cases:

// Request to / should return the content of "public/index.html".
// Request to /styles/style.css should return the content of "public/styles/style.css".

const express = require("express");
const app = express();
const path = require("path");

const PORT = 5000;

function staticFileServer(req, res) {
  // Your implementation here
  if (req.url === "/")
    res.sendFile(path.join(__dirname, "public", "index.html"));
  else res.sendFile(path.join(__dirname, "public/styles", "style.css"));
}

app.use(express.static(path.join(__dirname, "public")));

app.get("/", staticFileServer);
app.get("/styles", staticFileServer);

app.listen(PORT, () => {
  console.log(`Server is listenning at PORT number ${PORT}`);
});
