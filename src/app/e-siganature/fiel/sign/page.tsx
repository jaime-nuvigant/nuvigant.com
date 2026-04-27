import { Suspense } from "react";
import FielSignPage from "@/components/FielSignPage";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><p className="text-slate-400">Cargando...</p></div>}>
      <FielSignPage />
    </Suspense>
  );
}
