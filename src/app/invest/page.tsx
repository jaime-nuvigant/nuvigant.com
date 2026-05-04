import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import InvestPage from "@/components/InvestPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/invest'),

  title: "Invierte en Nuvigant",
  description:
    "Conoce la oportunidad de inversión en Nuvigant, la plataforma líder de gestión notarial con IA en México. Únete a nuestra misión de transformar el sector legal.",
};

export default function Page() {
  return <InvestPage />;
}
