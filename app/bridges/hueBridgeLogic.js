const hue = require('node-hue-api');

function getAvailableBridges() {
    return hue.nupnpSearch();
}

module.exports.getAvailableBridges = getAvailableBridges;
