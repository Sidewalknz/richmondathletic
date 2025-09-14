import fs from "fs";
import path from "path";
import Hero from "./Hero";

const PLAYERS_DIR = path.join(process.cwd(), "public", "players");

/** Title-case while preserving internal hyphens, e.g. "sutherland-berkett" -> "Sutherland-Berkett" */
function toTitlePreserveHyphen(s = "") {
  return s
    .split("-")
    .filter(Boolean)
    .map((seg) => seg.charAt(0).toUpperCase() + seg.slice(1).toLowerCase())
    .join("-");
}

/** Title-case a whole name string, handling spaces + hyphens */
function titleName(raw = "") {
  const cleaned = raw.replace(/_/g, " ").replace(/\s+/g, " ").trim();
  return cleaned
    .split(" ")
    .filter(Boolean)
    .map((token) => toTitlePreserveHyphen(token))
    .join(" ");
}

/** Read /players/*.webp and parse:
 *  - Optional leading number (separated by space, hyphen, or underscore)
 *  - Name segment (supports spaces/hyphens), e.g. "9 megan sutherland-berkett.webp"
 *  - Also supports "13-sam-barnett.webp", "megan-sutherland-berkett.webp", etc.
 */
function getPlayers() {
  try {
    const files = fs
      .readdirSync(PLAYERS_DIR)
      .filter((f) => /\.webp$/i.test(f));

    return files.map((file) => {
      const base = file.replace(/\.webp$/i, "").trim();
      const norm = base.replace(/_/g, " ").trim();

      let number = null;
      let namePart = norm;

      const m = norm.match(/^(\d+)[\s-]+(.+)$/); // "123 <rest>" OR "123-<rest>"
      if (m) {
        number = Number(m[1]);
        namePart = m[2];
      }

      const name = titleName(namePart);

      return {
        src: `/players/${file}`,
        number: Number.isFinite(number) ? number : null,
        name,
      };
    });
  } catch {
    return [];
  }
}

// Fallback (if /players is empty)
const FALLBACK = [
  "/images/player1.webp",
  "/images/player2.webp",
  "/images/player3.webp",
  "/images/player4.webp",
  "/images/player5.webp",
].map((src) => ({ src, number: null, name: "" }));

export default function HeroWithPlayers() {
  const players = getPlayers();
  const items = players.length ? players : FALLBACK;

  // adjust cycle speed here (ms) – you can also pass a prop from the page
  return <Hero players={items} cycleMs={15000} />;
}
