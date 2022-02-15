const tailwindPreset = require('@stoner/tailwind-preset');

module.exports = {
  content: [
    'src/**/*.{js,ts,jsx,tsx}',
    '../../libs/ui-kit/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
