"use client";

import { motion, useScroll, useSpring, type Variants } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/common/container";
import {
  Shield,
  Eye,
  Lock,
  Database,
  Globe,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Cookie,
  BarChart2,
  Share2,
  Clock,
  UserCheck,
  AlertCircle,
  FileText,
  Users,
  ArrowRight,
  CheckCircle2,
  Info,
  ExternalLink,
} from "lucide-react";

const EFFECTIVE_DATE = "July 27, 2026";

const SECTIONS = [
  {
    id: "who-we-are",
    number: "01",
    title: "Who We Are",
    icon: Users,
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-200/60",
    accentColor: "text-violet-600",
    bgLight: "bg-violet-50",
    borderColor: "border-violet-100",
    dotColor: "bg-violet-500",
    content: (
      <div>
        <p className="text-slate-600 leading-relaxed mb-6">
          CBS SOFTWARE is a technology-driven IT solutions company dedicated to helping businesses
          establish a powerful digital presence. Our services include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Website Design",
            "Web Development",
            "Ecommerce Development",
            "Mobile App Development",
            "Custom Software Development",
            "Digital Marketing",
            "Search Engine Optimization (SEO)",
            "Social Media Marketing (SMO)",
            "Website Maintenance & Support",
            "IT Consulting",
          ].map((service) => (
            <div key={service} className="flex items-center gap-3 group/item">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-violet-100 flex-shrink-0 group-hover/item:bg-violet-200 transition-colors">
                <ChevronRight className="h-3 w-3 text-violet-600" />
              </span>
              <span className="text-sm text-slate-600 group-hover/item:text-slate-800 transition-colors">{service}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    icon: Database,
    color: "from-blue-500 to-cyan-600",
    shadowColor: "shadow-blue-200/60",
    accentColor: "text-blue-600",
    bgLight: "bg-blue-50",
    borderColor: "border-blue-100",
    dotColor: "bg-blue-500",
    content: (
      <div className="space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full bg-blue-500 inline-block" />
            <h3 className="font-heading font-bold text-slate-800 text-sm uppercase tracking-wider">Personal Information</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Full Name",
              "Company Name",
              "Email Address",
              "Phone Number",
              "Business Address",
              "Country / Location",
              "Project Requirements",
              "Billing Information (where applicable)",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 group/item">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-100 flex-shrink-0">
                  <ChevronRight className="h-3 w-3 text-blue-600" />
                </span>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full bg-indigo-500 inline-block" />
            <h3 className="font-heading font-bold text-slate-800 text-sm uppercase tracking-wider">Technical Information (Auto-collected)</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "IP Address",
              "Browser Type",
              "Device Information",
              "Operating System",
              "Pages Visited",
              "Time Spent on Website",
              "Referral Source",
              "Date and Time of Visit",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 group/item">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-indigo-100 flex-shrink-0">
                  <ChevronRight className="h-3 w-3 text-indigo-600" />
                </span>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="h-3 w-3 rounded-full bg-cyan-500 inline-block" />
            <h3 className="font-heading font-bold text-slate-800 text-sm uppercase tracking-wider">Voluntarily Provided</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {[
              "Filling out our contact form",
              "Requesting a quotation",
              "Booking a consultation",
              "Subscribing to newsletters",
              "Applying for jobs",
              "Contacting us by email or phone",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-100 flex-shrink-0">
                  <ChevronRight className="h-3 w-3 text-cyan-600" />
                </span>
                <span className="text-sm text-slate-600">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-use",
    number: "03",
    title: "How We Use Your Information",
    icon: Eye,
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-200/60",
    accentColor: "text-emerald-600",
    bgLight: "bg-emerald-50",
    borderColor: "border-emerald-100",
    dotColor: "bg-emerald-500",
    content: (
      <div>
        <p className="text-slate-600 leading-relaxed mb-6">
          We use your information to provide and improve our services responsibly:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Respond to your enquiries",
            "Prepare project proposals and quotations",
            "Deliver our services",
            "Communicate project updates",
            "Improve our website and services",
            "Provide customer support",
            "Process payments (where applicable)",
            "Send service-related communications",
            "Send newsletters or marketing (where permitted)",
            "Comply with legal obligations",
            "Protect against fraud and misuse",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "cookies",
    number: "04",
    title: "Cookies & Tracking Technologies",
    icon: Cookie,
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-200/60",
    accentColor: "text-amber-600",
    bgLight: "bg-amber-50",
    borderColor: "border-amber-100",
    dotColor: "bg-amber-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          Our website may use cookies and similar technologies to improve your browsing experience.
          Cookies help us:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Remember your preferences",
            "Analyze website traffic",
            "Improve website performance",
            "Understand visitor behavior",
            "Enhance website security",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-amber-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> You may disable cookies through your browser settings. However, some
            website features may not function properly if cookies are disabled.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    number: "05",
    title: "Analytics",
    icon: BarChart2,
    color: "from-sky-500 to-blue-600",
    shadowColor: "shadow-sky-200/60",
    accentColor: "text-sky-600",
    bgLight: "bg-sky-50",
    borderColor: "border-sky-100",
    dotColor: "bg-sky-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          We may use analytics tools to understand visitor behavior, improve user experience, and
          measure marketing effectiveness. These may include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { name: "Google Analytics", icon: "📊" },
            { name: "Google Search Console", icon: "🔍" },
            { name: "Microsoft Clarity", icon: "📈" },
            { name: "Meta Pixel", icon: "📱" },
            { name: "LinkedIn Insight Tag", icon: "💼" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 rounded-xl border border-slate-100 bg-slate-50 hover:bg-sky-50 hover:border-sky-100 px-4 py-3 text-sm font-medium text-slate-700 transition-colors group/tool"
            >
              <span className="text-lg">{tool.icon}</span>
              <span className="group-hover/tool:text-sky-700 transition-colors">{tool.name}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">
          These tools may collect browser type, pages visited, session duration, and device
          information.
        </p>
      </div>
    ),
  },
  {
    id: "contact-forms",
    number: "06",
    title: "Contact Forms",
    icon: FileText,
    color: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-200/60",
    accentColor: "text-pink-600",
    bgLight: "bg-pink-50",
    borderColor: "border-pink-100",
    dotColor: "bg-pink-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          When you submit a contact form, we collect the information you provide to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Respond to your enquiry",
            "Schedule consultations",
            "Prepare quotations",
            "Provide requested services",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-pink-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-emerald-50 border border-emerald-200 px-5 py-4">
          <CheckCircle2 className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-emerald-800 font-medium">
            We do not sell or rent your personal information.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-we-share",
    number: "07",
    title: "How We Share Information",
    icon: Share2,
    color: "from-indigo-500 to-violet-600",
    shadowColor: "shadow-indigo-200/60",
    accentColor: "text-indigo-600",
    bgLight: "bg-indigo-50",
    borderColor: "border-indigo-100",
    dotColor: "bg-indigo-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE does not sell, trade, or rent your personal information. We may share
          information only in the following circumstances:
        </p>
        <div className="space-y-3">
          {[
            "With trusted service providers assisting us in delivering our services",
            "With payment processing providers (where applicable)",
            "With hosting or cloud infrastructure providers",
            "With legal or regulatory authorities when required by law",
            "To protect our legal rights or prevent fraud",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-slate-50 border border-slate-100 px-4 py-3">
              <ChevronRight className="h-4 w-4 text-indigo-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic leading-relaxed">
          All third-party partners are expected to maintain appropriate confidentiality and security
          standards.
        </p>
      </div>
    ),
  },
  {
    id: "data-security",
    number: "08",
    title: "Data Security",
    icon: Lock,
    color: "from-slate-600 to-slate-800",
    shadowColor: "shadow-slate-300/60",
    accentColor: "text-slate-600",
    bgLight: "bg-slate-50",
    borderColor: "border-slate-200",
    dotColor: "bg-slate-600",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          Protecting your information is a priority. We implement appropriate technical and
          organizational measures, including:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { label: "Secure Servers", icon: "🖥️" },
            { label: "SSL Encryption", icon: "🔒" },
            { label: "Firewall Protection", icon: "🛡️" },
            { label: "Access Controls", icon: "🔑" },
            { label: "Password Protection", icon: "🔐" },
            { label: "Software Updates", icon: "🔄" },
            { label: "Secure Backups", icon: "💾" },
            { label: "Security Monitoring", icon: "👁️" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-white hover:bg-slate-50 hover:border-slate-200 px-3 py-4 text-center transition-colors group/card"
            >
              <span className="text-2xl group-hover/card:scale-110 transition-transform">{item.icon}</span>
              <span className="text-xs font-medium text-slate-600 leading-tight">{item.label}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-blue-50 border border-blue-200 px-5 py-4">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            <strong>Note:</strong> While we take reasonable precautions, no internet transmission or
            electronic storage method is completely secure.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "data-retention",
    number: "09",
    title: "Data Retention",
    icon: Clock,
    color: "from-orange-500 to-amber-600",
    shadowColor: "shadow-orange-200/60",
    accentColor: "text-orange-600",
    bgLight: "bg-orange-50",
    borderColor: "border-orange-100",
    dotColor: "bg-orange-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          We retain personal information only for as long as necessary to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Provide our services",
            "Meet contractual obligations",
            "Comply with legal requirements",
            "Resolve disputes",
            "Maintain business records",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-orange-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">
          When information is no longer required, it is securely deleted or anonymized where
          appropriate.
        </p>
      </div>
    ),
  },
  {
    id: "your-rights",
    number: "10",
    title: "Your Rights",
    icon: UserCheck,
    color: "from-teal-500 to-emerald-600",
    shadowColor: "shadow-teal-200/60",
    accentColor: "text-teal-600",
    bgLight: "bg-teal-50",
    borderColor: "border-teal-100",
    dotColor: "bg-teal-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          Subject to applicable law, you may have the right to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { right: "Access", desc: "Request access to your personal information" },
            { right: "Correction", desc: "Request correction of inaccurate information" },
            { right: "Deletion", desc: "Request deletion of your personal data" },
            { right: "Withdraw Consent", desc: "Withdraw consent where processing is based on consent" },
            { right: "Object", desc: "Object to certain processing activities" },
            { right: "Portability", desc: "Request a copy of your data, where applicable" },
          ].map((item) => (
            <div
              key={item.right}
              className="flex items-start gap-3 rounded-xl border border-teal-100 bg-teal-50/50 hover:bg-teal-50 px-4 py-3.5 transition-colors group/right"
            >
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-teal-100 group-hover/right:bg-teal-200 flex-shrink-0 transition-colors">
                <CheckCircle2 className="h-3.5 w-3.5 text-teal-600" />
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-800">{item.right}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
          To exercise these rights, please contact us using the details in Section 16.
        </p>
      </div>
    ),
  },
  {
    id: "third-party-links",
    number: "11",
    title: "Third-Party Links",
    icon: Globe,
    color: "from-cyan-500 to-sky-600",
    shadowColor: "shadow-cyan-200/60",
    accentColor: "text-cyan-600",
    bgLight: "bg-cyan-50",
    borderColor: "border-cyan-100",
    dotColor: "bg-cyan-500",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Our website may contain links to external websites. CBS SOFTWARE is not responsible for the
          privacy practices, security, or content of third-party websites.
        </p>
        <div className="flex gap-3 rounded-xl bg-cyan-50 border border-cyan-100 px-5 py-4">
          <ExternalLink className="h-5 w-5 text-cyan-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-cyan-800">
            We encourage you to review the privacy policies of any external sites you visit.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "email-communications",
    number: "12",
    title: "Email Communications",
    icon: Mail,
    color: "from-fuchsia-500 to-pink-600",
    shadowColor: "shadow-fuchsia-200/60",
    accentColor: "text-fuchsia-600",
    bgLight: "bg-fuchsia-50",
    borderColor: "border-fuchsia-100",
    dotColor: "bg-fuchsia-500",
    content: (
      <div className="space-y-6">
        <p className="text-slate-600 leading-relaxed">
          If you subscribe to our newsletter or marketing communications, you may receive updates
          about:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Company news",
            "New services",
            "Technology insights",
            "Offers and promotions",
            "Educational content",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <CheckCircle2 className="h-4 w-4 text-fuchsia-500 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">
          You can unsubscribe at any time by using the unsubscribe link in our emails or by
          contacting us directly.
        </p>
      </div>
    ),
  },
  {
    id: "childrens-privacy",
    number: "13",
    title: "Children's Privacy",
    icon: AlertCircle,
    color: "from-red-500 to-rose-600",
    shadowColor: "shadow-red-200/60",
    accentColor: "text-red-600",
    bgLight: "bg-red-50",
    borderColor: "border-red-100",
    dotColor: "bg-red-500",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Our website and services are intended for businesses and individuals aged{" "}
          <strong className="text-slate-800">18 years or older</strong>. We do not knowingly collect personal information from
          children.
        </p>
        <p className="text-slate-600 leading-relaxed">
          If we become aware that such information has been collected without appropriate
          authorization, we will take reasonable steps to remove it.
        </p>
      </div>
    ),
  },
  {
    id: "international-transfers",
    number: "14",
    title: "International Data Transfers",
    icon: Globe,
    color: "from-lime-500 to-green-600",
    shadowColor: "shadow-lime-200/60",
    accentColor: "text-lime-600",
    bgLight: "bg-lime-50",
    borderColor: "border-lime-100",
    dotColor: "bg-lime-500",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          If you access our website from outside India, your information may be transferred to and
          processed in India or other locations where our service providers operate.
        </p>
        <p className="text-slate-600 leading-relaxed">
          We take reasonable measures to protect personal information during such transfers in
          accordance with applicable laws.
        </p>
      </div>
    ),
  },
  {
    id: "policy-changes",
    number: "15",
    title: "Changes to This Privacy Policy",
    icon: FileText,
    color: "from-slate-500 to-slate-700",
    shadowColor: "shadow-slate-200/60",
    accentColor: "text-slate-600",
    bgLight: "bg-slate-50",
    borderColor: "border-slate-200",
    dotColor: "bg-slate-500",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE may update this Privacy Policy from time to time to reflect changes in our
          services, legal requirements, or business practices. The updated version will be published
          on this page with a revised effective date.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed">
          We encourage you to review this page periodically to stay informed.
        </p>
      </div>
    ),
  },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04 },
  }),
};

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-1 origin-left bg-gradient-to-r from-blue-500 via-indigo-500 to-violet-500"
      style={{ scaleX }}
    />
  );
}

