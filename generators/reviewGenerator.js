const random = require('random-js')();

const RATINGS = [
  'Overwhelmingly Positive',
  'Very Positive',
  'Mostly Positive',
  'Mixed',
  'Mostly Negative',
  'Very Negative',
  'Overwhelmingly Negative',
];

const MIN_REVIEWS = 25;
const MAX_REVIEWS = 10000;

const generateRating = () => random.pick(RATINGS);
const generateNumber = () => random.integer(MIN_REVIEWS, MAX_REVIEWS);

module.exports = {
  generateNumber,
  generateRating,
};
