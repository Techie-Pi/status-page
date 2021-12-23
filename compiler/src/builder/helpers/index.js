const { registerHelpers } = require("./registerHelpers");
const { renderIssues } = require("./renderIssues");
const { copyFolder } = require("./copyFolder");
const { saveIssues } = require("./saveIssues");
const { renderPages } = require("./renderPages");
const { savePages } = require("./savePages");

module.exports = {
    copyFolder,
    renderIssues,
    registerHelpers,
    saveIssues,
    renderPages,
    savePages,
}
