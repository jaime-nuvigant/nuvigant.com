import type { Metadata } from "next";
import PricingPage from "@/components/PricingPage";

export const metadata: Metadata = {
  title: "Planes y Precios",
  description:
    "Descubre los planes de Nuvigant para notarías y despachos jurídicos. Precios transparentes y sin sorpresas.",
};

export default function Page() {
  return <PricingPage />;
}
