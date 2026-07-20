"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, Mail, BookOpen, Sparkles, AlertCircle, RefreshCw, Loader2 } from "lucide-react";
import { Container } from "@/components/common/container";
import { BlogCard } from "@/components/common/blog-card";
import { DevToArticle, UnifiedBlogArticle, mapDevToArticle, mapBlogPost } from "@/lib/devto";
import { BLOG_POSTS } from "@/data/blog-posts";

const CATEGORIES = ["All", "Technology", "Development", "Design", "Business"];

// Skeleton Loader Card
function SkeletonCard() {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm animate-pulse">
      <div className="aspect-[16/10] w-full bg-slate-100" />
      <div className="p-6 space-y-3">
        <div className="flex gap-3">
          <div className="h-3 w-24 rounded-full bg-slate-100" />
          <div className="h-3 w-20 rounded-full bg-slate-100" />
        </div>
        <div className="h-4 w-full rounded bg-slate-100" />
        <div className="h-4 w-4/5 rounded bg-slate-100" />
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-3 w-3/4 rounded bg-slate-100" />
        <div className="pt-4 flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-slate-100" />
          <div className="h-3 w-24 rounded bg-slate-100" />
        </div>
      </div>
    </div>
  );
}

export default function BlogListingPage() {
  const [articles, setArticles] = useState<UnifiedBlogArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const loadArticles = useCallback(async () => {
    setLoading(true);
    setError(false);
    try {
      const res = await fetch("/api/blog");
      if (!res.ok) throw new Error("Failed");
      const data: DevToArticle[] = await res.json();
      
      const mappedDevTo = data.map(mapDevToArticle);
      const mappedLocal = BLOG_POSTS.map(mapBlogPost);
      
      const parseDate = (dStr: string) => {
        try {
          return new Date(dStr).getTime();
        } catch {
          return 0;
        }
      };

      const combined = [...mappedLocal, ...mappedDevTo].sort((a, b) => {
        return parseDate(b.publishedAt) - parseDate(a.publishedAt);
      });

      setArticles(combined);
    } catch {
      const mappedLocal = BLOG_POSTS.map(mapBlogPost);
      setArticles(mappedLocal);
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  // Filter logic
  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const category = article.category;
    const matchesCategory = activeCategory === "All" || category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const showFeatured = searchQuery === "" && activeCategory === "All" && !loading;
  const featuredArticle = showFeatured && articles.length > 0 ? articles[0] : null;
  const gridArticles = featuredArticle
    ? filteredArticles.filter((a) => a.id !== featuredArticle.id)
    : filteredArticles;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <main className="w-full bg-slate-50/30 text-slate-800 antialiased pt-28 pb-20">
      {/* ── Hero ── */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
        </div>
        <Container>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Sparkles className="h-4 w-4" />
              <span>Live from Dev.to · Updated Hourly</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Latest Tech Insights &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Industry Articles
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Real-time articles curated from the global developer community — covering AI, web development, cloud architecture, design systems, and more.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* ── Filter Bar ── */}
      <section className="py-5 bg-white border-y border-slate-100 sticky top-[88px] z-30 shadow-sm shadow-slate-100/30">
        <Container>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 -mx-5 px-5 md:mx-0 md:px-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative shrink-0 rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-300 focus:outline-none ${
                    activeCategory === cat
                      ? "text-white bg-blue-600 shadow-sm shadow-blue-500/20"
                      : "text-slate-500 hover:text-slate-800 bg-slate-50 hover:bg-slate-100"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Refresh button */}
              <button
                onClick={loadArticles}
                disabled={loading}
                className="flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-semibold text-slate-500 hover:text-blue-600 hover:border-blue-200 transition disabled:opacity-50"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
                {loading ? "Loading..." : "Refresh"}
              </button>

              {/* Search */}
              <div className="relative w-full md:max-w-xs">
                <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search articles, tags..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full rounded-full border border-slate-200 bg-slate-50/50 py-2 pl-10 pr-4 text-xs text-slate-800 placeholder-slate-400 outline-none transition-all focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Articles Grid ── */}
      <section className="py-16">
        <Container>
          {/* Loading State */}
          {loading && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          )}

          {/* Error State */}
          {error && !loading && (
            <div className="flex flex-col items-center justify-center text-center py-16 px-4 border border-slate-100 bg-white rounded-3xl">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-red-50 text-red-500 mb-4">
                <AlertCircle className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-lg font-bold text-slate-800">Couldn't load articles</h3>
              <p className="mt-2 text-sm text-slate-400 max-w-sm">
                There was a problem connecting to the article feed. Please check your connection and try again.
              </p>
              <button
                onClick={loadArticles}
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
              >
                <RefreshCw className="h-3.5 w-3.5" />
                Try Again
              </button>
            </div>
          )}

          {/* Content */}
          {!loading && !error && (
            <>
              {/* Featured Article */}
              {featuredArticle && (
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-16"
                >
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="group relative grid grid-cols-1 lg:grid-cols-12 overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:shadow-slate-100/50"
                  >
                    {/* Image */}
                    <div className="relative min-h-[280px] lg:col-span-7 overflow-hidden bg-slate-100">
                      {featuredArticle.coverImage && (
                        <img
                          src={featuredArticle.coverImage}
                          alt={featuredArticle.title}
                          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      )}
                      <span className="absolute top-6 left-6 rounded-full bg-blue-600 px-4 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white shadow-md">
                        Featured
                      </span>
                    </div>

                    {/* Details */}
                    <div className="flex flex-col justify-between p-8 sm:p-10 lg:col-span-5">
                      <div>
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                          {featuredArticle.category}
                        </span>
                        <h2 className="mt-4 font-heading text-xl sm:text-2xl font-extrabold leading-tight text-slate-800 transition-colors duration-200 group-hover:text-blue-600">
                          {featuredArticle.title}
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-slate-500 line-clamp-3">
                          {featuredArticle.description}
                        </p>
                      </div>
                      <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <img
                            src={featuredArticle.author.avatar}
                            alt={featuredArticle.author.name}
                            className="h-10 w-10 rounded-full object-cover border border-slate-100"
                          />
                          <div>
                            <p className="text-xs font-bold text-slate-700 leading-none">{featuredArticle.author.name}</p>
                            <p className="text-[10px] text-slate-400 mt-1">
                              {featuredArticle.author.username ? `@${featuredArticle.author.username}` : featuredArticle.author.role}
                            </p>
                          </div>
                        </div>
                        <span className="text-xs font-semibold text-blue-600 flex items-center gap-1.5">
                          Read Article →
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )}

              {/* Grid */}
              <AnimatePresence mode="popLayout">
                {gridArticles.length > 0 ? (
                  <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {gridArticles.map((article, idx) => (
                      <BlogCard key={article.id} article={article} index={idx} />
                    ))}
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-16 border border-slate-100 bg-white rounded-3xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-500 mb-4">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-800">No articles found</h3>
                    <p className="mt-2 text-sm text-slate-400 max-w-sm">
                      Try a different search or category filter.
                    </p>
                    <button
                      onClick={() => { setSearchQuery(""); setActiveCategory("All"); }}
                      className="mt-6 rounded-full bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-blue-700 transition"
                    >
                      Clear Filters
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </Container>
      </section>

      {/* ── Newsletter CTA ── */}
      <section className="mt-12">
        <Container>
          <div className="relative overflow-hidden rounded-3xl bg-slate-900 text-white p-8 sm:p-12 lg:p-16 border border-slate-800 shadow-xl shadow-slate-950/20">
            <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-indigo-600/10 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-blue-600/10 blur-[100px]" />
            <div className="relative max-w-2xl mx-auto text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400 mb-6 border border-blue-500/20">
                <BookOpen className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
                Stay Ahead of the Curve
              </h2>
              <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed">
                Subscribe to our newsletter for curated tech articles, digital strategy insights, and CBS Software updates — straight to your inbox.
              </p>
              {subscribed ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="mt-8 rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4 text-sm font-semibold text-blue-400"
                >
                  🎉 You're subscribed! Welcome to the CBS knowledge hub.
                </motion.div>
              ) : (
                <form onSubmit={handleSubscribe} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      required
                      placeholder="Enter your work email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/50 py-3 pl-11 pr-4 text-xs text-white placeholder-slate-500 outline-none ring-blue-500/30 transition focus:border-blue-500 focus:ring-3"
                    />
                  </div>
                  <button
                    type="submit"
                    className="rounded-xl bg-blue-600 hover:bg-blue-700 px-6 py-3 text-xs font-bold text-white shadow-lg shadow-blue-600/10 transition-all active:translate-y-px"
                  >
                    Subscribe Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
