const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const flag = require("../../json/countries.json");
const Enmap = require("enmap");

module.exports = class LeaderboardCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'leaderboard',
            aliases:['leaderboard','board','leader'],
            group: 'fun',
            memberName: 'leaderboard',
            description: 'The leaderboard for trivia points.',
            examples: ['tell me a leaderboard']
        });
    }
    run(message) {
        console.log("leaderboard");
         // Get a filtered list (for this guild only), and convert to an array while we're at it.
            const filtered = message.client.points.filter(p => p.guild === message.guild.id).array();

            // Sort it to get the top results... well... at the top. Y'know.
            const sorted = filtered.sort((a, b) => b.points - a.points);

            // Slice it, dice it, get the top 10 of it!
            const top10 = sorted.splice(0, 20);

            // Now shake it and show it! (as a nice embed, too!)
            const embed = new Discord.MessageEmbed()
                .setTitle("Leaderboard")
                .setAuthor(message.client.user.username, message.guild.iconURL())
                .setDescription("Our top 20 Trivia points leaders!")
                .setColor(0x00AE86);
            for (const data of top10) {
                try {
                    embed.addField(users.cache.get(data.user).tag, `${data.points} Trivia points (level ${data.level})`);
                } catch {
                    embed.addField(`<@${data.user}>`, `${data.points} Trivia points (level ${data.level})`);
                }
            }
            return message.channel.send({ embed });
    }
};