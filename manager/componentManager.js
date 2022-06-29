const { MessageActionRow, MessageButton, MessageSelectMenu, Message, ButtonInteraction } = require('discord.js');

module.exports = class componentManager {
    buttonForOpenTicket() {
        const buttonForOpenTicket = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('staff')
                    .setLabel('Staff')
                    .setStyle('DANGER'),
                
                new MessageButton()
                    .setCustomId('boutique')
                    .setLabel('Boutique')
                    .setStyle('SUCCESS'),
            );
        return buttonForOpenTicket;

    }

    buttonForActionTicket() {
        const buttonForActionTicket = new MessageActionRow()
            .addComponents(
                new MessageButton()
                    .setCustomId('claim')
                    .setLabel('Claim')
                    .setStyle('SUCCESS'),

                
                new MessageButton()
                    .setCustomId('closeticket')
                    .setLabel('Close')
                    .setStyle('DANGER'),
            );
        return buttonForActionTicket;
    }
}