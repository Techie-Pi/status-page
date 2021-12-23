const fs = require("fs").promises;
const _fs = require("fs");
const path = require("path");

async function copyFolder(source, destination) {
    if(!_fs.existsSync(destination)) {
        await fs.mkdir(destination);
    }

    const sourceDirectory = await fs.readdir(source);
    for(const sourceFile of sourceDirectory) {
        const sourcePath = path.join(source, sourceFile);
        const destinationPath = path.join(destination, sourceFile);
        const stat = await fs.lstat(sourcePath);

        if(stat.isFile()) {
            await fs.copyFile(sourcePath, destinationPath)
        }
        else if(stat.isDirectory()) {
            await copyFolder(sourcePath, destinationPath);
        }
        else if(stat.isSymbolicLink()) {
            await fs.symlink(await fs.readlink(sourcePath), destinationPath);
        }
    }
}

module.exports = { copyFolder };
