import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import { Suspense } from "react";
import ConstanciasPage from "@/components/ConstanciasPage";

const title = "Constancias Webinar PLD 2025";
const description = "Descarga tu constancia de participación del Webinar PLD 2025 para Notarios.";
export const metadata: Metadata = {
  ...canonicalAlternates("/constancias-webinar-pld-2025"),
  ...ogMetadataSpread({ title, description, pathname: "/constancias-webinar-pld-2025" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense>
      <ConstanciasPage />
    </Suspense>
  );
}
