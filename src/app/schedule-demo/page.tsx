import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ScheduleDemoPage from "@/components/ScheduleDemoPage";

const title = "Agenda tu Demo";
const description =
  "Agenda una demostración personalizada de Nuvigant y descubre cómo nuestra plataforma puede transformar la gestión de tu notaría.";

export const metadata: Metadata = {
  ...canonicalAlternates("/schedule-demo"),
  ...ogMetadataSpread({ title, description, pathname: "/schedule-demo" }),
  title,
  description,
};

export default function Page() {
  return <ScheduleDemoPage />;
}
