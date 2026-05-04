import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ESignaturePage from "@/components/ESignaturePage";

export const metadata: Metadata = {
  ...canonicalAlternates('/e-siganature'),

  title: "Firma Electrónica",
  description:
    "Firma documentos de forma segura y legalmente válida con Nuvigant. Soluciones de firma electrónica avanzada para notarías y despachos jurídicos en México.",
};

export default function Page() {
  return <ESignaturePage />;
}
