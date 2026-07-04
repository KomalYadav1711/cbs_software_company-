"use client";

import { motion } from "framer-motion";

import { Container } from "@/components/common/container";

import { Logo } from "./logo";
import { DesktopNav } from "./desktop-nav";
import { MobileNav } from "./mobile-nav";
import { NavbarActions } from "./navbar-action";
import { MobileToggle } from "./mobile-toggle";

import { useScroll } from "@/hooks/use-scroll";
import { useNavbar } from "@/hooks/use-navbar";

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
        duration: .5,
      }}
      className={`
      fixed
      inset-x-0
      top-0
      z-50
      transition-all
      duration-300
      ${
        scrolled
          ? "border-b bg-white/80 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }
    `}
    >
      <Container className="flex h-[88px] items-center justify-between">

        <Logo />

        <DesktopNav />

        <div className="flex items-center gap-4">
          <NavbarActions />
          <MobileToggle open={open} onToggle={toggle} />
        </div>

        <MobileNav open={open} close={close} />

      </Container>
    </motion.header>
  );
}