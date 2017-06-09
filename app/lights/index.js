const hueLightLogic = require('./hueLightLogic');
const express = require('express');
const router = new express.Router();


router.get('/', (req, res) => {
    hueLightLogic.getLights().then(function(lights) {
        res.send(lights.lights);
    })
    .done();
});

router.get('/:id/off', (req, response) => {
  hueLightLogic.turnOffLight(req.params.id);
});

router.get('/:id/on', (req, response) => {
  hueLightLogic.turnOnLight(req.params.id);
});

module.exports = router;
