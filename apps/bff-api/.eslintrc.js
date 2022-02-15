module.exports = {
  ...require('@stoner/config-eslint/server-app'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
