module.exports = {
    run: async (client, message, args) => {
        if (message.channel.name.startsWith('ticket)')) return;
        const guild = client.guilds.cache.get('989845864191258634');
        message.delete()
        if (!message.member.permissions.has('MOVE_MEMBERS')) return message.channel.send("You don't have the permission.");
        message.channel.setParent('989882255591735376', { lockPermissions: false })
        message.channel.send('Votre ticket à bien était deplacé dans la catégorie staff.')
        console.log(`Le ticket a été moov par: ${message.member.displayName}`)
    },

    name: '$staff',
    aliases: ['staff'],
    description: "Permet de deplacer dans la categorie staff."
}