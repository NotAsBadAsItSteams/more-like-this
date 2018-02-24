exports.up = function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('games', (table) => {
      table.increments('game_id');
      table.string('title');
      table.date('release_date');
      table.decimal('price', 5, 2);
      table.string('thumbnail_url');
      table.string('screen_grab_url');
    }),
    knex.schema.createTable('tags', (table) => {
      table.increments('tag_id');
      table.string('name');
    }),
    knex.schema.createTable('reviews', (table) => {
      table.increments('review_id');
      table.integer('game_id');
      table.integer('score');
    }),
    knex.schema.createTable('tags_games', (table) => {
      table.increments('id');
      table.integer('tag_id');
      table.integer('game_id');
    }),
  ]);
};

exports.down = function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('tags_games'),
    knex.schema.dropTable('reviews'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('games'),
  ]);
};
