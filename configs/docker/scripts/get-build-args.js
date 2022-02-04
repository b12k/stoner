const { execSync } = require('child_process');
const { resolve } = require('path');

module.exports = (dockerFile = 'Dockerfile') => {
    const cwd = process.cwd();
    const packageJsonPath = resolve(cwd, 'package.json');
    const gitRoot = resolve(execSync('git rev-parse --show-toplevel')
      .toString()
      .replace('\n', ''));

    const NAME = require(packageJsonPath).name.replace('@', '');
    const DOCKERFILE = resolve(__dirname, '../dockerfiles', dockerFile);

    const environment = {
      NAME: require(packageJsonPath).name.replace('@', ''),
      CONTEXT: gitRoot,
      DOCKERFILE: resolve(__dirname, '../dockerfiles', dockerFile),
    }

    console.log('\n\n\n\n', JSON.stringify(environment, null, 2),'\n\n\n\n')

    return environment;
  }