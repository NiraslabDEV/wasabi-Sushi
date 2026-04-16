import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ReservaData {
  nome: string;
  telefone: string;
  data: string;
  hora: string;
  pessoas: number;
  mensagem?: string;
}

export async function sendReservationEmail(reserva: ReservaData) {
  try {
    const restaurantEmail = process.env.RESTAURANT_EMAIL || "reservas@wasabi.mz";

    await resend.emails.send({
      from: "Wasabi Reservas <onboarding@resend.dev>",
      to: restaurantEmail,
      replyTo: reserva.telefone,
      subject: `Nouvelle Réservation: ${reserva.nome} — ${reserva.data}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Inter', sans-serif; background: #131313; color: #e5e2e1; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { border-bottom: 2px solid #e9c349; padding-bottom: 20px; margin-bottom: 30px; }
              .header h2 { color: #e9c349; margin: 0; }
              .field { margin-bottom: 15px; }
              .label { color: #93d6a0; font-weight: bold; text-transform: uppercase; font-size: 12px; }
              .value { color: #e5e2e1; margin-top: 5px; }
              .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #353534; color: #c0c9be; font-size: 12px; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>🍣 Nova Reserva no Wasabi Vilanculos</h2>
              </div>

              <div class="field">
                <div class="label">👤 Nome</div>
                <div class="value">${reserva.nome}</div>
              </div>

              <div class="field">
                <div class="label">📱 Telefone</div>
                <div class="value">${reserva.telefone}</div>
              </div>

              <div class="field">
                <div class="label">📅 Data</div>
                <div class="value">${new Date(reserva.data).toLocaleDateString("pt-MZ", { 
                  weekday: "long", 
                  year: "numeric", 
                  month: "long", 
                  day: "numeric" 
                })}</div>
              </div>

              <div class="field">
                <div class="label">⏰ Hora</div>
                <div class="value">${reserva.hora}</div>
              </div>

              <div class="field">
                <div class="label">👥 Número de Pessoas</div>
                <div class="value">${reserva.pessoas}</div>
              </div>

              ${reserva.mensagem ? `
              <div class="field">
                <div class="label">💬 Mensagem Especial</div>
                <div class="value">${reserva.mensagem}</div>
              </div>
              ` : ""}

              <div class="footer">
                <p>Confirme a reserva via WhatsApp: <strong>+258 84 600 7007</strong></p>
                <p>Depósito de 50% requerido para confirmação.</p>
                <p style="margin-top: 20px; color: #8a9389;">
                  ✓ Esta é uma reserva automática do sistema. Confirme diretamente com o cliente.
                </p>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return { success: false, error };
  }
}
