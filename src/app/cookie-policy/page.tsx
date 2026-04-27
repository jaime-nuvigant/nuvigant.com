import type { Metadata } from "next";
import CookiePolicyPage from "@/components/CookiePolicyPage";

export const metadata: Metadata = {
  title: "Política de Cookies | Nuvigant",
  description: "Política de cookies de Nuvigant. Cuidamos mucho tu información.",
};

export default function Page() {
  return <CookiePolicyPage />;
}
