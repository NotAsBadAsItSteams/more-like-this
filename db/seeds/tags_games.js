const tagsGames = require('../../data/tags_games');

exports.seed = knex => knex('tags_games')
  .del()
  .then(() => knex('tags_games').insert(tagsGames));
