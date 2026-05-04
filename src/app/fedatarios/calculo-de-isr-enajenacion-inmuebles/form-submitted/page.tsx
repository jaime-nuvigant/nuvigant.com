import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import FormSubmittedISRPage from "@/components/FormSubmittedISRPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/fedatarios/calculo-de-isr-enajenacion-inmuebles/form-submitted'),

  title: "Form Submitted ISR | Nuvigant",
  robots: { index: false },
};

export default function Page() {
  return <FormSubmittedISRPage />;
}
