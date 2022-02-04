const ENV = require('../../configs/docker/scripts').getBuildArgs();

console.log('\n\n\n\n', ENV, '\n\n\n\n');

module.exports = ENV;