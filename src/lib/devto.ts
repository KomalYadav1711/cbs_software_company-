import { BlogPost } from "@/data/blog-posts";

const BASE_URL = "https://dev.to/api";

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  cover_image: string | null;
  published_at: string;
  reading_time_minutes: number;
  url: string;
  slug: string;
  tag_list: string[];
  user: {
    name: string;
    username: string;
    profile_image: string;
    website_url: string | null;
  };
  body_html?: string;
  positive_reactions_count: number;
  comments_count: number;
}

export interface UnifiedBlogArticle {
  id: string; // Dev.to ID or Local Slug
  slug: string; // Same as id for routing
  title: string;
  description: string;
  coverImage: string | null;
  publishedAt: string;
  readTime: string;
  category: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
    username?: string;
  };
  isLocal: boolean;
  content?: string; // HTML content
  reactionsCount?: number;
  commentsCount?: number;
  originalUrl?: string; // only for Dev.to if needed
}

export function mapDevToArticle(article: DevToArticle): UnifiedBlogArticle {
  return {
    id: String(article.id),
    slug: String(article.id),
    title: article.title,
    description: article.description,
    coverImage: article.cover_image,
    publishedAt: formatDate(article.published_at),
    readTime: `${article.reading_time_minutes} min read`,
    category: getCategory(article.tag_list),
    tags: article.tag_list,
    author: {
      name: article.user.name,
      role: "Developer Partner",
      avatar: article.user.profile_image,
      username: article.user.username,
    },
    isLocal: false,
    content: article.body_html,
    reactionsCount: article.positive_reactions_count,
    commentsCount: article.comments_count,
    originalUrl: article.url,
  };
}

export function mapBlogPost(post: BlogPost): UnifiedBlogArticle {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    description: post.excerpt,
    coverImage: post.coverImage,
    publishedAt: post.publishedAt,
    readTime: post.readTime,
    category: post.category,
    tags: post.tags,
    author: {
      name: post.author.name,
      role: post.author.role,
      avatar: post.author.avatar,
    },
    isLocal: true,
    content: post.content,
  };
}


// Tags to search for — aligned with CBS Software services
const CBS_TAGS = ["webdev", "javascript", "ai", "cloud", "mobile", "design", "typescript", "nextjs"];

export async function fetchArticles(tag?: string, perPage = 12): Promise<DevToArticle[]> {
  try {
    const selectedTag = tag || CBS_TAGS[Math.floor(Math.random() * CBS_TAGS.length)];
    const res = await fetch(
      `${BASE_URL}/articles?tag=${selectedTag}&per_page=${perPage}&top=1`,
      { next: { revalidate: 3600 } } // Cache for 1 hour
    );
    if (!res.ok) throw new Error("Failed to fetch articles");
    const data: DevToArticle[] = await res.json();
    // Filter out articles without a cover image for visual quality
    return data.filter((a) => a.cover_image);
  } catch {
    return [];
  }
}

export async function fetchMultiTagArticles(perPage = 12): Promise<DevToArticle[]> {
  try {
    // Fetch from multiple relevant tags in parallel
    const tags = ["webdev", "ai", "cloud", "javascript"];
    const results = await Promise.all(
      tags.map((tag) =>
        fetch(`${BASE_URL}/articles?tag=${tag}&per_page=6&top=1`, {
          next: { revalidate: 3600 },
        }).then((r) => r.json() as Promise<DevToArticle[]>)
      )
    );

    // Merge, deduplicate by ID, filter for cover images
    const all = results.flat();
    const seen = new Set<number>();
    const unique = all.filter((a) => {
      if (seen.has(a.id) || !a.cover_image) return false;
      seen.add(a.id);
      return true;
    });

    return unique.slice(0, perPage);
  } catch {
    return [];
  }
}

export async function fetchArticleById(id: number): Promise<DevToArticle | null> {
  try {
    const res = await fetch(`${BASE_URL}/articles/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return res.json() as Promise<DevToArticle>;
  } catch {
    return null;
  }
}

export function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

export function getCategory(tags: string[]): string {
  const map: Record<string, string> = {
    webdev: "Development",
    javascript: "Development",
    typescript: "Development",
    nextjs: "Development",
    react: "Development",
    ai: "Technology",
    machinelearning: "Technology",
    cloud: "Technology",
    devops: "Technology",
    docker: "Technology",
    mobile: "Design",
    ux: "Design",
    design: "Design",
    css: "Design",
    productivity: "Business",
    career: "Business",
    startup: "Business",
    marketing: "Business",
  };
  for (const tag of tags) {
    const key = tag.toLowerCase().replace(/[- ]/g, "");
    if (map[key]) return map[key];
  }
  return "Technology";
}
