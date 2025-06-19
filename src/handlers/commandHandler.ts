import { ExtendedClient } from "../config/client";
import { readdirSync } from "node:fs";
import path from "node:path";

export const loadCommands = (client: ExtendedClient) => {
  const commandsPath = path.join(__dirname, "..", "commands");
  const folders = readdirSync(commandsPath);

  for (const folder of folders) {
    const folderPath = path.join(commandsPath, folder);
    const commandFiles = readdirSync(folderPath).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

    for (const file of commandFiles) {
      const command = require(path.join(folderPath, file));
      command.category = folder; // <- Adiciona a categoria ao comando!
      client.commands.set(command.data.name, command);
    }
  }
};
