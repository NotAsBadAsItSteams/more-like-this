const client = require('./index');

const getTags = (gameId) => {
  const query = 'SELECT t.name FROM tags as t INNER JOIN ' +
                'tags_games as tg ON t.tag_id = tg.tag_id WHERE tg.game_id = $1';
  return client.query(query, [gameId])
    .then(({ rows }) => rows.map(t => t.name));
};

const getScreenshots = (gameId) => {
  const query = 'SELECT screenshot_url from screenshots where game_id = $1';
  return client.query(query, [gameId])
    .then(({ rows }) => rows.map(s => s.screenshot_url));
};

const getInfo = (gameId) => {
  const query = 'SELECT * from games where game_id = $1';
  return client.query(query, [gameId])
    .then(({ rows: [game] }) => game);
};

const getFullInfo = gameId =>
  Promise
    .all([
      getInfo(gameId),
      getScreenshots(gameId),
      getTags(gameId),
    ])
    .then(([game, screenshots, tags]) =>
      Object.assign({}, game, {
        screenshots,
        tags,
      }));

const getRelated = (gameId) => {
  const query = 'SELECT DISTINCT (g.game_id), g.* from games as g ' +
                'INNER JOIN tags_games as tg on tg.game_id = g.game_id ' +
                'where tg.tag_id IN (SELECT tag_id from tags_games where game_id = $1)';
  return client.query(query, [gameId])
    .then(({ rows }) => rows.filter(game => game.game_id !== gameId));
};

module.exports = {
  getRelated,
  getFullInfo,
};
