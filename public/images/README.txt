═══════════════════════════════════════════════════════════════════
 WASABI · FOTOS REAIS
═══════════════════════════════════════════════════════════════════

FORMATO: SEMPRE WebP. ~10x mais leve que PNG/JPG, sem perda visual.

Como converter (à partir do PNG/JPG original em /assets/):

  1. Coloca o ficheiro original em /assets/
  2. Edita scripts/to-webp.js (adiciona a linha à array `conversions`)
  3. Rode na raiz do projeto:  npm run webp
  4. O WebP optimizado aparece em /public/images/...

Cada PNG fica ~10x mais leve (quality 82, max 1600px).

───────────────────────────────────────────────────────────────────
 SLOTS DO SITE
───────────────────────────────────────────────────────────────────

  /images/chef-hero.webp        ← Hero (chef + prato)
  /images/about-1.jpg|webp      ← About (chef em acção 4:5)
  /images/about-2.jpg|webp      ← About (ambiente 4:3)

  /images/momentos/01.jpg|webp  ← Galeria GRANDE (2x2)
  /images/momentos/02.jpg|webp  ← Galeria ALTA (1x2)
  /images/momentos/03.jpg|webp  ← Galeria pequena
  /images/momentos/04.jpg|webp  ← Galeria pequena
  /images/momentos/05.webp      ← Galeria LARGA (2x1) — amigos celebrando ✓
  /images/momentos/06.webp      ← Galeria LARGA (2x1) — família ✓

═══════════════════════════════════════════════════════════════════
