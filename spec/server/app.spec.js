const request = require('supertest');
const app = require('../../server/app');

jest.mock('../../db/games');

describe('api routes', () => {
  describe('/api/games/:id/related', () => {
    test('responds with 200 status', () => (
      request(app)
        .get('/api/games/5/related')
        .expect(200)
    ));

    test('responds with json formatted data', () => (
      request(app)
        .get('/api/games/5/related')
        .expect(200)
        .expect('Content-Type', /json/)
    ));

    test('response with data of correct shape', () => {
      const dataShape = expect.arrayContaining([
        expect.objectContaining({
          game_id: expect.any(Number),
          title: expect.any(String),
          review_rating: expect.any(String),
          review_number: expect.any(Number),
          release_date: expect.any(String),
          price: expect.any(String),
          thumbnail_url: expect.any(String),
        }),
      ]);

      return request(app)
        .get('/api/games/5/related')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(({ body }) => {
          expect(body).toEqual(dataShape);
        });
    });
  });

  describe('/api/games/:id', () => {
    test('responds with 200 status', () => (
      request(app)
        .get('/api/games/5')
        .expect(200)
    ));

    test('responds with json formatted data', () => (
      request(app)
        .get('/api/games/5')
        .expect(200)
        .expect('Content-Type', /json/)
    ));

    test('response with data of correct shape', () => {
      const dataShape = expect.objectContaining({
        game_id: expect.any(Number),
        title: expect.any(String),
        review_rating: expect.any(String),
        review_number: expect.any(Number),
        release_date: expect.any(String),
        price: expect.any(String),
        thumbnail_url: expect.any(String),
        screenshots: expect.any(Array),
        tags: expect.any(Array),
      });

      return request(app)
        .get('/api/games/5')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(({ body }) => {
          expect(body).toEqual(dataShape);
        });
    });
  });

  test('responds to non-existant routes with 404', () => (
    request(app)
      .get('/api/hello')
      .expect(404)
  ));
});
