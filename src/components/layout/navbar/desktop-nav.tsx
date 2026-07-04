"use client";
import { useState } from "react";
import { navigation } from "@/data/navigation";
import { NavItem } from "./nav-item";

export function DesktopNav() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="hidden lg:block">
      <ul
        className="flex items-center gap-2"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {navigation.map((item, idx) => (
          <li
            key={item.href}
            onMouseEnter={() => setHoveredIndex(idx)}
            className="relative"
          >
            <NavItem
              item={item}
              isHovered={hoveredIndex === idx}
            />
          </li>
        ))}
      </ul>
    </nav>
  );
}