# Wasabi · Café, Lanches & Sushi — Vilanculos

Site oficial do restaurante **Wasabi Vilankulo** — sabores do Japão e da terra moçambicana.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** + CSS custom properties (design 100% fiel ao mockup original)
- **Prisma** + **PostgreSQL** (reservas, menu admin, delivery futuro)
- Deploy: **Railway**

## Local

```bash
npm install
cp .env.example .env   # ajuste o DATABASE_URL
npm run dev
```

Abre em http://localhost:3000

## Banco de dados

```bash
# após apontar DATABASE_URL no .env
npx prisma db push          # cria as tabelas (dev)
npx prisma migrate dev      # se quiseres migrations versionadas
npx prisma studio           # GUI do banco
```

## Roadmap

- **Fase 1 — Skeleton** ✅ — Conversão do HTML para Next.js, todas as seções
- **Fase 2 — Reservas** — Formulário com WhatsApp + Resend email + Prisma persist
- **Fase 3 — Dashboard interno** — Gestão de menu, reservas, pedidos delivery
- **Fase 4 — Delivery online** — Carrinho + checkout

## Estrutura

```
src/
  app/            # App Router (layout, page, globals.css)
  components/     # Nav, Hero, Menu, etc.
  data/menu.ts    # Cardápio tipado
  lib/prisma.ts   # Cliente Prisma singleton
prisma/schema.prisma
public/logo.jpg
_legacy/          # HTML/CSS/JS originais (referência)
```

## Deploy Railway

Projeto vinculado via CLI; build via Nixpacks (`nixpacks.toml`), Postgres como serviço linkado fornece `DATABASE_URL`.
