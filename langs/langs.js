const fs = require("fs");
const settings = require("../settings")
const DatabaseConnection = require("../utils/sqlRequest")
const { warn, error, info, success, debug } = require("../utils/console");

const languages = fs.readdirSync('./langs/texts').filter(file => file.endsWith('.js')).map(file => file.replace(".js", ""));

if(!languages.includes(settings.messages.defaultLang)) {
    error("Default language isn't an actual language");
}

class txt {
    constructor(userid) {
        if (userid) {
            let db = new DatabaseConnection();
            db.request("SELECT lang FROM users WHERE discord_id = ?", [userid])
            .then(res => {
                if(res.length == 1) {
                    if(languages.includes(res[0].lang)) {
                        this.lang = res[0].lang;
                    } else {
                        debug.warn(`Selected language ${res[0].lang} isn't a configured language. Selecting defaukt language.`);
                        this.lang = settings.messages.defaultLang;
                    }
                } else {
                    debug.info(`User ${userid} isn't registered yet. Selecting default lang ${settings.messages.defaultLang}`);
                    addUserDefaultLang(userid);
                    this.lang = settings.messages.defaultLang;
                }
            })
            .catch(err => {
                debug.warn(`An error occured while fetching user ${userid} in database. Selecting default lang ${settings.messages.defaultLang}`);
                this.lang = settings.messages.defaultLang;
            })
        } else {
            debug.error("Error creating txt object, no user provided");
            this.lang = settings.messages.defaultLang;
        }
    }

    get(command, text) {
        let res = require("./texts/" + this.lang)[command][text];
        if(!res) res = require("./texts/" + settings.messages.defaultLang)[command][text];
        if(!res) res = "Text error";
        return res;
    }
}

function addUserDefaultLang(userid) {
    let db = new DatabaseConnection();
    db.request("INSERT INTO users(discord_id, lang) VALUES (?, ?)", [userid, settings.messages.defaultLang])
    .then(res => {
        debug.success(`User ${userid} succefully registered in database with lang : ${settings.messages.defaultLang}`);
    })
    .catch(err => {
        debug.warn(`An error occured while registering user ${userid} in database. Selecting default lang ${settings.messages.defaultLang}`);
    })
}

module.exports = txt;