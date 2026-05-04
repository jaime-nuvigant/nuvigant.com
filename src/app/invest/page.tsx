import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import InvestPage from "@/components/InvestPage";

const title = "Invierte en Nuvigant";
const description = "Conoce la oportunidad de inversión en Nuvigant, la plataforma líder de gestión notarial con IA en México. Únete a nuestra misión de transformar el sector legal.";
export const metadata: Metadata = {
  ...canonicalAlternates("/invest"),
  ...ogMetadataSpread({ title, description, pathname: "/invest" }),
  title,
  description,
};

export default function Page() {
  return <InvestPage />;
}
