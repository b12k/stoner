const base = require('./client-app');

base.overrides[0].extends.push('plugin:testing-library/react');

module.exports = {
  ...base,
  rules: {
    ...base.rules,
    'import/no-extraneous-dependencies': 'off'
  },
};
