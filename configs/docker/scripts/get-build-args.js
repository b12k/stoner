const { execSync } = require('child_process');
const { resolve, sep } = require('path');

const DEFAULT_DOCKERFILE_NAME = 'Dockerfile';
const DEFAULT_DOCKERFILES_DIR = 'configs/docker';

module.exports = (
  dockerfile = DEFAULT_DOCKERFILE_NAME,
  dockerfilesDir = DEFAULT_DOCKERFILES_DIR,
) => {
  const cwd = process.cwd();
  const packageJsonPath = resolve(cwd, 'package.json');
  const gitRoot = resolve(execSync('git rev-parse --show-toplevel').toString().replace('\n', ''));

  const rootDepth = cwd.split(sep).length - gitRoot.split(sep).length;

  const APP_NAME = require(packageJsonPath).name.replace('@', '');
  const CONTEXT = [...Array(rootDepth)].map(() => '../').join('');
  const DOCKERFILE = [CONTEXT, dockerfilesDir, '/', dockerfile].join('');

  return {
    APP_NAME,
    CONTEXT,
    DOCKERFILE,
  };
};
