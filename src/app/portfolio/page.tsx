import { Suspense } from "react";
import type { Metadata } from "next";
import { PortfolioClient } from "@/components/portfolio/portfolio-client";

export const metadata: Metadata = {
  title: "Our Portfolio | CBS Software",
  description: "Explore the custom software, mobile apps, web applications, and eCommerce solutions built by CBS Software.",
};

export default function PortfolioPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50/20 pt-36 flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
          <p className="text-sm font-medium text-slate-500">Loading CBS Portfolio...</p>
        </div>
      </div>
    }>
      <PortfolioClient />
    </Suspense>
  );
}
