const { Txt } = require("../../langs/langs.js");
const { settings } = require("../../settings.js");
const { SlashCommandBuilder } = require('discord.js');

const commandName = "ping";

module.exports = {
    name: commandName,
    aliases: [],
    help: 1,
    run: (client, message, args) => {
        executeCMD(client, message, args);
    },
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription(require("../../langs/texts/" + settings.messages.defaultLang).texts[commandName].description),
        async execute(client, interaction) {
            await executeCMD(interaction.client, interaction, {});
        },
}

/**
 * 
 * @param {import("discord.js").Client} client 
 * @param {import("discord.js").Message} message 
 * @param {object} args 
 */
async function executeCMD(client, message, args) {
    const text = new Txt();
    await text.init(message.author.id);
    message.reply(text.get(commandName, "reply", {MESSAGE_PING: Date.now() - message.createdTimestamp, API_PING: client.ws.ping}));
}