const fs = require("fs").promises;
const handlebars = require("handlebars");

async function renderIssues(issues, templatePath) {
    const renderedIssues = [];
    const template = (await fs.readFile(templatePath)).toString();
    for(const [index, issue] of issues.entries()) {
        renderedIssues.push(handlebars.compile(template)(issue));

        if(index === issues.length - 1) {
            return renderedIssues;
        }
    }
}

module.exports = { renderIssues };
