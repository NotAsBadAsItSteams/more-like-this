const RATINGS = [
  'Overwhelmingly Positive',
  'Very Positive',
  'Mostly Positive',
  'Mixed',
  'Mostly Negative',
  'Very Negative',
  'Overwhelmingly Negative',
];

exports.up = function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('games', (table) => {
      table.increments('game_id');
      table.string('title');
      table.enu('review_rating', RATINGS);
      table.integer('review_number');
      table.date('release_date');
      table.decimal('price', 5, 2);
      table.string('thumbnail_url');
    }),
    knex.schema.createTable('tags', (table) => {
      table.increments('tag_id');
      table.string('name');
    }),
    knex.schema.createTable('screenshots', (table) => {
      table.increments('id');
      table.integer('game_id');
      table.string('screenshot_url');
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
    knex.schema.dropTable('screenshots'),
    knex.schema.dropTable('tags'),
    knex.schema.dropTable('games'),
  ]);
};
