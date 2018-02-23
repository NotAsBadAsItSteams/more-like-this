const express = require('express');
const morgan = require('morgan');
const gamesRouter = require('./routers/games');

const app = express();

app.use(morgan('tiny'));

app.use('/games', gamesRouter);

module.exports = app;
