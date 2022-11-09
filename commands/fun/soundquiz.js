// eslint-disable-line no-unused-vars
// const FuzzySet = require("fuzzyset.js");
const { Command } = require('discord.js-commando');
const { RichEmbed } = require('discord.js');
const { get } = require("snekfetch");
const { MessageEmbed } = require("discord.js");
const Discord = require('discord.js');
const abilities = require("../../json/aliases.json");
const ytdl = require('ytdl-core');
const discordTTS=require("discord-tts");

module.exports = class SoundQuiz extends Command {
    constructor(client) {
        super(client, {
            name: 'vlq',
            group: 'fun',
            memberName: 'vlq',
            description: 'Guess that Dota Hero',
            examples: ['vlq'],
            args: [{
                key: 'channel',
                label: 'media',
                prompt: '',
                type: 'string',
                default:'',
                infinite: false
              }]


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
            // console.log(args)
            
            // const channel = message.guild.channels.cache.get(`${args}`);
            // channel.send('test')
            // //console.log(channel);
            // const connection = await channel.join()

         
        if (message.member.voice.channel) {
            const connection = await message.member.voice.channel.join()
             connection.play(ytdl(`https://www.youtube.com/watch?v=Kob0G2hE8IY`, { filter: 'audioonly' })).on('finish', reason =>{
              console.log('Finished')
              connection.disconnect();
            });
        } else {
            message.reply('You need to join a voice channel first or declare one!');
        }
    }


}

