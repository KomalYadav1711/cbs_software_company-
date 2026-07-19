"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  TrendingUp,
  FileText,
  Award,
  Layers,
  ChevronDown,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { NavItemType } from "@/data/navigation";
import { cn } from "@/lib/utils";

// Map icon names to Lucide icon components for type safety and performance
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  TrendingUp,
  FileText,
  Award,
  Layers,
};

interface NavItemProps {
  item: NavItemType;
  isHovered: boolean;
}

export function NavItem({ item, isHovered }: NavItemProps) {
  const pathname = usePathname();
  const active =
    pathname === item.href ||
    (item.href !== "/" && pathname.startsWith(item.href)) ||
    (item.subItems && item.subItems.some((sub) => pathname === sub.href));

  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    if (item.subItems) setIsOpen(true);
  };

  const handleMouseLeave = () => {
    if (item.subItems) setIsOpen(false);
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative py-3"
    >
      <Link
        href={item.href}
        className={cn(
          "relative z-10 flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors duration-300",
          active ? "text-blue-600" : "text-slate-700 hover:text-slate-900"
        )}
      >
        <span>{item.title}</span>
        {item.subItems && (
          <ChevronDown
            className={cn(
              "h-4 w-4 transition-transform duration-300 text-slate-400 group-hover:text-slate-600",
              isOpen && "rotate-180 text-blue-500"
            )}
          />
        )}

        {/* Sliding Hover Pill Background (Shared framer-motion layoutId) */}
        {isHovered && (
          <motion.div
            layoutId="nav-hover-pill"
            className="absolute inset-0 rounded-full bg-slate-100/70 -z-10"
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 26,
            }}
          />
        )}

        {/* Subtle dot/indicator for the active route */}
        {active && !isHovered && (
          <motion.div
            layoutId="nav-active-dot"
            className="absolute bottom-0 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-blue-600"
            transition={{
              type: "spring",
              stiffness: 380,
              damping: 30,
            }}
          />
        )}
      </Link>

      {/* Mega Dropdown Menu Container */}
      <AnimatePresence>
        {isOpen && item.subItems && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.96 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-full left-1/2 -translate-x-1/2 z-50 mt-1"
          >
            {/* Transparent hover bridge to keep menu open while moving cursor */}
            <div className="absolute -top-4 left-0 right-0 h-4 bg-transparent" />

            <div
              className={cn(
                "grid overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-2xl shadow-slate-200/60 backdrop-blur-xl",
                item.title === "Services"
                  ? "w-[680px] grid-cols-12"
                  : "w-[440px] grid-cols-12"
              )}
            >
              {/* Main Links Section */}
              <div
                className={cn(
                  "p-5",
                  item.title === "Services" ? "col-span-8" : "col-span-7"
                )}
              >
                <div className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {item.title}
                </div>
                <div
                  className={cn(
                    "grid gap-2",
                    item.title === "Services" ? "grid-cols-2" : "grid-cols-1"
                  )}
                >
                  {item.subItems.map((subItem) => {
                    const Icon = iconMap[subItem.iconName] || Globe;
                    return (
                      <Link
                        key={subItem.title}
                        href={subItem.href}
                        className="group/sub flex gap-3 rounded-xl p-2.5 transition-colors hover:bg-slate-50"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover/sub:bg-blue-600 group-hover/sub:text-white">
                          <Icon className="h-4.5 w-4.5 transition-transform duration-300 group-hover/sub:scale-110" />
                        </div>
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[13px] font-semibold text-slate-800 transition-colors group-hover/sub:text-blue-600">
                            {subItem.title}
                          </span>
                          <span className="text-[11px] text-slate-500 leading-snug font-normal line-clamp-2">
                            {subItem.description}
                          </span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Sidebar Call To Action Card */}
              <div
                className={cn(
                  "bg-slate-50/50 p-5 flex flex-col justify-between border-l border-slate-100",
                  item.title === "Services" ? "col-span-4" : "col-span-5"
                )}
              >
                <div>
                  <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-blue-600">
                    <Sparkles className="h-3 w-3" />
                    <span>Featured</span>
                  </div>
                  <h4 className="mt-2 text-sm font-bold text-slate-900 leading-tight">
                    {item.title === "Services"
                      ? "Custom Solutions"
                      : "Work Showcase"}
                  </h4>
                  <p className="mt-2 text-[11px] leading-relaxed text-slate-500">
                    {item.title === "Services"
                      ? "Have a unique project idea? We build custom solutions matching your exact specifications."
                      : "See how we helped brands achieve 10x growth with custom software systems."}
                  </p>
                </div>

                <Link
                  href="/contact"
                  className="group/cta mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  <span>
                    {item.title === "Services" ? "Get Free Consultation" : "View Case Studies"}
                  </span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/cta:translate-x-1" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}