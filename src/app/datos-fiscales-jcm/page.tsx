import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import DatosFiscalesJCMPage from "@/components/DatosFiscalesJCMPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/datos-fiscales-jcm'),

  title: "Datos Fiscales | JCM | Nuvigant",
};

export default function Page() {
  return <DatosFiscalesJCMPage />;
}
