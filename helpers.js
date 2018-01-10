exports.JSONtoBuffer = function(obj) {
  return new Buffer(JSON.stringify(obj));
}

exports.BufferToJSON = function(buff) {
  return JSON.parse(buff.toString());
}