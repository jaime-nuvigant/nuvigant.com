import type { Metadata } from "next";
import SanctionsListsPage from "@/components/SanctionsListsPage";

export const metadata: Metadata = {
  title: "Búsqueda de Listados Negros | Nuvigant",
  description:
    "Realiza búsquedas en los listados negros que en verdad necesitas. No pagues por herramientas o listados que no son requeridas por la ley.",
};

export default function Page() {
  return <SanctionsListsPage />;
}
