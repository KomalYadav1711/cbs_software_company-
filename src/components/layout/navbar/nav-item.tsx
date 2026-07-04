"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";

interface NavItemProps {
  item: {
    title: string;
    href: string;
  };
}

export function NavItem({ item }: NavItemProps) {
  const pathname = usePathname();
  const active = pathname === item.href;

  return (
    <Link
      href={item.href}
      className="relative py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-blue-600"
    >
      {item.title}

      {active && (
        <motion.div
          layoutId="navbar-indicator"
          className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-blue-600"
          transition={{
            type: "spring",
            stiffness: 380,
            damping: 30,
          }}
        />
      )}
    </Link>
  );
}