const { success, error } = require("../../utils/Console")
const { readdirSync } = require('fs');

function loadEvents(client) {
    const eventFiles = readdirSync("./events").filter((file) => file.endsWith(".js"));

    for (const file of eventFiles) {
        const event = require(`../../events/${file}`);
        if(event.name && event.execute) {
            try {
                if (event.once) {
                    client.once(event.name, (...args) => event.execute(...args, client));
                } else {
                    client.on(
                        event.name,
                        async (...args) => await event.execute(...args, client)
                    );
                }
                success("Loaded " + event.name + " event");
            } catch (err) {
                console.log(err)
                error("Error loading event " + event.name)
            }
        } else {
            error("Error loading event " + event.name)
        }
    }
}

module.exports = { loadEvents }