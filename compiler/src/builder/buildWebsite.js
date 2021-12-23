const path = require("path");

const { registerHelpers, copyFolder, renderIssues, saveIssues, renderPages, savePages } = require("./helpers");

async function buildWebsite(buildPath, publicPath, contentPath, pagesPath, services, issues) {
    registerHelpers(services);
    await copyFolder(path.join("../", publicPath), path.join("../", buildPath));

    const renderedIssues = await renderIssues(issues, path.join("../", contentPath, "_templates", "issue.hbs"));
    await saveIssues(renderedIssues, path.join("../", buildPath, "issues"));

    const renderedPages = await renderPages(services, path.join("../", pagesPath));
    await savePages(renderedPages, path.join("../", buildPath));
}

module.exports = { buildWebsite };
