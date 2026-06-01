import { Arrow, ArrowDown, Crown, Leaf, Sparkle } from "./Icons";
import { WHATSAPP_URL } from "@/lib/contact";

export default function Hero() {
  return (
    <section className="hero hero-dark" id="top">
      <div className="hero-bg" aria-hidden />
      <div className="hero-kanji" aria-hidden>最高の体験</div>

      <div className="container hero-grid">
        <div className="hero-text">
          <div className="hero-eyebrow-dark">Mais que sushi.</div>
          <h1 className="hero-title">
            Uma<br />
            Experiência<br />
            <span className="cursive">premium</span>
          </h1>
          <p className="hero-sub">
            Sabor, sofisticação e tradição japonesa em Vilanculos. Feito para quem aprecia o melhor da culinária.
          </p>
          <div className="hero-actions">
            <a href="#cardapio" className="btn btn-primary hero-cta-primary">
              Ver Cardápio <Arrow />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-outline-dark">
              Reservar agora
            </a>
          </div>
        </div>

        <div
          className="hero-chef"
          role="img"
          aria-label="Chef do Wasabi servindo prato de sushi"
        />
      </div>

      <a href="#sobre" className="hero-scroll" aria-label="Descer">
        <ArrowDown />
      </a>

      <div className="hero-selos">
        <div className="container hero-selos-inner">
          <div className="selo">
            <span className="selo-ico"><Leaf /></span>
            <div className="selo-text">
              <span>Ingredientes</span>
              <strong>Selecionados</strong>
            </div>
          </div>
          <div className="selo">
            <span className="selo-ico"><Sparkle /></span>
            <div className="selo-text">
              <span>Frescor</span>
              <strong>Garantido</strong>
            </div>
          </div>
          <div className="selo">
            <span className="selo-ico"><Crown /></span>
            <div className="selo-text">
              <span>Atendimento</span>
              <strong>Premium</strong>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
