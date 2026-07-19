"use client";

import { use, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2, Check, Send } from "lucide-react";
import { Container } from "@/components/common/container";
import { BLOG_POSTS } from "@/data/blog-posts";
import { BlogCard } from "@/components/common/blog-card";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default function BlogPostDetailPage({ params }: BlogPostPageProps) {
  const { slug } = use(params);
  const [copied, setCopied] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  // Find current post
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return (
      <main className="w-full bg-slate-50/30 min-h-screen pt-36 pb-20 text-center">
        <Container>
          <div className="max-w-md mx-auto bg-white border border-slate-100 p-10 rounded-3xl shadow-sm">
            <h1 className="font-heading text-2xl font-extrabold text-slate-800">Article Not Found</h1>
            <p className="mt-4 text-sm text-slate-500 leading-relaxed">
              We're sorry, but the article you are looking for does not exist or has been moved to another URL.
            </p>
            <Link
              href="/blog"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-sm hover:bg-blue-700 transition"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </Container>
      </main>
    );
  }

  // Get related posts (same category, or just other posts, capped at 3)
  const relatedPosts = BLOG_POSTS.filter((p) => p.slug !== post.slug)
    .sort((a, b) => {
      if (a.category === post.category && b.category !== post.category) return -1;
      if (a.category !== post.category && b.category === post.category) return 1;
      return 0;
    })
    .slice(0, 3);

  const handleCopyLink = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
      setNewsletterEmail("");
    }
  };

  const getCategoryStyles = (category: string) => {
    switch (category.toLowerCase()) {
      case "technology":
        return "from-cyan-500 to-blue-500 text-white";
      case "design":
        return "from-pink-500 to-rose-500 text-white";
      case "development":
        return "from-emerald-500 to-teal-500 text-white";
      case "business":
        return "from-violet-500 to-indigo-500 text-white";
      default:
        return "from-slate-500 to-slate-700 text-white";
    }
  };

  return (
    <main className="w-full bg-slate-50/20 text-slate-800 antialiased pt-28 pb-20">
      {/* Blog Detail Header */}
      <section className="py-12 bg-white border-b border-slate-100">
        <Container>
          {/* Back button */}
          <Link
            href="/blog"
            className="group/back inline-flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-blue-600 transition duration-200 mb-8"
          >
            <ArrowLeft className="h-4 w-4 transition-transform duration-200 group-hover/back:-translate-x-1" />
            Back to Articles
          </Link>

          {/* Post Header */}
          <div className="max-w-4xl">
            <span className={`inline-block rounded-full bg-gradient-to-r px-4 py-1 text-[10px] font-bold uppercase tracking-wider shadow-sm ${getCategoryStyles(post.category)}`}>
              {post.category}
            </span>

            <h1 className="mt-6 font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-slate-900">
              {post.title}
            </h1>

            {/* Metadata and Author profile */}
            <div className="mt-8 flex flex-wrap items-center gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-3">
                <img
                  src={post.author.avatar}
                  alt={post.author.name}
                  className="h-11 w-11 rounded-full object-cover border border-slate-100 shadow-sm"
                />
                <div>
                  <p className="text-sm font-bold text-slate-800 leading-none">{post.author.name}</p>
                  <p className="text-xs text-slate-400 mt-1">{post.author.role}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-medium text-slate-400 sm:ml-auto">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.publishedAt}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-slate-300" />
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Area */}
      <section className="py-12">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Column */}
            <div className="lg:col-span-8">
              {/* Cover Image */}
              <div className="relative aspect-[16/9] w-full overflow-hidden rounded-3xl border border-slate-100 bg-slate-100 shadow-lg shadow-slate-100/50 mb-10">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Styled Post content */}
              <div
                className="blog-content text-slate-700"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share & Tags Section */}
              <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-slate-50 border border-slate-100 px-3 py-1 text-xs font-semibold text-slate-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Share Actions */}
                <div className="flex items-center gap-3">
                  <span className="text-xs font-bold text-slate-400">Share:</span>
                  <button
                    onClick={handleCopyLink}
                    className="flex h-9 items-center justify-center rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 text-slate-500 hover:text-blue-600 px-3 text-xs font-bold transition-all duration-200"
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4 text-emerald-500 mr-1" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Share2 className="h-4 w-4 mr-1" />
                        Copy Link
                      </>
                    )}
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 text-slate-500 hover:text-blue-600 transition-all duration-200" aria-label="Share on X">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 hover:bg-blue-50 border border-slate-100 text-slate-500 hover:text-blue-600 transition-all duration-200" aria-label="Share on LinkedIn">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar Column */}
            <div className="lg:col-span-4 space-y-8">
              {/* Author Card */}
              <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <h3 className="font-heading text-sm font-bold text-slate-800 mb-4">About the Author</h3>
                <div className="flex items-start gap-4">
                  <img
                    src={post.author.avatar}
                    alt={post.author.name}
                    className="h-12 w-12 rounded-full object-cover border border-slate-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-slate-800 leading-tight">{post.author.name}</h4>
                    <p className="text-xs text-slate-400 mt-1">{post.author.role} at CBS</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                  A professional dedicated to designing and delivering state-of-the-art technological solutions that empower and scale modern businesses.
                </p>
              </div>

              {/* Newsletter widget */}
              <div className="rounded-3xl border border-slate-100 bg-slate-900 text-white p-6 shadow-sm relative overflow-hidden">
                <div className="absolute -right-12 -bottom-12 w-32 h-32 rounded-full bg-blue-600/10 blur-2xl" />
                <h3 className="font-heading text-sm font-bold leading-tight relative z-10">Subscribe to updates</h3>
                <p className="mt-2 text-xs text-slate-300 leading-relaxed relative z-10">
                  Stay updated with our technical deep dives and strategy pieces.
                </p>
                {subscribed ? (
                  <div className="mt-4 rounded-xl bg-blue-500/10 border border-blue-500/20 p-3 text-[11px] font-semibold text-blue-400 text-center">
                    Subscribed successfully!
                  </div>
                ) : (
                  <form onSubmit={handleSubscribe} className="mt-4 space-y-2 relative z-10">
                    <input
                      type="email"
                      required
                      placeholder="Your email address"
                      value={newsletterEmail}
                      onChange={(e) => setNewsletterEmail(e.target.value)}
                      className="w-full rounded-xl border border-slate-800 bg-slate-950/40 py-2.5 px-3.5 text-xs text-white placeholder-slate-500 outline-none ring-blue-500/30 transition focus:border-blue-500"
                    />
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-1.5 rounded-xl bg-blue-600 hover:bg-blue-700 py-2.5 text-xs font-bold text-white transition duration-200"
                    >
                      <Send className="h-3.5 w-3.5" />
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related Posts Section */}
      {relatedPosts.length > 0 && (
        <section className="py-12 border-t border-slate-100 mt-12 bg-white">
          <Container>
            <h2 className="font-heading text-2xl font-bold text-slate-800 mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((rPost, idx) => (
                <BlogCard key={rPost.slug} post={rPost} index={idx} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
