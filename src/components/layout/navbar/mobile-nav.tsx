"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { navigation } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import { Logo } from "./logo";

interface MobileNavProps {
  open: boolean;
  close: () => void;
}

export function MobileNav({
  open,
  close,
}: MobileNavProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Overlay */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
          />

          {/* Drawer */}

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.35,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white p-8 shadow-2xl lg:hidden"
          >
            {/* Header with Logo and Close Toggle */}
            <div className="flex items-center justify-between">
              <Logo />
              <Button
                variant="ghost"
                size="icon"
                onClick={close}
                aria-label="Close Menu"
              >
                <X className="h-6 w-6" />
              </Button>
            </div>

            <div className="mt-12 flex flex-col gap-6">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={close}
                  className="text-lg font-medium text-slate-700 transition-colors hover:text-blue-600"
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Button className="mt-10 rounded-full py-6">
              Get Free Consultation
            </Button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}