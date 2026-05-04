import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FedatariosPricingPage from "@/components/FedatariosPricingPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/pricing'),

  title: "Pricing | Nuvigant",
  description: "Nuestra plataforma crece junto contigo. Escoge los módulos que necesitas.",
};

export default function Page() {
  return <FedatariosPricingPage />;
}
