"use client";

import { FormEvent, useState } from "react";

export default function ReservationSection() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    data: "",
    hora: "19:00",
    pessoas: "2",
    mensagem: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Save to database
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Send WhatsApp message
        const msg = encodeURIComponent(
          `Olá Wasabi! Gostaria de fazer uma reserva:\n\n👤 *Nome:* ${formData.nome}\n📱 *Telefone:* ${formData.telefone}\n📅 *Data:* ${formData.data}\n⏰ *Hora:* ${formData.hora}\n👥 *Pessoas:* ${formData.pessoas}${
            formData.mensagem ? `\n💬 *Mensagem:* ${formData.mensagem}` : ""
          }\n\nAguardo confirmação. Obrigado.`
        );

        window.open(`https://wa.me/258846007007?text=${msg}`, "_blank");
        setSubmitted(true);
        setFormData({
          nome: "",
          telefone: "",
          data: "",
          hora: "19:00",
          pessoas: "2",
          mensagem: "",
        });

        setTimeout(() => setSubmitted(false), 5000);
      }
    } catch (error) {
      console.error("Erro ao submeter reserva:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-surface-container-low py-32 px-8" id="reservations">
      <div className="max-w-2xl mx-auto">
        <div className="mb-16">
          <span className="text-primary text-xs font-bold tracking-[0.4em] uppercase mb-2 block">
            Secure Your Moment
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic mb-4">
            Book Your Table
          </h2>
          <p className="text-on-surface-variant">
            Join us for The Obsidian Ritual. Reserve your table and let us
            prepare for your arrival.
          </p>
        </div>

        <div className="bg-surface-container-high p-8 md:p-12 rounded-lg border border-outline-variant/10 emerald-glow">
          {submitted && (
            <div className="mb-6 p-4 bg-primary/20 border border-primary text-primary rounded">
              ✓ Reserva enviada com sucesso! Confirmação será enviada via WhatsApp.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                  placeholder="Seu nome"
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  Telefone *
                </label>
                <input
                  type="tel"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                  placeholder="+258 84 600 7007"
                />
              </div>

              {/* Data */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  Data *
                </label>
                <input
                  type="date"
                  name="data"
                  value={formData.data}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                />
              </div>

              {/* Hora */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  Hora *
                </label>
                <select
                  name="hora"
                  value={formData.hora}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                >
                  <option>18:00</option>
                  <option>18:30</option>
                  <option>19:00</option>
                  <option>19:30</option>
                  <option>20:00</option>
                  <option>20:30</option>
                  <option>21:00</option>
                </select>
              </div>

              {/* Pessoas */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  Número de Pessoas *
                </label>
                <select
                  name="pessoas"
                  value={formData.pessoas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? "pessoa" : "pessoas"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                Mensagem Especial
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder="Preferências dietéticas, ocasião especial, etc."
              />
            </div>

            {/* Info */}
            <div className="p-4 bg-surface rounded border border-outline-variant/20">
              <p className="text-xs text-on-surface-variant">
                💳 Um depósito de 50% será requerido para confirmar sua reserva.
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded font-bold tracking-[0.1em] uppercase text-sm hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? "Enviando..." : "Enviar Reserva via WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
