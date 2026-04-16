"use client";

import { FormEvent, useState } from "react";
import { useTranslation } from "@/app/TranslationProvider";

export default function ReservationSection() {
  const { t } = useTranslation();
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
            {t("reservation.secureYourMoment")}
          </span>
          <h2 className="font-headline text-4xl md:text-5xl italic mb-4">
            {t("reservation.bookYourTable")}
          </h2>
          <p className="text-on-surface-variant">
            {t("reservation.joinUs")}
          </p>
        </div>

        <div className="bg-surface-container-high p-8 md:p-12 rounded-lg border border-outline-variant/10 emerald-glow">
          {submitted && (
            <div className="mb-6 p-4 bg-primary/20 border border-primary text-primary rounded">
              ✓ {t("reservation.successMessage")}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Nome */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  {t("reservation.fullName")} *
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                  placeholder={t("reservation.placeholder.name")}
                />
              </div>

              {/* Telefone */}
              <div>
                <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                  {t("reservation.phone")} *
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
                  {t("reservation.date")} *
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
                  {t("reservation.time")} *
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
                  {t("reservation.guests")} *
                </label>
                <select
                  name="pessoas"
                  value={formData.pessoas}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors"
                >
                  {[1, 2, 3, 4, 5, 6, 8].map((n) => (
                    <option key={n} value={n}>
                      {n} {n === 1 ? t("reservation.person") : t("reservation.people")}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label className="block text-sm font-bold tracking-widest uppercase text-on-surface mb-2">
                {t("reservation.specialMessage")}
              </label>
              <textarea
                name="mensagem"
                value={formData.mensagem}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 bg-surface border border-outline-variant/20 rounded text-on-surface focus:outline-none focus:border-primary transition-colors resize-none"
                placeholder={t("reservation.placeholder.message")}
              />
            </div>

            {/* Info */}
            <div className="p-4 bg-surface rounded border border-outline-variant/20">
              <p className="text-xs text-on-surface-variant">
                💳 {t("reservation.depositInfo")}
              </p>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded font-bold tracking-[0.1em] uppercase text-sm hover:scale-105 transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {isLoading ? t("reservation.sending") : t("reservation.sendReservation")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
