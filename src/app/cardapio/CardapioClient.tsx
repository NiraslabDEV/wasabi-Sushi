"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { QRCodeSVG } from "qrcode.react";
import { MENU, MenuCategory, MenuItem, MenuSectionId, formatPrice } from "@/data/menu";
import { getCategoryVisual } from "@/lib/menu-visual";
import { PHONE_DELIVERY } from "@/lib/contact";

// ─────────────────────────────────────────────────────────────────────────────
// CART TYPES + STORAGE
// ─────────────────────────────────────────────────────────────────────────────

type CartItem = {
  key: string;
  name: string;
  meta?: string;
  price: number;
  qty: number;
  emoji: string;
  gradient: string;
};

type Cart = Record<string, CartItem>;

const STORAGE_KEY = "wasabi_cart_v1";

function loadCart(): Cart {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return typeof parsed === "object" && parsed ? parsed : {};
  } catch {
    return {};
  }
}

function saveCart(cart: Cart) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  } catch {}
}

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

type WizardPicks = Record<string, WizardItem | null>;

export default function CardapioClient() {
  const [activeSection, setActiveSection] = useState<MenuSectionId>("sushi");
  const [cart, setCart] = useState<Cart>({});
  const [cartOpen, setCartOpen] = useState(false);
  const [waiterMode, setWaiterMode] = useState(false);
  const [waiterShortId, setWaiterShortId] = useState<string | null>(null);
  const [waiterLoading, setWaiterLoading] = useState(false);
  const [waiterErr, setWaiterErr] = useState<string | null>(null);

  const [wizardOpen, setWizardOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [picks, setPicks] = useState<WizardPicks>({});

  const [exitOpen, setExitOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // ── Hydrate cart from localStorage once ──────────────────────────────────
  useEffect(() => {
    setCart(loadCart());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) saveCart(cart);
  }, [cart, hydrated]);

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

    const onMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) show();
    };
    document.addEventListener("mouseleave", onMouseLeave);
    const timer = window.setTimeout(show, 45000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(timer);
    };
  }, []);

  // ── Cart helpers ─────────────────────────────────────────────────────────
  function addToCart(key: string, partial: Omit<CartItem, "key" | "qty">) {
    setCart((c) => {
      const existing = c[key];
      const qty = (existing?.qty || 0) + 1;
      return { ...c, [key]: { ...partial, key, qty } };
    });
  }
  function inc(key: string) {
    setCart((c) => {
      const it = c[key];
      if (!it) return c;
      return { ...c, [key]: { ...it, qty: it.qty + 1 } };
    });
  }
  function dec(key: string) {
    setCart((c) => {
      const it = c[key];
      if (!it) return c;
      if (it.qty <= 1) {
        const { [key]: _, ...rest } = c;
        return rest;
      }
      return { ...c, [key]: { ...it, qty: it.qty - 1 } };
    });
  }
  function removeFromCart(key: string) {
    setCart((c) => {
      const { [key]: _, ...rest } = c;
      return rest;
    });
  }
  function clearCart() {
    setCart({});
  }

  async function showToWaiter() {
    setWaiterLoading(true);
    setWaiterErr(null);
    setWaiterShortId(null);
    try {
      const res = await fetch("/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ items: Object.values(cart), total: totalPrice }),
      });
      const data = await res.json();
      if (!res.ok) {
        setWaiterErr(data?.error || "Erro a criar pedido");
      } else if (data.shortId) {
        setWaiterShortId(data.shortId);
      }
    } catch {
      setWaiterErr("Sem ligação — o garçom pode ler o pedido na tela");
    }
    setCartOpen(false);
    setWaiterMode(true);
    setWaiterLoading(false);
  }

  function closeWaiter() {
    setWaiterMode(false);
    setWaiterShortId(null);
    setWaiterErr(null);
  }

  const totalItems = useMemo(
    () => Object.values(cart).reduce((s, it) => s + it.qty, 0),
    [cart]
  );
  const totalPrice = useMemo(
    () => Object.values(cart).reduce((s, it) => s + it.qty * it.price, 0),
    [cart]
  );

  const whatsappCartMsg = useMemo(() => {
    const lines = ["Olá! Gostaria de fazer este pedido no Wasabi Sushi:"];
    Object.values(cart).forEach((it) => {
      lines.push(`• ${it.qty}× ${it.name}${it.meta ? ` (${it.meta})` : ""} — ${formatPrice(it.qty * it.price)} MT`);
    });
    lines.push("", `Total: ${formatPrice(totalPrice)} MT`);
    return encodeURIComponent(lines.join("\n"));
  }, [cart, totalPrice]);

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
  function addWizardPicksToCart() {
    WIZARD_STEPS.forEach((s) => {
      const p = picks[s.id];
      if (!p) return;
      const key = `wz::${s.id}::${p.name}`;
      addToCart(key, {
        name: p.name,
        meta: p.meta,
        price: p.price,
        emoji: p.emoji,
        gradient: p.gradient,
      });
    });
    setWizardOpen(false);
    setCartOpen(true);
  }

  const isSummary = step >= WIZARD_STEPS.length;
  const wizardTotal = useMemo(
    () => Object.values(picks).reduce((s, it) => s + (it?.price || 0), 0),
    [picks]
  );

  const cur = MENU[activeSection];

  // ─── RENDER ──────────────────────────────────────────────────────────────
  return (
    <div className="cardapio-page">
      {/* HEADER */}
      <header className="cardapio-header">
        <Link href="/" className="cardapio-back">← Voltar</Link>
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
              <h2>Deixa-nos <span className="em">guiar-te</span> em 3 passos</h2>
              <p>Entrada → Prato principal → Bebida. No fim ficam no teu pedido.</p>
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
          <CategoryBlock key={cat.id} cat={cat} cart={cart} onAdd={addToCart} onInc={inc} onDec={dec} />
        ))}
      </section>

      {/* CART FLOATING BUTTON */}
      {totalItems > 0 && !cartOpen && !waiterMode && (
        <button className="cart-fab" onClick={() => setCartOpen(true)}>
          <span className="fab-icon">🛒</span>
          <span className="fab-info">
            <span className="fab-qty">{totalItems} {totalItems === 1 ? "item" : "itens"}</span>
            <span className="fab-price">{formatPrice(totalPrice)} MT</span>
          </span>
          <span className="fab-arrow">→</span>
        </button>
      )}

      {/* CART MODAL */}
      {cartOpen && (
        <div className="cart-modal-bg" onClick={() => setCartOpen(false)}>
          <div className="cart-modal" onClick={(e) => e.stopPropagation()}>
            <header className="cart-modal-head">
              <div>
                <div className="kicker">O meu pedido</div>
                <h2>{totalItems} {totalItems === 1 ? "item" : "itens"} no carrinho</h2>
              </div>
              <button className="cart-close" onClick={() => setCartOpen(false)} aria-label="Fechar">×</button>
            </header>

            {totalItems === 0 ? (
              <div className="cart-empty">
                <div className="emoji">🛒</div>
                <p>Ainda não adicionaste nada. Toca em <strong>+ Adicionar</strong> em qualquer prato do menu.</p>
                <button className="btn btn-primary" onClick={() => setCartOpen(false)}>Ver menu</button>
              </div>
            ) : (
              <>
                <ul className="cart-items">
                  {Object.values(cart).map((it) => (
                    <li key={it.key}>
                      <div className="cart-item-visual" style={{ background: it.gradient }}>
                        <span className="emoji">{it.emoji}</span>
                      </div>
                      <div className="cart-item-body">
                        <div className="cart-item-head">
                          <span className="name">{it.name}</span>
                          {it.meta && <span className="meta">{it.meta}</span>}
                        </div>
                        <div className="cart-item-foot">
                          <div className="qty-control">
                            <button onClick={() => dec(it.key)} aria-label="Diminuir">−</button>
                            <span>{it.qty}</span>
                            <button onClick={() => inc(it.key)} aria-label="Aumentar">+</button>
                          </div>
                          <span className="line-price">{formatPrice(it.qty * it.price)} MT</span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="cart-total">
                  <span>Total</span>
                  <span className="big">{formatPrice(totalPrice)} MT</span>
                </div>

                <div className="cart-actions">
                  <button className="btn btn-ghost" onClick={showToWaiter} disabled={waiterLoading}>
                    {waiterLoading ? "A gerar QR..." : "📋 Mostrar ao garçom"}
                  </button>
                  <a
                    href={`https://wa.me/${PHONE_DELIVERY}?text=${whatsappCartMsg}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                  >
                    📲 Enviar pelo WhatsApp
                  </a>
                </div>

                <button className="cart-clear" onClick={() => { if (confirm("Apagar todos os itens?")) clearCart(); }}>
                  🗑 Limpar carrinho
                </button>
              </>
            )}
          </div>
        </div>
      )}

      {/* WAITER MODE — QR + summary fullscreen */}
      {waiterMode && (
        <div className="waiter-view">
          <button className="waiter-back" onClick={closeWaiter}>← Voltar</button>
          <div className="waiter-content">
            <div className="kicker">Pedido para o garçom</div>
            <h1>O meu <span className="em">pedido</span></h1>

            {waiterShortId && (
              <div className="waiter-qr">
                <div className="waiter-qr-frame">
                  <QRCodeSVG
                    value={`${typeof window !== "undefined" ? window.location.origin : ""}/pedido/${waiterShortId}`}
                    size={260}
                    level="M"
                    includeMargin
                    bgColor="#ffffff"
                    fgColor="#0a0f0c"
                  />
                </div>
                <p className="waiter-qr-hint">📷 Garçom, aponte a câmara para este código</p>
                <div className="waiter-qr-code">#{waiterShortId}</div>
              </div>
            )}

            {waiterErr && !waiterShortId && (
              <div className="waiter-err">
                {waiterErr}
              </div>
            )}

            <ul className="waiter-items">
              {Object.values(cart).map((it) => (
                <li key={it.key}>
                  <span className="qty">{it.qty}×</span>
                  <span className="name">
                    {it.name}
                    {it.meta && <span className="meta"> · {it.meta}</span>}
                  </span>
                  <span className="price">{formatPrice(it.qty * it.price)} MT</span>
                </li>
              ))}
            </ul>
            <div className="waiter-total">
              <span>Total</span>
              <span className="big">{formatPrice(totalPrice)} MT</span>
            </div>
          </div>
        </div>
      )}

      {/* WIZARD MODAL */}
      {wizardOpen && (
        <div className="wizard-modal-bg" onClick={() => setWizardOpen(false)}>
          <div className="wizard-modal" onClick={(e) => e.stopPropagation()}>
            <button className="wizard-close" onClick={() => setWizardOpen(false)} aria-label="Fechar">×</button>

            <div className="wizard-progress">
              {WIZARD_STEPS.map((s, i) => (
                <div key={s.id} className={"wizard-progress-step" + (i < step ? " done" : "") + (i === step ? " active" : "")}>
                  <span className="num">{i + 1}</span>
                  <span className="label">{s.id}</span>
                </div>
              ))}
              <div className={"wizard-progress-step" + (isSummary ? " active" : "")}>
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
                  {step > 0 && <button className="btn btn-ghost" onClick={backStep}>← Voltar</button>}
                  <button className="btn-link" onClick={() => pickAndAdvance(null)}>Saltar este passo →</button>
                </div>
              </>
            )}

            {isSummary && (
              <div className="wizard-summary">
                <div className="wizard-step-head">
                  <div className="kicker">Pedido sugerido</div>
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
                        <span className="label">{s.id}</span>
                        <span className="val">
                          <span className="name">{p.name}</span>
                          <span className="price">{formatPrice(p.price)} MT</span>
                        </span>
                      </li>
                    );
                  })}
                </ul>

                <div className="wizard-total">
                  <span>Total</span>
                  <span className="big">{formatPrice(wizardTotal)} MT</span>
                </div>

                <div className="wizard-actions" style={{ marginTop: 24 }}>
                  <button className="btn btn-ghost" onClick={resetWizard}>← Recomeçar</button>
                  <button className="btn btn-primary" onClick={addWizardPicksToCart}>
                    🛒 Adicionar ao pedido →
                  </button>
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
// CATEGORY BLOCK + ITEM CARD (with qty controls)
// ─────────────────────────────────────────────────────────────────────────────

type AddFn = (key: string, partial: Omit<CartItem, "key" | "qty">) => void;
type IncFn = (key: string) => void;

function CategoryBlock({
  cat,
  cart,
  onAdd,
  onInc,
  onDec,
}: {
  cat: MenuCategory;
  cart: Cart;
  onAdd: AddFn;
  onInc: IncFn;
  onDec: IncFn;
}) {
  return (
    <div className="cardapio-category">
      <div className="cardapio-category-head">
        <h3>{cat.label}</h3>
        {cat.meta && <span className="cardapio-category-meta">{cat.meta}</span>}
      </div>
      <div className="cardapio-grid">
        {cat.items.map((it, i) => (
          <ItemCard
            key={i}
            item={it}
            catId={cat.id}
            idx={i}
            cart={cart}
            onAdd={onAdd}
            onInc={onInc}
            onDec={onDec}
          />
        ))}
      </div>
    </div>
  );
}

function ItemCard({
  item,
  catId,
  idx,
  cart,
  onAdd,
  onInc,
  onDec,
}: {
  item: MenuItem;
  catId: string;
  idx: number;
  cart: Cart;
  onAdd: AddFn;
  onInc: IncFn;
  onDec: IncFn;
}) {
  const visual = getCategoryVisual(catId);
  const isCombo = !!item.includes;
  const key = `${catId}::${idx}`;
  const inCart = cart[key];
  const qty = inCart?.qty || 0;

  const handleAdd = () => {
    onAdd(key, {
      name: item.name,
      meta: item.meta,
      price: item.price,
      emoji: visual.emoji,
      gradient: visual.gradient,
    });
  };

  return (
    <article className={"item-card" + (isCombo ? " combo" : "") + (item.highlight ? " highlight" : "") + (qty > 0 ? " in-cart" : "")}>
      <div className="item-card-visual" style={{ background: visual.gradient }}>
        <span className="emoji">{visual.emoji}</span>
        {item.highlight && <span className="item-card-tag">Mais pedido</span>}
        {qty > 0 && <span className="item-card-badge">{qty}</span>}
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
        <div className="item-card-footer">
          <div className="item-card-price">
            {formatPrice(item.price)} <span>MT</span>
          </div>
          {qty === 0 ? (
            <button className="add-btn" onClick={handleAdd}>+ Adicionar</button>
          ) : (
            <div className="qty-control">
              <button onClick={() => onDec(key)} aria-label="Diminuir">−</button>
              <span>{qty}</span>
              <button onClick={() => onInc(key)} aria-label="Aumentar">+</button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// EXIT POPUP
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
            <h2>Espera! Ganha um <span className="em">combo</span> grátis</h2>
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
