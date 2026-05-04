import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FormPage from "@/components/FormPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/form'),

  title: "Contacto | Nuvigant",
};

export default function Page() {
  return <FormPage />;
}
