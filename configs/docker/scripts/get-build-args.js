const { execSync } = require('child_process');
const { resolve, sep } = require('path');

module.exports = (
  dockerfile = 'Dockerfile',
  dockerfilesDir = 'configs/docker/dockerfiles',
) => {
  const cwd = process.cwd();
  const packageJsonPath = resolve(cwd, 'package.json');
  const gitRoot = resolve(execSync('git rev-parse --show-toplevel')
    .toString()
    .replace('\n', ''));

  const rootDepth = cwd.split(sep).length - gitRoot.split(sep).length;

  const NAME = require(packageJsonPath).name.replace('@', '');
  const CONTEXT = [...Array(rootDepth)].map(() => '../').join('');
  const DOCKERFILE = [CONTEXT, dockerfilesDir, '/', dockerfile].join('');
  
  return {
    NAME,
    CONTEXT,
    DOCKERFILE,
  }
}