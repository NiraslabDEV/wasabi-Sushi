import { Arrow, Insta, Moto, Phone, Pin } from "./Icons";

const hours = [
  { day: "Segunda-feira", hrs: "Encerrado", closed: true },
  { day: "Terça-feira", hrs: "08:00 – 22:00" },
  { day: "Quarta-feira", hrs: "08:00 – 22:00" },
  { day: "Quinta-feira", hrs: "08:00 – 22:00" },
  { day: "Sexta-feira", hrs: "08:00 – 22:00" },
  { day: "Sábado", hrs: "08:00 – 22:00", today: true },
  { day: "Domingo", hrs: "08:00 – 22:00" },
];

export default function Visit() {
  return (
    <section className="section" id="visitar">
      <div className="container">
        <div className="section-head">
          <div className="kicker">Entre em Contacto</div>
          <h2>
            Visite-nos em <span className="em">Vilanculos</span>
            <span className="status-badge"><span className="dot" />Aberto agora</span>
          </h2>
          <p>Estamos disponíveis para pedidos, reservas, dúvidas ou informações. Será um prazer atendê-lo.</p>
        </div>

        <div className="visit-grid">
          <div className="info-card">
            <h3>Horário</h3>
            {hours.map((h) => (
              <div
                key={h.day}
                className={"hours-row" + (h.today ? " today" : "") + (h.closed ? " closed" : "")}
              >
                <span className="day">{h.day}{h.today && " · Hoje"}</span>
                <span className="hrs">{h.hrs}</span>
              </div>
            ))}
          </div>

          <div className="info-card">
            <h3>Contacto</h3>
            <div className="contact-line">
              <div className="ic"><Pin /></div>
              <div>
                <div className="label">Endereço</div>
                <div className="value">Av. Eduardo Mondlane, Vilanculos</div>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Phone /></div>
              <div>
                <div className="label">Telefone</div>
                <div className="value">84 600 7007</div>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Moto size={20} /></div>
              <div>
                <div className="label">WhatsApp / Delivery</div>
                <div className="value">85 727 7152</div>
              </div>
            </div>
            <div className="contact-line">
              <div className="ic"><Insta /></div>
              <div>
                <div className="label">Instagram</div>
                <div className="value">@wasabisushi_vilankulo</div>
              </div>
            </div>
            <a
              href="https://maps.google.com/?q=Av.+Eduardo+Mondlane+Vilanculos"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
              style={{ marginTop: "20px", width: "100%", justifyContent: "center" }}
            >
              Como chegar <Arrow />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
