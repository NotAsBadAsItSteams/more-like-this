# more-like-this

[![CircleCI](https://circleci.com/gh/NotAsBadAsItSteams/more-like-this.svg?style=shield)](https://circleci.com/gh/NotAsBadAsItSteams/more-like-this)

## Usage

### Dependencies
- postgres (`brew install postgres`)
- node + npm (`brew install node`)

### Setup
1. Ensure you have required dependencies.
2. Create a postgres database with `createdb more_like_this` and ensure your postgres user has access to that database.
3. Copy `sample.env`, rename it `.env`, and fill in needed values.
4. Install project dependencies with `npm install`.
5. Run `npm run migrate` to create tables.
6. Run `npm start` to start server.