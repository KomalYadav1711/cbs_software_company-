"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/common/container";
import {
  FileText,
  Building2,
  Layers,
  DollarSign,
  CreditCard,
  UserCheck,
  Clock,
  GitBranch,
  BadgeCheck,
  Globe,
  Image,
  Lock,
  ShieldAlert,
  AlertTriangle,
  PowerOff,
  Headphones,
  CloudLightning,
  Scale,
  RefreshCw,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  CheckCircle2,
  Info,
  XCircle,
  ArrowRight,
  Shield,
} from "lucide-react";

const EFFECTIVE_DATE = "July 27, 2026";

type SectionContent = React.ReactNode;

interface Section {
  id: string;
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  shadowColor: string;
  accentColor: string;
  bgLight: string;
  content: SectionContent;
}

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: FileText,
    color: "from-indigo-500 to-blue-600",
    shadowColor: "shadow-indigo-200/60",
    accentColor: "text-indigo-600",
    bgLight: "bg-indigo-50",
    content: (
      <div className="flex gap-4 rounded-xl bg-indigo-50 border border-indigo-100 px-6 py-5">
        <Info className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-indigo-900 leading-relaxed">
          By accessing this website or purchasing any service from CBS SOFTWARE, you acknowledge that
          you have read, understood, and agreed to these Terms &amp; Conditions. If you do not agree
          with these terms, please do not use our website or services.
        </p>
      </div>
    ),
  },
  {
    id: "about",
    number: "02",
    title: "About CBS SOFTWARE",
    icon: Building2,
    color: "from-violet-500 to-purple-600",
    shadowColor: "shadow-violet-200/60",
    accentColor: "text-violet-600",
    bgLight: "bg-violet-50",
    content: (
      <div>
        <p className="text-slate-600 leading-relaxed mb-6">
          CBS SOFTWARE is an IT solutions company providing professional services including, but not
          limited to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Website Design",
            "Website Development",
            "Ecommerce Development",
            "Mobile App Development",
            "Custom Software Development",
            "Digital Marketing",
            "SEO Services",
            "Social Media Marketing",
            "Website Maintenance",
            "Domain & Hosting Assistance",
            "API Integration",
            "UI/UX Design",
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
    id: "scope",
    number: "03",
    title: "Scope of Services",
    icon: Layers,
    color: "from-blue-500 to-cyan-600",
    shadowColor: "shadow-blue-200/60",
    accentColor: "text-blue-600",
    bgLight: "bg-blue-50",
    content: (
      <div className="space-y-3">
        {[
          "All services are provided based on the mutually agreed proposal, quotation, project scope, or signed agreement.",
          "Any work requested outside the approved scope may require additional time, cost, and client approval.",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-4 rounded-xl border border-blue-100 bg-blue-50/60 px-5 py-4">
            <span className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-xs font-bold text-white">
              {i + 1}
            </span>
            <p className="text-sm text-slate-600 leading-relaxed">{item}</p>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "quotations",
    number: "04",
    title: "Quotations & Pricing",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    shadowColor: "shadow-emerald-200/60",
    accentColor: "text-emerald-600",
    bgLight: "bg-emerald-50",
    content: (
      <div className="space-y-2.5">
        {[
          "All quotations are valid for 30 days unless otherwise stated.",
          "Prices are exclusive of applicable taxes unless specifically mentioned.",
          "Additional requirements requested after project approval may incur additional charges.",
          "CBS SOFTWARE reserves the right to revise pricing for changes in project scope.",
        ].map((item) => (
          <div key={item} className="flex items-start gap-3">
            <CheckCircle2 className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    id: "payment",
    number: "05",
    title: "Payment Terms",
    icon: CreditCard,
    color: "from-amber-500 to-orange-600",
    shadowColor: "shadow-amber-200/60",
    accentColor: "text-amber-600",
    bgLight: "bg-amber-50",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-500 italic">Unless otherwise agreed in writing:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              label: "Advance Payment",
              desc: "A project begins only after the agreed advance payment is received.",
              icon: "💳",
              border: "border-amber-100",
              bg: "bg-amber-50/60 hover:bg-amber-50",
            },
            {
              label: "Milestone Payments",
              desc: "Remaining payments shall be made according to the agreed milestones or invoice schedule.",
              icon: "📅",
              border: "border-orange-100",
              bg: "bg-orange-50/60 hover:bg-orange-50",
            },
            {
              label: "Final Delivery",
              desc: "Final delivery or deployment may be withheld until all outstanding payments are cleared.",
              icon: "🚀",
              border: "border-amber-100",
              bg: "bg-amber-50/60 hover:bg-amber-50",
            },
            {
              label: "Late Fees",
              desc: "Delayed payments may attract applicable late fees where permitted by law.",
              icon: "⚠️",
              border: "border-red-100",
              bg: "bg-red-50/40 hover:bg-red-50",
            },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex items-start gap-4 rounded-xl border ${item.border} ${item.bg} px-4 py-4 transition-colors`}
            >
              <span className="text-2xl flex-shrink-0">{item.icon}</span>
              <div>
                <div className="text-sm font-semibold text-slate-800 mb-1">{item.label}</div>
                <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "client-responsibilities",
    number: "06",
    title: "Client Responsibilities",
    icon: UserCheck,
    color: "from-teal-500 to-emerald-600",
    shadowColor: "shadow-teal-200/60",
    accentColor: "text-teal-600",
    bgLight: "bg-teal-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">The client agrees to:</p>
        <div className="space-y-2.5">
          {[
            "Provide accurate project requirements.",
            "Supply all necessary content, images, logos, and documents in a timely manner.",
            "Review submitted work promptly.",
            "Provide feedback and approvals without unnecessary delay.",
            "Ensure that all provided materials do not infringe on third-party rights.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-teal-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4">
          <Info className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-800">
            <strong>Note:</strong> Delays in providing required information may affect project
            timelines.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "timeline",
    number: "07",
    title: "Project Timeline",
    icon: Clock,
    color: "from-sky-500 to-blue-600",
    shadowColor: "shadow-sky-200/60",
    accentColor: "text-sky-600",
    bgLight: "bg-sky-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          Estimated timelines are based on the information available at the start of the project.
          Project completion may be delayed due to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Late client approvals",
            "Changes in project scope",
            "Delayed content submission",
            "Third-party service interruptions",
            "Technical dependencies beyond our control",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-amber-100 flex-shrink-0">
                <ChevronRight className="h-3 w-3 text-amber-600" />
              </span>
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 leading-relaxed">
          CBS SOFTWARE will make reasonable efforts to meet agreed deadlines.
        </p>
      </div>
    ),
  },
  {
    id: "change-requests",
    number: "08",
    title: "Change Requests",
    icon: GitBranch,
    color: "from-fuchsia-500 to-pink-600",
    shadowColor: "shadow-fuchsia-200/60",
    accentColor: "text-fuchsia-600",
    bgLight: "bg-fuchsia-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          Any modification beyond the approved scope shall be treated as a Change Request. This may
          include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Additional pages",
            "New features",
            "Design revisions beyond the agreed limit",
            "Integration of additional third-party services",
            "Functional enhancements",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-fuchsia-100 flex-shrink-0">
                <ChevronRight className="h-3 w-3 text-fuchsia-600" />
              </span>
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-fuchsia-50 border border-fuchsia-100 px-5 py-4">
          <Info className="h-5 w-5 text-fuchsia-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-fuchsia-800">
            Change Requests may require <strong>revised timelines</strong> and{" "}
            <strong>additional charges</strong>.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    number: "09",
    title: "Intellectual Property",
    icon: BadgeCheck,
    color: "from-green-500 to-emerald-600",
    shadowColor: "shadow-green-200/60",
    accentColor: "text-green-600",
    bgLight: "bg-green-50",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-500 italic">Upon receipt of full payment:</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            {
              title: "Client Ownership",
              desc: "The client owns the final approved website or software deliverables as agreed in the project scope.",
              icon: "🏆",
              border: "border-green-100",
              bg: "bg-green-50",
              titleColor: "text-green-800",
              textColor: "text-green-700",
            },
            {
              title: "CBS SOFTWARE IP",
              desc: "CBS SOFTWARE retains ownership of proprietary frameworks, reusable libraries, development tools, methodologies, and pre-existing intellectual property unless otherwise agreed in writing.",
              icon: "⚙️",
              border: "border-blue-100",
              bg: "bg-blue-50",
              titleColor: "text-blue-800",
              textColor: "text-blue-700",
            },
            {
              title: "Third-Party Licenses",
              desc: "Third-party software, plugins, themes, fonts, APIs, and licensed components remain subject to their respective license agreements.",
              icon: "📦",
              border: "border-amber-100",
              bg: "bg-amber-50",
              titleColor: "text-amber-800",
              textColor: "text-amber-700",
            },
            {
              title: "Portfolio Rights",
              desc: "CBS SOFTWARE reserves the right to showcase completed projects in its portfolio and marketing materials unless a written confidentiality agreement states otherwise.",
              icon: "🖼️",
              border: "border-purple-100",
              bg: "bg-purple-50",
              titleColor: "text-purple-800",
              textColor: "text-purple-700",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border ${item.border} ${item.bg} px-5 py-4 hover:shadow-sm transition-shadow`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{item.icon}</span>
                <div className={`text-sm font-bold ${item.titleColor}`}>{item.title}</div>
              </div>
              <div className={`text-xs leading-relaxed ${item.textColor}`}>{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "third-party",
    number: "10",
    title: "Third-Party Services",
    icon: Globe,
    color: "from-cyan-500 to-sky-600",
    shadowColor: "shadow-cyan-200/60",
    accentColor: "text-cyan-600",
    bgLight: "bg-cyan-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          Projects may involve third-party products or services such as:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
          {[
            { name: "Domain Registrars", icon: "🌐" },
            { name: "Hosting Providers", icon: "🖥️" },
            { name: "Payment Gateways", icon: "💳" },
            { name: "Google Services", icon: "🔍" },
            { name: "Microsoft Services", icon: "📊" },
            { name: "Social Media Platforms", icon: "📱" },
            { name: "Cloud Infrastructure", icon: "☁️" },
            { name: "Email Providers", icon: "📧" },
            { name: "SMS Providers", icon: "💬" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex flex-col items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 hover:bg-cyan-50 hover:border-cyan-100 px-3 py-3.5 text-center transition-colors group/svc"
            >
              <span className="text-xl group-hover/svc:scale-110 transition-transform">{item.icon}</span>
              <span className="text-xs font-medium text-slate-600 group-hover/svc:text-cyan-700 transition-colors leading-tight">{item.name}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-red-50 border border-red-200 px-5 py-4">
          <XCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-800">
            CBS SOFTWARE is <strong>not responsible</strong> for service interruptions, pricing
            changes, policy changes, or operational issues caused by third-party providers.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "website-content",
    number: "11",
    title: "Website Content",
    icon: Image,
    color: "from-pink-500 to-rose-600",
    shadowColor: "shadow-pink-200/60",
    accentColor: "text-pink-600",
    bgLight: "bg-pink-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          The client is solely responsible for ensuring that all content, images, videos,
          trademarks, logos, and other materials supplied to CBS SOFTWARE:
        </p>
        <div className="space-y-2.5">
          {[
            "Are accurate.",
            "Do not violate copyright, trademark, privacy, or other applicable laws.",
            "Do not contain unlawful, defamatory, or misleading material.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3">
              <CheckCircle2 className="h-4 w-4 text-pink-500 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "confidentiality",
    number: "12",
    title: "Confidentiality",
    icon: Lock,
    color: "from-slate-600 to-slate-800",
    shadowColor: "shadow-slate-300/60",
    accentColor: "text-slate-600",
    bgLight: "bg-slate-100",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE respects the confidentiality of client information.
        </p>
        <div className="flex gap-3 rounded-xl bg-slate-50 border border-slate-200 px-5 py-4">
          <Lock className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 leading-relaxed">
            Both parties agree not to disclose confidential business information, technical data, or
            proprietary materials received during the course of the project, except where required by
            law or with prior written consent.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "warranties",
    number: "13",
    title: "Warranties & Disclaimer",
    icon: ShieldAlert,
    color: "from-orange-500 to-amber-600",
    shadowColor: "shadow-orange-200/60",
    accentColor: "text-orange-600",
    bgLight: "bg-orange-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE will perform services with reasonable care and professional skill. However, we
          do not guarantee:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Specific search engine rankings",
            "Continuous availability of third-party services",
            "Uninterrupted website uptime",
            "Future compatibility with third-party software updates",
            "Business profits or revenue generated through the website",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic leading-relaxed">
          Except as expressly stated, services are provided &ldquo;as is&rdquo; without additional
          warranties.
        </p>
      </div>
    ),
  },
  {
    id: "liability",
    number: "14",
    title: "Limitation of Liability",
    icon: AlertTriangle,
    color: "from-red-500 to-rose-600",
    shadowColor: "shadow-red-200/60",
    accentColor: "text-red-600",
    bgLight: "bg-red-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          To the maximum extent permitted by applicable law, CBS SOFTWARE shall not be liable for
          any indirect, incidental, consequential, special, or punitive damages, including loss of
          profits, business interruption, data loss, or goodwill arising from the use of our
          services.
        </p>
        <div className="flex gap-3 rounded-xl bg-amber-50 border border-amber-200 px-5 py-4">
          <AlertTriangle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-amber-900 font-medium leading-relaxed">
            Our total liability shall not exceed the amount actually paid by the client for the
            specific service giving rise to the claim.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "termination",
    number: "15",
    title: "Suspension or Termination",
    icon: PowerOff,
    color: "from-rose-500 to-red-600",
    shadowColor: "shadow-rose-200/60",
    accentColor: "text-rose-600",
    bgLight: "bg-rose-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE reserves the right to suspend or terminate services if:
        </p>
        <div className="space-y-2.5">
          {[
            "Payment obligations are not fulfilled.",
            "The client provides unlawful content.",
            "The client misuses our services.",
            "There is a material breach of these Terms & Conditions.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 rounded-xl bg-red-50 border border-red-100 px-4 py-3">
              <XCircle className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="text-sm text-slate-600 leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-slate-50 border border-slate-200 px-5 py-4">
          <Info className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 leading-relaxed">
            The client may terminate a project by providing written notice. Fees for work completed up
            to the termination date remain payable.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "support",
    number: "16",
    title: "Support & Maintenance",
    icon: Headphones,
    color: "from-blue-500 to-indigo-600",
    shadowColor: "shadow-blue-200/60",
    accentColor: "text-blue-600",
    bgLight: "bg-blue-50",
    content: (
      <div className="space-y-5">
        <p className="text-slate-600 leading-relaxed">
          Unless expressly included in the project proposal or covered under a separate maintenance
          agreement, the following are <strong className="text-slate-800">not included</strong> after project delivery:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {[
            "Ongoing support",
            "Updates & bug fixes",
            "Content changes",
            "Hosting management",
            "Technical maintenance",
          ].map((item) => (
            <div key={item} className="flex items-center gap-3">
              <XCircle className="h-4 w-4 text-slate-400 flex-shrink-0" />
              <span className="text-sm text-slate-600">{item}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-3 rounded-xl bg-blue-50 border border-blue-200 px-5 py-4">
          <Info className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-blue-800">
            Support plans and Annual Maintenance Contracts (AMC) are available separately.{" "}
            <Link href="/contact" className="font-semibold underline underline-offset-2 hover:text-blue-900 transition-colors">
              Contact us
            </Link>{" "}
            to learn more.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "force-majeure",
    number: "17",
    title: "Force Majeure",
    icon: CloudLightning,
    color: "from-slate-500 to-slate-700",
    shadowColor: "shadow-slate-300/60",
    accentColor: "text-slate-600",
    bgLight: "bg-slate-100",
    content: (
      <div className="flex gap-4 rounded-xl bg-slate-50 border border-slate-200 px-6 py-5">
        <CloudLightning className="h-5 w-5 text-slate-500 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-slate-700 leading-relaxed">
          CBS SOFTWARE shall not be held responsible for delays or failures caused by circumstances
          beyond reasonable control, including but not limited to natural disasters, acts of
          government, internet outages, cyberattacks, labor disputes, pandemics, or failures of
          third-party infrastructure.
        </p>
      </div>
    ),
  },
  {
    id: "governing-law",
    number: "18",
    title: "Governing Law",
    icon: Scale,
    color: "from-indigo-600 to-violet-600",
    shadowColor: "shadow-indigo-200/60",
    accentColor: "text-indigo-600",
    bgLight: "bg-indigo-50",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          These Terms &amp; Conditions shall be governed by and interpreted in accordance with the{" "}
          <strong className="text-slate-800">laws of India</strong>.
        </p>
        <div className="flex gap-3 rounded-xl bg-indigo-50 border border-indigo-100 px-5 py-4">
          <Scale className="h-5 w-5 text-indigo-500 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-indigo-800 leading-relaxed">
            Any disputes arising from these terms shall be subject to the exclusive jurisdiction of
            the competent courts located in{" "}
            <strong>Mumbai, Maharashtra</strong>, unless otherwise agreed in writing.
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "changes",
    number: "19",
    title: "Changes to These Terms",
    icon: RefreshCw,
    color: "from-lime-500 to-green-600",
    shadowColor: "shadow-lime-200/60",
    accentColor: "text-lime-600",
    bgLight: "bg-lime-50",
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE reserves the right to modify or update these Terms &amp; Conditions at any
          time. Updated versions will be published on this website with a revised effective date.
        </p>
        <p className="text-sm text-slate-500 leading-relaxed">
          Continued use of our website or services after changes are posted constitutes acceptance
          of the updated Terms.
        </p>
      </div>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] },
  }),
};

function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 z-[9999] h-1 origin-left bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500"
      style={{ scaleX }}
    />
  );
}

export default function TermsPage() {
  const allNavItems = [
    ...SECTIONS.map((s) => ({ id: s.id, number: s.number, title: s.title })),
    { id: "contact-us", number: "20", title: "Contact Information" },
  ];

  return (
    <main className="w-full bg-white text-slate-800 antialiased pt-[var(--navbar-height)]">
      <ScrollProgressBar />

      {/* ─── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative py-24 overflow-hidden bg-slate-900 text-white">
        {/* Animated gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-[700px] h-[700px] rounded-full bg-indigo-600/20 blur-[160px] -translate-y-1/3 -translate-x-1/4" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-violet-600/20 blur-[140px] translate-y-1/3 translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] rounded-full bg-blue-500/10 blur-[100px] -translate-x-1/2 -translate-y-1/2" />
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
              className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-400/10 px-4 py-1.5 text-xs font-semibold text-indigo-300 backdrop-blur-sm"
            >
              <Scale className="h-3.5 w-3.5" />
              <span>Legal &amp; Usage Policy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-5xl sm:text-6xl font-extrabold tracking-tight leading-[1.1]"
            >
              Terms &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-purple-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg text-slate-300 leading-relaxed max-w-2xl"
            >
              Welcome to CBS SOFTWARE. By accessing our website or using our services, you agree to
              comply with and be bound by the following Terms &amp; Conditions. Please read them
              carefully before proceeding.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <Clock className="h-4 w-4 text-indigo-400" />
                <span>Effective: <strong className="text-white">{EFFECTIVE_DATE}</strong></span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <FileText className="h-4 w-4 text-indigo-400" />
                <span><strong className="text-white">20</strong> Sections</span>
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/8 border border-white/10 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
                <Scale className="h-4 w-4 text-indigo-400" />
                <span>Jurisdiction: <strong className="text-white">Mumbai, India</strong></span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* ─── Quick Navigation ──────────────────────────────────────────── */}
      <section className="py-8 bg-white border-b border-slate-100 sticky top-[var(--navbar-height)] z-40 bg-white/95 backdrop-blur-sm">
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
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-semibold text-slate-500 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700 hover:shadow-sm"
                >
                  {s.number}. {s.title}
                </a>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* ─── Intro Notice ─────────────────────────────────────────────── */}
      <section className="pt-12 pb-4 bg-slate-50">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 p-px">
              <div className="rounded-[calc(1rem-1px)] bg-white px-7 py-5 flex gap-4 items-start">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-indigo-50">
                  <Scale className="h-5 w-5 text-indigo-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800 mb-1">Important Notice</p>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    By accessing our website or engaging CBS SOFTWARE for any service, you acknowledge that
                    you have read, understood, and agreed to these Terms &amp; Conditions.
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
                    <div
                      className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${section.color} shadow-md ${section.shadowColor}`}
                    >
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className={`text-[10px] font-bold uppercase tracking-widest ${section.accentColor}`}>
                        Section {section.number}
                      </span>
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

            {/* Section 20: Contact Information */}
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
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-600" />

              <div className="flex items-center gap-4 px-7 py-5 border-b border-slate-50">
                <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 shadow-md shadow-indigo-200/60">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-600">
                    Section 20
                  </span>
                  <h2 className="font-heading text-lg font-extrabold text-slate-900 leading-tight">
                    Contact Information
                  </h2>
                </div>
                <span className="hidden sm:flex h-8 w-8 items-center justify-center rounded-xl bg-indigo-50 text-xs font-bold text-indigo-600 flex-shrink-0">
                  20
                </span>
              </div>

              <div className="px-7 py-6 space-y-5">
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions regarding these Terms &amp; Conditions, please contact
                  us:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {[
                    { icon: Mail, label: "Email", value: "info@cbssoftware.in", color: "text-indigo-600", bg: "bg-indigo-50" },
                    { icon: Phone, label: "Phone", value: "+91 XXXXX XXXXX", color: "text-violet-600", bg: "bg-violet-50" },
                    { icon: Globe, label: "Website", value: "www.cbssoftware.in", color: "text-blue-600", bg: "bg-blue-50" },
                    { icon: MapPin, label: "Address", value: "CBS SOFTWARE, Mumbai, Maharashtra, India", color: "text-pink-600", bg: "bg-pink-50" },
                  ].map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-slate-200 hover:shadow-sm px-5 py-4 transition-all group/contact"
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${item.bg} flex-shrink-0 group-hover/contact:scale-110 transition-transform`}>
                          <ItemIcon className={`h-4 w-4 ${item.color}`} />
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

      {/* ─── Agreement Banner ─────────────────────────────────────────── */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Background orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/15 blur-[120px]" />
          <div className="absolute bottom-0 right-1/3 w-[400px] h-[400px] rounded-full bg-violet-600/15 blur-[100px]" />
        </div>

        <Container>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 border border-indigo-400/20 mb-8">
              <Scale className="h-8 w-8 text-indigo-400" />
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
              Agreement to Terms
            </h2>
            <p className="text-slate-300 leading-relaxed mb-3 text-lg">
              By accessing our website or engaging CBS SOFTWARE for any service, you acknowledge
              that you have read, understood, and agreed to these Terms &amp; Conditions.
            </p>
            <p className="text-slate-400 text-sm mb-10">
              If you do not agree with any part of these terms, please discontinue use of our
              website and services.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-900/30 transition-all hover:shadow-xl hover:shadow-indigo-900/40 hover:-translate-y-0.5"
              >
                Get in Touch <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5"
              >
                <Shield className="h-4 w-4" />
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
