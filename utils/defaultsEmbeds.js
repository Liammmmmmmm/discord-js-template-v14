const { EmbedBuilder } = require('discord.js');
const { replaceVariables } = require("../langs/langs");
const { embeds } = require("../settings");

class DefaultEmbed extends EmbedBuilder {
    
    setDefault(embed, message) {
        let variables = {
            SERVER_NAME: "",
            SERVER_IMAGE: "",
            USER_NAME: "",
            USER_IMAGE: "",
        }
        try {
            if(message.member) {
                variables.SERVER_NAME = message.member.guild.name;
                variables.SERVER_IMAGE = message.member.guild.iconURL();
            }
            variables.USER_NAME = message.author.globalName;
            variables.USER_IMAGE = message.author.displayAvatarURL();

        } catch {}
        
        if(!embeds[embed]) return;
        if(embeds[embed].color) this.setColor('#dbaf00');
        if(embeds[embed].footer) {
            this.setFooter({text: replaceVariables(embeds[embed].footer.text, variables), iconURL: replaceVariables(embeds[embed].footer.imageURL, variables)});
            if(embeds[embed].footer.timestamp) this.setTimestamp();
        }
        if(embeds[embed].header) {
            this.setAuthor({name: replaceVariables(embeds[embed].header.author, variables), iconURL: replaceVariables(embeds[embed].header.authorImageURL, variables), url: replaceVariables(embeds[embed].header.authorURL, variables)});
            if(embeds[embed].footer.thumbnail) this.setThumbnail(replaceVariables(embeds[embed].footer.thumbnail, variables));
        }
        return this;
    }
}

module.exports = { DefaultEmbed }