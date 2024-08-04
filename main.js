const { success, info, warn, error, debug} = require("./utils/console");
const DatabaseConnection = require("./utils/sqlRequest");
const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: './.env'});

fs.writeFileSync('./terminal.log', '', 'utf-8');

async function test() {
    info("start")
    await new DatabaseConnection().request("SELECT * FROM webhook")
    .then(ok => {
        success(ok);
    })
    .catch(err => {
        error(err);
    })
    info("end")
}

test()

process.on('unhandledRejection', console.error);
process.on('uncaughtException', console.error);