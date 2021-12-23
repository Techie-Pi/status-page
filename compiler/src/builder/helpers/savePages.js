const path = require("path");
const fs = require("fs").promises;
const _fs = require("fs");

async function savePages(renderedPages, savePath) {
    if(!_fs.existsSync(savePath)) {
        await fs.mkdir(savePath);
    }

    for(const [key, value] of Object.entries(renderedPages)) {
        await fs.writeFile(path.join(savePath, key.replace("hbs", "html")), value);
    }
}

module.exports = { savePages };
