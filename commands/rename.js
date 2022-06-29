const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        message.delete()

        let raison = args.join('');
        if (!raison) return console.log("Pas de raison.");
        const string3 = `${raison}`;
        message.channel.setName(string3);
        console.log(`Ticket rename en: ${raison} par : ${message.member.displayName}`)
    },
    name: '$rename',
    aliases: ['rename'],
    desciption: "rename"
}