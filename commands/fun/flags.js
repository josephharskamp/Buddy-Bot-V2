// eslint-disable-line no-unused-vars
// const FuzzySet = require("fuzzyset.js");
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const flag = require("../../json/countries.json");
const Enmap = require("enmap");

module.exports = class FlagCommand extends Command {
    constructor(client) {
        super(client, {
            name: 'flag',
            group: 'fun',
            memberName: 'flag',
            description: 'Guess that flag!, party edition!',
            examples: ['flag'],


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

        const num_poke = flag.length;
        const poke = Math.floor(Math.random() * num_poke);
        const pokem = flag[poke];

        console.log(pokem);

        const embed = new Discord.MessageEmbed()
            .setTitle("You have 20 seconds to guess ! Who's that COUNTRY !")
            .setAuthor(message.author.username, message.author.avatarURL)
            .addFields({ name: 'Hint One', value: `Capital: ||${pokem.Capital.Name}||`, inline: true }, { name: 'Hint Two', value: `Country Code:||${pokem.CountryCodes.tld}||`, inline: true })
            .setImage(`http://www.geognos.com/api/en/countries/flag/${pokem.CountryCodes.iso2}.png`)
            .setColor(6192321);
        const msg = await message.channel.send({ embed });
        msg.channel.startTyping();

        const filter = m => m.content.toLowerCase() === pokem.Name.toLowerCase();
        let hint;
        const collector = await msg.channel.createMessageCollector(filter, { time: 20000 });
        const countdown = setTimeout(
            () => {
                message.channel.send('Ten Seconds')
            },
            10 * 1000
        );

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
            clearTimeout(countdown);

            console.log(`winner ${winner}`)
            console.log(`commander ${key}`)
            m.reply(`Winner. **${pokem.Name}** was correct. you currently have **${message.client.points.get(winner, "points")}** points. If you want more information on this country you can visit ${pokem.CountryInfo}`);
        });

        collector.on('collect', m => collector.stop('end'));

        collector.on('end', m => {
            if (!gotCorrectAnswer) {

                message.channel.send(`The answer was **${pokem.Name}**! If you want more information on this country you can visit ${pokem.CountryInfo}`);
            }

            msg.channel.stopTyping();

        });

    }

}