const {
  appKey, deviceId, secretKey, deviceIds,
} = require('./credentials');
const {
  SinricPro,
  SinricProActions,
  raiseEvent,
  eventNames,
  SinricProUdp,
} = require('../index');

/**
 *  Change to below code if your are using via npm
 *
 * const {SinricPro, SinricProActions, raiseEvent, eventNames,} = require('../index');
 *                                       ||
 *                                       ||
 *                                       ||
 *                                       ||
 *                                       ||
 *                                      \  /
 *                                       \/
 * const { SinricPro, SinricProActions, raiseEvent, eventNames,} = require('sinricpro');
 *
 *
 *
 */

function setPowerState(deviceid, data) {
  console.log(deviceid, data);
  return true;
}
function setPowerLevel(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function adjustPowerLevel(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setBrightness(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function adjustBrightness(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setColor(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setThermostatMode(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function targetTemperature(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setRangeValue(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function adjustRangeValue(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setVolume(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function adjustVolume(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function selectInput(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function mediaControl(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function changeChannel(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function skipChannels(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setBands(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function adjustBands(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setMode(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setMute(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

function setLockState(deviceid, data) {
  console.log(deviceid, data);
  return true;
}

const callbacks = {
  setPowerState,
  setPowerLevel,
  adjustPowerLevel,
  setColor,
  setRangeValue,
  setLockState,
  setBrightness,
  setVolume,
  adjustVolume,
  setMute,
  adjustBrightness,
  setThermostatMode,
  adjustRangeValue,
  selectInput,
  mediaControl,
  skipChannels,
  changeChannel,
  setBands,
  setMode,
  adjustBands,
};

const sinricpro = new SinricPro(appKey, deviceId, secretKey, true);

SinricProActions(sinricpro, callbacks);

const udp = new SinricProUdp(deviceId, secretKey);

udp.begin(callbacks);

setInterval(() => {
  // raiseEvent(sinricpro, eventNames.powerState, deviceIds.deviceId1, { state: 'On' });
  // raiseEvent(sinricpro, eventNames.setBrightness, 'deviceId', { brightness: 44 });
  // raiseEvent(sinricpro, eventNames.powerLevel, 'deviceId', { powerLevel: 44 });
  // raiseEvent(sinricpro, eventNames.color, 'DeviceId', { color: { b: 0, g: 0, r: 0 } });
  // raiseEvent(sinricpro, eventNames.colorTemperature, 'Deviceid', { colorTemperature: 8 });
  // raiseEvent(sinricpro, eventNames.doorBell, 'DeviceId', { state: 'pressed' });
  // raiseEvent(sinricpro, eventNames.thermostatMode, 'DeviceId', { thermostatMode: 'AUTO' });
  // raiseEvent(sinricpro, eventNames.currentTemperature, 'DeviceId', { "humidity": 20, "temperature": 24 })
  // raiseEvent(sinricpro, eventNames.rangvalue, 'DeviceId', { rangvalue: 3 });
  // raiseEvent(sinricpro, eventNames.motion, 'DeviceId', { state: 'detected' });
  // raiseEvent(sinricpro, eventNames.contact, 'DeviceId', { state: 'closed' });
  // raiseEvent(sinricpro, eventNames.setVolume, 'DeviceId', { volume: 29 });
  // raiseEvent(sinricpro, eventNames.selectInput, 'DeviceId', { input: 'HDMI' });
  // raiseEvent(sinricpro, eventNames.media, 'DeviceId', { control: 'FastForward' });
  // raiseEvent(sinricpro, eventNames.channel, 'DeviceId', { channel: { name: 'HBO' } });
  // raiseEvent(sinricpro, eventNames.mode, 'DeviceId', { mode: 'MOVIE' });
  // raiseEvent(sinricpro, eventNames.lock, 'DeviceId', { state: 'LOCKED' });
  // raiseEvent(sinricpro, eventNames.mute, 'DeviceId', { mute: true });
}, 2000);
