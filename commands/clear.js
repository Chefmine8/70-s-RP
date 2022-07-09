const { MessageType } = require('discord-api-types/v10');
const { MessageEmbed } = require('discord.js');

module.exports = {
    run: async (client, message, args) => {
        message.delete();
        
        if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send({embeds: [client.embedManager.embedPermissingMissing(message.member, 'clear')]});

        amount = args[0];
        if (!amount || amount < 1 || amount > 100) return console.log("Нет действительного номера"), message.channel.send('Нет действительного номера');
        message.channel.messages.fetch({ limit: amount }).then(messages => {
            message.channel.bulkDelete(messages);

            if (amount === '1') message.channel.send(`${amount} message a été supprimé !`)
            else message.channel.send(`${amount} message ont été supprimé !`)
            
            setTimeout(() => {
                message.channel.bulkDelete('1');
            }, 2000)

            console.log(`${message.member.displayName} a supprimé ${amount} message`)
        })
    },
    name: '$clear',
    aliases: ['clear'],
    desciption: "clear"
}