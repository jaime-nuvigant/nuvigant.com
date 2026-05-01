import type { Metadata } from "next";
import { Suspense } from "react";
import ConstanciasPage from "@/components/ConstanciasPage";

export const metadata: Metadata = {
  title: "Constancias Webinar PLD 2025",
  description: "Descarga tu constancia de participación del Webinar PLD 2025 para Notarios.",
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <Suspense>
      <ConstanciasPage />
    </Suspense>
  );
}
