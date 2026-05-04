import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import TrabajaPage from "@/components/TrabajaPage";

const title = "Trabaja en Nuvigant";
const description = "Forma parte del equipo de Nuvigant. Buscamos personas talentosas apasionadas por la tecnología y el derecho para transformar la gestión notarial en México.";
export const metadata: Metadata = {
  ...canonicalAlternates("/trabaja-en-nuvigant"),
  ...ogMetadataSpread({ title, description, pathname: "/trabaja-en-nuvigant" }),
  title,
  description,
};

export default function Page() {
  return <TrabajaPage />;
}
