import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FinanceAgenciesPage from "@/components/FinanceAgenciesPage";

const title = "Finance Agencies | Nuvigant";
const description = "Controla tus proyectos, flujo y clientes en un solo lugar. Cumple con las leyes antilavado de manera automática.";
export const metadata: Metadata = {
  ...canonicalAlternates("/finance-agencies"),
  ...ogMetadataSpread({ title, description, pathname: "/finance-agencies" }),
  title,
  description,
};

export default function Page() {
  return <FinanceAgenciesPage />;
}
