const hueBridgeLogic = require('./hueBridgeLogic');
const express = require('express');
const router = new express.Router();

router.get('/', (req, res) => {
  hueBridgeLogic.getAvailableBridges().then(function(bridges) {
      res.send(bridges);
  })
  .done();
});

module.exports = router;
