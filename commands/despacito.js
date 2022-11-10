const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('despacito')
        .setDescription('Replies with the Youtube video for the song despacito!'),
    async execute(interaction) {
        await interaction.reply('https://www.youtube.com/watch?v=kJQP7kiw5Fk!');
        // interaction.user is the object representing the User who ran the command
        // interaction.member is the GuildMember object, which represents the user in the specific guild
    },
};