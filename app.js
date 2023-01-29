import { Client, GatewayIntentBits } from 'discord.js';
import { commands, refreshCommands, matchCommand } from './commands.js'
import * as dotenv from 'dotenv'
dotenv.config()

const startBot = () => {
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });

  refreshCommands();

  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!\n`)
  })

  client.on('interactionCreate', async interaction => {
    matchCommand(interaction);
  });

  client.login(process.env.DISCORD_TOKEN)
}

startBot();
