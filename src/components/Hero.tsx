import { Arrow, Moto } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-grid">
        <div>
          <div className="hero-eyebrow">
            <span className="pulse" />
            Vilanculos · Moçambique
          </div>
          <h1>
            <span style={{ display: "block" }}>Que tal</span>
            <span className="accent">sushi</span>
            <span>?</span>
            <span className="small">Café, lanches & sushi — desde 2022</span>
          </h1>
          <p className="hero-sub">
            Sabores do Japão e da terra moçambicana, servidos com frescura todos os dias na Av. Eduardo Mondlane. Coma no salão ou peça em casa.
          </p>
          <div className="hero-actions">
            <a href="#cardapio" className="btn btn-primary">
              Ver Cardápio <Arrow />
            </a>
            <a href="tel:+258857277152" className="btn btn-ghost">
              <Moto size={18} /> Pedir Delivery
            </a>
          </div>
        </div>

        <div className="hero-art">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=900&q=80&auto=format&fit=crop" alt="Sushi platter" />
          <div className="badge"><span className="dot" />Aberto agora</div>
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
