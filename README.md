# Discord Bot Template

This is a template for a Discord bot using discord.js v14.15.3 and MySQL. Feel free to use and customize it for your own needs!

## Features

- 💬 Slash & message commands: Supports both slash commands and traditional message commands.
- 🔄 Simple event management: Easy setup and handling of Discord events.
- 🛠️ Interactive components: Manage buttons, select menus, context menus, modals, and autocomplete effortlessly.
- 🗨️ Message reactions & mentions: React to messages and handle bot mentions seamlessly.
- 🌐 Multilingual support: Users can select their preferred language for bot responses.
- 📜 Auto generated help
- 🗄️ MySQL integration: Connects with MySQL databases for data storage and management.
- 🎨 Easy embed creation: Create and customize rich embed messages with ease.
- 🌐 Webhook management: Register, handle, and send webhooks with simplicity.

## Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v16 or higher
- [npm](https://www.npmjs.com/) (comes with Node.js)
- A Discord account and a server to add the bot to
- A MySQL server

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/Liammmmmmmm/discord-js-template-v14.git
    cd discord-js-template-v14
    ```

2. Install the required dependencies:

    ```sh
    npm install
    ```

### Configuration

1. Copy the `.env.example` file to `.env`:

    ```sh
    cp .env.example .env
    ```

2. Open the `.env` file with your preferred text editor and fill in the required fields:

    ```env
    DISCORD_TOKEN = YOUR_DISCORD_BOT_TOKEN
    
    DB_HOST = YOUR_DATABASE_HOST
    DB_USER = YOUR_DATABASE_USER
    DB_PASSWORD = YOUR_DATABASE_PASSWORD
    DB_NAME = YOUR_DATABASE_NAME
    ```

### Usage

To start the bot, run the following command:

```sh
node index.js
```

## Exemples

### Defaults commands and structure
```
commands/
├─ new_folder/
│  ├─ changeLang.js
│  └─ listlangs.js
├─ utils/
│  ├─ help.js
│  ├─ ping.js
│  ├─ sendwebhook.js
│  └─ setPrefix.js
└─ othercommandfolder/
   ├─ yourcommand.js
   └─ yoursecondcommand.js
```

The folders are category for your commands (detailed in the auto generated help section) and each one contain files with you commands 

#### 📜 Auto generated help
By default, the help command is auto generated. Folders are category described in the lang file, and take the description of each command. You can change the display of the commands in each lang file, default is :

__CATEGORY_NAME__: CATEGORY_DESCRIPTION
- **COMMAND_NAME**: COMMAND_DESCRIPTION

When the help command is used with an arg (witch is a command or alias name), it show the advanced description of the command (writen in each language file). Aliases list is also given.

You can choose to not display a command in the help by 

### 💬 Slash & message commands

Supports both slash commands and traditional message commands in the same file.



### 🔄 Simple event management: Easy setup and handling of Discord events.
### 🛠️ Interactive components: Manage buttons, select menus, context menus, modals, and autocomplete effortlessly.
### 🗨️ Message reactions & mentions: React to messages and handle bot mentions seamlessly.
### 🌐 Multilingual support: Users can select their preferred language for bot responses.
### 🗄️ MySQL integration: Connects with MySQL databases for data storage and management.
### 🎨 Easy embed creation: Create and customize rich embed messages with ease.
### 🌐 Webhook management: Register, handle, and send webhooks with simplicity.

### Inspirations

Structure and commands registration inspired by - [TFAGaming DiscordJS-V14-Bot-Template](https://github.com/TFAGaming/DiscordJS-V14-Bot-Template/tree/main)