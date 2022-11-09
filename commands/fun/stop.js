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
            name: 'stop',
            group: 'fun',
            memberName: 'stop',
            description: 'stops the current sound playback and makes buddy disconnect',
            examples: ['stop']
        
        });
    }
    async run(message) {
       
        if (message.member.voice.channel) {
           
            const connection = await message.member.voice.channel.join()
         connection.disconnect();
        } else {
            message.reply('You need to join a voice channel first or declare one!');
        }
    }


}

