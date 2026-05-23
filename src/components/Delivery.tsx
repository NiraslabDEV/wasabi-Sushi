import { Arrow, Moto, Phone } from "./Icons";

export default function Delivery() {
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
              <Phone size={16} /> Ligar agora
            </a>
            <a href="#cardapio" className="btn" style={{ background: "white", color: "var(--ink)" }}>
              Ver Cardápio <Arrow />
            </a>
          </div>
        </div>

        <div className="delivery-card">
          <div className="moto"><Moto size={28} /></div>
          <div className="label">Ligue e peça agora</div>
          <div className="phone">85 727 7152</div>
          <div className="hint">Ou no balcão: 84 600 7007</div>
          <div style={{ height: "1px", background: "var(--line)", margin: "8px 0 16px" }} />
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
