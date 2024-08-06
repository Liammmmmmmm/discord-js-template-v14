const { txt } = import("../../langs/langs");
const settings = import("../../settings");

const commandName = "ping";

module.exports = {
    name: commandName,
    aliases: [],
    run: (client, message) => {
        executeCMD(client, message, {});
    },
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription(import("./langs/texts/" + settings.messages.defaultLang)[commandName].description),
        async execute(interaction) {
            await executeCMD(interaction.client, interaction, {});
        },
}

async function executeCMD(client, message, args) {
    const text = new txt();
    await text.init(author.id);
    message.reply(text.get("ping", "reply").replace("%MESSAGE_PING%", Date.now() - message.createdTimestamp).replace("%API_PING%", client.ws.ping));
}