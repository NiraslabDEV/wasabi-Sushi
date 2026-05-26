import { Insta } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.jpg" alt="Wasabi" />
              <div>
                <div className="name">Wasabi</div>
                <div style={{ fontSize: "11px", letterSpacing: "1.5px", color: "rgba(255,255,255,0.6)", textTransform: "uppercase", marginTop: "4px" }}>Café · Lanches · Sushi</div>
              </div>
            </div>
            <p className="footer-tag">
              <em>&ldquo;Uma experiência japonesa além do sabor.&rdquo;</em>
            </p>
            <p className="footer-tag" style={{ marginTop: 10 }}>
              No coração do sushi em Vilanculos — desde 2022.
            </p>
          </div>
          <div>
            <h4>Navegar</h4>
            <ul>
              <li><a href="#cardapio">Menu</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#visitar">Contactos</a></li>
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
              <li>
                <a
                  href="https://instagram.com/wasabisushi_vilankulo"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
                >
                  <Insta size={14} /> @wasabisushi_vilankulo
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Wasabi Café, Lanches &amp; Sushi · Todos os direitos reservados</span>
          <span>
            <a href="/manual.html" target="_blank" rel="noopener noreferrer" style={{ marginRight: 16, opacity: 0.7 }}>
              Manual técnico
            </a>
            Feito com 💚 em Vilanculos
          </span>
        </div>
      </div>
    </footer>
  );
}
