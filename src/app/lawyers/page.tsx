import type { Metadata } from "next";
import LawyersPage from "@/components/LawyersPage";

export const metadata: Metadata = {
  title: "Nuvigant para Abogados",
  description:
    "Descubre cómo Nuvigant potencia el trabajo de abogados y despachos jurídicos en México. Gestión de expedientes, firma electrónica y más.",
};

export default function Page() {
  return <LawyersPage />;
}
