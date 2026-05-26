import { Arrow, Moto, Phone } from "./Icons";
import { WHATSAPP_URL } from "@/lib/contact";

const PROMISES = [
  "Ingredientes frescos",
  "Preparação na hora",
  "Atendimento personalizado",
  "Entrega rápida",
];

export default function Delivery() {
  return (
    <section className="delivery">
      <div className="container delivery-grid">
        <div>
          <h2>Rápido, fresco e <span className="em">seguro</span></h2>
          <p>
            Garantimos preparação cuidadosa e entregas rápidas para que o seu sushi chegue sempre fresco e saboroso à porta da sua casa.
          </p>

          <ul className="delivery-promises">
            {PROMISES.map((p) => (
              <li key={p}><span className="tick">✓</span>{p}</li>
            ))}
          </ul>

          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap", marginTop: 28 }}>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              📲 Pedir no WhatsApp
            </a>
            <a href="tel:+258857277152" className="btn" style={{ background: "white", color: "var(--ink)" }}>
              <Phone size={16} /> Ligar agora
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
