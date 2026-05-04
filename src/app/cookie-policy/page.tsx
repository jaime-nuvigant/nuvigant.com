import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import CookiePolicyPage from "@/components/CookiePolicyPage";

const title = "Política de Cookies | Nuvigant";
const description = "Política de cookies de Nuvigant. Cuidamos mucho tu información.";
export const metadata: Metadata = {
  ...canonicalAlternates("/cookie-policy"),
  ...ogMetadataSpread({ title, description, pathname: "/cookie-policy" }),
  title,
  description,
};

export default function Page() {
  return <CookiePolicyPage />;
}
