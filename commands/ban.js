const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        message.delete()
        if (!message.member.permissions.has("BAN_MEMBERS")) return message.channel.send({embeds: [client.embedManager.embedPermissingMissing(message.member, 'ban')]});
        
        const target = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!target || !message.guild.members.cache.get(target.user.id)) return message.channel.send({embeds: [client.embedManager.embedTargetMissing(message.member, 'ban')]});
    },
    name: '$ban',
    aliases: ['ban'],
    desciption: "Commande pour ban"
}