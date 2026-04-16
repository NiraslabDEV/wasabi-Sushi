# CLAUDE.md — WASABI | Gastronomic Ritual

**Projeto:** Site oficial do restaurante japonês de luxo Wasabi Vilankulo  
**Conceito:** Japanese precision + untamed coastal flavors of Vilanculos  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + PostgreSQL + Prisma + Railway  
**Design Base:** HTML completo fornecido (dark luxury com dourado, glassmorphism e efeitos elegantes)

## 1. Constitution (Regras Não Negociáveis)

- Design deve ser **100% fiel** ao HTML fornecido (cores, fontes, glassmorphism, glows, layout)
- Simplicidade + elegância acima de tudo
- Toda reserva deve gerar mensagem WhatsApp formatada + e-mail automático para o restaurante
- Menu completo deve ser bem organizado e fácil de navegar
- Mobile-first obrigatório
- TDD obrigatório nas partes críticas (formulário de reserva e estoque)
- Deploy incremental no Railway

## 2. PRD (Product Requirements Document)

**Visão Geral**  
Site institucional premium para o Wasabi Vilankulo, com foco em experiência gastronômica de luxo, storytelling e conversão de reservas.

**Seções Obrigatórias (Prioridade)**
1. Hero impactante (já excelente)
2. **The Masters** – Chef + Equipe (foto + bio)
3. **Menu Completo** – Organizado por categorias (Entradas, Sushi Tradicional, Signature Rolls, Cozinha Moçambicana, Combinados, Bebidas, Vinhos)
4. **Our Story / Filosofia**
5. **Gallery / Atmosfera** (fotos do interior, mesas, vista, detalhes)
6. **Reviews / Social Proof**
7. Formulário de Reservas aprimorado

**Funcionalidades Principais**
- Menu com filtro/categorias elegantes
- Formulário de reserva que gera mensagem WhatsApp pronta
- Envio de e-mail automático para o restaurante
- Contador visual de "Mesas disponíveis hoje" (opcional Fase 2)

## 3. Arquitetura Técnica

**Frontend**
- Next.js 14 (App Router)
- Tailwind CSS (manter exatamente o config do HTML)
- Componentes reutilizáveis baseados no design fornecido

**Backend / Banco**
- PostgreSQL + Prisma ORM
- Tabelas principais:
  - `reservas` (nome, telefone, data, hora, numero_pessoas, mensagem, status)
  - `menu_items` (para futuro admin, Fase 2)

**Integrações**
- Resend (envio de e-mail)
- WhatsApp (link com mensagem formatada)
- Railway (deploy completo)

## 4. SPEC das Seções Novas

**The Masters (Chef)**
- Foto grande do chef
- Nome + título
- Breve bio + filosofia (Japanese precision + coastal flavors)

**Menu Completo**
- Categorias: Entradas, Sushi Tradicional, Signature Rolls, Cozinha Moçambicana, Combinados, Bebidas, Vinhos
- Cards elegantes com foto, descrição, preço em MT
- Design fiel ao estilo do HTML (glassmorphism suave)

**Gallery**
- Grid de fotos do interior, mesas, vista para o mar, detalhes de pratos

**Our Story**
- Texto curto sobre o conceito do restaurante

**Reviews**
- 4–6 depoimentos com nome, foto e texto

## 5. Trade-offs

| Decisão                  | Prós                                      | Contras               | Justificativa |
|--------------------------|-------------------------------------------|-----------------------|---------------|
| Next.js + Tailwind       | Conversão direta do HTML que você já tem  | -                     | Design já pronto e lindo |
| Prisma + PostgreSQL      | Banco robusto e fácil de manter           | Um pouco mais de setup| Necessário para reservas reais |
| Railway                  | Deploy simples + Postgres incluso         | -                     | Ideal para este projeto |

## 6. Plano de Execução

**Fase 1 — Skeleton (atual)**
- Converter todo o HTML fornecido para Next.js
- Criar seções: Chef, Menu Completo, Gallery, Our Story, Reviews

**Fase 2 — Funcionalidades**
- Formulário de reserva + WhatsApp + e-mail
- Integração Prisma

**Fase 3 — Deploy**
- Deploy no Railway

---

**Pronto.**

Este CLAUDE.md está alinhado com o design que você enviou e inclui todas as melhorias que identifiquei como prioritárias (Chef, Menu completo, Galeria, Reviews, História).

**O que você quer agora?**

Responda apenas com o número:

1. **Quero o código completo do Next.js** (todas as páginas convertidas do HTML + novas seções adicionadas)
2. **Quero primeiro a seção "The Masters" (Chef) + Gallery** (código pronto para colar)
3. **Quero o Menu Completo organizado por categorias** (com accordion ou tabs elegantes)

Diga o número.

O site já tem uma base muito forte. Vamos transformar ele em algo realmente premium e completo.  
Qual parte quer atacar primeiro?

GITHUB:

