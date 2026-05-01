import type { Metadata } from "next";
import TermsConditionsPage from "@/components/TermsConditionsPage";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description:
    "Lee los términos y condiciones del uso de la plataforma Nuvigant. Conoce tus derechos y obligaciones como usuario.",
};

export default function Page() {
  return <TermsConditionsPage />;
}
