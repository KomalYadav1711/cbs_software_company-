"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronDown, Globe, Smartphone, Cpu, ShoppingBag, TrendingUp, FileText, Award, Layers } from "lucide-react";

import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
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

interface MobileNavProps {
  open: boolean;
  close: () => void;
}


const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.15,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
} as const;

const itemVariants = {
  open: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 15,
    },
  },
  closed: {
    opacity: 0,
    x: 24,
  },
} as const;

export function MobileNav({
  open,
  close,
}: MobileNavProps) {
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setActiveAccordion(activeAccordion === title ? null : title);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Blur Glassmorphism Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 30,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white p-6 shadow-2xl lg:hidden"
          >
            {/* Header with Logo and Close Toggle */}
            <div className="flex items-center justify-between">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={close}
                aria-label="Close Menu"
                className="h-10 w-10 flex items-center justify-center rounded-full hover:bg-slate-100"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            
            <motion.div
              variants={containerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mt-10 flex flex-col gap-5 overflow-y-auto pr-2 max-h-[calc(100vh-220px)]"
            >
              {navigation.map((item) => (
                <div key={item.title}>
                  {item.subItems ? (
                    <motion.div variants={itemVariants} className="flex flex-col">
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="flex items-center justify-between text-lg font-semibold text-slate-800 transition-colors hover:text-blue-600 py-1.5 w-full text-left"
                      >
                        <span>{item.title}</span>
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform duration-300 text-slate-400",
                            activeAccordion === item.title && "rotate-180 text-blue-500"
                          )}
                        />
                      </button>
                      
                      {/* Accordion dropdown body */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: activeAccordion === item.title ? "auto" : 0,
                          opacity: activeAccordion === item.title ? 1 : 0,
                        }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                        className="overflow-hidden pl-3.5 flex flex-col gap-3 mt-1.5 border-l border-slate-100"
                      >
                        {item.subItems.map((subItem) => {
                          const Icon = iconMap[subItem.iconName] || Globe;
                          return (
                            <Link
                              key={subItem.title}
                              href={subItem.href}
                              onClick={close}
                              className="group flex items-center gap-3 text-[14px] font-medium text-slate-600 hover:text-blue-600 transition-colors py-1"
                            >
                              <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-50 text-slate-400 transition-colors group-hover:bg-blue-50 group-hover:text-blue-600">
                                <Icon className="h-4 w-4" />
                              </div>
                              <span>{subItem.title}</span>
                            </Link>
                          );
                        })}
                      </motion.div>
                    </motion.div>
                  ) : (
                    <motion.div variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={close}
                        className="text-lg font-semibold text-slate-800 transition-colors hover:text-blue-600 py-1.5 block"
                      >
                        {item.title}
                      </Link>
                    </motion.div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Bottom Consultation CTA */}
            <div className="mt-auto pt-6 border-t border-slate-100">
              <Button onClick={close} className="w-full rounded-full py-6 font-semibold shadow-lg shadow-blue-500/10">
                Get Free Consultation
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
