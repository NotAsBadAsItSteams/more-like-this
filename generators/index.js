const Promise = require('bluebird');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
const date = require('./dateGenerator');
const image = require('./imageGenerator');
const price = require('./priceGenerator');
const review = require('./reviewGenerator');
const tag = require('./tagGenerator');
const imageCreator = require('./imageCreator');
const games = require('../data/games.json');

Promise.promisifyAll(fs);

// Generate full data
const fullGameData = games.map(game => (
  {
    id: game.id,
    title: game.title,
    price: price.generate(),
    thumbnail: image.generateThumbnail(game),
    screenshots: image.generateScreenshots(game),
    releaseDate: date.generate(),
    reviews: {
      rating: review.generateRating(),
      number: review.generateNumber(),
    },
    tags: tag.generate(),
  }));

// Generate JSON files mapping to database tables
const formattedGames = fullGameData
  .map(g => ({
    game_id: g.id,
    title: g.title,
    price: g.price,
    review_number: g.reviews.number,
    review_rating: g.reviews.rating,
    release_date: g.releaseDate,
    thumbnail_url: g.thumbnail,
  }));

const formattedScreenshots = _.flatten(fullGameData
  .map(g => g.screenshots
    .map(s => ({
      game_id: g.id,
      screenshot_url: s,
    }))));

const formattedTagsGames = _.flatten(fullGameData
  .map(g => g.tags
    .map(t => ({
      game_id: g.id,
      tag_id: t.id,
    }))));

const writeJSONToFile = (filepath, data) =>
  fs.writeFileAsync(filepath, JSON.stringify(data, null, 2));

// Write JSON files + create image files
Promise.all([
  writeJSONToFile(path.join(__dirname, '../data/screenshots.json'), formattedScreenshots),
  writeJSONToFile(path.join(__dirname, '../data/all_games.json'), formattedGames),
  writeJSONToFile(path.join(__dirname, '../data/tags_games.json'), formattedTagsGames),
  imageCreator.createAllThumbnails(fullGameData),
  imageCreator.createAllScreenshots(fullGameData),
]);
