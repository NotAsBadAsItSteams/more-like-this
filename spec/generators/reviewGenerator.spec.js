const review = require('../../generators/reviewGenerator');

describe('rating generator', () => {
  test('should return a rating', () => {
    expect(typeof review.generateRating()).toEqual('string');
  });
});

describe('number generator', () => {
  test('should return a number', () => {
    expect(typeof review.generateNumber()).toEqual('number');
  });
});
