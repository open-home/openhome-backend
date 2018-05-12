exports.openhomeApi = function(payload) {

  if (payload.payload == null) {
    payload.payload = {};
  }

  const strPayload = JSON.stringify(payload.payload);

  const options = {
    host: 'us-central1-home-cloud-services.cloudfunctions.net',
    port: 80,
    path: payload.path,
    method: 'POST',
    //protocol: 'http:',
    headers: {
      'user-agent': 'Mozilla/5.0',
      'content-type': 'application/json',
      'content-length': strPayload.length }
  };

  return new Promise(

    function (resolve, reject) {

      var apiResult = '';
      var req = require('http').request(options, function(res)  {

        res.on('data', function(data) {

            if (data) {
              apiResult += data;
            }
          });

        res.on('close', function(data) {
          resolve(JSON.parse(apiResult));
        });
      });

      req.write(strPayload);
      req.end();
    }
  );
};