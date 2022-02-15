const base = require('./_base');

base.overrides[0].extends.push('plugin:testing-library/react');

module.exports = {
  ...base,
  env: {
    ...base.env,
    browser: true,
  },
  extends: [
    'airbnb',
    'airbnb-typescript',
    'next/core-web-vitals',
    ...base.extends,
  ],
  rules: {
    ...base.rules,
    'react/jsx-props-no-spreading': 'off',
    'react/function-component-definition': 'off',
  },
};
