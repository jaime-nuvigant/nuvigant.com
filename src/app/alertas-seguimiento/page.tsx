import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import AlertasSeguimientoPage from "@/components/AlertasSeguimientoPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/alertas-seguimiento'),

  title: "Alertas y Seguimiento",
  description:
    "Mantén el control de tus expedientes notariales con el sistema de alertas y seguimiento de Nuvigant. Nunca pierdas un plazo o vencimiento importante.",
};

export default function Page() {
  return <AlertasSeguimientoPage />;
}
