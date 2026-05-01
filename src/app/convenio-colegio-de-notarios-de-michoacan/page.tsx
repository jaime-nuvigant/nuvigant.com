import type { Metadata } from "next";
import ConvenioMichoacanPage from "@/components/ConvenioMichoacanPage";

export const metadata: Metadata = {
  title: "Convenio Colegio de Notarios de Michoacán",
  description:
    "Nuvigant y el Colegio de Notarios de Michoacán presentan un convenio de colaboración para modernizar la gestión notarial en el estado.",
};

export default function Page() {
  return <ConvenioMichoacanPage />;
}
