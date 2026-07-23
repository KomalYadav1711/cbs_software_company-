"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, Clock, User, Folder, CheckCircle2, Lock, Tag } from "lucide-react";
import { PortfolioItem } from "@/data/portfolio-items";

interface ProjectDrawerProps {
  item: PortfolioItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectDrawer({ item, isOpen, onClose }: ProjectDrawerProps) {
  // Lock background scroll when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!item) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex justify-end">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm cursor-pointer"
          />

          {/* Sliding Panel */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 180 }}
            className="relative z-10 flex h-full w-full max-w-3xl flex-col bg-white shadow-2xl overflow-y-auto"
          >
            {/* Header Sticky Bar */}
            <div className="sticky top-0 z-20 flex items-center justify-between border-b border-slate-100 bg-white/90 backdrop-blur-md px-6 py-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                  <Folder className="h-4.5 w-4.5" />
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Case Study
                </span>
              </div>
              <button
                onClick={onClose}
                className="group flex h-9 w-9 items-center justify-center rounded-full border border-slate-100 bg-white text-slate-400 shadow-sm transition-all duration-200 hover:border-slate-200 hover:bg-slate-50 hover:text-slate-700 focus:outline-none"
                aria-label="Close drawer"
              >
                <X className="h-4.5 w-4.5 transition-transform duration-200 group-hover:rotate-90" />
              </button>
            </div>

            {/* Content Container */}
            <div className="flex-1 pb-16">
              {/* Hero Image Section */}
              <div className="relative aspect-[16/8] w-full overflow-hidden bg-slate-900">
                <img
                  src={item.coverImage}
                  alt={item.title}
                  className="h-full w-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/40 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="inline-block rounded-full bg-blue-500/20 border border-blue-500/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-300">
                    {item.category}
                  </span>
                  <h2 className="mt-3 font-heading text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                    {item.title}
                  </h2>
                </div>
              </div>

              {/* Main Grid Details */}
              <div className="px-6 py-8 md:px-8">
                {/* Metrics Highlights */}
                <div className="grid grid-cols-3 gap-4 rounded-2xl border border-slate-100 bg-slate-50/50 p-5 mb-8">
                  {item.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="font-heading text-xl md:text-2xl font-black text-blue-600">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-[11px] md:text-xs font-semibold text-slate-500 uppercase tracking-wide">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                  {/* Left Column: Challenge, Solution, Outcome */}
                  <div className="space-y-8 lg:col-span-8">
                    {/* Challenge Section */}
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 border-l-3 border-rose-500 pl-3">
                        The Challenge
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.challenge}
                      </p>
                    </div>

                    {/* Solution Section */}
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 border-l-3 border-blue-500 pl-3">
                        Our Solution
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.solution}
                      </p>
                    </div>

                    {/* Results Section */}
                    <div>
                      <h3 className="font-heading text-lg font-bold text-slate-900 border-l-3 border-emerald-500 pl-3">
                        The Outcome
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-slate-600">
                        {item.results}
                      </p>
                    </div>
                  </div>

                  {/* Right Column: Metadata & Features */}
                  <div className="space-y-6 lg:col-span-4 border-t border-slate-100 pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-slate-100 lg:pl-6">
                    {/* Project Metadata */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <User className="h-4 w-4 text-slate-400 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Client</p>
                          <p className="font-semibold text-slate-700 mt-1">{item.client}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 text-xs text-slate-500">
                        <Clock className="h-4 w-4 text-slate-400 shrink-0" />
                        <div>
                          <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Duration</p>
                          <p className="font-semibold text-slate-700 mt-1">{item.duration}</p>
                        </div>
                      </div>
                    </div>

                    {/* Tech Badges */}
                    <div>
                      <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900">
                        <Tag className="h-3.5 w-3.5 text-blue-500" />
                        Technologies
                      </h4>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {item.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-blue-100 hover:bg-blue-50/20 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Features checklist */}
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                        Key Features
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {item.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-normal">
                            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Links */}
                    <div className="pt-4">
                      {item.confidential ? (
                        <div className="flex items-center justify-center gap-2 rounded-xl bg-slate-50 border border-slate-100 p-3.5 text-center text-xs font-medium text-slate-400">
                          <Lock className="h-4 w-4" />
                          <span>Enterprise Code Confidential</span>
                        </div>
                      ) : (
                        item.liveUrl && (
                          <a
                            href={item.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-bold text-white shadow-md shadow-blue-200/50 hover:bg-blue-700 transition-colors hover:shadow-lg hover:shadow-blue-200/80 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                          >
                            <span>Launch Live Project</span>
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
