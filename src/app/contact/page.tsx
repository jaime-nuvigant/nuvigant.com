import type { Metadata } from "next";
import ContactPage from "@/components/ContactPage";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Ponte en contacto con el equipo de Nuvigant. Estamos aquí para ayudarte a modernizar tu notaría o despacho jurídico.",
};

export default function Page() {
  return <ContactPage />;
}
