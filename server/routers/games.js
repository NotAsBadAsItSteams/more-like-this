const express = require('express');

const router = express.Router();

router
  .get('/:id/related', (req, res) => {
    res.send();
  })
  .get('/:id', (req, res) => {
    res.send();
  });

module.exports = router;
