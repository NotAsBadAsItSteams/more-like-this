const games = require('../../data/games');

exports.seed = knex => knex('games')
  .del()
  .then(() => knex('games').insert(games));
