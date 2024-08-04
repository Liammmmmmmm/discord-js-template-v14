const { success, info, warn, error, debug} = require("./utils/console");
const fs = require('fs');

fs.writeFileSync('./terminal.log', '', 'utf-8');

success(["success"])
info(["info"])
warn(["warn"])
error(["error"])
debug.info(["debug info"])

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);