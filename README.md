# Discord Bot Template

This is a template for a Discord bot using discord.js v14.15.3 and MySQL. Feel free to use and customize it for your own needs!

## Features

- 💬 Slash commands & message commands
- 🛡️ Moderation commands (ban, kick, mute)
- 🗄️ MySQL database integration

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
    DISCORD_TOKEN=YOUR_DISCORD_BOT_TOKEN
    
    DB_HOST=YOUR_DATABASE_HOST
    DB_USER=YOUR_DATABASE_USER
    DB_PASSWORD=YOUR_DATABASE_PASSWORD
    DB_NAME=YOUR_DATABASE_NAME
    ```

### Usage

To start the bot, run the following command:

```sh
node index.js
````