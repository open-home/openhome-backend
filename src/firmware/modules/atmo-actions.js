function verifyFormat(commandPayload, comparePattern) {

  for (var i = 0; i < comparePattern.length; i++) {

    var tempPattern = comparePattern[i];
    var tempKey = commandPayload[tempPattern.key];

    // Key existing check.
    if (tempKey == null || tempKey == undefined) {
      console.log("key");
      return false;
    }

    // Type check.
    switch (tempPattern.type) {

      case atmoCommons.types.STRING:
        if (typeof tempKey != atmoCommons.types.STRING) { console.log("string"); return false; }
        break;

      case atmoCommons.types.NUMBER:
        if (typeof tempKey != atmoCommons.types.NUMBER) { console.log("number", typeof tempKey); return false; }
        break;

      case atmoCommons.types.BOOLEAN:
        if (typeof tempKey != atmoCommons.types.BOOLEAN) { console.log("boolean"); return false; }
        break;

      default:
        return false;
    }

    // Value check.
    if ((tempPattern.value != null) && (tempKey != tempPattern.value)) {
        return false;
    }
  }

  return true;
}

exports.setOnOffPort = function(payload) {

  // Verify command.
  if (!verifyFormat(payload, atmoCommons.actionsVerifyPatters.ON_OFF_PORT)) {
    return { status: false, error: atmoCommons.errorCodes.BAD_FORMAT, data: {} };
  }

  digitalWrite(payload.port, payload.state ? 1 : 0);

  return { status: true, error: atmoCommons.errorCodes.SUCCESS, data: {} };
};

exports.setThreshold = function(payload) {

  // Verify command.
  if (!verifyFormat(payload, atmoCommons.actionsVerifyPatters.SET_THRESHOLD)) {
    return atmoCommons.errorCodes.BAD_FORMAT;
  }

  return atmoThermostat.readTemperature(payload.threshold);
};

exports.deviceIsAlive = function() {
  return { status: true, error: atmoCommons.errorCodes.SUCCESS, data: GUID };
};