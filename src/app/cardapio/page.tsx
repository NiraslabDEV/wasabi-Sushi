import type { Metadata } from "next";
import CardapioClient from "./CardapioClient";

export const metadata: Metadata = {
  title: "Cardápio · Wasabi Sushi Vilanculos",
  description:
    "Cardápio digital do Wasabi Sushi — sushi, cozinha moçambicana e bar. Aponte a câmara para o QR da mesa e peça.",
};

export default function CardapioPage() {
  return <CardapioClient />;
}
