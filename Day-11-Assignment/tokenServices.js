const jwt = require("jsonwebtoken");
const SECRETKEY = "incryptedSecretKey";

const generateToken = (data) => {
  const token = jwt.sign(data, SECRETKEY);
  return token;
};

const validateToken = (token) => {
  const verify = jwt.verify(token, SECRETKEY);
  return verify;
};

module.exports = { generateToken, validateToken };
