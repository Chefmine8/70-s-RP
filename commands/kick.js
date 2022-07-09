const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        message.delete()
        if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send({embeds: [client.embedManager.embedPermissingMissing(message.member, 'kick')]});
        
        const target = message.guild.members.cache.get(args[0]) || message.mentions.members.first();
        if (!target || !message.guild.members.cache.get(target.user.id)) return message.channel.send({embeds: [client.embedManager.embedTargetMissing(message.member, 'kick')]});

        if (target.permissions.has('KICK_MEMBERS')) return message.channel.send({embeds: [client.embedManager.embedStaffTarget(target, 'kick')]})

        let reason = args.splice(1).join(' ');
        if (!reason) reason = "Aucune raison donnée.";

        target.kick({reason: `[${message.author.tag}]: ${reason}`});
        return message.guild.channels.cache.get('990974090326208533').send({embeds: [client.embedManager.embedUserSanction(message.member, target, 'kick', reason)]});

    },
    name: '$kick',
    aliases: ['kick'],
    desciption: "Commande pour kick"
}