var hue = require("node-hue-api"),
    HueApi = hue.HueApi,
    lightState = hue.lightState;

var displayResult = function(result) {
    console.log(JSON.stringify(result, null, 2));
};

var host = "192.168.2.129",
    username = "6b6438676f99843d6adbd21861687f",
    api,
    state = lightState.create();

api = new HueApi(host, username);

function setBridgeIp (ip){

    this.bridgeIp = ip;
    api = new HueApi(ip, username);

}

module.exports.setBridgeIp = setBridgeIp 
