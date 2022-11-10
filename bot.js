
// const botUtils = import('bot-utils');
// 

// const error = chalk.bold.red;
// const debug = chalk.cyan;
const Enmap = require("enmap");

// Require the necessary discord.js classes
const fs = require('node:fs');
const path = require('node:path');
const { Client, Events, Collection, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json');
const client = new Client({ 
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
 });
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));



for (const file of eventFiles) {
    const filePath = path.join(eventsPath, file);
    const event = require(filePath);
    if (event.once) {
        client.once(event.name, (...args) => event.execute(...args));
    } else {
        client.on(event.name, (...args) => event.execute(...args));
    }
} 

client.commands = new Collection();

for (const file of commandFiles) {
    const filePath = path.join(commandsPath, file);
    const command = require(filePath);
    // Set a new item in the Collection with the key as the command name and the value as the exported module
    if ('data' in command && 'execute' in command) {
        client.commands.set(command.data.name, command);
    } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
    }
}

client.login(token);













//super cool Reactions!
function timer(callback, delay) {
    var id, started, remaining = delay,
        running

    this.start = function() {
        running = true
        started = new Date()
        id = setTimeout(callback, remaining)
    }

    this.pause = function() {
        running = false
        clearTimeout(id)
        remaining -= new Date() - started
    }

    this.getTimeLeft = function() {
        if (running) {
            this.pause()
            this.start()
        }

        return remaining
    }

    this.getStateRunning = function() {
        return running
    }

    this.start()
}

//used to determine cooldown of stars
const starredRecently = [];
client.on('messageReactionAdd', async (reaction, user) => {
    let message = reaction.message;
    // let score = { id: `${message.guild.id}-${message.author.id}`, user: message.author.id, guild: message.guild.id, points: 0, level: 1 };
    // var curLevel=score.level

    //karma
    // if (reaction.emoji.name === '⬆') {
    //   console.log(chalk.blue(`ups!`));
    //   
    // }
    //end of add karma

    //remove karma
    // if (reaction.emoji.name === '⬇') {
    //   if (message.author.id === user.id) {
    //     reaction.remove(user).then(reaction => {
    //       console.log('Removed a reaction.');
    //     });
    //   }
    //   if (message.author.id === user.id) return message.channel.send({embed: {
    //     color: 0x8a2be2,
    //     description:`${user}, knock it off.`
    //   }})
    // .then(msg => {
    //   msg.delete(3000)
    //   })
    // .catch();
    //   console.log(chalk.blue(`Found an downs`));
    //   
    // }
    //end of remove karma

    //STAR TIME

    if (reaction.emoji.name === '⭐') {
        userid = user.id;
        //start of star cooldown

        console.log(chalk.red(starredRecently))

        //console.log(chalk.cyan(starredRecently[0]));            
        this.client = client;
        console.log(chalk.yellow(`Found a Star!`));
        const message = reaction.message;
        //checks if you're staring your own messages.
        // if (message.author.id === user.id) return message.channel.send({embed: {
        //   color: 0x8a2be2,
        //   description:`${user}, hey, stop that`
        //   }})
        // .then(msg => {
        //   console.log(chalk.cyan('removed'));
        //   msg.delete(3000)
        // })
        // .catch(error);
        const starChannel = message.guild.channels.cache.find(channel => channel.name == 'star-channel')


        console.log(chalk.yellow('searching if a message like this is already there'));
        const fetch = await starChannel.messages.fetch({ limit: 100 });
        console.log('point')

        const stars = fetch.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(message.id));
        if (stars) {
            // Regex to check how many stars the embed has.
            const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
            // A variable that allows us to use the color of the pre-existing embed.
            const foundStar = stars.embeds[0];
            // We use the this.extension function to see if there is anything attached to the message.
            const image = message.attachments.size > 0 ? message.attachments.array()[0].url : '';

            const embed = new Discord.MessageEmbed()
                .setColor(foundStar.color)
                .setDescription(foundStar.description)
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .setTimestamp()
                .setFooter(`⭐ ${parseInt(star[1])+1} | ${message.id}`)
                .setImage(image);
            // We fetch the ID of the message already on the starboard.
            const starMsg = await starChannel.fetchMessage(stars.id);
            // And now we edit the message with the new embed!
            await starMsg.edit({ embed });
        }
        // Now we use an if statement for if a message isn't found in the starboard for the message.
        if (!stars) {
            console.log('A new Star message!');
            const image = message.attachments.size > 0 ? message.attachments.array()[0].url : '';
            // If the message is empty, we don't allow the user to star the message.
            if (image === '' && message.cleanContent.length < 1) return message.channel.send(`${user}, you cannot star an empty message.`);
            //star alert!
            message.author.send('you had a post starred!');

            // gives user 100 buddybucks

            const embed = new Discord.MessageEmbed()
                // We set the color to a nice yellow here.

                .setURL(`${message.url}`)
                .setColor(15844367)
                .setDescription(message.cleanContent)
                .setAuthor(message.author.tag, message.author.displayAvatarURL)
                .addField(`link to message:`, `${message.url}`)
                .setTimestamp(new Date())
                .setFooter(`⭐ 1 | ${message.id}`)
                .setImage(image);
            await starChannel.send({ embed });
            console.log(message.url)
        }
    }

});
//reaction removed
client.on('messageReactionRemove', async (reaction, user) => {

    this.client = client;
    //if (message.author.id === user.id) return;
    //ignores if the reaction isn't a star
    if (reaction.emoji.name !== '⭐') return;
    //finds and names the starboard channel

        const starChannel = message.guild.channels.cache.find(channel => channel.name == 'star-channel')
        const fetch = await starChannel.messages.fetch({ limit: 100 });
    //searches message
    const stars = fetch.find(m => m.embeds[0].footer.text.startsWith('⭐') && m.embeds[0].footer.text.endsWith(reaction.message.id));
    if (stars) {
        const star = /^\⭐\s([0-9]{1,3})\s\|\s([0-9]{17,20})/.exec(stars.embeds[0].footer.text);
        const foundStar = stars.embeds[0];
        const image = message.attachments.size > 0 ? await this.extension(reaction, message.attachments.array()[0].url) : '';
        score = client.getScore.get(message.author.id, message.guild.id);
        //user removes a star

        //end of score keeping
        const embed = new Discord.MessageEmbed()
            .setColor(foundStar.color)
            .setDescription(foundStar.description)
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setTimestamp()
            .setFooter(`⭐ ${parseInt(star[1])-1} | ${message.id}`)
            .setImage(image);
        const starMsg = await starChannel.fetchMessage(stars.id);
        await starMsg.edit({ embed });
        console.log(chalk.red('removed a star'));
        if (parseInt(star[1]) - 1 == 0) return starMsg.delete(1000);
        console.log(chalk.red('removed a post'));
    }
});

function GuildName(guild) {
    return "Guild" + guild.replace(/[^a-zA-Z ]/g, "");
}





