import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import AutomationPage from "@/components/AutomationPage";

const title = "Automatización de Documentos con IA para Notarías";
const description = "Automatiza la generación y gestión de escrituras y documentos notariales con inteligencia artificial. Reduce tiempos y errores en tu notaría con Nuvigant.";
export const metadata: Metadata = {
  ...canonicalAlternates("/automatizacion-documentos-ia-notaria"),
  ...ogMetadataSpread({ title, description, pathname: "/automatizacion-documentos-ia-notaria" }),
  title,
  description,
};

export default function Page() {
  return <AutomationPage />;
}
