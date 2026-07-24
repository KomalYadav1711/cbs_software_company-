import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PORTFOLIO_ITEMS } from "@/data/portfolio-items";
import { CaseStudyClient } from "@/components/portfolio/case-study-client";

interface CaseStudyPageProps {
  params: Promise<{ id: string }>;
}

// Pre-render all portfolio case study pages at build time
export async function generateStaticParams() {
  return PORTFOLIO_ITEMS.map((item) => ({ id: item.id }));
}

// Generate per-page metadata dynamically
export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const { id } = await params;
  const item = PORTFOLIO_ITEMS.find((p) => p.id === id);

  if (!item) {
    return {
      title: "Case Study Not Found | CBS Software",
    };
  }

  return {
    title: `${item.title} — Case Study | CBS Software`,
    description: item.shortDescription,
  };
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const item = PORTFOLIO_ITEMS.find((p) => p.id === id);

  if (!item) {
    notFound();
  }

  return <CaseStudyClient item={item} />;
}
