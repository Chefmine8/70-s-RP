const { Permissions, Message } = require('discord.js');
module.exports = {
    run: async(client, interaction) => {
        const ButtonsID = ['staff', 'closeticket', 'boutique', 'legal', 'illegal', 'autre', 'claim'];
        const guild = client.guilds.cache.get('989845864191258634');
        if (interaction.customId === 'staff') {
            console.log(`ticket staff ouvert par: ${interaction.member.displayName}`)
            const channel = await guild.channels.create(`ticket-${interaction.user.username}`, {
                type: 'text', 
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guild.roles.everyone.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guild.roles.cache.get('989863254237003886'),
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                ],
                parent: guild.channels.cache.get('989882255591735376')
            });
            
            channel.send({embeds: [client.embedManager.embedTicketOpen(interaction.user, guild)], components: [client.componentManager.buttonForActionTicket()]});
            const msg = await interaction.reply(
                {
                content: `${interaction.member} votre ticket est ouvert`,
                fetchReply: true
                }
            )
            setTimeout(() => {
                msg.delete()
            }, 5000)
        }
        if (interaction.customId === 'closeticket') {
            if (interaction.channel.name.startsWith('ticket)')) return;
            return interaction.channel.delete(), console.log(`ticket fermé par: ${interaction.member.displayName}`);
        }

        //ticket boutique
        if (interaction.customId === 'boutique') {
            console.log(`ticket boutique ouvert par: ${interaction.member.displayName}`)
            const channel = await guild.channels.create(`ticket-${interaction.user.username}`, {
                type: 'text', 
                permissionOverwrites: [
                    {
                        id: interaction.user.id,
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guild.roles.everyone.id,
                        deny: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                    {
                        id: guild.roles.cache.get('989862526449758278'),
                        allow: [Permissions.FLAGS.VIEW_CHANNEL]
                    },
                ],
                parent: guild.channels.cache.get('989882187719540766')
            });
            
            channel.send({embeds: [client.embedManager.embedTicketOpen(interaction.user, guild)], components: [client.componentManager.buttonForActionTicket()]});
            const msg = await interaction.reply(
                {
                content: `${interaction.member} votre ticket est ouvert`,
                fetchReply: true
                }
            )
            setTimeout(() => {
                msg.delete()
            }, 5000)
        }

        //claim ticket
        if (interaction.customId === 'claim') {
            interaction.channel.permissionOverwrites.create(interaction.user.id, {
                VIEW_CHANNEL: true
            });

            interaction.channel.permissionOverwrites.create(guild.roles.cache.get('989863254237003886'), {
                VIEW_CHANNEL: false
            });

            const msg = await interaction.reply(
                {
                content: `${interaction.member} a pris en charge votre ticket`,
                fetchReply: true
                }
            )
            console.log(`Ticket Claim par ${interaction.member.displayName}`)
        }
    },
    name: 'interactionCreate'
}