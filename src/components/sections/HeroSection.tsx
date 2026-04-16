"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/60 to-transparent z-10"></div>
        <Image
          src="https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=1200&h=1200&fit=crop"
          alt="Master sushi chef preparing delicate nigiri"
          fill
          className="object-cover grayscale-[20%] brightness-75"
          priority
        />
      </div>
      
      <div className="relative z-20 px-8 md:px-24 max-w-5xl">
        <h1 className="font-headline text-6xl md:text-9xl leading-none tracking-tighter mb-6 opacity-90">
          The <span className="italic text-secondary">Obsidian</span>
          <br />
          Ritual.
        </h1>
        
        <p className="font-body text-lg md:text-xl text-on-surface-variant max-w-lg mb-10 leading-relaxed">
          A dialogue between Japanese precision and the untamed coastal flavors
          of Vilanculos. Each bite is a curated moment of silence.
        </p>
        
        <div className="flex flex-wrap gap-4">
          <Link
            href="#reservations"
            className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-8 py-4 rounded shadow-lg font-bold tracking-[0.1em] uppercase text-sm hover:scale-105 transition-transform inline-block"
          >
            Secure a Table
          </Link>
          
          <button className="border border-outline-variant/20 text-secondary-fixed px-8 py-4 rounded font-bold tracking-[0.1em] uppercase text-sm hover:bg-surface-container-high transition-colors">
            Explore the Omakase
          </button>
        </div>
      </div>
      
      <div className="absolute bottom-12 left-8 md:left-24 z-20 flex gap-12 items-center text-xs tracking-[0.3em] uppercase text-on-surface/40">
        <span className="flex items-center gap-2">
          <span className="w-8 h-px bg-secondary"></span> Vilanculos, MZ
        </span>
        <span className="flex items-center gap-2">
          <span className="w-8 h-px bg-secondary"></span> 18:00 — 23:00
        </span>
      </div>
    </section>
  );
}
