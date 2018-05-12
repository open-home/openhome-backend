//      __
//   __/\ \  _____ _             _____ _____
//  / /\_\/ |  _  | |_ _____ ___|     |   __|
//  \/_/__\ |     |  _|     | . |  |  |__   |
//     \__/ |__|__|_| |_|_|_|___|_____|_____|
//
//  Home Automation | http://os.atmo.service
//  powered by Espruino.
//
// Memory locations
//
// 1: WiFi SSID;
// 2: WiFi Password;
// 3: Thermostat Threshold.
//

const GUID = '256343ac-a467-92d4-a2ed-fcb72eb63097';
const NAME = 'Living Room';
const WIFI_NAME = ['TIM-19742751', 'NASO', 'yogyfi'];
const THERMOSTAT_CYCLE = 120 * 1000;
const DEVICE_TYPE = 0;
const WIFI_OPTIONS = [
  { password: 'IAao3xzAgSkpQq1PIDotRtGr' },
  { password: 'askTUPONE' },
  { password: 'vuttavutta' }
];

const atmoCommons = require('atmo-commons');
const atmoUtils = require('atmo-utils');
const atmoHTTPServer = require('atmo-httpserver');
const atmoHTTPClient = require('atmo-httpclient');
const atmoI2C = require('atmo-i2c');
const atmoThermostat = require('atmo-thermostat');
const atmoActions = require('atmo-actions');
const atmoWatches = require('atmo-watches');
const wifi = require('EspruinoWiFi');
var DEVICE_IP = '';

var f = new (require("FlashEEPROM"))();
var isWiFiConnected = false;

//f.write(0, 'TIM-19742751');
//f.write(1, 'IAao3xzAgSkpQq1PIDotRtGr');

//console.log(E.toString(f.read(0)), E.toString(f.read(1)));

// I2C Bus.
I2C1.setup({ scl: B8, sda: B9 });
const si7021 = require('SI7021').connect(I2C1);

pinMode(B0, 'input_pulldown');

wifi.connect(WIFI_NAME[0], WIFI_OPTIONS[0], function (err) {

  if (err) {
    console.log('Connection error: ' + err);
    return;
  }

  isWiFiConnected = true;
  wifi.getIP(function (err, data) {

    console.log(data.ip);
    DEVICE_IP = data.ip;

    // HTTP Server.
    try {

      atmoHTTPServer.initializeHTTPServer();

      // Temperature cycle.
      atmoThermostat.readTemperature();
      setInterval(atmoThermostat.readTemperature, THERMOSTAT_CYCLE);
    } catch (error) {
      console.log(error);
    }
  });
});

// Watches.
try {
  // atmoWatches.watchUserConfig();
} catch (error){
  console.log(error);
}
