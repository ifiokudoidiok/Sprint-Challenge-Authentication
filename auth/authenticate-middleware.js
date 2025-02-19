const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  // Authorization
  const token = req.headers.authorization;
  // if (token && inWhiteList(token)) {
  // if (token && !inBlacklist(token)) {
  if (token) {
    // check token, if good, just next()
    jwt.verify(token, "This is secret, Keep it safe, keep it secure", (err, decodedToken) => {
      if (err) {
        // this would mean the token is bad
        res.status(401).json({ message: err.message });
      } else {
        // happy path
        req.decodedToken = decodedToken;
        next();
      }
    });
  } else {
    res.status(400).json({ message: "You dont have the right permissions, contact admin" });
  }
};
