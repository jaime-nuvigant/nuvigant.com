import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ContactPage from "@/components/ContactPage";

const title = "Contacto";
const description =
  "Ponte en contacto con el equipo de Nuvigant. Estamos aquí para ayudarte a modernizar tu notaría o despacho jurídico.";

export const metadata: Metadata = {
  ...canonicalAlternates("/contact"),
  ...ogMetadataSpread({ title, description, pathname: "/contact" }),
  title,
  description,
};

export default function Page() {
  return <ContactPage />;
}
