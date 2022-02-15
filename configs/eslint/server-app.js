const base = require('./_base');

module.exports = {
  ...base,
  extends: [
    'airbnb-base',
    'airbnb-typescript/base',
    ...base.extends,
  ]
};
