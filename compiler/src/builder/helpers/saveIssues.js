const path = require("path");
const fs = require("fs").promises;
const _fs = require("fs");

async function saveIssues(renderedIssues, savePath) {
    if(!_fs.existsSync(savePath)) {
        await fs.mkdir(savePath);
    }

    for(const [index, issue] of renderedIssues.entries()) {
        await fs.writeFile(path.join(savePath, `issue-${index + 1}.html`), issue);
    }
}

module.exports = { saveIssues };
