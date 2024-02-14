// 14. Problem: Express Caching Middleware

// Problem Statement: Implement a caching middleware for an Express application.The
// middleware should cache responses based on the request URL and return cached responses
// for subsequent identical requests.Allow cache expiration after a specified time.

const express = require("express");

const app = express();
const cache = new Map();
const CACHE_EXPIRY = 30 * 1000;

function cachingMiddleware(req, res, next) {
  // Your implementation here
  const key = req.originalUrl;
  const cachedData = cache[key] ?? { data: null, expiry: 0 };

  if (cachedData.expiry >= Date.now()) {
    console.log(`Found Cached Data for "${key}"`);
    res.send(cachedData.data);
    return;
  }

  console.log(`Cached Data for "${key}" expired or does not exists.`);

  cache.delete(key);
  next();
}

app.use(cachingMiddleware);

function savedCashedData(req, data) {
  const key = req.originalUrl;
  console.log(`Server cache data for "${key}"`);
  cache[key] = {
    data,
    expiry: Date.now() + CACHE_EXPIRY,
  };
}

app.get("/cache", (req, res) => {
  const data = "Hey! I am Aman Pandagre";
  savedCashedData(req, data);
  res.status(200).send(data);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server is listen on port ${PORT}`);
});
