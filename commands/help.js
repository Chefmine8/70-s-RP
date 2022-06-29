module.exports = {
    run: async (client, message, args) => {
        console.log(`help ${message.member.displayName}`)
        message.delete()
        message.channel.send('Le prefix du bot est : $ \n \n ----------------Comande Staff---------------- \n - legal = permet de déplacer un ticket dans la catégorie légal. \n - staff = permet de déplacer un ticket dans la catégorie staff. \n - boutique = permet de déplacer un ticket dans la catégorie headstaff. \n - illegal = permet de déplacer un ticket dans la catégorie illégal. \n - autre = permet de déplacer un ticket dans la catégorie autre. \n - rename = permet de rename un ticket.')
    },

    name: '$help',
    aliases: ['help'],
    description: "Help"
}