const promise = require('request-promise');
const appRoot = require('app-root-path');
const config = require(appRoot + '/config');
const Promise = require('promise');


function getAllDevices() {
    return new Promise(function(fulfill) {
        const promiseOptions = requestOptions('GET',
            'http://' + config.nexa.host + ':' + config.nexa.port + '/devices/');

        promise(promiseOptions)
        .then(function(response) {
            fulfill(response);
        });
    });
}

function pair() {
    return new Promise(function(fulfill) {
        const promiseOptions = requestOptions('POST',
            'http://' + config.nexa.host + ':' + config.nexa.port + '/devices/pair',
            body);

        promise(promiseOptions)
        .then(function(response) {
            fulfill(response);
        });
    });
}

function turnOn(id) {
    return new Promise(function(fulfill) {
        const promiseOptions = requestOptions('GET', 'http://' + config.nexa.host + ':' + config.nexa.port + '/devices/' + id + '/on');

        promise(promiseOptions)
        .then(function(response) {
            fulfill(response);
        });
    });
}

function turnOff(id) {
    return new Promise(function(fulfill) {
        const promiseOptions = requestOptions('GET', 'http://' + config.nexa.host + ':' + config.nexa.port + '/devices/' + id + '/off');
        promise(promiseOptions)
        .then(function(response) {
            fulfill(response);
        });
    });
}

function requestOptions(method, url, body) {
    return promiseOptions = {
            method: method,
            url: url,
            port: config.nexa.port,
            form: body,
            json: true,
        };
}

function testPost(body) {
    return new Promise(function(fulfill) {
        const promiseOptions = requestOptions('POST',
            'http://' + config.nexa.host + ':' + config.nexa.port + '/post',
            body);

        promise(promiseOptions)
        .then(function(response) {
            fulfill(response);
        });
    });
}

module.exports.getAllDevices = getAllDevices;
module.exports.pair = pair;
module.exports.turnOn = turnOn;
module.exports.turnOff = turnOff;
module.exports.testPost = testPost;
