const { MessageEmbed, Message } = require('discord.js');

module.exports = class embedManager {

    embedPermissingMissing(member, type_command, user) {
        const embedPermissingMissing = new MessageEmbed()
            .setColor('AQUA')
            .setAuthor('Permission manquante', member.user.displayAvatarURL({dynamic: true}))
            .setDescription(`${member.user.tag} нет разрешения на эту команду : "${type_command}"`)
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

    embedHelp(member, type_command) {
        const embedHelp = new MessageEmbed()
            .setColor('DARK_GOLD')
            .setTitle('Le prefix du bot est : $')
            .setDescription('----------------Comande Staff---------------- \n - legal = permet de déplacer un ticket dans la catégorie légal. \n - staff = permet de déplacer un ticket dans la catégorie staff. \n - boutique = permet de déplacer un ticket dans la catégorie headstaff. \n - illegal = permet de déplacer un ticket dans la catégorie illégal. \n - autre = permet de déplacer un ticket dans la catégorie autre. \n - rename = permet de rename un ticket. \n - clear = permet de clear un nombre de message precie et infini \n - ban = permet de ban avec une raison precise un membre autre qu\'un staff. \n - kick = permet de kick avec une raison precise un membre autre qu\'un staff.')
            .setFooter("Bon jeu sur 70's RP")
        return embedHelp;
    }

    embedStaffTarget(member, target, type_command){
        const embedStaffTarget = new MessageEmbed()
            .setColor('DARK_AQUA')
            .setAuthor('Target Staff', member.guild.iconURL({dynamic: true}))
            .setDescription(`Vous ne pouvez pas bannir de staff ni en expulsé !!!`)
            .setFooter("Echec d'éxécution de la commande.")
        return embedStaffTarget;
    }

    embedUserSanction(member, target, type_command, reason) {
        const embedUserSanction = new MessageEmbed()
            .setColor('DARK_GREEN')
            .addField('Modérateur :', member.user.tag, true)
            .addField('Type de sanction :', type_command === 'ban' ? 'Ban' : type_command === 'kick' ? 'Kick' : 'none', true)
            .addField('Membre visé :', `${target.user.tag} (${target.user.id})`, true)
            .addField('Raison de la sanction :', reason)
            .setFooter('Logs des sanctions.', member.guild.iconURL({dynamic: true}))
        return embedUserSanction;
    }

    embedRules() {
        const embedRules = new MessageEmbed()
            .setColor('DARK_RED')
            .setTitle('Voici le réglement. Veillez le lire attentivement.')
            .setDescription("https://docs.google.com/document/d/16do2oOfmhcIhBnoyrLVwos8UyThJwut3S1s8xtjSGaU/edit?usp=sharing")
        return embedRules;
    }
}