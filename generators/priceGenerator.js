const random = require('random-js')();

const PRICE_ENDINGS = [0, 0.25, 0.75, 0.99];
const MIN_PRICE = 0;
const MAX_PRICE = 100;

const generateDollars = () => random.integer(MIN_PRICE, MAX_PRICE);
const generateCents = () => random.pick(PRICE_ENDINGS);

const generatePrice = () => generateDollars() + generateCents();

module.exports = {
  generate: generatePrice,
};
