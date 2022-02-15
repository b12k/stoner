module.exports = {
  ...require('@stoner/config-eslint/client'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
