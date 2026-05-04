import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import PricingPage from "@/components/PricingPage";

const title = "Planes y Precios";
const description =
  "Descubre los planes de Nuvigant para notarías y despachos jurídicos. Precios transparentes y sin sorpresas.";

export const metadata: Metadata = {
  ...canonicalAlternates("/pricing"),
  ...ogMetadataSpread({ title, description, pathname: "/pricing" }),
  title,
  description,
};

export default function Page() {
  return <PricingPage />;
}
