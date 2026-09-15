import type { ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { LEGAL_CONFIG } from "../data/legal";

export default function PolicyLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[var(--color-bg)] py-10 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-sm p-6 sm:p-10">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-sans font-semibold text-[var(--color-choc)] hover:text-[var(--color-accent)] transition-colors focus-ring rounded mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </a>

        <h1 className="font-sans font-extrabold text-2xl sm:text-3xl text-[var(--color-dark-choc)] mb-1">
          {title}
        </h1>
        <p className="text-xs font-sans text-[var(--color-choc)]/60 mb-8">
          Last updated: {LEGAL_CONFIG.lastUpdated}
        </p>

        <div className="prose-policy space-y-5 text-[var(--color-choc)] font-sans text-sm sm:text-base leading-relaxed">
          {children}
        </div>
      </div>
    </main>
  );
}
