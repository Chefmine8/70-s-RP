const { MessageEmbed, Message } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        message.delete()
        console.log(`Createur de ticket créé par : ${message.member.displayName}`)
        if (!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send({embeds: [client.embedManager.embedPermissingMissing(message.guild)]});
        
        return message.channel.send({embeds: [client.embedManager.embedForOpenTicket(message.guild)], components: [client.componentManager.buttonForOpenTicket()]})
    },

    name: '$ticketcreateur',
    aliases: ['createur'],
    description: "Permet de créer le message de ticket."
}