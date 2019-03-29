const express = require('express');
const helmet = require('helmet');

const projectsRouter = require('../projects/projects-router.js');
const actionsRouter = require('../actions/actions-router.js');

const server = express();

server.use(express.json());
server.use(helmet());

server.get('/', (req, res) => {
  res.status(200).json({ message: 'Go for launch' });
});

server.use('/api/projects', projectsRouter);
server.use('/api/actions', actionsRouter);

module.exports = server;
