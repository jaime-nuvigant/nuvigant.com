import { Suspense } from "react";
import ConstanciasPage from "@/components/ConstanciasPage";

export default function Page() {
  return (
    <Suspense>
      <ConstanciasPage />
    </Suspense>
  );
}
