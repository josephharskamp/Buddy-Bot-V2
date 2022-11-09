// eslint-disable-line no-unused-vars
// const FuzzySet = require("fuzzyset.js");
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const pokemon = require("../../json/pokemon.json");
const ytdl = require('ytdl-core');

module.exports = class VoiceLineQuiz extends Command {
    constructor(client) {
        super(client, {
            name: 'vine',
            group: 'fun',
            memberName: 'vine',
            description: 'Quess that Dota Hero',
            examples: ['vine'],


        });
    }
    async run(message, args) {
       
        // const num_poke = pokemon.length;
        // const poke = Math.floor(Math.random() * num_poke);
        // const pokem = pokemon[poke];

        // console.log(pokem);

        // const embed =  new Discord.MessageEmbed()
        //   .setTitle("You have 15 seconds to guess ! Who's that Pokémon !")
        //   .setAuthor(message.author.username, message.author.avatarURL)
        //   .setImage(pokem.imageURL)
        //   .setColor(6192321);
        //   const msg = await message.channel.send({ embed });
        //   msg.channel.startTyping();
        //   const filter = m => m.content === pokem.name.toLowerCase();
        //   const collector =await msg.channel.createMessageCollector(filter, { time: 15000 });
        //   var gotCorrectAnswer = false;

        //   collector.on('collect', m => {
        //     gotCorrectAnswer = true;
        //     m.reply(`Winner. ${pokem.name} was correct.`);
        //   });
        //   collector.on('collect', m => collector.stop('end'));

        //   collector.on('end', m => {
        //     if( !gotCorrectAnswer ) {
        //       message.channel.send(`The answer was ${pokem.name}!`);
        //     }
        //     msg.channel.stopTyping();
        //   });

        if (!message.guild) return;
        // Only try to join the sender's voice channel if they are in one themselves
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join();

            let vineString ="https://www.youtube.com/watch?v=oOrWDt1o1gk, https://www.youtube.com/watch?v=FZUcpVmEHuk, https://www.youtube.com/watch?v=8y7EBA5GMJk, https://www.youtube.com/watch?v=abqDZdkK6uk, https://www.youtube.com/watch?v=oQzQDSZa6Lw, https://www.youtube.com/watch?v=qAj6SkMlaCQ, https://www.youtube.com/watch?v=IzTlPjgJfTk, https://www.youtube.com/watch?v=fUDekRHZD3U, https://www.youtube.com/watch?v=edfh1sEJuSQ, https://www.youtube.com/watch?v=_Z-Nu351j58, https://www.youtube.com/watch?v=1xmXJfuZoWc, https://www.youtube.com/watch?v=pNo9XlKlTKc, https://www.youtube.com/watch?v=RGSv5Of6EBQ, https://www.youtube.com/watch?v=FUNe9aP0v5A, https://www.youtube.com/watch?v=iIMY7wdx2zU, https://www.youtube.com/watch?v=3kXjNWoXCQ4, https://www.youtube.com/watch?v=ATNolrWTYuU, https://www.youtube.com/watch?v=xO4LaAHJqxw, https://www.youtube.com/watch?v=GG6H-Btfuww, https://www.youtube.com/watch?v=H2SzEYKbxSg, https://www.youtube.com/watch?v=1_FG3jvNr4I, https://www.youtube.com/watch?v=2AaVzo6Xwvo, https://www.youtube.com/watch?v=EwAajOtfNT8, https://www.youtube.com/watch?v=hRFUZBXOWZI, https://www.youtube.com/watch?v=kMIe3unOxOY,https://www.youtube.com/watch?v=fxqfGpxET38, https://www.youtube.com/watch?v=GG6H-Btfuww"
            let vineList = vineString.split(', ');
            vineList = vineList[Math.floor(Math.random() * vineList.length)];
            message.reply(`${vineList}`);
            connection.play(ytdl(`${vineList}`, { filter: 'audioonly' })).on('finish', reason =>{
              console.log('Finished')
              connection.disconnect();
            });

        } else {
            message.reply('You need to join a voice channel first!');
        }
    }


}