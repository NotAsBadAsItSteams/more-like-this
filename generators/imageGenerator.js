const random = require('random-js')();

const MIN_SCREENSHOTS = 0;
const MAX_SCREENSHOTS = 5;

const generateThumbnail = game => `/thumbnails/${game.id}.png`;

const generateScreenshot = (game, num) => `/screenshots/${game.id}-${num}.png`;

const generateScreenshots = (game) => {
  const screenshotCount = random.integer(MIN_SCREENSHOTS, MAX_SCREENSHOTS);
  return Array(screenshotCount).fill(0).map((v, i) => generateScreenshot(game, i));
};

module.exports = {
  generateThumbnail,
  generateScreenshots,
};
