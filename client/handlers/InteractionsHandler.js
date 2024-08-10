const { info, error, success } = require('../../utils/Console');
const { readdirSync } = require('fs');
const DiscordBot = require('../DiscordBot');
const { REST, Routes } = require('discord.js');

class InteractionsHandler {
    client;

    /**
     *
     * @param {DiscordBot} client 
     */
    constructor(client) {
        this.client = client;
    }

    load = () => {
        for (const file of readdirSync('./interactions/autocomplete').filter((f) => f.endsWith('.js'))) {
            const module = require(`../../interactions/autocomplete/${file}`);
            if (!module.commandName || !module.run) {
                error('Unable to load the autocomplete component ' + file);
                continue;
            }
            this.client.collection.components.autocomplete.set(module.commandName, module);
            info(`Loaded new component (type: autocomplete) : ` + file);
        }
        
        for (const file of readdirSync('./interactions/buttons').filter((f) => f.endsWith('.js'))) {
            const module = require(`../../interactions/buttons/${file}`);
            if (!module.customId || !module.run) {
                error('Unable to load the buttons ' + file);
                continue;
            }
            this.client.collection.components.buttons.set(module.customId, module);
            info(`Loaded new button : ` + file);
        }

        for (const file of readdirSync('./interactions/context-menus').filter((f) => f.endsWith('.js'))) {
            const module = require(`../../interactions/context-menus/${file}`);
            if (!module.data.name || !module.run || !module.data.type) {
                error('Unable to load the context menu ' + file);
                continue;
            }
            if(module.data.type == "user") this.client.collection.components.context.set("user-" + module.data.name, module);
            if(module.data.type == "message") this.client.collection.components.context.set("mess-" + module.data.name, module);

            module.data.type = module.data.type.replace("message", 3).replace("user", 2)
            this.client.rest_application_commands_array.push(module.data);
            info(`Loaded new context menu : ` + file);
        }

        for (const file of readdirSync('./interactions/modals').filter((f) => f.endsWith('.js'))) {
            const module = require(`../../interactions/modals/${file}`);
            if (!module.customId || !module.run) {
                error('Unable to load the modal ' + file);
                continue;
            }
            this.client.collection.components.modals.set(module.customId, module);
            info(`Loaded new modal : ` + file);
        }

        for (const file of readdirSync('./interactions/selects-menus').filter((f) => f.endsWith('.js'))) {
            const module = require(`../../interactions/selects-menus/${file}`);
            if (!module.customId || !module.run) {
                error('Unable to load the select menu ' + file);
                continue;
            }
            this.client.collection.components.selects.set(module.customId, module);
            info(`Loaded new select menu : ` + file);
        }

        const componentsCollection = this.client.collection.components;

        success(`Successfully loaded ${componentsCollection.autocomplete.size + componentsCollection.buttons.size + componentsCollection.selects.size + componentsCollection.buttons.size + componentsCollection.context.size} components.`);
    }

    reload = () => {
        this.client.collection.components.autocomplete.clear();
        this.client.collection.components.buttons.clear();
        this.client.collection.components.modals.clear();
        this.client.collection.components.context.clear();
        this.client.collection.components.selects.clear();

        this.load();
    }
}

module.exports = InteractionsHandler;