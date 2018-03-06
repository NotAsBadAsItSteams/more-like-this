const express = require('express');
const gamesRouter = require('./routers/games');
const mountEnvironmentMiddleware = require('./environments');
const db = require('../db/index');

const app = express();

db.connect();

mountEnvironmentMiddleware(app);

app.use('/api/games', gamesRouter);

module.exports = app;
