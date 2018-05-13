const httpServer = require('http');

const actions = {
  ON_OFF_PORT: 'ON_OFF_PORT',
  SET_THRESHOLD: 'SET_THRESHOLD',
  DEVICE_IS_ALIVE: 'DEVICE_IS_ALIVE'
};

const urls = {
  HTTP_LISTENER: "/httpListener"
};

exports.initializeHTTPServer = function() {
  httpServer.createServer(onHTTPRequest).listen(8080);
};

exports.checkAndDownloadFirmware = function() {
  // Todo implement
};

function onHTTPRequest(req, res) {

  var path = req.url;

  if (req.method == atmoCommons.httpPOST) {
    handlePostRequest(req, res, path);
  } else {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('Error');
    res.end();
  }
}

function handlePostRequest(req, res, path) {

  var payload = '';

  req.on('data', function(data) {

    payload += data;
    if (payload.length == req.headers['content-length']) {
      handleActions(res, path, JSON.parse(payload));
    }
  });
}

function handleActions(res, path, payload) {

  var result;
  var success = false;

  switch (path) {

    case urls.HTTP_LISTENER:
      result = httpListener(payload);
      break;

    default:
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('Error');
      res.end();
      break;
  }

  if (result instanceof Promise) {

    result.then(function(data){

      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(data));
    });
  } else {

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  }
}

function httpListener(payload) {

  const actionPayload = payload.payload;
  var result = atmoCommons.errorCodes.UNKNOWN_ERROR;

  switch (payload.action) {

    case actions.ON_OFF_PORT:
      result = atmoActions.setOnOffPort(actionPayload);
      break;

    case actions.SET_THRESHOLD:
      result = atmoActions.setThreshold(actionPayload);
      break;

    case actions.DEVICE_IS_ALIVE:
      result = atmoActions.deviceIsAlive();
      break;

    default:
      result = atmoCommons.errorCodes.UNKNOWN_ACTION;
      break;
  }

  return result;
}