import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import RegularizacionPage from "@/components/RegularizacionPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/regularizacion'),

  title: "Regularización",
  description:
    "Regulariza tu situación fiscal y documental con el apoyo de Nuvigant. Soluciones ágiles para notarías y particulares en México.",
};

export default function Page() {
  return <RegularizacionPage />;
}
