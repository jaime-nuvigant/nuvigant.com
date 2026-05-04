import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import WebinarFirmaElectronicaPage from "@/components/WebinarFirmaElectronicaPage";

const title = "Firma Electrónica Avanzada: Webinar con una Demostración | Nuvigant";
const description = "Inscríbete al webinar donde hablamos la firma electrónica avanzada, al igual que hacemos una demostración práctica de una firma.";
export const metadata: Metadata = {
  ...canonicalAlternates("/e-siganature/fiel/webinar-firma-electronica-avanzada"),
  ...ogMetadataSpread({ title, description, pathname: "/e-siganature/fiel/webinar-firma-electronica-avanzada" }),
  title,
  description,
};

export default function Page() {
  return <WebinarFirmaElectronicaPage />;
}
