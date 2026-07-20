"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, Heart, MessageSquare } from "lucide-react";
import { UnifiedBlogArticle } from "@/lib/devto";

interface BlogCardProps {
  article: UnifiedBlogArticle;
  index: number;
}

const getCategoryStyles = (category: string) => {
  switch (category.toLowerCase()) {
    case "technology":
      return "from-cyan-500 to-blue-500";
    case "design":
      return "from-pink-500 to-rose-500";
    case "development":
      return "from-emerald-500 to-teal-500";
    case "business":
      return "from-violet-500 to-indigo-500";
    default:
      return "from-slate-500 to-slate-700";
  }
};

export function BlogCard({ article, index }: BlogCardProps) {
  const category = article.category;
  const gradientClass = getCategoryStyles(category);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-100/80"
    >
      {/* Cover Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        {article.coverImage ? (
          <img
            src={article.coverImage}
            alt={article.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${gradientClass} opacity-80`} />
        )}
        {/* Category Badge */}
        <span className={`absolute top-4 left-4 rounded-full bg-gradient-to-r ${gradientClass} px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-white shadow-md`}>
          {category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {article.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {article.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-base font-bold leading-snug text-slate-800 transition-colors duration-200 group-hover:text-blue-600 line-clamp-2">
          <Link href={`/blog/${article.slug}`} className="focus:outline-none">
            <span className="absolute inset-0 z-10" />
            {article.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-2">
          {article.description}
        </p>

        {/* Tags */}
        {article.tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {article.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="rounded-md bg-slate-50 border border-slate-100 px-2 py-0.5 text-[10px] font-semibold text-slate-400">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer */}
        <div className="mt-auto pt-5 flex items-center justify-between border-t border-slate-50">
          {/* Author */}
          <div className="relative z-20 flex items-center gap-2.5">
            <img
              src={article.author.avatar}
              alt={article.author.name}
              className="h-8 w-8 rounded-full object-cover border border-slate-100 shadow-sm"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-bold text-slate-700 leading-none">{article.author.name}</p>
              <p className="text-[10px] text-slate-400 mt-0.5 leading-none">
                {article.author.username ? `@${article.author.username}` : article.author.role}
              </p>
            </div>
          </div>

          {/* Reactions */}
          <div className="relative z-20 flex items-center gap-3 text-[11px] text-slate-400">
            <span className="flex items-center gap-1">
              <Heart className="h-3.5 w-3.5 text-rose-400" />
              {article.reactionsCount !== undefined ? article.reactionsCount : 12}
            </span>
            <span className="flex items-center gap-1">
              <MessageSquare className="h-3.5 w-3.5 text-blue-400" />
              {article.commentsCount !== undefined ? article.commentsCount : 2}
            </span>
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

