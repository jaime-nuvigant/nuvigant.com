import type { Metadata } from "next";
import { canonicalAlternates, ogMetadataSpread } from "@/lib/canonical-metadata";
import FormSubmittedISRPage from "@/components/FormSubmittedISRPage";

const title = "Form Submitted ISR | Nuvigant";
const description =
  "Confirmación de envío del formulario de cálculo de ISR por enajenación de inmuebles en Nuvigant.";
export const metadata: Metadata = {
  ...canonicalAlternates("/fedatarios/calculo-de-isr-enajenacion-inmuebles/form-submitted"),
  ...ogMetadataSpread({ title, description, pathname: "/fedatarios/calculo-de-isr-enajenacion-inmuebles/form-submitted" }),
  title,
  description,
  robots: { index: false },
};

export default function Page() {
  return <FormSubmittedISRPage />;
}
