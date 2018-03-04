const image = require('../../generators/imageGenerator');

describe('thumbnail generator', () => {
  test('should return a thumbnail file path to .png', () => {
    expect(image.generateThumbnail({ id: 3 })).toEqual(expect.stringMatching(/\.png$/));
  });

  test('should return a thumbnail file path to .png', () => {
    expect(image.generateThumbnail({ id: 3 })).toEqual('/thumbnails/3.png');
  });
});

describe('screenshot generator', () => {
  test('should return an array', () => {
    expect(image.generateScreenshots({ id: 3 })).toBeInstanceOf(Array);
  });

  test('should return an array of screenshot urls', () => {
    const expected = ['/screenshots/3-0.png'];
    expect(image.generateScreenshots({ id: 3 })).toEqual(expect.arrayContaining(expected));
  });
});
