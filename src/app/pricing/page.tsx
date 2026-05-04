import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/pricing'),

  title: "Planes y Precios",
  description:
    "Descubre los planes de Nuvigant para notarías y despachos jurídicos. Precios transparentes y sin sorpresas.",
};

export default function Page() {
  return <PricingPage />;
}
