"use client";

import { motion } from "framer-motion";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { NavbarActions } from "./navbar-action";
import { MobileToggle } from "./mobile-toggle";

import { useScroll } from "@/hooks/use-scroll";
import { useNavbar } from "@/hooks/use-navbar";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScroll();
  const { open, toggle, close } = useNavbar();

  return (
    <motion.header
      initial={{
        y: -40,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "fixed inset-x-0 z-50 transition-all duration-300",
        scrolled ? "top-4 px-4 md:px-8" : "top-0 px-0"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-300 w-full",
          scrolled
            ? "max-w-6xl rounded-full border border-slate-200/50 bg-white/75 backdrop-blur-md shadow-lg shadow-slate-100/50 px-6 h-16"
            : "max-w-7xl border-b border-transparent bg-transparent px-5 md:px-8 lg:px-12 h-[88px]"
        )}
      >
        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4">
          <NavbarActions />
          <MobileToggle open={open} onToggle={toggle} />
        </div>
      </div>

      <MobileNav open={open} close={close} />
    </motion.header>
  );
}
