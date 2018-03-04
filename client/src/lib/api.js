const axios = require('axios');

const getRelatedGames = id => (
  axios.get(`/api/games/${id}/related`)
);

const getGameDetail = id => (
  axios.get(`/api/games/${id}`)
);

export { getRelatedGames, getGameDetail };
