const first = require('test-dependent-first');
const second = require('test-dependent-second')

const combine = () => {
  first.getInfo();
  second.getInfo();
}

module.exports = { combine }