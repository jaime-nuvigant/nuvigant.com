import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import NotariamasmasNuvigantPage from "@/components/NotariamasmasNuvigantPage";

const title = "Notaría++ | Nuvigant";
const description = "Estamos pasando por un cambio de imagen. Por favor lee las siguientes opciones y selecciona la que sea para ti.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/sistema-notarias/notariamasmas-nuvigant"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/sistema-notarias/notariamasmas-nuvigant" }),
  title,
  description,
};

export default function Page() {
  return <NotariamasmasNuvigantPage />;
}
