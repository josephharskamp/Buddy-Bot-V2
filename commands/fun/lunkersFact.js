const { Command } = require('discord.js-commando');

module.exports = class LunkersFactCommand extends Command {
    constructor(client) {
        super(client, {
            name: "lunkersfact",
            group: 'fun',
            memberName: 'lunkersfact',
            description: 'get a good lunkers fact',
            details: 'Are you missing some lunkers in your life? Get a fresh lunkers fact on demand to spice up your life!',
            examples:['lunkersFact']
        });
    }

    
    run(message) {
        let factsArr = [
            'Did you know that Lunkers once won a prize for eating a popsicle very fast? He didn\'t even cheat! The prize was a box of popsicles.',
            'Lunkers is physically incapable of partaking in frisbee-related activites without getting hit in the face at least once. The frisbee god hates him.',
            'Lunkers and his siblings own two rabbits; one is called spot, and the other is called molly. They\'re both fat pieces of shit (but also very cute).',
            'Lunkers did work experience at IKEA in elementary school. He learned how to weld.',
            'Lunkers once TA:d a course in probability theory. It\'s his second favorite subject, after video technology.',
            'Back in the day, Lunkers used to play in amateur dota 2 tournaments, since he had no real life friends to spend time with. This mean that he had to play at 4am local time. He was only allowed to play disruptor.',
            'Did you know that Ferrari is Lunkers\'s favorite F1 team?',
            'Lunkers once got published in the official LEGO club magazine. He was 11 years old, and wrote an article on an exhibition at the tekniska museet in stockholm. It\'s all been downhill from there.',
            'Growing up, Lunkers\'s would be woken up by his father shooting him in his face with a nerf gun',
            'Lunkers used to play football (soccer). He played goalkeeper, and could not save a shot with any body part other than his face.',
            'There\'s a 50/50 chance that Lunkers is stressing out over his thesis right now!',
            'Being swedish, Lunkers has eaten many meatballs in his life. He prefers his gradfather\'s recipe.',
            'Lunkers has only used tinder for one date, during which he got threatened with a knife, helped create a 2 meter pillar of fire, and was repeatedly asked about the existence of his foreskin.',
            'Lunker\'s favorite cocktail is Gin and Tonic. We know, he\'s super basic.',
            'On his 9th birthday, Lunkers was taken to an ADHD evaluation by parents. He still hasn\'t really forgiven them',
            'In his spare time, Lunkers likes to either exercise, or stuff his face with potato chips like the fat fuck he is.',
            'Lunkers grew a beard in order to hide his weak jawline. '
    
        ]
        let fact = factsArr[Math.floor(Math.random() * factsArr.length)]
        message.say(fact);
    }
}

