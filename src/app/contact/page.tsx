import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/contact'),

  title: "Contacto",
  description:
    "Ponte en contacto con el equipo de Nuvigant. Estamos aquí para ayudarte a modernizar tu notaría o despacho jurídico.",
};

export default function Page() {
  return <ContactPage />;
}
