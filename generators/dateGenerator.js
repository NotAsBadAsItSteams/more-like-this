const dateGenerator = require('random-date-generator');

const START_DATE = new Date(1995, 0, 1);
const END_DATE = new Date(2018, 2, 5);

const generateReleaseDate = () => dateGenerator.getRandomDateInRange(START_DATE, END_DATE);

module.exports = {
  generate: generateReleaseDate,
};
