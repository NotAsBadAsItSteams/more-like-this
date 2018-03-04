const getRelated = () => Promise.resolve([
  {
    game_id: 85,
    title: 'SoulWorker',
    review_rating: 'Mostly Positive',
    review_number: 9007,
    release_date: '2002-01-10T08:00:00.000Z',
    price: '57.75',
    thumbnail_url: '/thumbnails/85.png',
  },
  {
    game_id: 63,
    title: 'Mount & Blade: Warband',
    review_rating: 'Very Negative',
    review_number: 5351,
    release_date: '2011-02-07T08:00:00.000Z',
    price: '5.00',
    thumbnail_url: '/thumbnails/63.png',
  },
  {
    game_id: 42,
    title: 'Divinity: Original Sin 2',
    review_rating: 'Overwhelmingly Positive',
    review_number: 3946,
    release_date: '2002-02-11T08:00:00.000Z',
    price: '52.00',
    thumbnail_url: '/thumbnails/42.png',
  },
  {
    game_id: 43,
    title: 'Counter-Strike',
    review_rating: 'Mostly Negative',
    review_number: 2992,
    release_date: '2000-06-19T07:00:00.000Z',
    price: '18.25',
    thumbnail_url: '/thumbnails/43.png',
  },
  {
    game_id: 38,
    title: '7 Days to Die',
    review_rating: 'Mostly Positive',
    review_number: 7711,
    release_date: '1996-05-25T07:00:00.000Z',
    price: '58.25',
    thumbnail_url: '/thumbnails/38.png',
  },
]);

const getFullInfo = id => Promise.resolve({
  game_id: id,
  title: 'Unturned',
  review_rating: 'Mixed',
  review_number: 1297,
  release_date: '2010-09-17T07:00:00.000Z',
  price: '66.99',
  thumbnail_url: `/thumbnails/${id}.png`,
  screenshots: [`/screenshots/${id}-0.png`],
  tags: [
    'Hand-drawn',
    'Massively Multiplayer',
    'Real Time Tactics',
    'Singleplayer',
    'Thriller',
  ],
});


module.exports = {
  getRelated,
  getFullInfo,
};
