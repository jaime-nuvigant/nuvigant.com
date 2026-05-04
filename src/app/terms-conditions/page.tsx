import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import TermsConditionsPage from "@/components/TermsConditionsPage";

const title = "Términos y Condiciones";
const description = "Lee los términos y condiciones del uso de la plataforma Nuvigant. Conoce tus derechos y obligaciones como usuario.";
export const metadata: Metadata = {
  ...canonicalAlternates("/terms-conditions"),
  ...ogMetadataSpread({ title, description, pathname: "/terms-conditions" }),
  title,
  description,
};

export default function Page() {
  return <TermsConditionsPage />;
}
