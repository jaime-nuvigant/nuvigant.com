import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import NotariamasmasNuvigantPage from "@/components/NotariamasmasNuvigantPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/sistema-notarias/notariamasmas-nuvigant'),

  title: "Notaría++ | Nuvigant",
  description: "Estamos pasando por un cambio de imagen. Por favor lee las siguientes opciones y selecciona la que sea para ti.",
};

export default function Page() {
  return <NotariamasmasNuvigantPage />;
}
