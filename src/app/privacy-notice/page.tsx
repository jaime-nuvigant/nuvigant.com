import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import PrivacyNoticePage from "@/components/PrivacyNoticePage";

export const metadata: Metadata = {
  ...canonicalAlternates('/privacy-notice'),

  title: "Aviso de Privacidad",
  description:
    "Consulta el aviso de privacidad de Nuvigant. Conoce cómo protegemos y tratamos tus datos personales conforme a la LFPDPPP.",
};

export default function Page() {
  return <PrivacyNoticePage />;
}
