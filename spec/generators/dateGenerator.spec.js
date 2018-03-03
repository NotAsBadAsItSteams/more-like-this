const date = require('../../generators/dateGenerator');

describe('date generator', () => {
  test('should return a date', () => {
    expect(date.generate()).toBeInstanceOf(Date);
  });
});