export default function PrivacyPolicyPage() {
  const allNavItems = [
    ...SECTIONS.map((s) => ({ id: s.id, number: s.number, title: s.title })),
    { id: "contact-us", number: "16", title: "Contact Us" },
  ];

  return (
    <main className="w-full bg-white text-slate-800 antialiased pt-[var(--navbar-height)]">
      <ScrollProgressBar />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-blue-600/20 blur-[160px] -translate-y-1/3 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[140px] translate-y-1/3 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-indigo-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />
        </div>

        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-1.5 text-xs font-semibold text-blue-300 backdrop-blur-sm"
            >
              <Shield className="h-3.5 w-3.5" />
              <span>Privacy &amp; Data Protection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Privacy{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              At CBS SOFTWARE, we value your privacy and are committed to protecting your personal
              information. This policy explains how we collect, use, disclose, store, and safeguard
              your information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-blue-400" />
                <span>Effective: <strong className="text-white">{EFFECTIVE_DATE}</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <FileText className="h-4 w-4 text-blue-400" />
                <span><strong className="text-white">16</strong> Sections</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── Quick Navigation ──────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[var(--navbar-height)] z-40 backdrop-blur-sm bg-white/95">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-3">
              Jump to Section
            </p>
            <div className="flex flex-wrap gap-1.5">
              {allNavItems.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-500 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700 hover:shadow-sm"
                >
                  {s.number}. {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Intro Consent Notice ─────────────────────────────────────── */}
      <section className="pt-12 pb-4 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-px">
              <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-5 flex gap-4 items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">Important Notice</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    By using our website or engaging our services, you agree to the practices described in
                    this Privacy Policy. Please read it carefully before proceeding.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Main Content ─────────────────────────────────────────────── */}
      <section className="py-10 pb-20 bg-slate-50">
        <Container>
          <div className="max-w-4xl mx-auto space-y-5">
            {SECTIONS.map((section, index) => {
              const Icon = section.icon;
              return (
                <motion.div
                  key={section.id}
                  id={section.id}
                  custom={index}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="group relative rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 overflow-hidden"
                >
                  {/* Left accent bar */}
                  <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${section.color}`} />

                  {/* Section Header */}
                  <div className="flex items-center gap-4 px-7 py-5 border-b border-slate-50">
                    <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${section.color} shadow-md ${section.shadowColor}`}>
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className={`text-[10px] font-bold uppercase tracking-widest ${section.accentColor}`}>
                          Section {section.number}
                        </span>
                      </div>
                      <h2 className="font-heading text-lg font-extrabold text-slate-900 leading-tight">
                        {section.title}
                      </h2>
                    </div>
                    <span className={`hidden sm:flex h-8 w-8 items-center justify-center rounded-xl ${section.bgLight} text-xs font-bold ${section.accentColor} flex-shrink-0`}>
                      {section.number}
                    </span>
                  </div>

                  {/* Section Body */}
                  <div className="px-7 py-6">{section.content}</div>
                </motion.div>
              );
            })}

            {/* Section 16: Contact Us */}
            <motion.div
              id="contact-us"
              custom={SECTIONS.length}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-40px" }}
              className="group relative rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:shadow-slate-100 transition-all duration-300 overflow-hidden"
            >
              {/* Left accent bar */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-indigo-600" />

              <div className="flex items-center gap-4 px-7 py-5 border-b border-slate-50">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-md shadow-blue-200/60">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-blue-600">
                    Section 16
                  </span>
                  <h2 className="font-heading text-lg font-extrabold text-slate-900 leading-tight">
                    Contact Us
                  </h2>
                </div>
                <span className="hidden sm:flex h-8 w-8 items-center justify-center rounded-xl bg-blue-50 text-xs font-bold text-blue-600 flex-shrink-0">
                  16
                </span>
              </div>

              <div className="px-7 py-6 space-y-5">
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  how your information is handled, please contact us:
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Mail, label: "Email", value: "info@cbssoftware.in", color: "text-blue-600", bg: "bg-blue-50" },
                    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", color: "text-indigo-600", bg: "bg-indigo-50" },
                    { icon: Globe, label: "Website", value: "www.cbssoftware.in", color: "text-violet-600", bg: "bg-violet-50" },
                    { icon: MapPin, label: "Address", value: "CBS SOFTWARE, India", color: "text-pink-600", bg: "bg-pink-50" },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-sm px-5 py-4 transition-all group/contact"
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} flex-shrink-0 group-hover/contact:scale-110 transition-transform`}>
                          <ItemIcon className={`h-4.5 w-4.5 ${item.color}`} />
                        </div>
                        <div>
                          <div className="text-xs text-slate-400 font-medium mb-0.5">{item.label}</div>
                          <div className="text-sm font-semibold text-slate-700">{item.value}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── Consent Banner ───────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/3 w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[120px]" />
          <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px]" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-blue-400/20 mb-8">
              <Shield className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Your Consent
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3 text-lg">
              By accessing our website or using our services, you acknowledge that you have read,
              understood, and agreed to this Privacy Policy.
            </p>
            <p className="text-slate-400 text-sm mb-10">
              If you do not agree with this Privacy Policy, please discontinue use of our website
              and services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-900/30 transition-all hover:shadow-xl hover:shadow-blue-900/40 hover:-translate-y-0.5"
              >
                Contact Us <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                Back to Home
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
