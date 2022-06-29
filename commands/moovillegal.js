module.exports = {
    run: async (client, message, args) => {
        if (message.channel.name.startsWith('ticket)')) return;
        const guild = client.guilds.cache.get('989845864191258634');
        message.delete()
        if (!message.member.permissions.has('MOVE_MEMBERS')) return message.channel.send("You don't have the permission.");
        message.channel.setParent('989881647308619857', { lockPermissions: false })
        message.channel.permissionOverwrites.create(guild.roles.cache.get('989866298618023936'), {
            VIEW_CHANNEL: true
        });
        message.channel.send('Votre ticket à bien était deplacé dans la catégorie Illégal.')
        console.log(`Le ticket a été moov par: ${message.member.displayName}`)
    },

    name: '$illegal',
    aliases: ['illegal'],
    description: "Permet de deplacer dans la categorie Illégal."
}