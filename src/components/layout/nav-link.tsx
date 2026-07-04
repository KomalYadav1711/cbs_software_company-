"use client";
import { cn } from "@/src/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";



interface NavLinkProps {
    href: string,
    children: React.ReactNode,
}

export function NavLink({
    href,
    children,
} : NavLinkProps){

    const pathname = usePathname();

    const active = pathname === href;

    return(
        <Link href={href} className={cn("transition-colors font-medium", active ? "text-blue-600" : "text-slate-700 hover:text-blue-600")}>
            {children}
        </Link>
    );
    
}

