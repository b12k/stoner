module.exports = {
  ...require('@stoner/config-eslint/client-app'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