https://github.com/NiraslabDEV/wasabi-Sushi

# CLAUDE.md — WASABI | Gastronomic Ritual

**Projeto:** Site oficial do restaurante japonês de luxo Wasabi Vilankulo  
**Conceito:** Japanese precision + untamed coastal flavors of Vilanculos  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + PostgreSQL + Prisma + Railway  
**Design Base:** HTML completo fornecido (dark luxury com dourado, glassmorphism e efeitos elegantes)

## 1. Constitution (Regras Não Negociáveis)

- Design deve ser **100% fiel** ao HTML fornecido (cores, fontes, glassmorphism, glows, layout)
- Simplicidade + elegância acima de tudo
- Toda reserva deve gerar mensagem WhatsApp formatada + e-mail automático para o restaurante
- Menu completo deve ser bem organizado e fácil de navegar
- Mobile-first obrigatório
- TDD obrigatório nas partes críticas (formulário de reserva e estoque)
- Deploy incremental no Railway

## 2. PRD (Product Requirements Document)

**Visão Geral**  
Site institucional premium para o Wasabi Vilankulo, com foco em experiência gastronômica de luxo, storytelling e conversão de reservas.

**Seções Obrigatórias (Prioridade)**
1. Hero impactante (já excelente)
2. **The Masters** – Chef + Equipe (foto + bio)
3. **Menu Completo** – Organizado por categorias (Entradas, Sushi Tradicional, Signature Rolls, Cozinha Moçambicana, Combinados, Bebidas, Vinhos)
4. **Our Story / Filosofia**
5. **Gallery / Atmosfera** (fotos do interior, mesas, vista, detalhes)
6. **Reviews / Social Proof**
7. Formulário de Reservas aprimorado

**Funcionalidades Principais**
- Menu com filtro/categorias elegantes
- Formulário de reserva que gera mensagem WhatsApp pronta
- Envio de e-mail automático para o restaurante
- Contador visual de "Mesas disponíveis hoje" (opcional Fase 2)

## 3. Arquitetura Técnica

**Frontend**
- Next.js 14 (App Router)
- Tailwind CSS (manter exatamente o config do HTML)
- Componentes reutilizáveis baseados no design fornecido

**Backend / Banco**
- PostgreSQL + Prisma ORM
- Tabelas principais:
  - `reservas` (nome, telefone, data, hora, numero_pessoas, mensagem, status)
  - `menu_items` (para futuro admin, Fase 2)

**Integrações**
- Resend (envio de e-mail)
- WhatsApp (link com mensagem formatada)
- Railway (deploy completo)

## 4. SPEC das Seções Novas

**The Masters (Chef)**
- Foto grande do chef
- Nome + título
- Breve bio + filosofia (Japanese precision + coastal flavors)

**Menu Completo**
- Categorias: Entradas, Sushi Tradicional, Signature Rolls, Cozinha Moçambicana, Combinados, Bebidas, Vinhos
- Cards elegantes com foto, descrição, preço em MT
- Design fiel ao estilo do HTML (glassmorphism suave)

**Gallery**
- Grid de fotos do interior, mesas, vista para o mar, detalhes de pratos

**Our Story**
- Texto curto sobre o conceito do restaurante

**Reviews**
- 4–6 depoimentos com nome, foto e texto

## 5. Trade-offs

| Decisão                  | Prós                                      | Contras               | Justificativa |
|--------------------------|-------------------------------------------|-----------------------|---------------|
| Next.js + Tailwind       | Conversão direta do HTML que você já tem  | -                     | Design já pronto e lindo |
| Prisma + PostgreSQL      | Banco robusto e fácil de manter           | Um pouco mais de setup| Necessário para reservas reais |
| Railway                  | Deploy simples + Postgres incluso         | -                     | Ideal para este projeto |

## 6. Plano de Execução

**Fase 1 — Skeleton (atual)**
- Converter todo o HTML fornecido para Next.js
- Criar seções: Chef, Menu Completo, Gallery, Our Story, Reviews

**Fase 2 — Funcionalidades**
- Formulário de reserva + WhatsApp + e-mail
- Integração Prisma

**Fase 3 — Deploy**
- Deploy no Railway

---

**Pronto.**

Este CLAUDE.md está alinhado com o design que você enviou e inclui todas as melhorias que identifiquei como prioritárias (Chef, Menu completo, Galeria, Reviews, História).

**O que você quer agora?**

Responda apenas com o número:

1. **Quero o código completo do Next.js** (todas as páginas convertidas do HTML + novas seções adicionadas)
2. **Quero primeiro a seção "The Masters" (Chef) + Gallery** (código pronto para colar)
3. **Quero o Menu Completo organizado por categorias** (com accordion ou tabs elegantes)

Diga o número.

O site já tem uma base muito forte. Vamos transformar ele em algo realmente premium e completo.  
Qual parte quer atacar primeiro?

GITHUB:

https://github.com/NiraslabDEV/wasabi-Sushi