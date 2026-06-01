// One-off image optimizer: PNG → WebP, max 1600px wide, quality 82.
// Run: node scripts/to-webp.js
const sharp = require("sharp");
const path = require("path");
const fs = require("fs");

const root = path.resolve(__dirname, "..");
const conversions = [
  { in: "assets/chef-fundo-escuro.png", out: "public/images/chef-hero.webp", maxW: 1400 },
  { in: "assets/pessoas.png", out: "public/images/momentos/05.webp", maxW: 1600 },
  { in: "assets/pessoas2.png", out: "public/images/momentos/06.webp", maxW: 1600 },
];

(async () => {
  for (const c of conversions) {
    const src = path.join(root, c.in);
    const dst = path.join(root, c.out);
    if (!fs.existsSync(src)) {
      console.error("missing:", src);
      continue;
    }
    fs.mkdirSync(path.dirname(dst), { recursive: true });
    const srcSize = fs.statSync(src).size;
    await sharp(src)
      .resize({ width: c.maxW, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(dst);
    const dstSize = fs.statSync(dst).size;
    const kb = (n) => (n / 1024).toFixed(0) + " KB";
    const pct = ((1 - dstSize / srcSize) * 100).toFixed(0);
    console.log(`✓ ${c.out}  (${kb(srcSize)} → ${kb(dstSize)}, -${pct}%)`);
  }
})();
