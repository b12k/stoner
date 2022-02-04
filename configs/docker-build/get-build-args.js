module.exports = (SCOPE) => {
    const {
      DOCKER_IMAGE_TAG_PREFIX,
      DOCKER_IMAGE_TAG_VERSION,
      DOCKER_IMAGE_TAG_CALVER,
    } = process.env;
    
    const CONTEXT = '../../../';
    const DOCKERFILE = `${CONTEXT}infrastructure/docker/Dockerfile`;
    
    const [_, APP_NAME] = SCOPE.split('/');
    const TAG_CALVER = `${DOCKER_IMAGE_TAG_PREFIX}/${APP_NAME}:${DOCKER_IMAGE_TAG_CALVER}`;
    const TAG_VERSION = `${DOCKER_IMAGE_TAG_PREFIX}/${APP_NAME}:${DOCKER_IMAGE_TAG_VERSION}`;
    
    return {
      SCOPE,
      CONTEXT,
      DOCKERFILE,
      TAG_CALVER,
      TAG_VERSION,
    };
  }