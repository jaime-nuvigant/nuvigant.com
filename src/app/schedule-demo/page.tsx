import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import ScheduleDemoPage from "@/components/ScheduleDemoPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/schedule-demo'),

  title: "Agenda tu Demo",
  description:
    "Agenda una demostración personalizada de Nuvigant y descubre cómo nuestra plataforma puede transformar la gestión de tu notaría.",
};

export default function Page() {
  return <ScheduleDemoPage />;
}
