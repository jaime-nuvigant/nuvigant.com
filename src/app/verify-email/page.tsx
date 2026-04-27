import type { Metadata } from "next";
import VerifyEmailPendingPage from "@/components/VerifyEmailPendingPage";

export const metadata: Metadata = {
  title: "Verify Email | Nuvigant",
  description: "Te hemos enviado un correo de verificación. Por favor revísalo para continuar.",
};

export default function Page() {
  return <VerifyEmailPendingPage />;
}
