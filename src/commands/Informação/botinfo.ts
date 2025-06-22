import { SlashCommandBuilder, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRow, ActionRowBuilder, Embed, ChatInputCommandInteraction } from 'discord.js';
import { version as discordJsVersion } from 'discord.js';

module.exports = {
    data: new SlashCommandBuilder()
        .setName("botinfo")
        .setDescription("[BOT] Mostra informações sobre o bot"),
    async execute(interaction: ChatInputCommandInteraction) {
        const client = interaction.client;

        // Info do bot
        const botName = client.user?.username ?? "Desconhecido";
        const botTag = client.user?.tag ?? "Desconhecido";
        const botAvatar = client.user?.displayAvatarURL() ?? "";
        const botCreateAt = client.user?.createdAt ?? new Date();
        const botUptime = process.uptime();
        const totalGuilds = client.guilds.cache.size;
        const totalUsers = client.users.cache.size;
        const nodeVersion = process.version;

        // Montagem do embed
        const embedBot = new EmbedBuilder()
            .setColor("#0099ff")
            .setTitle("Olá, sou o ShadownJin 👋")
            .setDescription(
                "Sou o ShadownJin, inspirado em Jin Woo de Solo Leveling. Um bot multifuncional para Discord, projetado para melhorar sua experiência no servidor com sistemas de nível, economia, reputação e integração com APIs como Steam e GIFs. Seja bem-vindo ao meu domínio das sombras!"
            )
            .setThumbnail(botAvatar)
            .addFields(
                { 
                    name: "Nome", 
                    value: `\`${botName}\``, 
                    inline: true 
                },
                {
                    name: "Tag",
                    value: `\`${botTag}\``,
                    inline: true
                },
                {
                    name: "ID",
                    value: `\`${client.user?.id ?? "N/A"}\``,
                    inline: true
                },
                {
                    name: "Criado em",
                    value: `\`${botCreateAt.toLocaleDateString("pt-BR")} às ${botCreateAt.toLocaleTimeString("pt-BR")}\``,
                    inline: false
                },
                {
                    name: "Tempo de Atividade",
                    value: `\`${Math.floor(botUptime / 3600)}h ${Math.floor((botUptime % 3600) / 60)}m ${Math.floor(botUptime % 60)}s\``,
                    inline: true
                },
                {
                    name: "Total de Servidores",
                    value: `\`${totalGuilds}\``,
                    inline: true
                },
                {
                    name: "Total de Usuários",
                    value: `\`${totalUsers}\``,
                    inline: true
                },
                {
                    name: "Versão do Node.js",
                    value: `\`${nodeVersion}\``,
                    inline: true
                },
                {
                    name: "Versão do Discord.js",
                    value: `\`${discordJsVersion}\``,
                    inline: true
                }
            )
            .setTimestamp()
            .setFooter({
                text: `Solicitado por ${interaction.user.tag}`,
                iconURL: interaction.user.displayAvatarURL(),
            });

        await interaction.reply({
            embeds: [embedBot],
        });
    },
};
