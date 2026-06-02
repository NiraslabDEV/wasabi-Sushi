import { WHATSAPP_URL } from "@/lib/contact";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="container nav-inner">
        <a href="#top" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Wasabi" />
          <span className="brand-text">
            <span className="name">Wasabi</span>
            <span className="sub">Café · Lanches · Sushi</span>
          </span>
        </a>
        <div className="nav-links">
          <a href="/cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#visitar">Contactos</a>
          <a href="#avaliacoes">Avaliações</a>
        </div>
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="nav-cta">
          <span className="dot" />
          Fazer Pedido
        </a>
      </div>
    </nav>
  );
}
