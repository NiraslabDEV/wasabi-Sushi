# PLAN — Wasabi Sushi: Conversão para Next.js + Prisma + Railway

## CONTEXTO OBRIGATÓRIO (LER ANTES DE TUDO)

**O que é este projecto:** Site premium para o restaurante Wasabi Sushi Vilankulo (Moçambique).  
**O que já existe:** Um ficheiro `code.html` com o design completo (Hero, Menu parcial, Reservas, Localização, Footer) + `DESIGN.md` com o design system + `logo_wasabi.jpeg`.  
**O que falta:** Converter tudo para Next.js 14 com App Router, adicionar secções novas, ligar a PostgreSQL via Prisma, e preparar para deploy no Railway.  
**WhatsApp do restaurante:** 258846007007  
**GitHub:** https://github.com/NiraslabDEV/wasabi-Sushi

## REGRAS OBRIGATÓRIAS

1. **Depois de CADA task completa, fazer um commit com mensagem descritiva**
2. **Depois de TODAS as tasks, escrever um relatório no ficheiro `REPORT.md`** com o que foi feito, o que funciona, e o que falta
3. **Design 100% fiel ao code.html e DESIGN.md** — copiar as cores, fontes, espaçamentos exactamente
4. **Nunca usar branco puro (#FFFFFF)** — usar `on-surface` (#e5e2e1)
5. **Nunca usar bordas sólidas de 1px** — usar mudanças de `surface-container` tiers
6. **Tipografia:** Noto Serif para headlines, Inter para body/labels
7. **Preços em dourado** (`secondary` #e9c349)

---

## TASK 0 — Criar projecto Next.js 14

**O que fazer:**
```bash
cd "c:/Users/Gabriel/Desktop/Wasabi Sushi"
npx create-next-app@14 wasabi-app --typescript --tailwind --eslint --app --src-dir --no-import-alias
```

Depois mover o conteúdo de `wasabi-app/` para a raiz do projecto (ou trabalhar dentro de `wasabi-app/`).

**Copiar o logo:**
```bash
cp logo_wasabi.jpeg wasabi-app/public/logo_wasabi.jpeg
```

**Commit:** `chore: scaffold Next.js 14 project with TypeScript and Tailwind`

---

## TASK 1 — Configurar Tailwind com as cores do design system

**Ficheiro:** `tailwind.config.ts`

Copiar EXACTAMENTE estas cores do `code.html` para o `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        "tertiary-fixed": "#e5e2e1",
        "on-primary-container": "#79bb87",
        "secondary-fixed-dim": "#e9c349",
        "surface": "#131313",
        "tertiary-container": "#414040",
        "surface-container": "#201f1f",
        "primary-fixed-dim": "#93d6a0",
        "surface-tint": "#93d6a0",
        "on-tertiary": "#313030",
        "primary": "#93d6a0",
        "inverse-surface": "#e5e2e1",
        "on-primary": "#003919",
        "error": "#ffb4ab",
        "on-tertiary-container": "#aeacab",
        "tertiary": "#c9c6c5",
        "on-surface": "#e5e2e1",
        "on-primary-fixed": "#00210c",
        "on-error-container": "#ffdad6",
        "secondary-container": "#af8d11",
        "primary-container": "#004b23",
        "surface-bright": "#3a3939",
        "outline": "#8a9389",
        "on-tertiary-fixed-variant": "#474646",
        "on-secondary-container": "#342800",
        "surface-container-high": "#2a2a2a",
        "on-surface-variant": "#c0c9be",
        "on-tertiary-fixed": "#1c1b1b",
        "surface-container-low": "#1c1b1b",
        "on-error": "#690005",
        "on-secondary-fixed": "#241a00",
        "error-container": "#93000a",
        "inverse-primary": "#2a6a3f",
        "tertiary-fixed-dim": "#c9c6c5",
        "on-background": "#e5e2e1",
        "primary-fixed": "#aef2bb",
        "secondary": "#e9c349",
        "on-primary-fixed-variant": "#0b5229",
        "outline-variant": "#404941",
        "background": "#131313",
        "on-secondary-fixed-variant": "#574500",
        "inverse-on-surface": "#313030",
        "surface-dim": "#131313",
        "on-secondary": "#3c2f00",
        "secondary-fixed": "#ffe088",
        "surface-variant": "#353534",
        "surface-container-highest": "#353534",
        "surface-container-lowest": "#0e0e0e",
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem",
      },
      fontFamily: {
        headline: ["Noto Serif", "serif"],
        body: ["Inter", "sans-serif"],
        label: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

export default config;
```

**Ficheiro:** `src/app/globals.css` — manter apenas:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

.glass-nav {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.text-gradient-gold {
  background: linear-gradient(135deg, #ffe088 0%, #af8d11 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.emerald-glow {
  box-shadow: inset 0 0 20px rgba(147, 214, 160, 0.1);
}
```

**Ficheiro:** `src/app/layout.tsx` — configurar fontes Noto Serif + Inter via `next/font/google`, adicionar `className="dark"` ao `<html>`, body com `bg-surface text-on-surface font-body`.

**Instalar plugin:** `npm install @tailwindcss/forms`

**Commit:** `feat: configure Tailwind with full design system colors and typography`

---

## TASK 2 — Layout base (Nav + Footer + Concierge Float)

**Criar ficheiros:**
- `src/components/Navbar.tsx`
- `src/components/Footer.tsx`
- `src/components/ConciergeFloat.tsx`

**Navbar.tsx** — Copiar EXACTAMENTE o HTML da nav do `code.html` (linhas 102-117):
- Logo: `<Image src="/logo_wasabi.jpeg" alt="WASABI Vilanculos Logo" ... />`
- Links: Menu (#menu), Experience (#experience), Reservations (#reservations)
- Botão PT/EN (pode ser só visual por agora)
- Classes: `fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-2xl shadow-black/40`

**Footer.tsx** — Copiar EXACTAMENTE o footer do `code.html` (linhas 398-441):
- Logo footer, descrição, endereço, links (Explore, Reservations, Legal)
- Copyright 2024

**ConciergeFloat.tsx** — Botão flutuante WhatsApp (linhas 443-450):
- `fixed bottom-8 right-8 z-50`
- onClick abre `https://wa.me/258846007007`
- Ícone SVG do WhatsApp

**Ficheiro:** `src/app/layout.tsx` — importar Navbar, Footer, ConciergeFloat e colocá-los a envolver o `{children}`.

**Commit:** `feat: add Navbar, Footer, and ConciergeFloat layout components`

---

## TASK 3 — Hero Section

**Criar:** `src/components/sections/HeroSection.tsx`

Converter EXACTAMENTE o HTML do hero (linhas 119-145 do code.html):
- Imagem de fundo com gradiente overlay
- Título: "The Obsidian Ritual." com Noto Serif
- Subtítulo descritivo
- 2 CTAs: "Secure a Table" (botão emerald gradient) + "Explore the Omakase" (botão ghost)
- Info bar no fundo: "Vilanculos, MZ" + "18:00 — 23:00"
- `h-screen`, `relative`, `overflow-hidden`

**Ficheiro:** `src/app/page.tsx` — importar HeroSection como primeira secção.

**Commit:** `feat: add Hero section component`

---

## TASK 4 — Menu Section (The Collection) com TODAS as categorias

**Criar:** `src/components/sections/MenuSection.tsx`

Este é o componente mais complexo. Converter o HTML do menu (linhas 147-265 do code.html) e ADICIONAR as categorias que faltam.

**Estrutura:**
1. Header "The Collection" com tabs de navegação por categoria
2. Secção **Entradas** (`id="entradas"`) — grid 4 cards:
   - Edamame — 350 MT
   - Miso Soup — 450 MT
   - Gyoza Frito (6 pcs) — 850 MT
   - Tataki de Atum — 1.200 MT

3. Secção **Sushi Tradicional** (`id="sushi"`) — lista 2 colunas:
   - Salmão Nigiri — 550 MT
   - Atum Nigiri — 600 MT
   - California Roll — 950 MT
   - Spicy Tuna Roll — 1.050 MT
   - Dragon Roll — 1.350 MT
   - Rainbow Roll — 1.450 MT

4. Secção **Especialidades** (`id="especialidades"`) — bento grid (JÁ EXISTE no code.html linhas 159-191):
   - Tuna Truffle Tataki — 2.450 MT (card grande 8 colunas)
   - Prawn Carpaccio — 1.850 MT (card pequeno)
   - A5 Wagyu Nigiri — 3.200 MT (card pequeno)

5. Secção **Cozinha Moçambicana** (`id="mocambicana"`) — 2 cards com imagem:
   - Camarão Peri-Peri — 2.800 MT
   - Matapa de Lagosta — 3.500 MT

6. Secção **Combinados** (`id="combinados"`) — JÁ EXISTE no code.html (linhas 194-264):
   - Zanzibar Drift (32 pcs) — 4.200 MT
   - The Omakase Deck (48 pcs) — 7.500 MT (card destacado)
   - Bazaruto Bloom (24 pcs, vegan) — 3.100 MT

7. Secção **Bebidas & Cocktails** (`id="bebidas"`) — lista simples:
   - Sake Quente — 400 MT
   - Sake Frio Premium — 650 MT
   - Wasabi Martini — 550 MT
   - Tropical Yuzu Spritz — 450 MT
   - Água / Refrigerante — 150 MT

8. Secção **Vinhos** (`id="vinhos"`) — lista editorial:
   - Casa Branca (Branco, Moçambique) — 800 MT
   - Vinho Verde (Branco, Portugal) — 1.200 MT
   - Cabernet Sauvignon (Tinto, África do Sul) — 1.500 MT
   - Champagne Brut (França) — 3.800 MT

**Design dos cards:** usar `bg-surface-container-high`, preços em `text-secondary`, nomes em `font-headline`, descrições em `text-on-surface-variant text-sm`.

**Commit:** `feat: add complete Menu section with all 7 categories`

---

## TASK 5 — Experience Section (Soul of Mozambique)

**Criar:** `src/components/sections/ExperienceSection.tsx`

Converter EXACTAMENTE o HTML da secção Experience (linhas 268-298 do code.html):
- Grid 2 colunas: imagem à esquerda + texto à direita
- Título: "Where Africa Meets the Sun."
- Decoração: border-t border-l dourada no canto
- Lista: Peri-Peri Sashimi + Bazaruto Crab Curry Roll
- Fundo: `bg-surface-container-low`

**Commit:** `feat: add Experience section (Soul of Mozambique)`

---

## TASK 6 — The Masters (Chef) — SECÇÃO NOVA

**Criar:** `src/components/sections/ChefSection.tsx`

**Design (seguir DESIGN.md):**
- Fundo: `bg-surface`
- Layout: grid 2 colunas (foto chef + bio)
- Subtítulo label: `text-primary text-xs font-bold tracking-[0.4em] uppercase` → "The Artisan"
- Título: `font-headline text-5xl md:text-6xl italic` → "The Masters"
- Foto grande do chef (usar placeholder: `https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800`)
- Nome: "Chef Takeshi Yamamoto" (placeholder)
- Título: "Executive Chef & Founder"
- Bio curta: "With 20 years of mastery across Tokyo, São Paulo, and now Vilanculos, Chef Takeshi brings an obsessive precision to every cut. His philosophy: let the ocean speak through the blade."
- Filosofia quote em itálico com borda esquerda dourada (`border-l-2 border-secondary pl-6`)

**Commit:** `feat: add The Masters (Chef) section`

---

## TASK 7 — Our Story — SECÇÃO NOVA

**Criar:** `src/components/sections/StorySection.tsx`

**Design:**
- Fundo: `bg-surface-container-low`
- Layout editorial assimétrico
- Label: "Origins" em `text-primary tracking-[0.4em] uppercase text-xs`
- Título: `font-headline text-5xl md:text-6xl italic` → "Our Story"
- Texto poético (2-3 parágrafos):
  - "Born from a dream where the Indian Ocean meets Japanese tradition, Wasabi Vilanculos is more than a restaurant — it is a ritual."
  - "In 2023, we opened our doors on the pristine coast of Vilanculos, bringing the ancient art of sushi to the shores of Mozambique. Every ingredient tells a story: the prawns from Bazaruto, the spices from local markets, the precision of Japanese technique."
  - "Here, luxury is not about excess. It is about the perfect bite, the perfect moment, the perfect silence between courses."

**Commit:** `feat: add Our Story section`

---

## TASK 8 — Gallery — SECÇÃO NOVA

**Criar:** `src/components/sections/GallerySection.tsx`

**Design:**
- Fundo: `bg-surface`
- Label: "Atmosphere" + Título: "The Gallery"
- Grid responsivo de imagens: `grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4`
- 6-8 imagens placeholder (usar as URLs que já existem no code.html ou unsplash genéricos de sushi/restaurante)
- Cada imagem: `rounded-xl overflow-hidden`, hover: `scale-105 transition-transform duration-500`
- Imagens com aspect-ratio variado (algumas `row-span-2` para criar grid dinâmico)

**Commit:** `feat: add Gallery section`

---

## TASK 9 — Reviews / Social Proof — SECÇÃO NOVA

**Criar:** `src/components/sections/ReviewsSection.tsx`

**Design:**
- Fundo: `bg-surface-container-low`
- Label: "Voices" + Título: "What They Say"
- Grid 3 colunas (1 em mobile)
- 4-6 cards de review:
  - Background: `bg-surface-container-high`
  - Aspas douradas no topo (`text-secondary text-4xl font-headline` → `"`)
  - Texto do review em itálico
  - Nome + título em baixo

**Reviews placeholder:**
1. "An experience that transcends dining. Every piece is a work of art." — Maria S., Travel Blogger
2. "The best sushi I've had outside of Tokyo. The Bazaruto prawns are unforgettable." — James K., Food Critic
3. "Wasabi Vilanculos redefines what luxury means on the African coast." — Ana P., Lifestyle Magazine
4. "The Omakase Deck is a journey. We came as guests and left as devotees." — Carlos M., Local Entrepreneur

**Commit:** `feat: add Reviews section`

---

## TASK 10 — Reservation Section com formulário aprimorado

**Criar:** `src/components/sections/ReservationSection.tsx`

Converter o HTML da reserva (linhas 301-343 do code.html) MAS adicionar campos:
- Nome completo (input text)
- Telefone (input tel)
- Data (input date)
- Hora (select com opções 18:00 a 21:00)
- Número de Pessoas (input number)
- Mensagem especial (textarea, opcional)

**Lógica de submit (client-side por agora):**
```typescript
const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  const msg = encodeURIComponent(
    `Olá Wasabi! Reserva:\n👤 ${name}\n📱 ${phone}\n📅 ${date}\n⏰ ${time}\n👥 ${guests} pessoas\n💬 ${message}\n\nAguardo confirmação.`
  );
  window.open(`https://wa.me/258846007007?text=${msg}`, '_blank');
};
```

**Manter:** O aviso do depósito de 50%, o estilo `emerald-glow`, e o botão gradient.

**Commit:** `feat: add enhanced Reservation section with WhatsApp integration`

---

## TASK 11 — Location Section

**Criar:** `src/components/sections/LocationSection.tsx`

Converter o HTML da localização (linhas 346-395 do code.html):
- Grid 2 colunas: info à esquerda + mapa à direita
- Endereço: Av. Eduardo Mondlane, Vilanculos
- Horário: Terça a Domingo, 12:00h — 22:00h
- Botão "Confirmar pelo WhatsApp" → `https://wa.me/258846007007`
- Mapa: iframe OpenStreetMap centrado em Vilanculos:
  ```
  src="https://www.openstreetmap.org/export/embed.html?bbox=35.29%2C-22.02%2C35.33%2C-21.99&layer=mapnik&marker=-22.005%2C35.310"
  ```
  Com filtro CSS dark: `filter: grayscale(100%) invert(90%) contrast(130%) brightness(45%)`

**Commit:** `feat: add Location section with OpenStreetMap`

---

## TASK 12 — Montar a page.tsx completa

**Ficheiro:** `src/app/page.tsx`

Importar e ordenar TODAS as secções:

```tsx
import HeroSection from "@/components/sections/HeroSection";
import ChefSection from "@/components/sections/ChefSection";
import MenuSection from "@/components/sections/MenuSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import StorySection from "@/components/sections/StorySection";
import GallerySection from "@/components/sections/GallerySection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import ReservationSection from "@/components/sections/ReservationSection";
import LocationSection from "@/components/sections/LocationSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <MenuSection />
      <ChefSection />
      <ExperienceSection />
      <StorySection />
      <GallerySection />
      <ReviewsSection />
      <ReservationSection />
      <LocationSection />
    </main>
  );
}
```

**Verificar:** Correr `npm run dev` e confirmar que o site renderiza sem erros.

**Commit:** `feat: assemble complete page with all sections`

---

## TASK 13 — Prisma + PostgreSQL setup

**Instalar:**
```bash
npm install prisma @prisma/client
npx prisma init
```

**Ficheiro:** `prisma/schema.prisma`
```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

model Reserva {
  id        Int      @id @default(autoincrement())
  nome      String
  telefone  String
  data      DateTime
  hora      String
  pessoas   Int
  mensagem  String?
  status    String   @default("pendente")
  criadoEm  DateTime @default(now())
}
```

**Ficheiro:** `.env`
```
DATABASE_URL="postgresql://user:password@localhost:5432/wasabi?schema=public"
```

**Ficheiro:** `src/lib/prisma.ts`
```typescript
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
```

**Adicionar `.env` ao `.gitignore`.**

**NÃO correr migrate ainda** — isso vai ser feito quando o Railway estiver configurado. Mas criar um `.env.example`:
```
DATABASE_URL="postgresql://user:password@host:port/database?schema=public"
```

**Commit:** `feat: setup Prisma schema with Reserva model`

---

## TASK 14 — API Route para reservas

**Criar:** `src/app/api/reservations/route.ts`

```typescript
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { nome, telefone, data, hora, pessoas, mensagem } = body;

    if (!nome || !telefone || !data || !hora || !pessoas) {
      return NextResponse.json(
        { error: "Campos obrigatórios em falta" },
        { status: 400 }
      );
    }

    const reserva = await prisma.reserva.create({
      data: {
        nome,
        telefone,
        data: new Date(data),
        hora,
        pessoas: Number(pessoas),
        mensagem: mensagem || null,
      },
    });

    return NextResponse.json({ success: true, reserva }, { status: 201 });
  } catch (error) {
    console.error("Erro ao criar reserva:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
```

**Actualizar ReservationSection.tsx** para TAMBÉM chamar esta API antes de abrir o WhatsApp:
```typescript
const res = await fetch("/api/reservations", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ nome: name, telefone: phone, data: date, hora: time, pessoas: guests, mensagem: message }),
});
```

**Commit:** `feat: add API route for reservations with Prisma`

---

## TASK 15 — Email com Resend (opcional mas desejado)

**Instalar:** `npm install resend`

**Criar:** `src/lib/email.ts`
```typescript
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReservationEmail(reserva: {
  nome: string;
  telefone: string;
  data: string;
  hora: string;
  pessoas: number;
  mensagem?: string;
}) {
  await resend.emails.send({
    from: "Wasabi Reservas <onboarding@resend.dev>",
    to: process.env.RESTAURANT_EMAIL || "wasabi@example.com",
    subject: `Nova Reserva: ${reserva.nome} — ${reserva.data}`,
    html: `
      <h2>Nova Reserva no Wasabi</h2>
      <p><strong>Nome:</strong> ${reserva.nome}</p>
      <p><strong>Telefone:</strong> ${reserva.telefone}</p>
      <p><strong>Data:</strong> ${reserva.data}</p>
      <p><strong>Hora:</strong> ${reserva.hora}</p>
      <p><strong>Pessoas:</strong> ${reserva.pessoas}</p>
      ${reserva.mensagem ? `<p><strong>Mensagem:</strong> ${reserva.mensagem}</p>` : ""}
    `,
  });
}
```

**Adicionar ao `.env.example:**
```
RESEND_API_KEY="re_..."
RESTAURANT_EMAIL="email@wasabi.com"
```

**Chamar `sendReservationEmail` dentro da API route** (`src/app/api/reservations/route.ts`) depois de criar a reserva no banco.

**Commit:** `feat: add Resend email notification for new reservations`

---

## TASK 16 — Preparar para Railway deploy

**Criar ficheiro:** `railway.toml` (na raiz)
```toml
[build]
builder = "nixpacks"

[deploy]
startCommand = "npx prisma migrate deploy && npm start"
```

**Adicionar scripts ao `package.json`:**
```json
"scripts": {
  "postinstall": "prisma generate"
}
```

**Verificar:** `npm run build` deve passar sem erros.

**Commit:** `chore: prepare for Railway deployment`

---

## TASK 17 — Push final ao GitHub

```bash
git add -A
git push origin main
```

---

## TASK 18 — Relatório final

**Criar ficheiro:** `REPORT.md`

O relatório deve conter:
1. **Resumo:** O que foi implementado
2. **Stack:** Next.js 14, Tailwind CSS, Prisma, PostgreSQL, Resend
3. **Secções criadas:** lista de cada componente
4. **Funcionalidades:** WhatsApp, API de reservas, email
5. **O que funciona:** (listar)
6. **O que falta para produção:**
   - Configurar Railway com PostgreSQL
   - Correr `npx prisma migrate deploy`
   - Configurar variáveis de ambiente (DATABASE_URL, RESEND_API_KEY, RESTAURANT_EMAIL)
   - Substituir imagens placeholder por fotos reais do restaurante
   - Substituir dados do chef por dados reais
   - Substituir reviews placeholder por reviews reais
7. **Commits realizados:** listar todos

**Commit:** `docs: add implementation report`

---

## ORDEM DE EXECUÇÃO

```
Task 0  → scaffold Next.js
Task 1  → Tailwind config
Task 2  → Layout (Nav + Footer + Concierge)
Task 3  → Hero
Task 4  → Menu completo (7 categorias)
Task 5  → Experience
Task 6  → Chef (The Masters)
Task 7  → Our Story
Task 8  → Gallery
Task 9  → Reviews
Task 10 → Reservation form
Task 11 → Location
Task 12 → Montar page.tsx
Task 13 → Prisma setup
Task 14 → API reservas
Task 15 → Email Resend
Task 16 → Railway config
Task 17 → Push GitHub
Task 18 → Relatório
```

**TOTAL: 19 tasks, 1 commit cada = 19 commits**

---

## REFERÊNCIA RÁPIDA DE FICHEIROS

```
src/
├── app/
│   ├── layout.tsx          (Task 2)
│   ├── page.tsx            (Task 12)
│   ├── globals.css         (Task 1)
│   └── api/
│       └── reservations/
│           └── route.ts    (Task 14)
├── components/
│   ├── Navbar.tsx           (Task 2)
│   ├── Footer.tsx           (Task 2)
│   ├── ConciergeFloat.tsx   (Task 2)
│   └── sections/
│       ├── HeroSection.tsx        (Task 3)
│       ├── MenuSection.tsx        (Task 4)
│       ├── ExperienceSection.tsx  (Task 5)
│       ├── ChefSection.tsx        (Task 6)
│       ├── StorySection.tsx       (Task 7)
│       ├── GallerySection.tsx     (Task 8)
│       ├── ReviewsSection.tsx     (Task 9)
│       ├── ReservationSection.tsx (Task 10)
│       └── LocationSection.tsx    (Task 11)
└── lib/
    ├── prisma.ts           (Task 13)
    └── email.ts            (Task 15)
prisma/
└── schema.prisma           (Task 13)
public/
└── logo_wasabi.jpeg        (Task 0)
tailwind.config.ts          (Task 1)
railway.toml                (Task 16)
REPORT.md                   (Task 18)
```
