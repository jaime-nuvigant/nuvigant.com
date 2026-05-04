import "highlight.js/styles/github.css";
import type { ReactNode } from "react";

/** ISR: refresh blog index and posts periodically without a full redeploy. */
export const revalidate = 86400;

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
