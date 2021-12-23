const path = require("path");
const toml = require("toml");
const fs = require("fs").promises;

async function loadIssues(issuesPath) {
    const issues = [];
    const issuesFilenames = await fs.readdir(path.resolve(path.join("../", issuesPath)));

    for(const [index, issueFilename] of issuesFilenames.entries()) {
        if(issueFilename === "_templates") return;

        const rawIssue = await fs.readFile(path.resolve(path.join("../", issuesPath, issueFilename)));
        const parsedIssue = toml.parse(rawIssue.toString());

        const finalIssue = Object.assign({}, parsedIssue);
        let updates = [];
        for(const update of Object.values(parsedIssue["updates"])) {
            updates.push(update);
        }
        finalIssue["updates"] = updates;

        issues.push(finalIssue);

        if(index === issuesFilenames.length - 2) {
            return issues
        }
    }
}

module.exports = { loadIssues };
