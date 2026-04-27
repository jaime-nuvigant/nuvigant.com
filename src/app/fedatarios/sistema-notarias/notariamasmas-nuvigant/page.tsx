import type { Metadata } from "next";
import NotariamasmasNuvigantPage from "@/components/NotariamasmasNuvigantPage";

export const metadata: Metadata = {
  title: "Notaría++ | Nuvigant",
  description: "Estamos pasando por un cambio de imagen. Por favor lee las siguientes opciones y selecciona la que sea para ti.",
};

export default function Page() {
  return <NotariamasmasNuvigantPage />;
}
