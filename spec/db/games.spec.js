const games = require('../../db/games');
const client = require('../../db/index');

describe('getRelated', () => {
  test('should call pg.query with id', () => {
    games.getRelated(33);
    expect(client.query.mock.calls[0][1]).toEqual([33]);
  });
});

describe('getFullInfo', () => {
  test('should call pg.query with id', () => {
    games.getFullInfo(33);
    expect(client.query.mock.calls[0][1]).toEqual([33]);
  });
});

