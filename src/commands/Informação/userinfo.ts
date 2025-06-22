import {ChatInputCommandInteraction, SlashCommandBuilder, EmbedBuilder, GuildMember, MessageFlags} from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName("userinfo")
        .setDescription("[INFO] Mostra informações sobre um usuário")
        .addUserOption(option => option.setName('usuario').setDescription('O usuário que deseja obter informações')),
    async execute(interaction: ChatInputCommandInteraction) {
        const target = interaction.options.getUser('usuario') || interaction.user;

        // Garante que o guild não é null
        if(!interaction.guild) {
            return interaction.reply({
                content: "Esse comando só pode ser usado dentro de um servidor",
                flags: MessageFlags.Ephemeral
            })
        };

        // Busca membro dentro do servidor!
        const member : GuildMember = await interaction.guild.members.fetch(target.id);

        // Embed de informações do usuário
        const embedUser = new EmbedBuilder()
            .setTitle('Informção do Usuário')
            .setDescription(`**Nickname:** ${member.displayName}`)
            .setThumbnail(target.displayAvatarURL())
            .addFields([
                {name: '🆔 Discord ID', value: `\`${target.id}\``, inline: true},
                {name: '💠 Discord Tag', value: `\`target.tag\``, inline: true},
                {name: '📅 Criação da Conta', value: `\`<t:${Math.floor(target.createdTimestamp / 1000)}:f>\``, inline: true}
            ])
            .addFields([
                {name: "🗓️ Entrou no servidor", value: `<t:${Math.floor(member.joinedTimestamp! / 1000)}:f>`, inline: true},
                {name: "💎 Boosting", value: member.premiumSince ? `<t:${Math.floor(member.premiumSinceTimestamp! / 1000)}:f>` : "Nunca deu 😒", inline: true },
                {name: "🔰 Maior cargo", value: member.roles.highest.toString(), inline: true},
            ])

        await interaction.reply({embeds: [embedUser]})
    }
}