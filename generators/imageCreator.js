const Promise = require('bluebird');
const textToPicture = require('text-to-picture');
const { snakeCase } = require('change-object-case');
const path = require('path');
// CONSTANTS
const IMAGE_DIR = path.join(__dirname, '../client/dist/assets');
const THUMBNAIL_HEIGHT = 69;
const THUMBNAIL_WIDTH = 184;
const SCREENSHOT_HEIGHT = 156;
const SCREENSHOT_WIDTH = 285;
const colors = [0x502E28FF, 0xB29477FF, 0xCD8A7AFF, 0xF6CF91FF, 0xFEE9C1FF];

const createImage = ({
  color,
  text,
  width,
  height,
  filepath,
  filename,
}) => textToPicture
  .convert({
    text,
    source: {
      width,
      height,
      background: color,
    },
    size: 8,
  })
  .then(image => image.write(`${filepath}${filename}`));

const createThumbnail = game => createImage({
  color: colors[game.id % 5],
  text: snakeCase(game.title),
  width: THUMBNAIL_WIDTH,
  height: THUMBNAIL_HEIGHT,
  filepath: IMAGE_DIR,
  filename: game.thumbnail,
});

const createScreenshots = game => Promise.map(game.screenshots, (filename, i) =>
  createImage({
    color: colors[game.id % 5],
    text: `${snakeCase(game.title)}-${i}`,
    width: SCREENSHOT_WIDTH,
    height: SCREENSHOT_HEIGHT,
    filepath: IMAGE_DIR,
    filename,
  }));

const createAllThumbnails = games => Promise.map(games, createThumbnail);
const createAllScreenshots = games => Promise.map(games, createScreenshots);

module.exports = {
  createAllThumbnails,
  createAllScreenshots,
};
