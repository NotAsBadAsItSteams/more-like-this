const express = require('express');
const gamesRouter = require('./routers/games');
const mountEnvironmentMiddleware = require('./environments');

const app = express();

mountEnvironmentMiddleware(app);

app.use('/api/games', gamesRouter);

module.exports = app;
