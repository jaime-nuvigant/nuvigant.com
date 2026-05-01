import type { Metadata } from "next";
import AutomationPage from "@/components/AutomationPage";

export const metadata: Metadata = {
  title: "Automatización de Documentos con IA para Notarías",
  description:
    "Automatiza la generación y gestión de escrituras y documentos notariales con inteligencia artificial. Reduce tiempos y errores en tu notaría con Nuvigant.",
};

export default function Page() {
  return <AutomationPage />;
}
