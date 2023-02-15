const { SlashCommandBuilder } = require('discord.js');
const { EmbedBuilder } = require('discord.js');
const pokemon = require("../json/pokemon.json");
const Enmap = require("enmap");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pokemon')
		.setDescription('starts the pokemon quiz!'),
	async execute(interaction) {
		const key = `${interaction.guild.id}-${interaction.user.id}`;
        const num_poke = pokemon.length;
        const poke = Math.floor(Math.random() * num_poke);
        const pokem = pokemon[poke];

        console.log(pokem);

        const embed = new EmbedBuilder()
            .setTitle("You have 15 seconds to guess ! Who's that Pokémon !")
            .setAuthor({ name: `${interaction.user.userName}`})
            .setImage(pokem.imageURL)
            .setColor(6192321);

  		
		
		interaction.reply({ embeds:[embed] });
		
        const filter = (m) => m.content.toLowerCase() === pokem.name.toLowerCase();
        const collector = interaction.channel.createMessageCollector({filter, max:1, time: 15000 });
        var gotCorrectAnswer = false;
        collector.on('collect', m => {
            const winner = `${interaction.guild.id}-${interaction.user.id}`
            gotCorrectAnswer = true;
            console.log(`winner ${winner}`)
            // console.log(`commander ${key}`)
            interaction.channel.send(`***Winner!. ${pokem.name} was correct.***`);
        });
       	
        //collector.on('collect', m => collector.stop('end'));
	
        collector.on('end', m => {
            if (!gotCorrectAnswer) {

                interaction.channel.send(`***The answer was ${pokem.name}!***`);
            }
        });           
  
	},
};