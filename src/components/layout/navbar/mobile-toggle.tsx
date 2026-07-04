"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

interface MobileToggleProps {
  open: boolean;
  onToggle: () => void;
}

export function MobileToggle({
  open,
  onToggle,
}: MobileToggleProps) {
  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={onToggle}
      className="lg:hidden relative h-10 w-10 flex items-center justify-center"
      aria-label="Toggle Menu"
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
        {/* Top line */}
        <motion.path
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={open ? { d: "M 5 5 L 19 19" } : { d: "M 4 6 L 20 6" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
        {/* Middle line */}
        <motion.path
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={open ? { opacity: 0 } : { opacity: 1 }}
          transition={{ duration: 0.25, ease: "easeInOut" }}
        />
        {/* Bottom line */}
        <motion.path
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          animate={open ? { d: "M 5 19 L 19 5" } : { d: "M 4 18 L 20 18" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        />
      </svg>
    </Button>
  );
}