const path = require('path');
const { execSync } = require('child_process');

const target = path.join(__dirname, '../../tch/tc_h5');

function installNpmDeps() {
    const options = { stdio: 'inherit' };
    execSync(`cd ${target} && git add . && git commit -m 'add file' && git push && cd ../../tch_h5`, options);
}

installNpmDeps();