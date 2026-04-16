import type { Metadata } from "next";
import { Noto_Serif, Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ConciergeFloat from "@/components/ConciergeFloat";
import "./globals.css";

const notoSerif = Noto_Serif({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-noto-serif",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "WASABI Vilanculos | The Obsidian Ritual",
  description: "Premium sushi and Mozambican gastronomy at the coast of Vilanculos",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className="dark">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${notoSerif.variable} ${inter.variable} antialiased bg-surface text-on-surface font-body`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ConciergeFloat />
      </body>
    </html>
  );
}
