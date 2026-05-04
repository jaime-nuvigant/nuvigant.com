import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import PrivacyNoticePage from "@/components/PrivacyNoticePage";

const title = "Aviso de Privacidad";
const description = "Consulta el aviso de privacidad de Nuvigant. Conoce cómo protegemos y tratamos tus datos personales conforme a la LFPDPPP.";
export const metadata: Metadata = {
  ...canonicalAlternates("/privacy-notice"),
  ...ogMetadataSpread({ title, description, pathname: "/privacy-notice" }),
  title,
  description,
};

export default function Page() {
  return <PrivacyNoticePage />;
}
