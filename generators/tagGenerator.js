const random = require('random-js')();
const tags = require('../data/tags');

const MIN_TAGS = 0;
const MAX_TAGS = 5;

const generateTag = () => random.pick(tags);

const generateTags = () => {
  const tagCount = random.integer(MIN_TAGS, MAX_TAGS);
  return Array(tagCount).fill(0).map(generateTag);
};

module.exports = {
  generate: generateTags,
};
