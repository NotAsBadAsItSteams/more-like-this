const tags = require('../../data/tags');

const jsonToTable = tag => ({
  tag_id: tag.id,
  name: tag.name,
});

exports.seed = knex => knex('tags')
  .del()
  .then(() => knex('tags').insert(tags.map(jsonToTable)));
