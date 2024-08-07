const { Txt, languages } = require("../../langs/langs.js");
const settings = require("../../settings.js");
const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const { validArgAmount } = require("../../utils/random");
const { debug } = require("../../utils/console")

const commandName = "changeprefix";

module.exports = {
    name: commandName,
    aliases: ["setprefix"],
    run: async (client, message, args) => {
        const text = new Txt();
        await text.init(message.author.id);
        if(validArgAmount(args, 1, text) != 1) return message.reply(validArgAmount(args, 1, text));

        if(args[0].length > 25) {
            message.reply(text.get(commandName, "tooLong"));
        } else if(!message.member.permissions.has(PermissionFlagsBits.Administrator)) {
            message.reply(text.get("global", "notEnoughPermAdmin"));
        } else {
            executeCMD(client, message, {prefix: args[0]}, text);
        } 
    },
    data: new SlashCommandBuilder()
        .setName(commandName)
        .setDescription(require("../../langs/texts/" + settings.messages.defaultLang)[commandName].description)
        .addStringOption(option =>
            option.setName('prefix')
                .setDescription(require("../../langs/texts/" + settings.messages.defaultLang)[commandName].description)
                .setRequired(true)
                .setMaxLength(25)    
        )
        .setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
        async execute(client, interaction) {
            const text = new Txt();
            await text.init(interaction.author.id);
            await executeCMD(interaction.client, interaction, {prefix: interaction.options.getString('prefix')}, text);
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
    client.database.request("UPDATE servers SET prefix = ? WHERE server_id = ?", [args.prefix, message.guild.id])
    .then(res => {
        client.serverPrefix.find(element => element.server_id == message.guild.id).prefix = args.prefix;
        message.reply(text.get(commandName, "reply").replace("%PREFIX%", args.prefix));
    })
    .catch(err => {
        debug.error(err);
        message.reply(text.get("global", "error"));
    })
}