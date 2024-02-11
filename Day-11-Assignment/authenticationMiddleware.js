const { validateToken } = require("./tokenServices.js");

function authenticationMiddleware(req, res, next) {
  try {
    const token = req.headers.authorization;

    if (!token) res.status(401).send("Access Token not Available ❌.");

    const verify = validateToken(token);

    if (!verify) res.status(401).send("Incorrect Access Token ❌.");

    next();
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = authenticationMiddleware;
