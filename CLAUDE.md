# CLAUDE.md — WASABI | Gastronomic Ritual

**Projeto:** Site oficial do restaurante japonês de luxo Wasabi Vilankulo  
**Conceito:** "The Obsidian Ritual" — Japanese precision + untamed coastal flavors of Vilanculos  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + PostgreSQL + Prisma + Railway  
**Design Base:** HTML + Tailwind completo fornecido em DESIGN.md + code.html  
**Logo:** Usar o logo oficial fornecido (Wasabi com textura verde e dourado)

## 1. Constitution (Regras Não Negociáveis)

- Design deve ser **100% fiel** ao HTML e DESIGN.md fornecidos (cores, glassmorphism, tipografia Noto Serif + Inter, efeitos dourado/emerald)
- Manter elegância e simplicidade (luxo não significa complexo)
- Todo formulário de reserva deve gerar mensagem WhatsApp formatada + e-mail automático para o restaurante
- Menu deve ser completo e bem organizado por categorias
- Banco de dados obrigatório (PostgreSQL + Prisma)
- Deploy no Railway (incremental)
- TDD obrigatório nas partes críticas (formulário de reserva)

## 2. PRD (Product Requirements Document)

**Visão Geral**  
Site institucional premium para o Wasabi Vilankulo, com foco em experiência gastronômica de luxo, storytelling e conversão de reservas.

**Seções Obrigatórias (Prioridade Alta)**
- Hero impactante (já excelente)
- **The Masters** (Chef + Equipe) – foto, nome, breve bio e filosofia
- **The Collection** (Menu Completo) – organizado por categorias:
  - Entradas
  - Sushi Tradicional
  - Especialidades Wasabi (Signature Rolls)
  - Cozinha Moçambicana
  - Combinados (Sharing Platters)
  - Bebidas & Cocktails
  - Vinhos
- **Our Story / Filosofia**
- **Gallery / Atmosfera** (fotos do interior, mesas, vista, detalhes de pratos)
- **Reviews / Social Proof**
- Formulário de Reservas aprimorado (com data, hora, número de pessoas)

**Funcionalidades Principais**
- Menu com navegação por categorias (smooth scroll ou tabs elegantes)
- Formulário de reserva que gera mensagem WhatsApp formatada
- Envio de e-mail automático para o restaurante (Resend)
- Uso do logo oficial em header e footer

**Fora de Escopo (Fase 1)**
- Sistema completo de reservas com calendário em tempo real
- Loja online

## 3. Arquitetura Técnica

**Frontend**
- Next.js 14 (App Router)
- Tailwind CSS (manter exatamente o config do HTML fornecido)
- Componentes reutilizáveis baseados no design (SushiCard, ChefCard, GalleryGrid, etc.)

**Backend / Banco**
- PostgreSQL + Prisma ORM
- Tabelas principais:
  - `reservas` (nome, telefone, data, hora, numero_pessoas, mensagem, status)
  - `menu_items` (para futuro admin — Fase 2)

**Integrações**
- Resend (envio de e-mail)
- WhatsApp (link com mensagem formatada)
- Railway (deploy completo com Postgres)

## 4. SPEC das Seções Novas

**The Masters (Chef)**
- Foto grande do chef
- Nome + título
- Breve bio + filosofia ("Japanese precision + coastal flavors of Vilanculos")

**Menu Completo**
- Categorias claras com headings elegantes
- Cards com foto, descrição, preço em MT
- Design fiel ao estilo do HTML (glassmorphism suave, dourado nos preços)

**Gallery**
- Grid responsivo de fotos do interior, mesas, vista para o mar, detalhes de pratos

**Our Story**
- Texto curto e poético sobre o conceito do restaurante

**Reviews**
- 4–6 depoimentos com nome, foto e texto

## 5. Trade-offs Justificados

| Decisão                  | Prós                                      | Contras               | Justificativa |
|--------------------------|-------------------------------------------|-----------------------|---------------|
| Next.js + Tailwind       | Conversão direta do HTML já fornecido     | -                     | Design já pronto e lindo |
| Prisma + PostgreSQL      | Banco robusto e fácil de manter           | Setup inicial         | Necessário para reservas reais |
| Railway                  | Deploy simples + Postgres incluso         | -                     | Ideal para este projeto |

## 6. Plano de Execução

**Fase 1 — Skeleton (atual)**
- Converter todo o HTML fornecido para Next.js
- Adicionar seções: The Masters, Menu Completo, Gallery, Our Story, Reviews
- Integrar o logo oficial

**Fase 2 — Funcionalidades**
- Formulário de reserva + WhatsApp + e-mail (Resend)
- Integração Prisma + PostgreSQL

**Fase 3 — Deploy**
- Deploy completo no Railway

---

**Pronto.**

Este CLAUDE.md está alinhado com:
- O design que você forneceu (HTML completo)
- O DESIGN.md (Design System)
- O logo Wasabi
- A necessidade de banco PostgreSQL + Prisma
- Deploy no Railway

**O que fazer agora?**

Responda apenas com o número:

1. **Quero o código completo do Next.js** (todas as páginas convertidas + novas seções adicionadas)
2. **Quero primeiro a seção "The Masters" (Chef) + Gallery** (código pronto)
3. **Quero o Menu Completo organizado por categorias** (com design fiel)

Diga o número.

O site já tem uma base excelente. Vamos finalizar ele com as seções que estavam faltando e deixar pronto para deploy no Railway.

Qual parte quer atacar primeiro?