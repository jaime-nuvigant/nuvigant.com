import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FormPage from "@/components/FormPage";

const title = "Contacto | Nuvigant";
const description = "Página de Nuvigant: Contacto | Nuvigant";
export const metadata: Metadata = {
  ...canonicalAlternates("/form"),
  ...ogMetadataSpread({ title, description, pathname: "/form" }),
  title,
  description,
};

export default function Page() {
  return <FormPage />;
}
