const settings = {
    development: {
        enabled: true, // If true, the bot will register all application commands to a specific guild (not globally).
        guildIds: ["Development Guild", "Another dev guild"],
        debug: true, // Display or not some of the errors
        logFile: true
    },
    commands: {
        prefix: "?" // Default prefix of the command messages.
    },
    users: {
        ownerId: "Your account ID", // The bot owner ID, which is you.
        developers: ["Your account ID", "Another account ID"] // The bot developers, remember to include your account ID with the other account IDs.
    },
    messages: { // Messages when language is unreachable.
        defaultLang: "en",
        DATABASE_ERROR: "A database error orccured"
    }
}

module.exports = settings;