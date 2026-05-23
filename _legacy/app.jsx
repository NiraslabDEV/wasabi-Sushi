/* global React, ReactDOM */
const { useState, useMemo, useEffect } = React;

// ============================================================
// ICONS
// ============================================================
const Icon = {
  Phone: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.size || 18} height={p.size || 18}>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z"/>
    </svg>
  ),
  Pin: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.size || 18} height={p.size || 18}>
      <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z"/>
      <circle cx="12" cy="10" r="3"/>
    </svg>
  ),
  Clock: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.size || 18} height={p.size || 18}>
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  Insta: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.size || 18} height={p.size || 18}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37Z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Moto: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width={p.size || 24} height={p.size || 24}>
      <circle cx="5.5" cy="17.5" r="3.5"/>
      <circle cx="18.5" cy="17.5" r="3.5"/>
      <path d="M15 6h-3l3 7"/>
      <path d="M5 12h7l2-3h4"/>
    </svg>
  ),
  Arrow: (p) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" width={p.size || 16} height={p.size || 16}>
      <line x1="5" y1="12" x2="19" y2="12"/>
      <polyline points="12 5 19 12 12 19"/>
    </svg>
  ),
};

// ============================================================
// NAV
// ============================================================
function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          <img src="assets/logo.jpg" alt="Wasabi" />
          <span className="brand-text">
            <span className="name">Wasabi</span>
            <span className="sub">Café · Lanches · Sushi</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#visitar">Visitar</a>
          <a href="#avaliacoes">Avaliações</a>
        </div>
        <a href="tel:+258857277152" className="nav-cta">
          <span className="dot"></span>
          Pedir Delivery
        </a>
      </div>
    </nav>
  );
}

// ============================================================
// HERO
// ============================================================
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="pulse"></span>
            Vilanculos · Moçambique
          </div>
          <h1>
            <span style={{ display: "block" }}>Que tal</span>
            <span className="accent">sushi</span><span>?</span>
            <span className="small">Café, lanches & sushi — desde 2022</span>
          </h1>
          <p className="hero-sub">
            Sabores do Japão e da terra moçambicana, servidos com frescura todos os dias na Av. Eduardo Mondlane. Coma no salão ou peça em casa.
          </p>
          <div className="hero-actions">
            <a href="#cardapio" className="btn btn-primary">
              Ver Cardápio <Icon.Arrow />
            </a>
            <a href="tel:+258857277152" className="btn btn-ghost">
              <Icon.Moto size={18} /> Pedir Delivery
            </a>
          </div>
        </div>

        <div className="hero-art">
          <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&q=80&auto=format&fit=crop" alt="Sushi platter" />
          <div className="badge"><span className="dot"></span>Aberto agora</div>
          <div className="price-tag">
            <div className="label">Combos desde</div>
            <div className="value">1.020 MT</div>
          </div>
        </div>
      </div>
      <div className="hero-bg-word">sushi?</div>
    </section>
  );
}

// ============================================================
// MARQUEE
// ============================================================
function Marquee() {
  const items = [
    "Fresh Sushi", "•", "Comida Moçambicana", "•", "Delivery em Vilanculos",
    "•", "Café da Manhã", "•", "Combos a partir de 1.020 MT", "•",
  ];
  return (
    <div className="marquee">
      <div className="marquee-track">
        <span>{items.map((t, i) => t === "•" ? <span key={i} className="sep"></span> : <span key={i}>{t}</span>)}</span>
        <span aria-hidden="true">{items.map((t, i) => t === "•" ? <span key={"d"+i} className="sep"></span> : <span key={"d"+i}>{t}</span>)}</span>
      </div>
    </div>
  );
}

