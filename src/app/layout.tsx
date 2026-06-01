import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wasabi · Café, Lanches & Sushi — Vilanculos",
  description:
    "Sabores do Japão e da terra moçambicana, servidos com frescura todos os dias em Vilanculos. Sushi, comida moçambicana, café e delivery.",
  icons: { icon: "/logo.jpg" },
  openGraph: {
    title: "Wasabi · Vilanculos",
    description: "No coração do sushi em Vilanculos.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=DM+Sans:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
