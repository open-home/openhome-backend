exports.watchUserConfig = function() {

  setWatch(function (e) {

    if (isWiFiConnected) {
      wifi.disconnect();
    }

    wifi.startAP('orso-yogi-2', { authMode: 'wpa2', password: 'bubu1234' }, function(err) {
      wifi.getAPIP(function (err, data) {
        console.log('AP', JSON.stringify(data));
      });
    });
  }, B0, { repeat: true, edge: 'rising', debounce: 30 });
};