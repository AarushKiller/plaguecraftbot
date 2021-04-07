module.exports = {
	name: 'suggestions',
    aliases: ['suggest', 'suggestion'],
    permission: [],
	description: "Suggestions from people",
    async execute(messages, args, cmd, client, discord) {
        const channel = message.guild.channel.cache.find(c =>c.name === 'suggestions');
        if(!channel) return message.channel.send('A channel witht he name suggestions does not exist!');

        let messageArgs = args.join(' ');
        const embed = new discord.MessageEmbed()
        .setColor('E82517')
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(messageArgs);

        channel.send(embed).then((msg) =>{
            msg.react('👍');
            msg.react('👎');
            message.delete();
        }).catch((err)=>{
            throw err;
        });
    }
}