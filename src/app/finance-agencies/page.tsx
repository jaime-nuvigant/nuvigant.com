import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FinanceAgenciesPage from "@/components/FinanceAgenciesPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/finance-agencies'),

  title: "Finance Agencies | Nuvigant",
  description:
    "Controla tus proyectos, flujo y clientes en un solo lugar. Cumple con las leyes antilavado de manera automática.",
};

export default function Page() {
  return <FinanceAgenciesPage />;
}
