import type { Metadata } from "next";
import WebinarFirmaElectronicaPage from "@/components/WebinarFirmaElectronicaPage";

export const metadata: Metadata = {
  title: "Firma Electrónica Avanzada: Webinar con una Demostración | Nuvigant",
  description:
    "Inscríbete al webinar donde hablamos la firma electrónica avanzada, al igual que hacemos una demostración práctica de una firma.",
};

export default function Page() {
  return <WebinarFirmaElectronicaPage />;
}
