/* IMPORT TS */
import { ExtendedClient } from "./config/client";

/* IMPORT MODULOS */
import { GatewayIntentBits  } from "discord.js";
import dotenv from "dotenv";
dotenv.config();

/* IMPORT ARQUIVOS */
import { loadEvents } from "./handlers/eventHandler";
import { loadCommands } from "./handlers/commandHandler";

/* --------------COMEÇO DO CÓDIGO-------------- */
const client = new ExtendedClient({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ],
});


// Carrega handlers
loadEvents(client);
loadCommands(client);

client.login(process.env.BOT_TOKEN);
