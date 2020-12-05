const { Command } = require('discord.js-commando');

const { get } = require("snekfetch");

module.exports = class DogCommand extends Command {
    constructor(client) {
        super(client, {
            name: "dog",
            group: 'fun',
            aliases: ['dawg', 'doggy', 'fren', 'goodboy', 'woof'],
            memberName: 'dog',
            description: 'Post a randomly selected image of a dog.',
            examples: ['dog'],


        });
    }

    async run(message, args, level, loadingMessage) {

        loadingMessage = ":keyboard: Buddy is meeting a new fren..."
        message.say(loadingMessage);
        const { body } = await get(args[0] ? `https://dog.ceo/api/breed/${args[0]}/images/random` : "https://dog.ceo/api/breeds/image/random");
        return message.say({
            embed: {
                "title": "Click here if the image failed to load.",
                "url": body.message,
                "color": 6192321,
                "image": {
                    "url": body.message
                }
            }
        });
    }
}