const { success, info, warn, error, debug} = require("./Console");
const DatabaseConnection = require("./SQLRequest")
const { PermissionFlagsBits, WebhookClient } = require('discord.js');
const { settings } = require('../settings');

class WebhookMessage {
    /**
     * 
     * @param {import("discord.js").Message} message 
     * @returns 
     */
    async init(message) {
        if(!message) return false;
        let result = false;
        try {
            let db = new DatabaseConnection();
            await db.request("SELECT * FROM webhook WHERE channel_id = ?", [message.channel.id])
            .then(async res => {
                if(res.length == 0) {
                    await message.channel.createWebhook({name: settings.bot.name, avatar: settings.bot.icon})
                    .then(async webhook => {
                        this.webhook = webhook;
                        db.request("INSERT INTO webhook(channel_id, url) VALUE (?, ?)", [message.channel.id, this.webhook.url])
                        result = true;
                    })
                } else {
                    this.webhook = new WebhookClient({ url: res[0].url });
                    result = true;
                }
            })
            .catch(err => {
                debug.error(err);
            })
        } catch {}
        return result;
    }

    async send(username, icon, content, embed) {
        if(!embed) embed = [];
        return new Promise(async (resolve, reject) => {
            await this.webhook.send({
                content: content,
                username: username,
                avatarURL: icon,
                embeds: embed,
            })
            .catch(err => {
                let db = new DatabaseConnection();
                db.request("DELETE FROM webhook WHERE url = ?", [this.webhook.url])
                reject(err);
            })
            resolve(true);
        })
    }
}

module.exports = { WebhookMessage }