module.exports = function (val) {
  let valid = 'https://cdn.zeplin.io/582a756a8ea95a7a7674d949/assets/132884CE-8AAC-47DC-BF55-7E1DEDAAA192.png';
  let invalid = 'https://cdn.zeplin.io/582a756a8ea95a7a7674d949/assets/8F617FE0-A143-4DC0-9BAE-AFD4AF18B1B5.png';
  return val ? valid : invalid;
};