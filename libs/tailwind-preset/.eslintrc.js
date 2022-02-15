module.exports = {
  ...require('@stoner/config-eslint/client-lib'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
