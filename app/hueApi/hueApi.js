const hue = require('node-hue-api');
const HueApi = hue.HueApi;
let host;


function getAPI() {
    return new HueApi(host, '6b6438676f99843d6adbd21861687f');
}

function findHost() {
    hue.nupnpSearch().then(displayBridges).done();
}

const displayBridges = function(bridges) {
    console.log('Hue Bridges Found: ' + JSON.stringify(bridges));

    host = bridges[0].ipaddress;
};

module.exports.getAPI = getAPI;
module.exports.findHost = findHost;
