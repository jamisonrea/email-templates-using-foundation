module.exports = function(val) {
  if (val === -1) {
    var addressIcon = 'http://image.email.comparaja.pt/lib/fe8b13727262077e7d/m/1/2Xlocation_gray.png';
  } else if (val === 0) {
    var addressIcon = 'http://image.email.comparaja.pt/lib/fe9213727262077975/m/1/2Xlocation_red.png';
  } else if (val === 1) {
    var addressIcon = 'http://image.email.comparaja.pt/lib/fe9213727262077975/m/1/2Xlocation_green.png';
  } else {
    var addressIcon = '';
  }
  return addressIcon;
}
