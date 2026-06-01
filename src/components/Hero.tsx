import { Arrow } from "./Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import OpenBadge from "./OpenBadge";

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
            <span className="accent">Sushi</span>
            <span> fresco.</span>
            <span className="small">Experiência autêntica · Entrega com qualidade</span>
          </h1>
          <p className="hero-sub">
            No Wasabi Sushi, cada peça é preparada com ingredientes frescos, atenção aos detalhes e paixão pela verdadeira experiência japonesa.
          </p>
          <div className="hero-actions">
            <a href="#cardapio" className="btn btn-primary">
              🍣 Fazer Pedido <Arrow />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              📲 Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div
          className="hero-art has-photo"
          style={{ backgroundImage: "url('/images/hero.jpg')" }}
          role="img"
          aria-label="Sushi premium servido no Wasabi"
        >
          <span className="momento-fallback">🍣</span>
          <OpenBadge />
          <div className="price-tag">
            <div className="label">Combos desde</div>
            <div className="value">1.020 MT</div>
          </div>
        </div>
      </div>
      <div className="hero-bg-word">wasabi</div>
    </section>
  );
}
