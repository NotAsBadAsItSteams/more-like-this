const axios = jest.genMockFromModule('axios');

axios.get = jest.fn((url) => {
  if (url.includes('related')) {
    return Promise.resolve([]);
  }
  return Promise.resolve({});
});

module.exports = axios;
