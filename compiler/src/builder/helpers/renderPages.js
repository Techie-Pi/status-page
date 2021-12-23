const fs = require("fs").promises;
const handlebars = require("handlebars");
const path = require("path");

async function renderPages(services, pagesPath) {
    const renderedPages = {};
    const pagesDirectory = await fs.readdir(pagesPath);

    for(const [index, pageFile] of pagesDirectory.entries()) {
        const template = (await fs.readFile(path.join(pagesPath, pageFile))).toString();
        renderedPages[pageFile] = handlebars.compile(template)({services});

        if(index === pagesDirectory.length - 1) {
            return renderedPages;
        }
    }
}

module.exports = { renderPages };
