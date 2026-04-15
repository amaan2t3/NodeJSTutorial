import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from "dotenv";
dotenv.config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent]
});

client.on("messageCreate", (message) => {
    // Ignore messages from bots (including this bot)
    if (message.author.bot) return;
    // Ignore messages where the bot is not mentioned or start with a command
    if (!message.guild) return;
    
    if (message.content.startsWith("create")) {
        const url = message.content.split("create")[1];
        return message.reply({
            content: "Generting Short ID For " + url
        });
    }
    
    return message.reply({
        content: "hey there you said " + message.content
    });
});

client.on("interactionCreate", (interaction) => {
    console.log(interaction);
    interaction.reply("hey there you said " + interaction.content);

})

client.login(process.env.DISCORD_TOKEN)

