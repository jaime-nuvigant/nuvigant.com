import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import EmailVerifiedPage from "@/components/EmailVerifiedPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/email-verified'),

  title: "Email Verificado | Nuvigant",
};

export default function Page() {
  return <EmailVerifiedPage />;
}
