const request = require('supertest');
const app = require('../../server/app');

describe('server', () => {
  test('responds to /games/:id/related with 200 status', () => (
    request(app)
      .get('/games/5/related')
      .expect(200)
  ));

  test('responds to /games/:id with 200 status', () => (
    request(app)
      .get('/games/5')
      .expect(200)
  ));

  test('responds to non-existant routes with 404', () => (
    request(app)
      .get('/hello')
      .expect(404)
  ));
});
