import { ExtendedClient } from "../config/client";
import { Interaction } from "discord.js";

module.exports = {
  name: "interactionCreate",
  once: false,
  async execute(interaction: Interaction, client: ExtendedClient) {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);
    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error("Erro ao executar comando:", error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ content: "Houve um erro ao executar o comando.", ephemeral: true });
      } else {
        await interaction.reply({ content: "Houve um erro ao executar o comando.", ephemeral: true });
      }
    }
  },
};
