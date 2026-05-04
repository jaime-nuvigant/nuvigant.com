import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FielPricingPage from "@/components/FielPricingPage";

const title = "Precios FIEL";
const description = "Conoce los planes y precios para tramitar tu Firma Electrónica Avanzada (FIEL) con Nuvigant. Servicio rápido y a un precio justo.";
export const metadata: Metadata = {
  ...canonicalAlternates("/e-siganature/fiel/fiel-pricing"),
  ...ogMetadataSpread({ title, description, pathname: "/e-siganature/fiel/fiel-pricing" }),
  title,
  description,
};

export default function Page() {
  return <FielPricingPage />;
}
