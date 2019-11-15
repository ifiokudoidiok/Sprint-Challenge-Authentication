const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const db = require("../database/db-model");

router.post("/register", register);

router.post("/login", login);

function register(req, res) {
  // implement registration
  const { username, password } = req.body;
  const hash = bcrypt.hashSync(password, 12);

  const newUser = {
    username: username,
    password: hash
  };

  db.register(newUser).then(credentials => {
    const token = generateToken(newUser);
    res.status(201).json({ credentials, token: token });
  });
}

function login(req, res) {
  // implement login
}

function generateToken(user) {
  const payload = {
    sub: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  };
  const result = jwt.sign(
    payload,
    "This is secret, Keep it safe, keep it secure",
    options
  );
  return result;
}

module.exports = router;
