exports.rPad = function(str, padString, length) {

  while (str.length < length) {
    str = str + padString;
  }
  return str;
};

exports.chunkSubstr = function(str, size) {

  var numChunks = Math.ceil(str.length / size),
    chunks = new Array(numChunks);

  for(var i = 0, o = 0; i < numChunks; ++i, o += size) {
    chunks[i] = str.substr(o, size);
  }

  return chunks;
};

exports.arrayBufferToString = function(buffer) {

  var arr = new Uint8Array(buffer);
  var str = String.fromCharCode.apply(String, arr);
  return str;
};