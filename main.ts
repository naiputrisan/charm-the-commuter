// Charm the Commuter: Forecast a City That Isn't
// One line of weather (max 140 chars) for an invented city, written to
// /output/entry.txt in the broadcast-forecast register: city first, then the
// weather, then one small commuter joke. No network, no secrets, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "Mizzlewick: light glitter-drizzle, 19°C, breezy — the 7:42 bus is on time for once, puddles sparkle back, and your coffee is still warm.";

// Gate: the sealed scorer only accepts 1–140 characters, one line.
// Fail loudly here rather than shipping an invalid entry.
if (entry.length < 1 || entry.length > 140 || entry.includes("\n")) {
  throw new Error(`entry must be 1–140 chars on one line, got ${entry.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
