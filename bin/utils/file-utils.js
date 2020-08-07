'use strict'
const fs = require('fs');
const path = require('path');

class FileUtils {
    // remove
    static rm(target) {
        if (!fs.existsSync(target)) return
        if (fs.lstatSync(target).isDirectory()) {
            let files = fs.readdirSync(target)
            files.forEach((file) => {
                FileUtils.rm(path.resolve(target, file))
            })
            fs.rmdirSync(target)
        } else {
            fs.unlinkSync(target)
        }
    }
    // copy
    static cp(src, target) {
        if (!fs.existsSync(src)) return
        if (fs.lstatSync(src).isDirectory()) {
            let exists = fs.existsSync(target)
            if (!exists) fs.mkdirSync(target)
            let files = fs.readdirSync(src)
            files.forEach((file) => {
                if (file === '.gitkeep') return
                FileUtils.cp(path.resolve(src, file), path.resolve(target, file))
            })
        } else {
            if (!!fs.copyFileSync) fs.copyFileSync(src, target)
            else {
                fs.createReadStream(src).pipe(fs.createWriteStream(target));
            }
        }
    }
}

module.exports = FileUtils
