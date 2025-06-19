import { ExtendedClient } from "../config/client";
import { readdirSync } from "node:fs";
import path from "node:path";

export const loadEvents = (client: ExtendedClient) => {
  const eventsPath = path.join(__dirname, "..", "events");
  const eventFiles = readdirSync(eventsPath).filter(file => file.endsWith(".ts") || file.endsWith(".js"));

  for (const file of eventFiles) {
    const event = require(path.join(eventsPath, file));
    if (event.once) {
      client.once(event.name, (...args) => event.execute(...args, client));
    } else {
      client.on(event.name, (...args) => event.execute(...args, client));
    }
  }
};
