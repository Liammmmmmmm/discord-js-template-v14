const { Txt } = require("../../langs/langs.js");
const settings = require("../../settings.js");
const { SlashCommandBuilder } = require('discord.js');

const commandName = "changelang";

module.exports = {
    name: commandName,
    aliases: [],
    run: (client, message) => {
        executeCMD(client, message, {});
    },
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription(require("../../langs/texts/" + settings.messages.defaultLang)[commandName].description),
        async execute(interaction) {
            await executeCMD(interaction.client, interaction, {});
        },
}

async function executeCMD(client, message, args) {
    const text = new Txt();
    await text.init(author.id);
    message.reply(text.get(commandName, "reply").replace("%MESSAGE_PING%", Date.now() - message.createdTimestamp).replace("%API_PING%", client.ws.ping));
}