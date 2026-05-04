import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import CookiePolicyPage from "@/components/CookiePolicyPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/cookie-policy'),

  title: "Política de Cookies | Nuvigant",
  description: "Política de cookies de Nuvigant. Cuidamos mucho tu información.",
};

export default function Page() {
  return <CookiePolicyPage />;
}
