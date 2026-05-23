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
          <a href="#cardapio">Cardápio</a>
          <a href="#sobre">Sobre</a>
          <a href="#visitar">Visitar</a>
          <a href="#avaliacoes">Avaliações</a>
        </div>
        <a href="tel:+258857277152" className="nav-cta">
          <span className="dot" />
          Pedir Delivery
        </a>
      </div>
    </nav>
  );
}
