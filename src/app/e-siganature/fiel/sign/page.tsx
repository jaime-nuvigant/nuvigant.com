import type { Metadata } from "next";
import { canonicalAlternates } from "@/lib/canonical-metadata";
import { Suspense } from "react";
import FielSignPage from "@/components/FielSignPage";

export const metadata: Metadata = {
  ...canonicalAlternates('/e-siganature/fiel/sign'),

  title: "Firmar con FIEL",
  description:
    "Firma documentos electrónicamente con tu FIEL de manera segura y con plena validez legal en México.",
};

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-slate-400">Cargando...</p></div>}>
      <FielSignPage />
    </Suspense>
  );
}
