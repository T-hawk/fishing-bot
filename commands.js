import { REST, Routes } from 'discord.js';
import * as dotenv from 'dotenv'
import { writeStory } from './story.js'
import { randomRank } from './ranks.js'
dotenv.config()

const commands = [
  {
    name: 'fishing',
    description: 'What is fishing bot?'
  },
  {
    name: 'reel',
    description: 'Reels in the rod'
  },
  {
    name: 'rank',
    description: 'Shows current rank of user'
  },
  {
    name: 'depth',
    description: 'Shows current depth of sinker'
  }
];

const refreshCommands = async () => {
    try {
      console.log('Started refreshing application (/) commands.');

      const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

      await rest.put(Routes.applicationCommands(process.env.CLIENT_ID, process.env.GUILD_ID), { body: commands });

      console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
      console.error(error);
    }
}

const fishing =
`\`\`\`   O         
   ├─╦○──┬   
   └┐    │   
▀▀█▀└    │   
  █      │   
≡≡█≡≡≡≡≡≡≡≡≡≡
  █      ╘   \`\`\``

const matchCommand = async (interaction) => {
  if (!interaction.isCommand()) return;

  switch (interaction.commandName) {
    case 'fishing':
      await interaction.reply('Fishing bot is a game of patience. The longer everyone waits, the better the fish.\nUse `/reel` to reel in. Use `/depth` to see the current depth.\nUse `/rank` to view your current rank. Who knows what crazy creatures lie in the deep...\n' + fishing);
      break;
    case 'reel':
      await interaction.reply(writeStory(interaction.user.username, randomRank()));
      break;
    case 'rank':
      await interaction.reply('Your rank is minow');
      break;
    case 'depth':
      await interaction.reply('Current depth is 70 meters');
      break;
    default:
      break;
  }
}

export { commands, refreshCommands, matchCommand }
