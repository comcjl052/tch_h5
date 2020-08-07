'use strict'

const path = require('path');
const FileUtils = require('./utils/file-utils.js');

// cp ./www to ../../tch/tc_h5
const src = path.join('./www');
const target = path.join(__dirname, '../../tch/tc_h5');

FileUtils.cp(src, target);
console.log(src, target);