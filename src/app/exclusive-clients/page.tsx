import type { Metadata } from "next";
import ExclusiveClientsPage from "@/components/ExclusiveClientsPage";

export const metadata: Metadata = {
  title: "Página exclusiva clientes | Nuvigant",
  description: "Estás intentando acceder a una sección exclusiva para clientes.",
};

export default function Page() {
  return <ExclusiveClientsPage />;
}
