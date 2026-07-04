"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function NavbarActions() {
  return (
    <div className="hidden lg:flex">
      <Button className="group rounded-full px-6">
        Get Free Consultation

        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
}