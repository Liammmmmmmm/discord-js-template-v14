const { Txt, languages } = require("../../langs/langs.js");
const settings = require("../../settings.js");
const { SlashCommandBuilder } = require('discord.js');
const { validArgAmount } = require("../../utils/random");

const commandName = "listlangs";
let formatedLangList = languages.map(el => ({name: el, value: el}));

module.exports = {
    name: commandName,
    aliases: [],
    run: async (client, message, args) => {
        const text = new Txt();
        await text.init(message.author.id);

        executeCMD(client, message, {}, text);
    },
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription(require("../../langs/texts/" + settings.messages.defaultLang)[commandName].description),
        async execute(client, interaction) {
            const text = new Txt();
            await text.init(interaction.author.id);
            await executeCMD(interaction.client, interaction, {}, text);
        },
}

const DiscordBot = require("../../client/DiscordBot");
/**
 * Execute the command with both slash and message command
 * @param {DiscordBot} client 
 * @param {import("discord.js").Message} message 
 * @param {object} args 
 * @param {Txt} text 
 */
async function executeCMD(client, message, args, text) {
    message.reply(text.get(commandName, "reply").replace("%LANG_LIST%", languages.join(", ")));
}