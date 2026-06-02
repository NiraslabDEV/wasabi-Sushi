"use client";

import { useEffect, useRef } from "react";
import { Arrow } from "./Icons";
import { WHATSAPP_URL } from "@/lib/contact";
import OpenBadge from "./OpenBadge";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  // iOS Safari often blocks autoplay even with `autoPlay` attribute.
  // Forcing .play() after mount (with muted=true) bypasses this.
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = true;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    // Some iOS versions need a second nudge after metadata loads
    v.addEventListener("loadedmetadata", tryPlay);
    return () => v.removeEventListener("loadedmetadata", tryPlay);
  }, []);

  return (
    <section className="hero" id="top">
      <video
        ref={videoRef}
        className="hero-bg-video"
        src="/videos/chef-hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        preload="auto"
        aria-label="Chef do Wasabi a apresentar um prato de sushi"
      />
      <div className="hero-overlay" aria-hidden="true" />

      <div className="container hero-content">
        <div className="hero-text">
          <div className="hero-eyebrow">
            <span className="pulse" />
            Vilanculos · Moçambique
          </div>
          <h1>
            <span className="accent">Sushi</span>
            <span> fresco.</span>
            <span className="small">Experiência autêntica · Entrega com qualidade</span>
          </h1>
          <p className="hero-sub">
            No Wasabi Sushi, cada peça é preparada com ingredientes frescos, atenção aos detalhes e paixão pela verdadeira experiência japonesa.
          </p>
          <div className="hero-actions">
            <a href="#cardapio" className="btn btn-primary">
              🍣 Fazer Pedido <Arrow />
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="btn btn-ghost">
              📲 Pedir no WhatsApp
            </a>
          </div>
        </div>

        <div className="hero-floating-badges">
          <OpenBadge />
          <div className="price-tag">
            <div className="label">Combos desde</div>
            <div className="value">1.020 MT</div>
          </div>
        </div>
      </div>

      <div className="hero-bg-word">wasabi</div>
    </section>
  );
}
