import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import PromotoresPage from "@/components/PromotoresPage";

const title = "Promotores — Gana vendiendo Nuvigant";
const description =
  "Programa para revendedores: comisiones claras hasta 20%, producto de automatización notarial con IA, PLD y administración en la nube. Únete al equipo Nuvigant.";

export const metadata: Metadata = {
  ...canonicalAlternates("/promotores"),
  ...ogMetadataSpread({ title, description, pathname: "/promotores" }),
  title,
  description,
};

export default function Page() {
  return <PromotoresPage />;
}
