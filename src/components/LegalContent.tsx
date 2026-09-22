import { type ReactNode } from "react";

export function LegalContent({ children }: { children: ReactNode }) {
  return (
    <div className="prose-body max-w-3xl space-y-6 [&_h2]:pt-6 [&_h2]:font-display [&_h2]:text-xl [&_h2]:font-medium [&_h2]:text-ink [&_li]:ml-5 [&_li]:list-disc [&_ol]:space-y-2 [&_ul]:space-y-2">
      {children}
    </div>
  );
}
