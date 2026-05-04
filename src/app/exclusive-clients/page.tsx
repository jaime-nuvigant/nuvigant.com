import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ExclusiveClientsPage from "@/components/ExclusiveClientsPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/exclusive-clients'),

  title: "Página exclusiva clientes | Nuvigant",
  description: "Estás intentando acceder a una sección exclusiva para clientes.",
};

export default function Page() {
  return <ExclusiveClientsPage />;
}
