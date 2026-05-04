import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import ImplementationPage from "@/components/ImplementationPage";

const title = "Tips de Implementación | Nuvigant";
const description = "Aquí encontrarás varias medidas y sugerencias que hemos visto que sirven al momento de implementar nuestra aplicación en tu operación.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/implementation"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/implementation" }),
  title,
  description,
};

export default function Page() {
  return <ImplementationPage />;
}
