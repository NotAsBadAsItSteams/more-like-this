const tags = require('../../generators/tagGenerator');

describe('tags generator', () => {
  test('should return an array of tags', () => {
    expect(tags.generate()).toBeInstanceOf(Array);
  });

  test('should return an array of tags', () => {
    const expected = [expect.objectContaining({
      id: expect.any(Number),
      name: expect.any(String),
    })];
    expect(tags.generate()).toEqual(expect.arrayContaining(expected));
  });
});
