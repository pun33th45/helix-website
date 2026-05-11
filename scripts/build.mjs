import { cp, mkdir, rm } from "node:fs/promises";

const files = [
  "index.html",
  "helix-icon.png",
  "helix-logo.png",
  "helix_logo_final.svg",
  "helix_logo_web.svg",
  "helix_mark_web.svg"
];

await rm("public", { recursive: true, force: true });
await mkdir("public", { recursive: true });

for (const file of files) {
  await cp(file, `public/${file}`);
}
