import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import EmailVerifiedPage from "@/components/EmailVerifiedPage";

const title = "Email Verificado | Nuvigant";
const description = "Página de Nuvigant: Email Verificado | Nuvigant";
export const metadata: Metadata = {
  ...canonicalAlternates("/email-verified"),
  ...ogMetadataSpread({ title, description, pathname: "/email-verified" }),
  title,
  description,
};

export default function Page() {
  return <EmailVerifiedPage />;
}
