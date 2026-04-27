import type { Metadata } from "next";
import EmailVerifiedPage from "@/components/EmailVerifiedPage";

export const metadata: Metadata = {
  title: "Email Verificado | Nuvigant",
};

export default function Page() {
  return <EmailVerifiedPage />;
}
