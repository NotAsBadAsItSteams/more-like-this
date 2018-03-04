const screenshots = require('../../data/screenshots');

exports.seed = knex => knex('screenshots')
  .del()
  .then(() => knex('screenshots').insert(screenshots));
