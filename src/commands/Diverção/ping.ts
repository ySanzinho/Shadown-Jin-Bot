import { SlashCommandBuilder } from "discord.js";
import { setTimeout } from "node:timers/promises";

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("[DIVERSÃO]Responde com Pong!"),
  async execute(interaction: any) {
    await interaction.reply("Pong!");
    await setTimeout(2_000);
    await interaction.editReply('🏓Pong again!')
  },
};
