"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { MENU, MenuCategory, MenuItem, MenuSectionId, formatPrice } from "@/data/menu";
import { getCategoryVisual } from "@/lib/menu-visual";
import { PHONE_DELIVERY } from "@/lib/contact";

// ─────────────────────────────────────────────────────────────────────────────
// WIZARD — curated picks per step
// ─────────────────────────────────────────────────────────────────────────────

type WizardItem = { name: string; price: number; meta?: string; emoji: string; gradient: string };

const WIZARD_STEPS: { id: string; title: string; subtitle: string; options: WizardItem[] }[] = [
  {
    id: "entrada",
    title: "Escolha uma entrada",
    subtitle: "Para começar com sabor",
    options: [
      { name: "Camarão Tempura", price: 400, emoji: "🍤", gradient: "linear-gradient(135deg, #f97316, #c2410c)" },
      { name: "Soupa Miso", price: 500, emoji: "🍲", gradient: "linear-gradient(135deg, #15803d, #14532d)" },
      { name: "Chamuças de Carne", price: 150, meta: "3 peças", emoji: "🥟", gradient: "linear-gradient(135deg, #92400e, #6b3713)" },
      { name: "Salada Grega", price: 400, emoji: "🥗", gradient: "linear-gradient(135deg, #16a34a, #15803d)" },
      { name: "Seviche de Atum", price: 500, emoji: "🐟", gradient: "linear-gradient(135deg, #ef4444, #b91c1c)" },
      { name: "Combo de Aperitivos", price: 700, meta: "2 pessoas", emoji: "🥢", gradient: "linear-gradient(135deg, #c39b4e, #d4ae5e)" },
    ],
  },
  {
    id: "principal",
    title: "Escolha o prato principal",
    subtitle: "Sushi ou cozinha — a sua estrela do pedido",
    options: [
      { name: "Combo Bazaruto", price: 2500, meta: "23 peças", emoji: "🎁", gradient: "linear-gradient(135deg, #c39b4e, #d4ae5e)" },
      { name: "Combo Benguerrua", price: 1450, meta: "12 peças", emoji: "🎁", gradient: "linear-gradient(135deg, #c39b4e, #d4ae5e)" },
      { name: "Dragon Roll", price: 880, meta: "8 peças", emoji: "🐉", gradient: "linear-gradient(135deg, #f97316, #c2410c)" },
      { name: "Picanha", price: 1100, emoji: "🥩", gradient: "linear-gradient(135deg, #b45309, #78350f)" },
      { name: "Matapa com Caranguejo", price: 500, emoji: "🦀", gradient: "linear-gradient(135deg, #15803d, #14532d)" },
      { name: "Choco Frito", price: 600, emoji: "🦑", gradient: "linear-gradient(135deg, #6b7670, #4a5550)" },
    ],
  },
  {
    id: "bebida",
    title: "Para acompanhar?",
    subtitle: "Uma bebida para completar a experiência",
    options: [
      { name: "2M Garrafa Média", price: 90, meta: "550ml", emoji: "🍺", gradient: "linear-gradient(135deg, #ca8a04, #854d0e)" },
      { name: "Manica Lata", price: 80, meta: "330ml", emoji: "🍺", gradient: "linear-gradient(135deg, #ca8a04, #854d0e)" },
      { name: "Vinho de Mesa", price: 200, meta: "copo", emoji: "🍷", gradient: "linear-gradient(135deg, #7c2d12, #450a0a)" },
      { name: "Refresco em Lata", price: 100, emoji: "🥤", gradient: "linear-gradient(135deg, #0891b2, #155e75)" },
      { name: "Sumo Natural 250ml", price: 250, emoji: "🧃", gradient: "linear-gradient(135deg, #16a34a, #15803d)" },
      { name: "Água Grande", price: 100, emoji: "💧", gradient: "linear-gradient(135deg, #0ea5e9, #0369a1)" },
    ],
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────────────────

type Picks = Record<string, WizardItem | null>;

export default function CardapioClient() {
  const [activeSection, setActiveSection] = useState<MenuSectionId>("sushi");
  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<Picks>({});
  const [exitOpen, setExitOpen] = useState(false);

  // ── Exit-intent detection ────────────────────────────────────────────────
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("wasabi_exit_shown")) return;

    let shown = false;
    const show = () => {
      if (shown) return;
      shown = true;
      sessionStorage.setItem("wasabi_exit_shown", "1");
      setExitOpen(true);
    };

    // Desktop: mouseleave to top
    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", onMouseLeave);

    // Fallback: 45s on page (mobile/everyone)
    const timer = window.setTimeout(show, 45000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  // ── Wizard helpers ───────────────────────────────────────────────────────
  function openWizard() {
    setStep(0);
    setPicks({});
    setWizardOpen(true);
  }
  function pickAndAdvance(item: WizardItem | null) {
    const stepId = WIZARD_STEPS[step].id;
    setPicks((p) => ({ ...p, [stepId]: item }));
    setStep((s) => s + 1);
  }
  function backStep() {
    setStep((s) => Math.max(0, s - 1));
  }
  function resetWizard() {
    setStep(0);
    setPicks({});
  }
  function closeWizard() {
    setWizardOpen(false);
  }

  const isSummary = step >= WIZARD_STEPS.length;
  const total = useMemo(
    () => Object.values(picks).reduce((s, it) => s + (it?.price || 0), 0),
    [picks]
  );

  const whatsappMsg = useMemo(() => {
    const lines = ["Olá! Gostaria de fazer um pedido no Wasabi Sushi:"];
    WIZARD_STEPS.forEach((s) => {
      const p = picks[s.id];
      if (p) lines.push(`• ${p.name}${p.meta ? ` (${p.meta})` : ""} — ${formatPrice(p.price)} MT`);
    });
    lines.push("", `Total: ${formatPrice(total)} MT`);
    return encodeURIComponent(lines.join("\n"));
  }, [picks, total]);

  const cur = MENU[activeSection];

  return (
    <div className="cardapio-page">
      {/* HEADER */}
      <header className="cardapio-header">
        <Link href="/" className="cardapio-back">
          ← Voltar
        </Link>
        <div className="cardapio-brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Wasabi" />
          <div>
            <div className="name">Wasabi</div>
            <div className="sub">Cardápio digital</div>
          </div>
        </div>
        <a href={`https://wa.me/${PHONE_DELIVERY}`} target="_blank" rel="noopener noreferrer" className="cardapio-wpp">
          📲 WhatsApp
        </a>
      </header>

      {/* WIZARD BANNER */}
      <section className="wizard-banner">
        <div className="container">
          <div className="wizard-banner-content">
            <div>
              <div className="kicker">Não sabes por onde começar?</div>
              <h2>
                Deixa-nos <span className="em">guiar-te</span> em 3 passos
              </h2>
              <p>Entrada → Prato principal → Bebida. No final, mandas o pedido pelo WhatsApp.</p>
            </div>
            <button className="btn btn-primary btn-lg" onClick={openWizard}>
              🍣 Começar pedido →
            </button>
          </div>
        </div>
      </section>

      {/* VISUAL MENU */}
      <section className="container cardapio-main">
        <div className="cardapio-tabs">
          {(Object.keys(MENU) as MenuSectionId[]).map((s) => (
            <button
              key={s}
              className={"cardapio-tab" + (activeSection === s ? " active" : "")}
              onClick={() => setActiveSection(s)}
            >
              {MENU[s].label}
            </button>
          ))}
        </div>

        <p className="cardapio-tagline">{cur.tagline}</p>

        {cur.categories.map((cat) => (
          <CategoryBlock key={cat.id} cat={cat} />
        ))}
      </section>

      {/* WIZARD MODAL */}
      {wizardOpen && (
        <div className="wizard-modal-bg" onClick={closeWizard}>
          <div className="wizard-modal" onClick={(e) => e.stopPropagation()}>
            <button className="wizard-close" onClick={closeWizard} aria-label="Fechar">
              ×
            </button>

            {/* progress */}
            <div className="wizard-progress">
              {WIZARD_STEPS.map((s, i) => (
                <div
                  key={s.id}
                  className={
                    "wizard-progress-step" +
                    (i < step ? " done" : "") +
                    (i === step ? " active" : "")
                  }
                >
                  <span className="num">{i + 1}</span>
                  <span className="label">{s.id}</span>
                </div>
              ))}
              <div
                className={
                  "wizard-progress-step" + (isSummary ? " active" : "")
                }
              >
                <span className="num">✓</span>
                <span className="label">Pedido</span>
              </div>
            </div>

            {!isSummary && (
              <>
                <div className="wizard-step-head">
                  <div className="kicker">Passo {step + 1} de {WIZARD_STEPS.length}</div>
                  <h2>{WIZARD_STEPS[step].title}</h2>
                  <p>{WIZARD_STEPS[step].subtitle}</p>
                </div>

                <div className="wizard-options">
                  {WIZARD_STEPS[step].options.map((opt, i) => (
                    <button key={i} className="wizard-option" onClick={() => pickAndAdvance(opt)}>
                      <div className="wizard-option-visual" style={{ background: opt.gradient }}>
                        <span className="emoji">{opt.emoji}</span>
                      </div>
                      <div className="wizard-option-body">
                        <div className="name">{opt.name}</div>
                        {opt.meta && <div className="meta">{opt.meta}</div>}
                        <div className="price">{formatPrice(opt.price)} <span>MT</span></div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="wizard-actions">
                  {step > 0 && (
                    <button className="btn btn-ghost" onClick={backStep}>
                      ← Voltar
                    </button>
                  )}
                  <button className="btn btn-link" onClick={() => pickAndAdvance(null)}>
                    Saltar este passo →
                  </button>
                </div>
              </>
            )}

            {isSummary && (
              <div className="wizard-summary">
                <div className="wizard-step-head">
                  <div className="kicker">Pedido finalizado</div>
                  <h2>O teu <span className="em">pedido</span></h2>
                </div>

                <ul className="wizard-summary-list">
                  {WIZARD_STEPS.map((s) => {
                    const p = picks[s.id];
                    if (!p) return (
                      <li key={s.id} className="empty">
                        <span className="label">{s.title}</span>
                        <span className="val">— saltado —</span>
                      </li>
                    );
                    return (
                      <li key={s.id}>
                        <span className="label">{s.title.replace("Escolha ", "").replace("Escolha uma ", "")}</span>
                        <span className="val">
                          <span className="name">{p.name}</span>
                          <span className="price">{formatPrice(p.price)} MT</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="wizard-total">
                  <span>Total estimado</span>
                  <span className="big">{formatPrice(total)} MT</span>
                </div>

                <div className="wizard-actions" style={{ marginTop: 24 }}>
                  <button className="btn btn-ghost" onClick={resetWizard}>
                    ← Recomeçar
                  </button>
                  <a
                    href={`https://wa.me/${PHONE_DELIVERY}?text=${whatsappMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    📲 Enviar pelo WhatsApp
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* EXIT POPUP */}
      {exitOpen && <ExitPopup onClose={() => setExitOpen(false)} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// VISUAL CATEGORY (cards grid)
// ─────────────────────────────────────────────────────────────────────────────

function CategoryBlock({ cat }: { cat: MenuCategory }) {
  return (
    <div className="cardapio-category">
      <div className="cardapio-category-head">
        <h3>{cat.label}</h3>
        {cat.meta && <span className="cardapio-category-meta">{cat.meta}</span>}
      </div>
      <div className="cardapio-grid">
        {cat.items.map((it, i) => <ItemCard key={i} item={it} catId={cat.id} />)}
      </div>
    </div>
  );
}

function ItemCard({ item, catId }: { item: MenuItem; catId: string }) {
  const visual = getCategoryVisual(catId);
  const isCombo = !!item.includes;

  return (
    <article className={"item-card" + (isCombo ? " combo" : "") + (item.highlight ? " highlight" : "")}>
      <div className="item-card-visual" style={{ background: visual.gradient }}>
        <span className="emoji">{visual.emoji}</span>
        {item.highlight && <span className="item-card-tag">Mais pedido</span>}
      </div>
      <div className="item-card-body">
        <div className="item-card-head">
          <h4 className="item-card-name">
            {item.name}
            {item.en && <span className="en">{item.en}</span>}
          </h4>
          {item.meta && (
            <span className={"item-card-meta" + (item.sunday ? " sunday" : "")}>{item.meta}</span>
          )}
        </div>
        {item.desc && <p className="item-card-desc">{item.desc}</p>}
        {item.includes && (
          <ul className="item-card-includes">
            {item.includes.map((line, i) => <li key={i}>{line}</li>)}
          </ul>
        )}
        <div className="item-card-price">
          {formatPrice(item.price)} <span>MT</span>
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXIT POPUP (email capture for combo giveaway)
// ─────────────────────────────────────────────────────────────────────────────

function ExitPopup({ onClose }: { onClose: () => void }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErr("");
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "exit_popup_combo" }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus("err");
        setErr(data?.error || "Erro a registar");
        return;
      }
      setStatus("ok");
    } catch {
      setStatus("err");
      setErr("Sem ligação");
    }
  }

  return (
    <div className="exit-popup-bg" onClick={onClose}>
      <div className="exit-popup" onClick={(e) => e.stopPropagation()}>
        <button className="exit-popup-close" onClick={onClose} aria-label="Fechar">×</button>

        {status !== "ok" ? (
          <>
            <div className="exit-popup-icon">🎁</div>
            <h2>
              Espera! Ganha um <span className="em">combo</span> grátis
            </h2>
            <p>Deixa o teu email e concorre ao nosso sorteio mensal de um combo Wasabi para 2 pessoas. Sem spam, prometido.</p>

            <form onSubmit={submit} className="exit-popup-form">
              <input
                type="email"
                placeholder="o-teu-email@exemplo.com"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status === "loading"}
              />
              <button type="submit" className="btn btn-primary" disabled={status === "loading"}>
                {status === "loading" ? "A enviar..." : "Quero participar →"}
              </button>
            </form>
            {err && <p className="exit-popup-err">{err}</p>}
            <button className="exit-popup-skip" onClick={onClose}>Não, obrigado</button>
          </>
        ) : (
          <>
            <div className="exit-popup-icon">✓</div>
            <h2>Estás <span className="em">dentro</span>!</h2>
            <p>O teu email foi registado. Vamos avisar-te se ganhares o combo deste mês. Bons pedidos! 🍣</p>
            <button className="btn btn-primary" onClick={onClose}>Continuar a ver o menu</button>
          </>
        )}
      </div>
    </div>
  );
}
