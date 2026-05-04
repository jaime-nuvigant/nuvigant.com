import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import AlertasSeguimientoPage from "@/components/AlertasSeguimientoPage";

const title = "Alertas y Seguimiento";
const description = "Mantén el control de tus expedientes notariales con el sistema de alertas y seguimiento de Nuvigant. Nunca pierdas un plazo o vencimiento importante.";
export const metadata: Metadata = {
  ...canonicalAlternates("/alertas-seguimiento"),
  ...ogMetadataSpread({ title, description, pathname: "/alertas-seguimiento" }),
  title,
  description,
};

export default function Page() {
  return <AlertasSeguimientoPage />;
}
