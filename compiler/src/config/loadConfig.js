const path = require("path");
const toml = require("toml");
const fs = require("fs").promises;

async function loadConfig() {
    const fileBuffer = await fs.readFile(path.resolve("../config.toml"));

    return toml.parse(fileBuffer.toString());
}

module.exports = { loadConfig }
