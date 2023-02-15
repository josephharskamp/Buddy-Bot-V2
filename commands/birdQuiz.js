const { SlashCommandBuilder } = require('discord.js');
const { request } = require('undici');
const { FLICKR_API_KEY } = require('../config.json');
var Flickr = require('flickr-sdk');
const bird = require("../json/bird.json");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('birdquiz')
        .setDescription('Begins a quiz to test your bird ID skills, More specific answers get more points!'),
    async execute(interaction) {

    	await interaction.reply(`One sec`);
    	let birdFamilyList = bird.birds;
    	const numBird = birdFamilyList.length;
        console.log(`${numBird} total bird families`)

    	let generateRandomBird = Math.floor(Math.random() * numBird);
    	

    	//correct family answer
    	let birdFamilyName = birdFamilyList[generateRandomBird].family

    	let numMembers = birdFamilyList[generateRandomBird].members.length;

    	console.log(`${numMembers} total number of species in this family`)

    	console.log(`${birdFamilyName} correct answer family`)

    	//shows the family object
    	console.log(birdFamilyList[generateRandomBird])

    	//selects a random species from the family list, this is the right answer
    	let birdMemberName = birdFamilyList[generateRandomBird].members[Math.floor(Math.random() * numMembers)];

    	//species answer
    	console.log(`Species:${birdMemberName}`)

    	//accesses flickr API
        var flickr = new Flickr(FLICKR_API_KEY);

        //enter search terms
        flickr.photos.search({
		  text: `${birdMemberName}`
		}).then(function (res) {

		  console.log('yay!', res.body.photos.photo[Math.floor(Math.random() * 2)]);
		  let baseURL = `https://live.staticflickr.com`
		  let img =  res.body.photos.photo[3]
		  let secret = img.secret;
		  let serverID = img.server;
		  let photoID = img.id;

		  //Gets us the first photo from the provided search terms in a static image form.
		  let newURL = baseURL + '/' + serverID + '/' + photoID + '_' + secret + '_b.jpg';
		  interaction.channel.send('Guess the Bird, either Species or Family. Species is worth more points.')
		  interaction.editReply(`${newURL}`);

		   const filter = (m) => m.content.toLowerCase() === birdMemberName.toLowerCase() || m.content.toLowerCase() === birdFamilyName.toLowerCase();
	        const collector = interaction.channel.createMessageCollector({filter, max:1, time: 15000 });
	        var gotCorrectAnswer = false;
	        collector.on('collect', m => {
	            const winner = `${interaction.guild.id}-${interaction.user.id}`
	            gotCorrectAnswer = true;
	            console.log(`winner ${winner}`)
	            // console.log(`commander ${key}`)
	            interaction.channel.send(`***Winner!. ${birdMemberName} of the ${birdFamilyName} family, was correct. ***`);
	        });
	       	
	        //collector.on('collect', m => collector.stop('end'));
		
	        collector.on('end', m => {
	            if (!gotCorrectAnswer) { 

	                interaction.channel.send(`***The answer was ${birdMemberName} of the ${birdFamilyName} family!***`);
	            }
	        }); 

		}).catch(function (err) {
		  console.error('bonk', err);
		  interaction.editReply('err, something went wrong?')
		});

    },
};