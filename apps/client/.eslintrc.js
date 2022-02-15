module.exports = {
  ...require('@stoner/config-eslint/client'),
  parserOptions: {
    root: true,
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json'],
  },
};
