var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    host;


function getAPI(){
    return new HueApi(host, "6b6438676f99843d6adbd21861687f");
}

function findHost() {
    hue.nupnpSearch().then(displayBridges).done();
}

var displayBridges = function(bridges) {
    console.log("Hue Bridges Found: " + JSON.stringify(bridges));

    var ip = bridges[0].ipaddress;

    host = ip;
};

module.exports.getAPI = getAPI
module.exports.findHost = findHost