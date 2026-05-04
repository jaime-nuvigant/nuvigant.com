import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import VerifyEmailPendingPage from "@/components/VerifyEmailPendingPage";

const title = "Verify Email | Nuvigant";
const description = "Te hemos enviado un correo de verificación. Por favor revísalo para continuar.";
export const metadata: Metadata = {
  ...canonicalAlternates("/verify-email"),
  ...ogMetadataSpread({ title, description, pathname: "/verify-email" }),
  title,
  description,
};

export default function Page() {
  return <VerifyEmailPendingPage />;
}
