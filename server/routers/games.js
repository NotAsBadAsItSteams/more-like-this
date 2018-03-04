const express = require('express');
const { camelKeys } = require('change-object-case');
const games = require('../../db/games');

const router = express.Router();

router
  .get('/:id/related', (req, res) => {
    const gameId = Number(req.params.id);
    games.getRelated(gameId)
      .then((related) => {
        res.json(related.map(r => camelKeys(r)));
      })
      .catch(() => {
        res.sendStatus(500);
      });
  })
  .get('/:id', (req, res) => {
    const gameId = Number(req.params.id);
    games.getFullInfo(gameId)
      .then((game) => {
        if (!game) {
          res.sendStatus(400);
        } else {
          res.json(camelKeys(game));
        }
      })
      .catch(() => {
        res.sendStatus(500);
      });
  });

module.exports = router;
