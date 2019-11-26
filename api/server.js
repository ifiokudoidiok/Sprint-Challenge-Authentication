const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const authenticate = require('../auth/authenticate-middleware.js');
const authRouter = require('../auth/auth-router.js');
const jokesRouter = require('../jokes/jokes-router.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', logger, (req, res) => {
    res.send('<h1>Wanna Read a Joke? Sign-in/Log-in to gain access</h1><br/><h5>(/api/auth/register OR /api/auth/login)</h5>')
})

server.use('/api/auth',logger, authRouter);
server.use('/api/jokes',logger, authenticate, jokesRouter);

function logger(req, res, next) {
    console.log(
      `[${new Date().toISOString()}] ${req.method} to ${req.url} from ${req.host}`
    );
  
    next();
  }

module.exports = server;
