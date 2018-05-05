exports.firmwareVersion = '1.0.0';
exports.smsEnabled = false;
exports.ctrlZ = '\032';
exports.space = ' ';
exports.empty = '';

exports.i2cBus = {
  avr: 0x08,
  display: 0x3C
};

exports.commandsDir = '/commands';
exports.firmwareDir = '/firmware';
exports.logDir = '/logs';
exports.inboundQueueFile = this.commandsDir + '/%NO%.json';
exports.lastCommandSentFile = this.commandsDir + '/last-command-sent.json';
exports.firmwareAVRFile = this.firmwareDir + '/atmega32u4.hex';
exports.firmwareARMFile = this.firmwareDir + '/stm32f4.bin';
exports.configFile = '/config.json';
exports.logFile = this.logDir + '/log.txt';

exports.httpPOST = 'POST';
exports.httpGET = 'GET';

exports.defaultConfigs = {
  simsEnable: '00000000',
  logUploadBucket: '',
  firstCommand: 0,
  lastCommand: 0,
  commandCount: 0
};

exports.errorCodes = {

  // From 1 to 20 reserved to pre-processing errors.

  AUTH_FAILED: 0,
  SUCCESS: 1,
  UNKNOWN_ERROR: 2,
  UNKNOWN_ACTION: 3,
  BAD_FORMAT: 20,
  QUEUE_FAILED: 21
};

exports.i2cErrorCodes = {

  SUCCESS: '1',
  NO_ERROR: '00',
  UNKNOWN_ERROR: '01'
};

/*
 * Actions verify patterns.
 */

exports.types = {
  STRING: 'string',
  NUMBER: 'number',
  BOOLEAN: 'boolean'
};

exports.actionsVerifyPatters = {

  SEND_SMS: [
    { key: 'command', type: this.types.NUMBER, value: 0 },
    { key: 'number', type: this.types.STRING },
    { key: 'message', type: this.types.STRING },
    { key: 'simIndex', type: this.types.NUMBER }
  ],
  ENABLE_SIM: [
    { key: 'command', type: this.types.NUMBER, value: 1 },
    { key: 'availability', type: this.types.BOOLEAN },
    { key: 'simIndex', type: this.types.NUMBER }
  ],
  ON_OFF_PORT: [
    { key: 'port', type: this.types.STRING },
    { key: 'state', type: this.types.BOOLEAN }
  ]
};