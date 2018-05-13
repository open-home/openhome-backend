exports.readTemperature = function(threshold) {

  console.log('tr', threshold);
  const temp = si7021.readTemperature();

  var device = {
    type: DEVICE_TYPE,
    guid: GUID,
    endpoint: DEVICE_IP,
    name: NAME,
    offline: 0,
    meta: {
      active: 0,
      temperature: temp,
    }
  };

  if (threshold != null) {
    device.meta.threshold = threshold;
  }

  // Temperature check.
  return atmoHTTPClient.openhomeApi({ path: '/deviceSpawn', payload: device }).then(function(data) {
    return activate(data.meta);
  });
};

exports.getThermostat = function() {

  atmoHTTPClient.openhomeApi({ path: '/thermostat', payload: device }).then(function(data) {
    console.log(JSON.stringify(data));
  });
};

function activate(device) {

  let active = 0;
  if (device.meta.temperature < device.meta.threshold) {
    active = 1;
  }

  device.meta.active = active;

  return atmoHTTPClient.openhomeApi({ path: '/deviceSpawn', payload: device })
}