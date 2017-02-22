const nexaLogic = require('./nexaLogic');
const express = require('express')  
const router = express.Router()
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: true}));


router.get('/', (req, res) => {  
    nexaLogic.getAllDevices().then(function(devices){
        res.send(devices);
    })
    .done();
})

router.post('/', (req, res) => {  
    nexaLogic.testPost(req.body).then(function(devices){
        res.send(devices);
    })
    .done();
})

router.post('/pair', (req, res) => {  
    nexaLogic.pair(req.body).then(function(devices){
        res.send(devices);
    })
    .done();
})

router.post('/:id/on', (req, res) => {  
    nexaLogic.turnOn(req.params.id).then(function(devices){
        res.send(devices);
    })
    .done();
})

router.post('/:id/off', (req, res) => {  
    nexaLogic.turnOff(req.params.id).then(function(devices){
        res.send(devices);
    })
    .done();
})

module.exports = router