// ============================================================
// ABOUT
// ============================================================
function About() {
  return (
    <section className="section" id="sobre">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Sobre o Wasabi</div>
          <h2>Onde o <span className="em">Japão</span> encontra<br/>Moçambique</h2>
        </div>
        <div className="about-grid">
          <div className="about-copy">
            <h3>No coração do sushi.</h3>
            <p>
              Desde 2022, o Wasabi é o ponto de encontro em Vilanculos para quem ama um bom sushi e a comida da terra. Combinamos a precisão japonesa com a alma moçambicana — matapa, picanha, choco frito, e o melhor salmão fresco para nigiris, makis e combinados.
            </p>
            <p>
              De manhã servimos café, omeletes e tostas. Ao almoço e jantar, escolha entre o cardápio japonês ou os pratos tradicionais. Tudo preparado na hora.
            </p>
            <div className="about-stats">
              <div className="about-stat">
                <div className="num">4,5</div>
                <div className="lbl">★ 89 críticas</div>
              </div>
              <div className="about-stat">
                <div className="num">60+</div>
                <div className="lbl">Itens no cardápio</div>
              </div>
              <div className="about-stat">
                <div className="num">2022</div>
                <div className="lbl">Desde</div>
              </div>
            </div>
          </div>

          <div className="about-art">
            <div className="photo a">
              <img src="https://images.unsplash.com/photo-1611143669185-af224c5e3252?w=700&q=80&auto=format&fit=crop" alt="Sushi" />
            </div>
            <div className="photo b">
              <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=700&q=80&auto=format&fit=crop" alt="Chef plating" />
            </div>
            <div className="sticker">No coração<br/>do<br/>sushi</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// MENU
// ============================================================
function formatPrice(n) {
  return n.toLocaleString("pt-PT").replace(/,/g, ".");
}

function MenuItem({ item }) {
  if (item.includes) {
    return (
      <div className={"combo" + (item.highlight ? " highlight" : "")}>
        <div className="combo-header">
          <div>
            <h4 className="combo-name">{item.name}</h4>
            {item.meta && <div className="combo-meta">{item.meta}</div>}
          </div>
          <div className="combo-price">{formatPrice(item.price)} <span style={{ fontSize: "14px", letterSpacing: "1px" }}>MT</span></div>
        </div>
        <ul className="combo-includes">
          {item.includes.map((line, i) => <li key={i}>{line}</li>)}
        </ul>
      </div>
    );
  }
  return (
    <div className="menu-item">
      <div>
        <div className="nm">
          <span>{item.name}</span>
          {item.en && <span className="en">{item.en}</span>}
          {item.meta && <span className={"meta-tag" + (item.sunday ? " sunday-tag" : "")}>{item.meta}</span>}
        </div>
        {item.desc && <div className="desc">{item.desc}</div>}
      </div>
      <div className="price">{formatPrice(item.price)}<span className="unit">MT</span></div>
    </div>
  );
}

function Menu() {
  const menu = window.MENU;
  const sections = Object.keys(menu);
  const [activeSection, setActiveSection] = useState("sushi");
  const [activeCat, setActiveCat] = useState("all");

  const cur = menu[activeSection];
  const categories = cur.categories;

  useEffect(() => { setActiveCat("all"); }, [activeSection]);

  const visible = activeCat === "all" ? categories : categories.filter((c) => c.id === activeCat);

  // split into two columns roughly by item count to balance
  const leftCol = [];
  const rightCol = [];
  let leftCount = 0, rightCount = 0;
  visible.forEach((cat) => {
    const n = cat.items.length;
    if (leftCount <= rightCount) { leftCol.push(cat); leftCount += n + 1; }
    else { rightCol.push(cat); rightCount += n + 1; }
  });

  return (
    <section className="section alt" id="cardapio">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Cardápio Completo</div>
          <h2>Escolha o seu <span className="em">favorito</span></h2>
          <p>Clique para filtrar por categoria. Todos os preços em meticais (MT).</p>
        </div>

        <div className="menu-tabs">
          {sections.map((s) => (
            <button
              key={s}
              className={"menu-tab" + (activeSection === s ? " active" : "")}
              onClick={() => setActiveSection(s)}
            >
              {menu[s].label}
            </button>
          ))}
        </div>

        <div className="menu-tagline">{cur.tagline}</div>

        <div className="menu-chips">
          <button
            className={"chip" + (activeCat === "all" ? " active" : "")}
            onClick={() => setActiveCat("all")}
          >
            Tudo <span className="count">{categories.reduce((s, c) => s + c.items.length, 0)}</span>
          </button>
          {categories.map((c) => (
            <button
              key={c.id}
              className={"chip" + (activeCat === c.id ? " active" : "")}
              onClick={() => setActiveCat(c.id)}
            >
              {c.label}<span className="count">{c.items.length}</span>
            </button>
          ))}
        </div>

        <div className="menu-list">
          <div>
            {leftCol.map((cat) => (
              <div className="menu-cat" key={cat.id}>
                <div className="menu-cat-head">
                  <h3>{cat.label}</h3>
                  {cat.meta && <span className="cat-meta">{cat.meta}</span>}
                </div>
                {cat.items.map((it, i) => <MenuItem key={i} item={it} />)}
              </div>
            ))}
          </div>
          <div>
            {rightCol.map((cat) => (
              <div className="menu-cat" key={cat.id}>
                <div className="menu-cat-head">
                  <h3>{cat.label}</h3>
                  {cat.meta && <span className="cat-meta">{cat.meta}</span>}
                </div>
                {cat.items.map((it, i) => <MenuItem key={i} item={it} />)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// DELIVERY BAND
// ============================================================
function Delivery() {
  return (
    <section className="delivery">
      <div className="container delivery-grid">
        <div>
          <h2>Temos <span className="em">delivery!</span></h2>
          <p>
            Sushi, comida moçambicana, cafés e bebidas, entregues quentes em Vilanculos. Ligue e o seu pedido sai já. Mínimo de 30 minutos.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a href="tel:+258857277152" className="btn btn-primary">
              <Icon.Phone size={16} /> Ligar agora
            </a>
            <a href="#cardapio" className="btn" style={{ background: "white", color: "var(--ink)" }}>
              Ver Cardápio <Icon.Arrow />
            </a>
          </div>
        </div>

        <div className="delivery-card">
          <div className="moto"><Icon.Moto size={28} /></div>
          <div className="label">Ligue e peça agora</div>
          <div className="phone">85 727 7152</div>
          <div className="hint">Ou no balcão: 84 600 7007</div>
          <div style={{ height: "1px", background: "var(--line)", margin: "8px 0 16px" }}></div>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: "13px", color: "var(--muted)" }}>
            <span>Horário de entrega</span>
            <span style={{ color: "var(--ink)", fontWeight: 600 }}>11:00 – 21:30</span>
          </div>
        </div>
      </div>
      <div className="delivery-bg-word">delivery</div>
    </section>
  );
}

// ============================================================
// VISIT
// ============================================================
function Visit() {
  const hours = [
    { day: "Segunda-feira", hrs: "Encerrado", closed: true },
    { day: "Terça-feira", hrs: "08:00 – 22:00" },
    { day: "Quarta-feira", hrs: "08:00 – 22:00" },
    { day: "Quinta-feira", hrs: "08:00 – 22:00" },
    { day: "Sexta-feira", hrs: "08:00 – 22:00" },
    { day: "Sábado", hrs: "08:00 – 22:00", today: true },
    { day: "Domingo", hrs: "08:00 – 22:00" },
  ];

  return (
    <section className="section" id="visitar">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Visite-nos</div>
          <h2>
            Encontre-nos em <span className="em">Vilanculos</span>
            <span className="status-badge"><span className="dot"></span>Aberto agora</span>
          </h2>
        </div>

        <div className="visit-grid">
          <div className="info-card">
            <h3>Horário</h3>
            {hours.map((h) => (
              <div key={h.day} className={"hours-row" + (h.today ? " today" : "") + (h.closed ? " closed" : "")}>
                <span className="day">{h.day}{h.today && " · Hoje"}</span>
                <span className="hrs">{h.hrs}</span>
              </div>
            ))}
          </div>

          <div className="info-card">
            <h3>Contacto</h3>
            <div className="contact-line">
              <div className="ic"><Icon.Pin /></div>
              <div>
                <div className="label">Endereço</div>
                <div className="value">Av. Eduardo Mondlane, Vilanculos</div>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Icon.Phone /></div>
              <div>
                <div className="label">Telefone</div>
                <div className="value">84 600 7007</div>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Icon.Moto size={20} /></div>
              <div>
                <div className="label">Delivery</div>
                <div className="value">85 727 7152</div>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Icon.Insta /></div>
              <div>
                <div className="label">Instagram</div>
                <div className="value">@wasabisushi_vilankulo</div>
              </div>
            </div>
            <a href="https://maps.google.com/?q=Av.+Eduardo+Mondlane+Vilanculos" target="_blank" rel="noopener" className="btn btn-primary" style={{ marginTop: "20px", width: "100%", justifyContent: "center" }}>
              Como chegar <Icon.Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ============================================================
// REVIEWS
// ============================================================
function Reviews() {
  const reviews = [
    { stars: 5, body: "O melhor sushi de Vilanculos. Salmão sempre fresco e o Dragon Roll é incrível. Atendimento de primeira.", name: "Maria S.", when: "Há 2 semanas" },
    { stars: 5, body: "Comi a matapa com caranguejo e fiquei impressionado. Ambiente acolhedor, perfeito para um jantar com amigos.", name: "João P.", when: "Há 1 mês" },
    { stars: 4, body: "Excelente fusão. O Combo Bazaruto é generoso e vale cada metical. Delivery rápido também!", name: "Ana T.", when: "Há 3 semanas" },
  ];
  return (
    <section className="section alt" id="avaliacoes">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Avaliações</div>
          <h2>O que dizem os nossos <span className="em">clientes</span></h2>
        </div>

        <div className="reviews-summary">
          <div className="big">4,5</div>
          <div>
            <div className="stars-big">★ ★ ★ ★ <span style={{ opacity: 0.5 }}>★</span></div>
            <div className="count">89 críticas no Google</div>
          </div>
        </div>

        <div className="reviews-row">
          {reviews.map((r, i) => (
            <div className="review" key={i}>
              <div className="stars">{"★".repeat(r.stars)}{"☆".repeat(5 - r.stars)}</div>
              <p>"{r.body}"</p>
              <div className="who">
                <div className="avatar">{r.name[0]}</div>
                <div className="meta">
                  <span className="name">{r.name}</span>
                  <span className="when">{r.when}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ============================================================
// FOOTER
// ============================================================
function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="assets/logo.jpg" alt="Wasabi" />
              <div>
                <div className="name">Wasabi</div>
                <div style={{ fontSize: "11px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginTop: "4px" }}>Café · Lanches · Sushi</div>
              </div>
            </div>
            <p className="footer-tag">
              No coração do sushi em Vilanculos. Sabores do Japão e da terra moçambicana — desde 2022.
            </p>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>
              <li><a href="#cardapio">Cardápio</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#visitar">Visitar</a></li>
              <li><a href="#avaliacoes">Avaliações</a></li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              <li>Av. Eduardo Mondlane</li>
              <li>Vilanculos, Moçambique</li>
              <li><a href="tel:+258846007007">84 600 7007</a></li>
              <li><a href="tel:+258857277152">85 727 7152 (delivery)</a></li>
            </ul>
          </div>
          <div>
            <h4>Horário</h4>
            <ul>
              <li>Ter – Dom · 08:00 – 22:00</li>
              <li style={{ opacity: 0.5 }}>Segunda · Encerrado</li>
            </ul>
            <h4 style={{ marginTop: "24px" }}>Siga-nos</h4>
            <ul>
              <li><a href="#"><Icon.Insta size={14} /> @wasabisushi_vilankulo</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Wasabi Café, Lanches & Sushi · Todos os direitos reservados</span>
          <span>Feito com 💚 em Vilanculos</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// APP
// ============================================================
function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Delivery />
      <Visit />
      <Reviews />
      <Footer />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
