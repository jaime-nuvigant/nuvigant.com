import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FedatariosPricingPage from "@/components/FedatariosPricingPage";

const title = "Pricing | Nuvigant";
const description = "Nuestra plataforma crece junto contigo. Escoge los módulos que necesitas.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/pricing"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/pricing" }),
  title,
  description,
};

export default function Page() {
  return <FedatariosPricingPage />;
}
