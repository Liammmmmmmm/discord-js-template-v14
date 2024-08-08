const texts = {
    global: { // list of random texts
        tooManyArgs: "Too many arguments! Need %REQUIRED_AMOUNT%, received %RECEIVED_AMOUNT%",
        notEnoughArgs: "Not enough arguments! Need %REQUIRED_AMOUNT%, received %RECEIVED_AMOUNT%",
        error: "An error occurred",
        notEnoughPermAdmin: "Your are not an administrator of the server",
    },
    categories: { // List of the commands folders and a description of their content. Used in auto generated /help
        lang: "Utility commands for bot language",
        utils: "Random utility commands",
    },
    // List of the commands and the texts associated with it
    ping: { 
        description: "A command that gives you the ping of the bot.", // max 100 caracters, slash commands limit 
        advancedDesc: "A command that gives you the ping of the bot. (no args)",
        reply: "Pong! This message has a latency of %MESSAGE_PING%ms. The API has a latency of %API_PING%ms."
    },
    changelang: {
        description: "Change the language of the bot's messages.",
        advancedDesc: "Change the language of the bot's messages. (/changelang lang, get the available languages with /listlangs)",
        langOption: "The language the bot will use to communicate with you",
        badLanguageProvided: "The language you asked for isn't a valid language. Possible languages are: %LANG_LIST%",
        reply: "Your language has been successfully changed to %LANG%"
    },
    listlangs: {
        description: "Get all of the bot's languages.",
        advancedDesc: "Get all of the bot's languages. (no args)",
        reply: "Possible languages are: %LANG_LIST%"
    },
    changeprefix: {
        description: "Change the bot's prefix.",
        advancedDesc: "Change the bot's prefix. (/setprefix newprefix, max length 25 char)",
        reply: "Prefix succefully changed to: %PREFIX%",
        tooLong: "Your new prefix is more than 25 char",
    },
    help: {
        description: "List all possibles commands.",
        advancedDesc: "List all possibles commands and help you on a specific command that you pass as an argument. (/help commandname)",
        title: "Here are all the possibles commands, have fun!",
        categoryformat: "__%CATEGORY_NAME%__: %CATEGORY_DESCRIPTION%",
        commandformat: "- **%COMMAND_NAME%**: %COMMAND_DESCRIPTION%",
        invalidCommand: "This command don't exist",
    },
}

module.exports = { texts };