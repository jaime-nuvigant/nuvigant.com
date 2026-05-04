import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import WebinarFirmaElectronicaPage from "@/components/WebinarFirmaElectronicaPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/e-siganature/fiel/webinar-firma-electronica-avanzada'),

  title: "Firma Electrónica Avanzada: Webinar con una Demostración | Nuvigant",
  description:
    "Inscríbete al webinar donde hablamos la firma electrónica avanzada, al igual que hacemos una demostración práctica de una firma.",
};

export default function Page() {
  return <WebinarFirmaElectronicaPage />;
}
