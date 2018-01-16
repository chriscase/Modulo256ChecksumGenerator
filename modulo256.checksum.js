exports.generateModulo256Checksum = function (string) {
  var buf = new Buffer(string + String.fromCharCode(13)+ String.fromCharCode(3));
  
  // Calculate the modulo 256 checksum
  var sum = 0;
  for (var i = 0, l = buf.length; i < l; i++) {
    sum = (sum + buf[i]) % 256;
  }
  
  // Find the compliment
  // sum = 256 - sum;
  // Convert to a two byte uppercase hex value
  var chars = sum.toString(16).toUpperCase();
  if (chars.length == 1) chars = "0" + chars;
  return chars;
}
