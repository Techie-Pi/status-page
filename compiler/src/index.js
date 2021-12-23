const { loadConfig } = require("./config/loadConfig");
const { loadIssues } = require("./loader/loadIssues");
const { buildWebsite } = require("./builder/buildWebsite");

async function start() {
    const config = await loadConfig();
    const issues = await loadIssues(config.content.path);
    await buildWebsite(config.build.path, config.public.path, config.content.path, config.pages.path, config.services, issues);
}

start()
    .then(() => {
        console.log("[Compiler] Finished compiling");
    })
