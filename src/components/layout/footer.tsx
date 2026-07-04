import Link from "next/link";
import { Container } from "../common/container";
import { siteConfig } from "@/constants/site";
import { Logo } from "./navbar/logo";

const footerLinks = [
  {
    title: "Services",
    links: [
      { label: "Web Development", href: "/services" },
      { label: "Mobile Apps", href: "/services" },
      { label: "Custom Software", href: "/services" },
      { label: "eCommerce Solutions", href: "/services" },
      { label: "Digital Marketing", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
      { label: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Community", href: "/community" },
      { label: "Support", href: "/support" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-slate-50/50 py-16 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand block */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-500">
              Transforming businesses through smart digital solutions. We help startups, SMEs, and enterprises establish a powerful digital presence.
            </p>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-8">
            {footerLinks.map((column) => (
              <div key={column.title} className="flex flex-col gap-4">
                <h3 className="font-heading text-xs font-semibold uppercase tracking-wider text-slate-900">
                  {column.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {column.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-slate-500 transition-colors hover:text-blue-600"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-slate-100 pt-8 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-400">
            &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-xs text-slate-400 hover:text-slate-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-slate-400 hover:text-slate-600">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
