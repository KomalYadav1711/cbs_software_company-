"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, User, Folder, CheckCircle2, Lock, Tag, ExternalLink, ArrowRight } from "lucide-react";
import { Container } from "@/components/common/container";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { PortfolioItem, PORTFOLIO_ITEMS } from "@/data/portfolio-items";

interface CaseStudyClientProps {
  item: PortfolioItem;
}

export function CaseStudyClient({ item }: CaseStudyClientProps) {
  // Exclude current project from "More Case Studies"
  const otherCaseStudies = PORTFOLIO_ITEMS.filter((p) => p.id !== item.id).slice(0, 3);

  return (
    <main className="w-full bg-slate-50/20 text-slate-800 antialiased pt-28 pb-20">
      {/* ─── Hero ─────────────────────────────────── */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        {/* Blurred cover image as background */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={item.coverImage}
            alt={item.title}
            className="h-full w-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-slate-900" />
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
        </div>

        <Container>
          <div className="relative max-w-4xl">
            {/* Back link */}
            <Link
              href="/portfolio"
              className="group/back inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition duration-200 mb-8"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover/back:-translate-x-1" />
              Back to Portfolio
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Folder className="h-4 w-4" />
              <span>{item.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight"
            >
              {item.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-sm text-slate-300 leading-relaxed max-w-2xl"
            >
              {item.shortDescription}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-3 text-[11px] font-bold uppercase tracking-wider text-slate-500"
            >
              Client: {item.client} &nbsp;·&nbsp; Duration: {item.duration}
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ─── KPI Metrics ──────────────────────────── */}
      <section className="py-10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-px rounded-3xl border border-slate-100 bg-slate-100 overflow-hidden shadow-sm"
          >
            {item.metrics.map((metric, i) => (
              <div
                key={i}
                className="bg-white px-8 py-8 text-center flex flex-col items-center justify-center gap-2"
              >
                <p className="font-heading text-4xl font-black text-blue-600 tracking-tight">
                  {metric.value}
                </p>
                <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest">
                  {metric.label}
                </p>
              </div>
            ))}
          </motion.div>
        </Container>
      </section>

      {/* ─── Main Content ─────────────────────────── */}
      <section className="py-8">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Left: Narrative */}
            <div className="space-y-8 lg:col-span-8">
              {/* Challenge */}
              <ScrollReveal direction="up" delay={0.05}>
                <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-8 w-1.5 rounded-full bg-rose-500 shrink-0" />
                    <h2 className="font-heading text-xl font-bold text-slate-900">
                      The Challenge
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-slate-600">
                    {item.challenge}
                  </p>
                </div>
              </ScrollReveal>

              {/* Solution */}
              <ScrollReveal direction="up" delay={0.1}>
                <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-8 w-1.5 rounded-full bg-blue-500 shrink-0" />
                    <h2 className="font-heading text-xl font-bold text-slate-900">
                      Our Solution
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-slate-600">
                    {item.solution}
                  </p>
                </div>
              </ScrollReveal>

              {/* Outcome */}
              <ScrollReveal direction="up" delay={0.15}>
                <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="h-8 w-1.5 rounded-full bg-emerald-500 shrink-0" />
                    <h2 className="font-heading text-xl font-bold text-slate-900">
                      The Outcome
                    </h2>
                  </div>
                  <p className="text-sm md:text-base leading-relaxed text-slate-600">
                    {item.results}
                  </p>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32 bg-white rounded-3xl border border-slate-100 p-7 shadow-sm space-y-7">
                {/* Meta */}
                <div className="space-y-4 pb-6 border-b border-slate-100">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                      <User className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Client</p>
                      <p className="font-semibold text-slate-800 mt-1.5 text-sm">{item.client}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-slate-400">
                      <Clock className="h-4 w-4" />
                    </span>
                    <div>
                      <p className="text-[10px] uppercase font-bold text-slate-400 leading-none">Duration</p>
                      <p className="font-semibold text-slate-800 mt-1.5 text-sm">{item.duration}</p>
                    </div>
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    <Tag className="h-3.5 w-3.5 text-blue-500" />
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {item.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-lg border border-slate-100 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600 hover:border-blue-100 hover:bg-blue-50/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {item.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-emerald-500 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="pt-2">
                  {item.confidential ? (
                    <div className="flex items-center justify-center gap-2 rounded-2xl bg-slate-50 border border-slate-100 p-4 text-center text-xs font-medium text-slate-400">
                      <Lock className="h-4 w-4" />
                      <span>Enterprise Confidential</span>
                    </div>
                  ) : (
                    item.liveUrl && (
                      <a
                        href={item.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-4 text-xs font-bold text-white shadow-lg shadow-blue-200/60 hover:bg-blue-700 transition-all hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
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
        </Container>
      </section>

      {/* ─── More Case Studies ────────────────────── */}
      <section className="py-16 mt-8 border-t border-slate-100 bg-slate-50/60">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Explore More</span>
              <h2 className="font-heading text-2xl md:text-3xl font-extrabold text-slate-900 mt-1 tracking-tight">
                Other Success Stories
              </h2>
            </div>
            <Link
              href="/portfolio"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-700 transition shrink-0"
            >
              View All Case Studies <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {otherCaseStudies.map((study, idx) => (
              <ScrollReveal key={study.id} direction="up" delay={idx * 0.08}>
                <Link
                  href={`/portfolio/${study.id}`}
                  className="group flex flex-col h-full overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-slate-100"
                >
                  {/* Cover */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100">
                    <img
                      src={study.coverImage}
                      alt={study.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <span className="absolute top-3 left-3 rounded-full bg-slate-900/70 backdrop-blur-sm px-3 py-0.5 text-[9px] font-bold uppercase tracking-wider text-white border border-white/10">
                      {study.category}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="flex flex-1 flex-col p-5">
                    <span className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
                      {study.client}
                    </span>
                    <h3 className="mt-1.5 font-heading text-sm font-bold text-slate-900 transition-colors group-hover:text-blue-600 line-clamp-1">
                      {study.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-relaxed text-slate-500 line-clamp-2 flex-1">
                      {study.shortDescription}
                    </p>

                    {/* Prime metric */}
                    <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between">
                      <div>
                        <p className="font-heading text-base font-black text-blue-600 leading-none">
                          {study.metrics[0].value}
                        </p>
                        <p className="text-[9px] font-bold uppercase tracking-wider text-slate-400 mt-0.5">
                          {study.metrics[0].label}
                        </p>
                      </div>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-500 transition-all group-hover:bg-blue-600 group-hover:text-white">
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── CTA Banner ───────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/3 w-72 h-72 rounded-full bg-blue-600/10 blur-[80px]" />
          <div className="absolute bottom-0 right-1/3 w-72 h-72 rounded-full bg-indigo-600/10 blur-[80px]" />
        </div>
        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal direction="up" delay={0.05}>
              <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight">
                Ready to Be Our Next Success Story?
              </h2>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.15}>
              <p className="mt-5 text-sm text-slate-300 leading-relaxed">
                Let's build something extraordinary together. Talk to our team about your project goals.
              </p>
            </ScrollReveal>
            <ScrollReveal direction="up" delay={0.25}>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-xs font-bold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-700 hover:shadow-xl transition-all"
                >
                  Start Your Project <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-xs font-bold text-slate-200 hover:bg-white/10 hover:text-white transition-all"
                >
                  Explore Services
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </main>
  );
}
