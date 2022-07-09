const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        message.delete()
        message.channel.send({embeds: [client.embedManager.embedRules()], components: [client.componentManager.buttonForRules()]})
    },
    name: '$rules',
    aliases: [''],
    desciption: ""
}