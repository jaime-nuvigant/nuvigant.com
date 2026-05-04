import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FielPricingPage from "@/components/FielPricingPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/e-siganature/fiel/fiel-pricing'),

  title: "Precios FIEL",
  description:
    "Conoce los planes y precios para tramitar tu Firma Electrónica Avanzada (FIEL) con Nuvigant. Servicio rápido y a un precio justo.",
};

export default function Page() {
  return <FielPricingPage />;
}
