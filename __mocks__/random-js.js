const random = {};
random.integer = (min, max) => max;
random.pick = arr => arr[0];

module.exports = () => random;
