const morgan = require('morgan');

const mountEnvironmentMiddleware = (app) => {
  if (process.env.NODE_ENV !== 'test') {
    app.use(morgan('tiny'));
  }
};

module.exports = mountEnvironmentMiddleware;
