"use client";

import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, ArrowRight, FolderOpen, AlertCircle, ShieldAlert, Sparkles } from "lucide-react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { Button } from "@/components/ui/button";
import { PORTFOLIO_ITEMS, PortfolioItem } from "@/data/portfolio-items";
import { ProjectDrawer } from "./project-drawer";

const CATEGORIES = [
  "All",
  "Custom Software",
  "Web Development",
  "Mobile Apps",
  "eCommerce Solutions",
  "Digital Marketing"
];

export function PortfolioClient() {
  const searchParams = useSearchParams();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProject, setActiveProject] = useState<PortfolioItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Sync state from query parameters on mount or parameter changes
  useEffect(() => {
    const projectSlug = searchParams.get("project");
    if (projectSlug) {
      const match = PORTFOLIO_ITEMS.find((item) => item.id === projectSlug);
      if (match) {
        setActiveProject(match);
        setIsDrawerOpen(true);
      }
    }
  }, [searchParams]);

  // Update URL parameter when active project changes
  const handleOpenDrawer = (item: PortfolioItem) => {
    setActiveProject(item);
    setIsDrawerOpen(true);

    const params = new URLSearchParams(window.location.search);
    params.set("project", item.id);
    const newUrl = `${window.location.pathname}?${params.toString()}`;
    window.history.pushState({ path: newUrl }, "", newUrl);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
    
    // Clean query parameter
    const params = new URLSearchParams(window.location.search);
    params.delete("project");
    const newUrl = window.location.pathname;
    window.history.pushState({ path: newUrl }, "", newUrl);

    // Keep activeProject temporarily to avoid immediate layout pop on animation exit
    setTimeout(() => {
      if (!isDrawerOpen) setActiveProject(null);
    }, 300);
  };

  // Filtered portfolio items
  const filteredItems = useMemo(() => {
    return PORTFOLIO_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;

      const cleanQuery = searchQuery.trim().toLowerCase();
      const matchesSearch =
        cleanQuery === "" ||
        item.title.toLowerCase().includes(cleanQuery) ||
        item.client.toLowerCase().includes(cleanQuery) ||
        item.shortDescription.toLowerCase().includes(cleanQuery) ||
        item.technologies.some((tech) => tech.toLowerCase().includes(cleanQuery));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="w-full bg-slate-50/20 text-slate-800 antialiased pt-28">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
        </div>

        <Container>
          <div className="max-w-4xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Sparkles className="h-4 w-4" />
              <span>Our Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Case Studies &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Client Success Stories
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
            >
              Explore our portfolio of tailored solutions, high-performance web products, secure fintech applications, and conversion-focused growth campaigns.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Interactive Controls (Filters & Search) */}
      <section className="py-12 border-b border-slate-100 bg-white sticky top-[88px] z-30 shadow-sm shadow-slate-100/30">
        <Container>
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`relative rounded-full px-4 py-2 text-xs font-semibold transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-slate-500 hover:bg-slate-100 hover:text-slate-800"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 rounded-full bg-blue-600 shadow-md shadow-blue-200/50"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full max-w-sm shrink-0">
              <span className="absolute inset-y-0 left-3 flex items-center text-slate-400">
                <Search className="h-4 w-4" />
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, client, tech..."
                className="w-full rounded-full border border-slate-200 bg-slate-50/50 py-2.5 pl-10 pr-4 text-xs text-slate-700 outline-none transition-all placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Projects Grid Section */}
      <section className="py-20">
        <Container>
          <AnimatePresence mode="popLayout">
            {filteredItems.length > 0 ? (
              <motion.div
                layout
                className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
              >
                {filteredItems.map((item, index) => (
                  <motion.article
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: index * 0.04 }}
                    key={item.id}
                    onClick={() => handleOpenDrawer(item)}
                    className="group flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-100/80 cursor-pointer"
                  >
                    {/* Visual Cover */}
                    <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-50">
                      <img
                        src={item.coverImage}
                        alt={item.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <span className="absolute top-4 left-4 rounded-full bg-slate-900/75 backdrop-blur-md px-3.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white border border-white/10">
                        {item.category}
                      </span>
                    </div>

                    {/* Content Area */}
                    <div className="flex flex-1 flex-col p-6">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.client}
                      </span>
                      <h3 className="mt-2 font-heading text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600 line-clamp-1">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-xs leading-relaxed text-slate-500 line-clamp-2">
                        {item.shortDescription}
                      </p>

                      {/* Prime Metric Highlight */}
                      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                        <div>
                          <p className="font-heading text-lg font-black text-blue-600 leading-none">
                            {item.metrics[0].value}
                          </p>
                          <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-1">
                            {item.metrics[0].label}
                          </p>
                        </div>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      </div>

                      {/* Tech Stack Previews */}
                      <div className="mt-4 flex flex-wrap gap-1">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="rounded bg-slate-50 px-2 py-0.5 text-[9px] font-semibold text-slate-500 border border-slate-100"
                          >
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="rounded bg-slate-50 px-2 py-0.5 text-[9px] font-semibold text-slate-400 border border-slate-100">
                            +{item.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </motion.article>
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200 p-16 text-center"
              >
                <FolderOpen className="h-10 w-10 text-slate-300" />
                <h3 className="mt-4 font-heading text-base font-bold text-slate-800">
                  No projects found
                </h3>
                <p className="mt-2 text-xs text-slate-400 max-w-sm">
                  We couldn't find any case studies matching "{searchQuery}" under "{selectedCategory}". Try clearing search keywords or choosing a different filter.
                </p>
                <Button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                  }}
                  className="mt-6 text-xs"
                  variant="outline"
                >
                  Reset Filters
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </Container>
      </section>

      {/* CTA Bottom Banner */}
      <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[300px] h-[300px] rounded-full bg-blue-600/10 blur-[80px]" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] rounded-full bg-indigo-600/10 blur-[80px]" />
        </div>

        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <ScrollReveal direction="up" delay={0.1}>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Build Your Success Story?
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.2}>
              <p className="mt-6 text-sm sm:text-base text-slate-300 leading-relaxed">
                Partner with CBS Software to build custom, secure, and future-ready digital platforms that scale your business.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.3}>
              <div className="mt-8 flex justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/30 transition-all focus:outline-none"
                >
                  <span>Start Your Project</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all focus:outline-none"
                >
                  <span>Explore Services</span>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* Slide-over details drawer */}
      <ProjectDrawer
        item={activeProject}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />
    </main>
  );
}
