let requestCounterArray = [];
const LIMIT = 5;
const WINDOW_MS = 6000;

function rateLimitMiddleware(req, res, next) {
  const ip = req.ip;
  const currentTime = Date.now();

  if (!requestCounterArray[ip]) {
    requestCounterArray[ip] = { count: 1, startTime: currentTime };
  } else {
    requestCounterArray[ip].count++;

    if (requestCounterArray[ip].count > LIMIT) {
      const timeLap = currentTime - requestCounterArray[ip].startTime;

      if (timeLap < WINDOW_MS) {
        res.status(429).send("Too Many Requests");
      } else {
        requestCounterArray[ip].count = 1;
        requestCounterArray[ip].startTime = currentTime;
      }
    }
  }
  next();
}

module.exports = rateLimitMiddleware;
