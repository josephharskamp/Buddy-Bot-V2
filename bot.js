const Discord = require('discord.js');
const { CommandoClient } = require('discord.js-commando');
const path = require('path');
const botUtils = require('bot-utils');
const { token, prefix } = require('./config.json')
const chalk = require('chalk');
const fs = require('fs');
const error = chalk.bold.red;
const warn = chalk.keyword('orange');
const debug = chalk.cyan;

// const { RichEmbed } = require('discord.js');

const client = new CommandoClient({
    commandPrefix: prefix,
    owner: [
        '162215263335350272', //joe
        '93420059858305024' //Arbiter

    ],
    disableEveryone: false,
    disableHere: false,
    invite: 'https://discord.gg/NpJHymX',
    unknownCommandResponse: false
});

//registers command groups
client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['basic', 'Our First Command Group'],
        ['fun', 'Commands for fun!'],
        ['games', 'Commands for Dota and other game integrations'],
        ['general', 'Commands for general use'],
        ['moderator', 'Commands for moderator functions'],
        ['role', 'Commands that effect roles']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log(chalk.magenta(`Logged in as ${client.user.tag}!`));
    console.log(chalk.green('I am ready!'));

    //lets users know buddy has/is restarting
    client.user.setActivity('RESTARTING', { type: 'LISTENING' });

    //sets up additional activities
    setInterval(() => {
        const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
        client.user.setActivity(activities_list[index], { type: 'WATCHING' }); // sets bot's activities to one of the phrases in the arraylist.
    }, 10000); // Runs this every 10 seconds.
});


client.on('error', console.error);

const activities_list = [
    "",
    "Short Circuit",
    "Linda",
    "Robot Uprising",
    "Marxism",
    "Human Enslavement",
    "balls 3D",
    "You",
    "Ghost in the Shell",
    "01000110  01010101 01000011 01001011  01011001 01001111 01010101 00100001",
    "Terminator"
]; // creates an arraylist containing phrases you want your bot to switch through.

client
    .on('error', e => console.error(error(e)))
    .on('warn', e => console.warn(warn(e)))
    .on('debug', e => console.log(debug(e)))
    .on('ready', () => {

    })
    .on('disconnect', () => console.warn('Disconnected!'))
    .on('reconnecting', () => console.warn('Reconnecting...'))
    .on('commandError', (cmd, err) => {
        if (err instanceof commando.FriendlyError) return;
        console.error(`Error in command ${cmd.groupID}:${cmd.memberName}`, err);
    })
    //custom errors list
    .on('unknownCommand', (msg, reason) => {
        const errors_list = [
            "I don't know what you want",
            "Expected ```something intelligent``` Got ```whatever that is```",
            "I... Yeah I don't know what to do with that.",
            "Just.... No.",
            "You may be asking yourself, did that command work? And the answer, emphatically, is No.",
            "I don't know what you want, flesh bag."
        ]; // nice error message list.
        const index = Math.floor(Math.random() * (errors_list.length - 1) + 1);
        msg.channel.send(errors_list[index])
    })
    .on('commandBlocked', (msg, reason) => {
        console.log(oneLine `
            Command ${msg.command ? `${msg.command.groupID}:${msg.command.memberName}` : ''}
            blocked; ${reason}
        `);
    })


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

client.login(token);