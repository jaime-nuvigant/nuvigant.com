import type { Metadata } from "next";
import CambioNotariaPage from "@/components/CambioNotariaPage";

export const metadata: Metadata = {
  title: "Cambio a Notaría++ => Nuvigant | Nuvigant",
  description:
    "Conoce la nueva y mejorada versión del sistema Notaría++ que ahora será conocida como Nuvigant.",
};

export default function Page() {
  return <CambioNotariaPage />;
}
