const { REST, Routes } = require('discord.js');
const { info, error, success, debug } = require('../../utils/console');
const { readdirSync } = require('fs');
const DiscordBot = require('../DiscordBot');

class CommandsHandler {
    client;

    /**
     *
     * @param {DiscordBot} client 
     */
    constructor(client) {
        this.client = client;
    }

    load = () => {
        for (const directory of readdirSync('./commands/')) {
            for (const file of readdirSync('./commands/' + directory).filter((f) => f.endsWith('.js'))) {
                try {
                    const module = require('../../commands/' + directory + '/' + file);
                    
                    if (!module) continue;

                        if ((!module.name || !module.run) && !module.data) {
                            error('Unable to load the command ' + file);
                            continue;
                        }

                        if (module.name && module.run) {
                            this.client.collection.message_commands.set(module.name, module);

                            if (module.aliases && Array.isArray(module.aliases)) {
                                module.aliases.forEach((alias) => {
                                    this.client.collection.message_commands_aliases.set(alias, module.name);
                                });
                            }

                            info('Loaded new message command: ' + file);
                        }
                        if (module.data) {
                            this.client.collection.application_commands.set(module.name, module);
                            this.client.rest_application_commands_array.push(module.data.toJSON());

                            info('Loaded new application command: ' + file);
                        }

                } catch (e) {
                    error('Unable to load a command from the path: ' + '/commands/' + directory + '/' + file);
                    debug.error(e)
                }
            }
        }

        success(`Successfully loaded ${this.client.collection.application_commands.size} application commands and ${this.client.collection.message_commands.size} message commands.`);
    }

    reload = () => {
        this.client.collection.message_commands.clear();
        this.client.collection.message_commands_aliases.clear();
        this.client.collection.application_commands.clear();
        this.client.rest_application_commands_array = [];

        this.load();
    }
    
    /**
     * @param {{ enabled: boolean, guildIds: string }} development
     * @param {Partial<import('discord.js').RESTOptions>} restOptions 
     */
    registerApplicationCommands = async (development, restOptions = null) => {
        const rest = new REST(restOptions ? restOptions : { version: '10' }).setToken(this.client.token);

        if (development.enabled) {
            development.guildIds.forEach(async element => {
                await rest.put(Routes.applicationGuildCommands(this.client.user.id, element), { body: this.client.rest_application_commands_array });
            })
        } else {
            await rest.put(Routes.applicationCommands(this.client.user.id), { body: this.client.rest_application_commands_array });
        }
    }
}

module.exports = CommandsHandler;