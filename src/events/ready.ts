import { ExtendedClient } from "../config/client";
import { REST,Routes } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

module.exports = {
  name: "ready",
  once: true,

  async execute(client: ExtendedClient) {
    console.log(`✅ ${client.user?.tag} está online!`);

    const commands = client.commands.map(cmd => cmd.data.toJSON());
    const rest = new REST({ version: "10" }).setToken(process.env.BOT_TOKEN!);

    try {
      console.log("🔄 Registrando (ou atualizando) slash commands...");

      await rest.put(
        Routes.applicationGuildCommands(
          process.env.CLIENT_ID!,
          process.env.GUILD_ID!
        ),
        { body: commands }
      );
      console.log("✅ Slash commands registrados com sucesso!");
    } catch (error) {
      console.error("❌ Erro ao registrar os slash commands:", error);
    }
  }
}