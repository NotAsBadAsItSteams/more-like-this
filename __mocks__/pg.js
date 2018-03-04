const pg = jest.genMockFromModule('pg');

const client = {
  query: jest.fn().mockResolvedValue({
    rows: [
      {
        screenshot_url: '',
        name: '',
      },
    ],
  }),
};

pg.Client = jest.fn(() => client);

module.exports = pg;
