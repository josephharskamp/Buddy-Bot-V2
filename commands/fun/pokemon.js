// eslint-disable-line no-unused-vars
// const FuzzySet = require("fuzzyset.js");
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const pokemon = require("../../json/pokemon.json");
const Enmap = require("enmap");

module.exports = class PokemenCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'pokemen',
            group: 'fun',
            memberName: 'pokemen',
            description: 'Guess that pokemon!, party edition!',
            examples: ['pokemon'],


        });
    }
    async run(message, args, level) {

        const key = `${message.guild.id}-${message.author.id}`;
        message.client.points.ensure(key, {
            user: message.author.id,
            guild: message.guild.id,
            points: 0,
            level: 1
        });

        const num_poke = pokemon.length;
        const poke = Math.floor(Math.random() * num_poke);
        const pokem = pokemon[poke];

        console.log(pokem);

        const embed = new Discord.MessageEmbed()
            .setTitle("You have 15 seconds to guess ! Who's that Pokémon !")
            .setAuthor(message.author.username, message.author.avatarURL)
            .setImage(pokem.imageURL)
            .setColor(6192321);
        const msg = await message.channel.send({ embed });
        msg.channel.startTyping();

        const filter = m => m.content.toLowerCase() === pokem.name.toLowerCase();

        const collector = await msg.channel.createMessageCollector(filter, { time: 15000 });
        var gotCorrectAnswer = false;

        collector.on('collect', m => {


            const key = `${message.guild.id}-${message.author.id}`;
            message.client.points.ensure(key, {
                user: message.author.id,
                guild: message.guild.id,
                points: 0,
                level: 1
            });
            const winner = `${message.guild.id}-${m.author.id}`
            gotCorrectAnswer = true;
            message.client.points.inc(winner, "points");
            message.client.points.math(winner, "+", 1, "points")

            console.log(`winner ${winner}`)
            console.log(`commander ${key}`)
            m.reply(`Winner. ${pokem.name} was correct. you currently have ${message.client.points.get(winner, "points")}`);
        });
        // collector.on('collect', m => ());
        collector.on('collect', m => collector.stop('end'));

        collector.on('end', m => {
            if (!gotCorrectAnswer) {

                message.channel.send(`The answer was ${pokem.name}!`);
            }

            msg.channel.stopTyping();
            // Get a filtered list (for this guild only), and convert to an array while we're at it.
            const filtered = message.client.points.filter(p => p.guild === message.guild.id).array();

            // Sort it to get the top results... well... at the top. Y'know.
            const sorted = filtered.sort((a, b) => b.points - a.points);

            // Slice it, dice it, get the top 10 of it!
            const top10 = sorted.splice(0, 10);

            // Now shake it and show it! (as a nice embed, too!)
            const embed = new Discord.MessageEmbed()
                .setTitle("Leaderboard")
                .setAuthor(message.client.user.username, message.guild.iconURL())
                .setDescription("Our top 10 points leaders!")
                .setColor(0x00AE86);
            for (const data of top10) {
                try {
                    embed.addField(message.client.users.cache.get(data.user).tag, `${data.points} points (level ${data.level})`);
                } catch {
                    embed.addField(`<@${data.user}>`, `${data.points} points (level ${data.level})`);
                }
            }
            return message.channel.send({ embed });
        });

    }

}