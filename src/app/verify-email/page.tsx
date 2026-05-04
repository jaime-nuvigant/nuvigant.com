import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import VerifyEmailPendingPage from "@/components/VerifyEmailPendingPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/verify-email'),

  title: "Verify Email | Nuvigant",
  description: "Te hemos enviado un correo de verificación. Por favor revísalo para continuar.",
};

export default function Page() {
  return <VerifyEmailPendingPage />;
}
