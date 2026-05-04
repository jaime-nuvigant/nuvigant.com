import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ConvenioMichoacanPage from "@/components/ConvenioMichoacanPage";

const title = "Convenio Colegio de Notarios de Michoacán";
const description = "Nuvigant y el Colegio de Notarios de Michoacán presentan un convenio de colaboración para modernizar la gestión notarial en el estado.";
export const metadata: Metadata = {
  ...canonicalAlternates("/convenio-colegio-de-notarios-de-michoacan"),
  ...ogMetadataSpread({ title, description, pathname: "/convenio-colegio-de-notarios-de-michoacan" }),
  title,
  description,
};

export default function Page() {
  return <ConvenioMichoacanPage />;
}
