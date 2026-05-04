import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import AutomationPage from "@/components/AutomationPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/automatizacion-documentos-ia-notaria'),

  title: "Automatización de Documentos con IA para Notarías",
  description:
    "Automatiza la generación y gestión de escrituras y documentos notariales con inteligencia artificial. Reduce tiempos y errores en tu notaría con Nuvigant.",
};

export default function Page() {
  return <AutomationPage />;
}
