const settings = {
    development: {
        enabled: true, // If true, the bot will register all application commands to a specific guild (not globally).
        guildIds: ["450730266479165440", "876729531166240808"], // "Development Guild", "Another dev guild"
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
    bot: { // Useless if you don't use webhooks
        name: "Test",
        icon: "https://cdn.discordapp.com/avatars/727813004464488488/e0ded07a54ded9ec9c0a1a33c0547477.webp?size=160"
    },
    status: {
        statusMessages: [
            { name: 'mes waifus', type: 3 },
            { name: 'Reflechi au sens de la vie', type: 4 },
        ],
        switch_delay: 10000,       
    }
}


const globalEmbedHeader = {
    author: "%SERVER_NAME%",
    authorImageURL: "%SERVER_IMAGE%",
    authorURL: "https://exemple.com",
    thumbnai: "https://c.clc2l.com/t/d/i/discord-4OXyS2.png"
}

const globalEmbedFooter = {
    text: "%USER_NAME%",
    imageURL: "%USER_IMAGE%",
    timestamp: true,
}

const embeds = {
    primary: {
        color: "#dbaf00",
        header: globalEmbedHeader,
        footer: globalEmbedFooter,
    },
    secondary: {
        color: "#00b3db",
        header: globalEmbedHeader,
        footer: {
            text: "Secondary exemple",
            imageURL: "",
            timestamp: true,
        },
    },
}

module.exports = { settings, embeds };