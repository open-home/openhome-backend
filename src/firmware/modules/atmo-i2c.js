exports.readFrom = function(address, bitsToRead) {

  var bufferReply = I2C1.readFrom(address, bitsToRead);
  return bufferReply;
};

exports.writeTo = function(address, value) {
  I2C1.writeTo(address, value);
};