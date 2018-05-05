//      __
//   __/\ \  _____ _             _____ _____
//  / /\_\/ |  _  | |_ _____ ___|     |   __|
//  \/_/__\ |     |  _|     | . |  |  |__   |
//     \__/ |__|__|_| |_|_|_|___|_____|_____|
//
//  Home Automation | http://os.atmo.service
//  powered by Espruino.
//

var GUID = '256343ac-a467-92d4-a2ed-fcb72eb63097';
var WIFI_NAME = ['TIM-19742751', 'NASO', 'ZyXEL_C460'];
var WIFI_OPTIONS = [
  { password: 'IAao3xzAgSkpQq1PIDotRtGr' },
  { password: 'askTUPONE' },
  { password: '4nFtmKu9o7xmM' }
];

const atmoCommons = require('atmo-commons');
const atmoUtils = require('atmo-utils');
const atmoHTTPServer = require('atmo-httpserver');
const atmoHTTPClient = require('atmo-httpclient');
const atmoI2C = require('atmo-i2c');
const atmoActions = require('atmo-actions');
const atmoWatches = require('atmo-watches');
const wifi = require('EspruinoWiFi');
var ip = '';

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
    ip = data.ip;

    // HTTP Server.
    try {

      atmoHTTPServer.initializeHTTPServer();

      const device = {
        active: 0,
        guid: GUID,
        endpoint: data.ip,
        name: GUID,
        threshold: 18
      };

      atmoHTTPClient.openhomeApi({ path: '/deviceSpawn', payload: device });

      // Temperature cycle.
      setInterval(readTemperature, 20000);
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

// Temperature.
function readTemperature() {

  const temp = si7021.readTemperature();

  const device = {
    active: 0,
    guid: GUID,
    endpoint: ip,
    name: GUID,
    threshold: 18,
    temperature: temp
  };

  atmoHTTPClient.openhomeApi({ path: '/deviceSpawn', payload: device });
}
