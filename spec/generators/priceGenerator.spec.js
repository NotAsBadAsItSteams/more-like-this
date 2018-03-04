const price = require('../../generators/priceGenerator');

describe('price generator', () => {
  test('should return a number', () => {
    expect(typeof price.generate()).toEqual('number');
  });
});
