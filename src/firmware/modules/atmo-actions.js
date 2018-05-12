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
    return atmoCommons.errorCodes.BAD_FORMAT;
  }

  digitalWrite(payload.port, payload.state ? 1 : 0);

  return atmoCommons.errorCodes.SUCCESS;
};

exports.setThreshold = function(payload) {

  // Verify command.
  if (!verifyFormat(payload, atmoCommons.actionsVerifyPatters.SET_THRESHOLD)) {
    return atmoCommons.errorCodes.BAD_FORMAT;
  }

  return atmoThermostat.readTemperature(payload.threshold);
};