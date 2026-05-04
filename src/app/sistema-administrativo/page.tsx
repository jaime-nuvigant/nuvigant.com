import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import { redirect } from "next/navigation";

const title = "Sistema administrativo";
const description = "Esta URL redirige a la página principal de Nuvigant.";

export const metadata: Metadata = {
  ...canonicalAlternates("/sistema-administrativo"),
  ...ogMetadataSpread({ title, description, pathname: "/sistema-administrativo" }),
  title,
  description,
  robots: { index: false, follow: false },
};

export default function Page() {
  redirect("/");
}
