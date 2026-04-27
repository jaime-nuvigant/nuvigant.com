import type { Metadata } from "next";
import FormSubmittedISRPage from "@/components/FormSubmittedISRPage";

export const metadata: Metadata = {
  title: "Form Submitted ISR | Nuvigant",
  robots: { index: false },
};

export default function Page() {
  return <FormSubmittedISRPage />;
}
