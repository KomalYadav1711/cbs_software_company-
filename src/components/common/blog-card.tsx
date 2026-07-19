"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { BlogPost } from "@/data/blog-posts";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  // Define custom gradient badges based on category
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
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-slate-100/80"
    >
      {/* Cover Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">
        <img
          src={post.coverImage}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Category Badge overlay */}
        <span className={`absolute top-4 left-4 rounded-full bg-gradient-to-r px-3.5 py-1 text-xs font-bold uppercase tracking-wider shadow-md ${getCategoryStyles(post.category)}`}>
          {post.category}
        </span>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-6">
        {/* Date and Read Time metadata */}
        <div className="flex items-center gap-4 text-xs font-medium text-slate-400 mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" />
            {post.publishedAt}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-heading text-lg font-bold leading-snug text-slate-800 transition-colors duration-200 group-hover:text-blue-600">
          <Link href={`/blog/${post.slug}`} className="focus:outline-none">
            {/* Overlay link to make entire card clickable while maintaining accessibility */}
            <span className="absolute inset-0 z-10" />
            {post.title}
          </Link>
        </h3>

        {/* Excerpt */}
        <p className="mt-3 text-sm leading-relaxed text-slate-500 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Card Footer (Author & Read More indicator) */}
        <div className="mt-auto pt-6 flex items-center justify-between border-t border-slate-50">
          {/* Author info */}
          <div className="relative z-20 flex items-center gap-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="h-9 w-9 rounded-full object-cover border border-slate-100 shadow-sm"
              loading="lazy"
            />
            <div>
              <p className="text-xs font-bold text-slate-700 leading-none">{post.author.name}</p>
              <p className="text-[10px] text-slate-400 mt-1 leading-none">{post.author.role}</p>
            </div>
          </div>

          {/* Animated Arrow */}
          <div className="relative z-20 flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </div>
        </div>
      </div>
    </motion.article>
  );
}
