const settings = {
    development: {
        enabled: true, // If true, the bot will register all application commands to a specific guild (not globally).
        guildIds: ["450730266479165440"], // "Development Guild", "Another dev guild"
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
    },
    status: {
        statusMessages: [
            { name: 'mes waifus', type: 3 },
            { name: 'Reflechi au sens de la vie', type: 4 },
        ],
        switch_delay: 10000,       
    }
}

module.exports = settings;