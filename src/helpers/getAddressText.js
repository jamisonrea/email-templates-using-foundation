module.exports = function(val) {
  if (val === -1) {
    var addressText = 'Cobertura não confirmada';
  } else if (val === 0) {
    var addressText = 'Sem Cobertura';
  } else if (val === 1) {
    var addressText = 'Cobertura Confirmada';
  } else {
    var addressText = '';
  }
  return addressText;
}
