const { MessageEmbed, Message } = require('discord.js');

module.exports = class embedManager {

    embedPermissingMissing(member, type_command, user) {
        const embedPermissingMissing = new MessageEmbed()
            .setColor('AQUA')
            .setAuthor('Permission manquante', member.user.displayAvatarURL({dynamic: true}))
            .setDescription(`${member.user.tag} n'a pas la permission pour cette commande ${type_command}`)
            .setFooter('Echec d\'éxécution de commande.', member.guild.iconURL({dynamic: true}))
        
        return embedPermissingMissing;
    }

    embedForOpenTicket(guild) {
        const embedForOpenTicket = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setTitle('Los Angeles RP')
            .setDescription("Si vous rencontré des problèmes, n'hesité pas à ouvrir un ticket.")
            .setThumbnail(guild.iconURL({dynamic: true}))
            .setFooter('Tout abus sera sanctionné.')
        return embedForOpenTicket;
    }

    embedTicketOpen(user) {
        const embedTicketOpen = new MessageEmbed()
            .setColor('AQUA')
            .setAuthor(`Bienvenue dans ton ticket ${user.tag}`, user.displayAvatarURL({dynamic: true}))
            .setDescription(`Vous Pouvez déjà expliquer la raison de votre ticket. L'équipe du staff vous prendra en charge au plus vite.`)
            .setFooter("Merci de patienter")
        
        return embedTicketOpen;
    }

    embedTargetMissing(member, type_command) {
        const embedTargetMissing = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setAuthor('Membre manquant', member.guild.iconURL({dynamic: true}))
            .setDescription(`Pour la commande ${type_command}, il faut mettre le membre à sanctionner.`)
            .setFooter("Echec d'éxécution de la commande.")
        return embedTargetMissing;
    }
}