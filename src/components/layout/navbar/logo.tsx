"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 font-heading text-xl font-bold tracking-tight text-slate-900 group"
    >
      <div className="relative flex h-11 w-11 items-center justify-center">
        {/* SVG C-Ring with hover rotation micro-animation */}
        <motion.svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-0 h-full w-full"
          whileHover={{ rotate: 15 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
        >
          <defs>
            <linearGradient id="logo-c-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00d2ff" />
              <stop offset="50%" stopColor="#0066ff" />
              <stop offset="100%" stopColor="#4300e8" />
            </linearGradient>
            <filter id="logo-c-glow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="1.5" stdDeviation="1.5" floodColor="#0066ff" floodOpacity="0.15" />
            </filter>
          </defs>
          
          {/* C-shaped arc: center 22,22, radius 16.5, stroke width 4.5. 
              Angle from -30 to 30 degrees open on the right. 
              Start: x = 22 + 16.5 * cos(-30) = 36.3, y = 22 + 16.5 * sin(-30) = 13.75
              End: x = 36.3, y = 22 + 16.5 * sin(30) = 30.25
          */}
          <path
            d="M 36.3 13.75 A 16.5 16.5 0 1 0 36.3 30.25"
            stroke="url(#logo-c-grad)"
            strokeWidth="4.5"
            strokeLinecap="round"
            filter="url(#logo-c-glow)"
          />
        </motion.svg>
        
        {/* "CBS" letters nested inside the ring */}
        <span className="relative z-10 text-[13px] font-black tracking-tighter text-[#0066ff] pr-[0.5px] select-none font-sans">
          CBS
        </span>
      </div>
      
      {/* "Software" text with smooth hover slide-in */}
      <span className="text-xl font-extrabold tracking-tight select-none font-heading text-slate-800 transition-colors duration-300 group-hover:text-[#0066ff]">
        Software
      </span>
    </Link>
  );
}