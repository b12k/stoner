module.exports = {
  ...require('@stoner/config-eslint/server'),
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
