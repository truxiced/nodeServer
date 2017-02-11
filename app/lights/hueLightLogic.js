var hue = require("node-hue-api"),
    hueApi = require("./../hueApi/hueApi");
    lightState = hue.lightState;

var state = lightState.create();

/**
 * Returns all Lights registered on the connected bridge
 */
function getLights() {
    return hueApi.getAPI().lights()
}

/**
 * 
 * @param [num] {id} - Identifier of the light to turn off
 */
function turnOffLight(id) {
    hueApi.getAPI().setLightState(id, state.off()).done();
}

/**
 * 
 * @param [num] {id} - Identifier of the light to turn on
 */
function turnOnLight(id) {
    hueApi.getAPI().setLightState(id, state.on()).done();
}

module.exports.getLights = getLights
module.exports.turnOffLight = turnOffLight 
module.exports.turnOnLight = turnOnLight