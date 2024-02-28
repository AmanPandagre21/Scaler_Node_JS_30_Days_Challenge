// Problem 27: Authentication Middleware

// Problem Statement: You are developing a web application with Node.js and Express, and you need to
// implement an authentication middleware to protect certain routes.The authentication should be token
// - based and support user roles(e.g., admin, regular user).Design a middleware function that verifies
// the authenticity of incoming requests and checks if the user has the required role to access certain
// routes.

const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  { id: 1, username: "admin", password: "adminpassword", role: "admin" },
  { id: 2, username: "user", password: "userpassword", role: "user" },
];

function authenticateAndAuthorize(role) {
  return (req, res, next) => {
    const token = req.headers["authorization"];
    console.log(token);
    if (!token) {
      return res
        .status(401)
        .json({ success: false, message: "No Token Provided." });
    }

    jwt.verify(token, "my-secret-key", (err, decode) => {
      if (err) {
        return res
          .status(401)
          .json({ success: false, message: "Unauthorized: Invalid token" });
      }
      console.log(decode.username);
      const user = users.find((u) => u.username === decode.username);
      if (!user) {
        return res
          .status(401)
          .json({ message: "Unauthorized: User not found" });
      }

      if (user.role !== role) {
        return res
          .status(403)
          .json({ message: "Forbidden: Insufficient permissions" });
      }

      req.user = user;
      next();
    });
  };
}

app.get("/", (req, res) => {
  res.send("Hello Scaler...!");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = {
    username,
    password,
  };

  const token = jwt.sign(user, "my-secret-key");

  res.status(200).json({ success: true, token });
});

app.get("/admin", authenticateAndAuthorize("admin"), (req, res) => {
  res.json({ message: "Welcome to the admin area!" });
});

app.get("/user", authenticateAndAuthorize("user"), (req, res) => {
  res.json({ message: `Welcome ${req.user.username} to your profile!` });
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is listen at port ${PORT}`);
});
