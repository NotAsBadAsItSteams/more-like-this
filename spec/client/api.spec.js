import axios from 'axios';
import { getRelatedGames, getGameDetail } from '../../client/src/lib/api';

describe('client api library', () => {
  describe('getRelatedGames', () => {
    test('should make a request to /api/games/:id/related', () => {
      getRelatedGames(5);
      expect(axios.get).toBeCalledWith('/api/games/5/related');
    });

    test('should return promise that resolves to response from api', () => (getRelatedGames(5)
      .then((response) => {
        expect(response).toBeInstanceOf(Array);
      })
    ));
  });

  describe('getRelatedGames', () => {
    test('should make a request to /api/games/:id', () => {
      getGameDetail(5);
      expect(axios.get).toBeCalledWith('/api/games/5');
    });

    test('should return promise that resolves to response from api', () => (getGameDetail(5)
      .then((response) => {
        expect(response).toBeInstanceOf(Object);
      })
    ));
  });
});
