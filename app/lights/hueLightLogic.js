const hue = require('node-hue-api');
const hueApi = require('./../hueApi/hueApi');
const lightState = hue.lightState;
const state = lightState.create();

/**
 * Returns all Lights registered on the connected bridge
 * @return {Promise<ILightsApiResponse>}
 */
function getLights() {
    return hueApi.getAPI().lights();
}

/**
 * @param {number} id Identifier of the light to turn off
 */
function turnOffLight(id) {
    hueApi.getAPI().setLightState(id, state.off()).done();
}

/**
 * @param {number} id Identifier of the light to turn on
 */
function turnOnLight(id) {
    hueApi.getAPI().setLightState(id, state.on()).done();
}

module.exports.getLights = getLights;
module.exports.turnOffLight = turnOffLight;
module.exports.turnOnLight = turnOnLight;
