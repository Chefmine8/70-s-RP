module.exports = {
    run: async (client, message, args) => {
        console.log(`help ${message.member.displayName}`)
        message.delete()
        message.channel.send({embeds: [client.embedManager.embedHelp(message.guild)]})
    },

    name: '$help',
    aliases: ['help'],
    description: "Help"
}