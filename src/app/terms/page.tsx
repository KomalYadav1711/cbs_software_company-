"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const EFFECTIVE_DATE = "July 27, 2026";

type SectionContent = React.ReactNode;

interface Section {
  id: string;
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  content: SectionContent;
}

const SECTIONS: Section[] = [
  {
    id: "acceptance",
    number: "01",
    title: "Acceptance of Terms",
    icon: FileText,
    content: (
      <p className="text-slate-600 leading-relaxed">
        By accessing this website or purchasing any service from CBS SOFTWARE, you acknowledge that
        you have read, understood, and agreed to these Terms &amp; Conditions. If you do not agree
        with these terms, please do not use our website or services.
      </p>
    ),
  },
  {
    id: "about",
    number: "02",
    title: "About CBS SOFTWARE",
    icon: Building2,
    content: (
      <div>
        <p className="text-slate-600 leading-relaxed mb-4">
          CBS SOFTWARE is an IT solutions company providing professional services including, but not
          limited to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
            <div key={service} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {service}
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
    content: (
      <div className="space-y-3">
        {[
          "All services are provided based on the mutually agreed proposal, quotation, project scope, or signed agreement.",
          "Any work requested outside the approved scope may require additional time, cost, and client approval.",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
            <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
              {i + 1}
            </span>
            {item}
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
    content: (
      <div className="space-y-3">
        {[
          "All quotations are valid for 30 days unless otherwise stated.",
          "Prices are exclusive of applicable taxes unless specifically mentioned.",
          "Additional requirements requested after project approval may incur additional charges.",
          "CBS SOFTWARE reserves the right to revise pricing for changes in project scope.",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3 text-sm text-slate-600">
            <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
            {item}
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
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-500 italic">Unless otherwise agreed in writing:</p>
        <div className="grid grid-cols-1 gap-3">
          {[
            {
              label: "Advance Payment",
              desc: "A project begins only after the agreed advance payment is received.",
              icon: "💳",
            },
            {
              label: "Milestone Payments",
              desc: "Remaining payments shall be made according to the agreed milestones or invoice schedule.",
              icon: "📅",
            },
            {
              label: "Final Delivery",
              desc: "Final delivery or deployment may be withheld until all outstanding payments are cleared.",
              icon: "🚀",
            },
            {
              label: "Late Fees",
              desc: "Delayed payments may attract applicable late fees where permitted by law.",
              icon: "⚠️",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-start gap-4 rounded-xl border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <span className="text-xl">{item.icon}</span>
              <div>
                <div className="text-sm font-semibold text-slate-800">{item.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">The client agrees to:</p>
        <div className="space-y-2">
          {[
            "Provide accurate project requirements.",
            "Supply all necessary content, images, logos, and documents in a timely manner.",
            "Review submitted work promptly.",
            "Provide feedback and approvals without unnecessary delay.",
            "Ensure that all provided materials do not infringe on third-party rights.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-green-100 text-xs font-bold text-green-600">
                ✓
              </span>
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-amber-50 border border-amber-100 px-5 py-4 text-sm text-amber-800">
          <strong>Note:</strong> Delays in providing required information may affect project
          timelines.
        </div>
      </div>
    ),
  },
  {
    id: "timeline",
    number: "07",
    title: "Project Timeline",
    icon: Clock,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Estimated timelines are based on the information available at the start of the project.
          Project completion may be delayed due to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Late client approvals",
            "Changes in project scope",
            "Delayed content submission",
            "Third-party service interruptions",
            "Technical dependencies beyond our control",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-amber-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Any modification beyond the approved scope shall be treated as a Change Request. This may
          include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Additional pages",
            "New features",
            "Design revisions beyond the agreed limit",
            "Integration of additional third-party services",
            "Functional enhancements",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-indigo-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-indigo-50 border border-indigo-100 px-5 py-4 text-sm text-indigo-800">
          Change Requests may require <strong>revised timelines</strong> and{" "}
          <strong>additional charges</strong>.
        </div>
      </div>
    ),
  },
  {
    id: "intellectual-property",
    number: "09",
    title: "Intellectual Property",
    icon: BadgeCheck,
    content: (
      <div className="space-y-4">
        <p className="text-sm text-slate-500 italic">Upon receipt of full payment:</p>
        <div className="space-y-3">
          {[
            {
              title: "Client Ownership",
              desc: "The client owns the final approved website or software deliverables as agreed in the project scope.",
              color: "green",
            },
            {
              title: "CBS SOFTWARE IP",
              desc: "CBS SOFTWARE retains ownership of proprietary frameworks, reusable libraries, development tools, methodologies, and pre-existing intellectual property unless otherwise agreed in writing.",
              color: "blue",
            },
            {
              title: "Third-Party Licenses",
              desc: "Third-party software, plugins, themes, fonts, APIs, and licensed components remain subject to their respective license agreements.",
              color: "amber",
            },
            {
              title: "Portfolio Rights",
              desc: "CBS SOFTWARE reserves the right to showcase completed projects in its portfolio and marketing materials unless a written confidentiality agreement states otherwise.",
              color: "purple",
            },
          ].map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border px-5 py-4 ${
                item.color === "green"
                  ? "border-green-100 bg-green-50"
                  : item.color === "blue"
                  ? "border-blue-100 bg-blue-50"
                  : item.color === "amber"
                  ? "border-amber-100 bg-amber-50"
                  : "border-purple-100 bg-purple-50"
              }`}
            >
              <div
                className={`text-sm font-bold mb-1 ${
                  item.color === "green"
                    ? "text-green-800"
                    : item.color === "blue"
                    ? "text-blue-800"
                    : item.color === "amber"
                    ? "text-amber-800"
                    : "text-purple-800"
                }`}
              >
                {item.title}
              </div>
              <div
                className={`text-sm ${
                  item.color === "green"
                    ? "text-green-700"
                    : item.color === "blue"
                    ? "text-blue-700"
                    : item.color === "amber"
                    ? "text-amber-700"
                    : "text-purple-700"
                }`}
              >
                {item.desc}
              </div>
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Projects may involve third-party products or services such as:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Domain Registrars",
            "Hosting Providers",
            "Payment Gateways",
            "Google Services",
            "Microsoft Services",
            "Social Media Platforms",
            "Cloud Infrastructure",
            "Email Providers",
            "SMS Providers",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-red-50 border border-red-100 px-5 py-4 text-sm text-red-800">
          CBS SOFTWARE is <strong>not responsible</strong> for service interruptions, pricing
          changes, policy changes, or operational issues caused by third-party providers.
        </div>
      </div>
    ),
  },
  {
    id: "website-content",
    number: "11",
    title: "Website Content",
    icon: Image,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          The client is solely responsible for ensuring that all content, images, videos,
          trademarks, logos, and other materials supplied to CBS SOFTWARE:
        </p>
        <div className="space-y-2">
          {[
            "Are accurate.",
            "Do not violate copyright, trademark, privacy, or other applicable laws.",
            "Do not contain unlawful, defamatory, or misleading material.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-3 text-sm text-slate-600">
              <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600">
                ✓
              </span>
              {item}
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
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE respects the confidentiality of client information.
        </p>
        <p className="text-slate-600 leading-relaxed">
          Both parties agree not to disclose confidential business information, technical data, or
          proprietary materials received during the course of the project, except where required by
          law or with prior written consent.
        </p>
      </div>
    ),
  },
  {
    id: "warranties",
    number: "13",
    title: "Warranties & Disclaimer",
    icon: ShieldAlert,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE will perform services with reasonable care and professional skill. However, we
          do not guarantee:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Specific search engine rankings",
            "Continuous availability of third-party services",
            "Uninterrupted website uptime",
            "Future compatibility with third-party software updates",
            "Business profits or revenue generated through the website",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-red-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic">
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          To the maximum extent permitted by applicable law, CBS SOFTWARE shall not be liable for
          any indirect, incidental, consequential, special, or punitive damages, including loss of
          profits, business interruption, data loss, or goodwill arising from the use of our
          services.
        </p>
        <div className="rounded-xl bg-amber-50 border border-amber-100 px-5 py-4 text-sm text-amber-900 font-medium">
          Our total liability shall not exceed the amount actually paid by the client for the
          specific service giving rise to the claim.
        </div>
      </div>
    ),
  },
  {
    id: "termination",
    number: "15",
    title: "Suspension or Termination",
    icon: PowerOff,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE reserves the right to suspend or terminate services if:
        </p>
        <div className="space-y-2">
          {[
            "Payment obligations are not fulfilled.",
            "The client provides unlawful content.",
            "The client misuses our services.",
            "There is a material breach of these Terms & Conditions.",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-slate-50 border border-slate-100 px-5 py-4 text-sm text-slate-700">
          The client may terminate a project by providing written notice. Fees for work completed up
          to the termination date remain payable.
        </div>
      </div>
    ),
  },
  {
    id: "support",
    number: "16",
    title: "Support & Maintenance",
    icon: Headphones,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Unless expressly included in the project proposal or covered under a separate maintenance
          agreement, the following are <strong>not included</strong> after project delivery:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Ongoing support",
            "Updates & bug fixes",
            "Content changes",
            "Hosting management",
            "Technical maintenance",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-slate-400 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4 text-sm text-blue-800">
          Support plans and Annual Maintenance Contracts (AMC) are available separately.{" "}
          <Link href="/contact" className="font-semibold underline underline-offset-2">
            Contact us
          </Link>{" "}
          to learn more.
        </div>
      </div>
    ),
  },
  {
    id: "force-majeure",
    number: "17",
    title: "Force Majeure",
    icon: CloudLightning,
    content: (
      <p className="text-slate-600 leading-relaxed">
        CBS SOFTWARE shall not be held responsible for delays or failures caused by circumstances
        beyond reasonable control, including but not limited to natural disasters, acts of
        government, internet outages, cyberattacks, labor disputes, pandemics, or failures of
        third-party infrastructure.
      </p>
    ),
  },
  {
    id: "governing-law",
    number: "18",
    title: "Governing Law",
    icon: Scale,
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          These Terms &amp; Conditions shall be governed by and interpreted in accordance with the{" "}
          <strong>laws of India</strong>.
        </p>
        <div className="rounded-xl bg-slate-50 border border-slate-100 px-5 py-4 text-sm text-slate-700">
          Any disputes arising from these terms shall be subject to the exclusive jurisdiction of
          the competent courts located in{" "}
          <strong>Mumbai, Maharashtra</strong>, unless otherwise agreed in writing.
        </div>
      </div>
    ),
  },
  {
    id: "changes",
    number: "19",
    title: "Changes to These Terms",
    icon: RefreshCw,
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE reserves the right to modify or update these Terms &amp; Conditions at any
          time. Updated versions will be published on this website with a revised effective date.
        </p>
        <p className="text-sm text-slate-500">
          Continued use of our website or services after changes are posted constitutes acceptance
          of the updated Terms.
        </p>
      </div>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04 },
  }),
};

export default function TermsPage() {
  return (
    <main className="w-full bg-slate-50/30 text-slate-800 antialiased pt-28">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[500px] h-[500px] rounded-full bg-indigo-600/20 blur-[140px]" />
          <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/15 blur-[120px]" />
        </div>

        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-semibold text-indigo-400"
            >
              <Scale className="h-4 w-4" />
              <span>Legal &amp; Usage Policy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Terms &amp;{" "}
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Conditions
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
            >
              Welcome to CBS SOFTWARE. By accessing our website or using our services, you agree to
              comply with and be bound by the following Terms &amp; Conditions. Please read them
              carefully before using our website or engaging our services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-slate-400"
            >
              <Clock className="h-4 w-4 text-indigo-400" />
              Effective Date: {EFFECTIVE_DATE}
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quick Nav */}
      <section className="py-10 bg-white border-b border-slate-100">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-4">
              Jump to Section
            </p>
            <div className="flex flex-wrap gap-2">
              {SECTIONS.map((s) => (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  {s.number}. {s.title}
                </a>
              ))}
              <a
                href="#contact-us"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-indigo-300 hover:bg-indigo-50 hover:text-indigo-700"
              >
                20. Contact Information
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Intro Note */}
      <section className="py-10 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto rounded-2xl border border-indigo-100 bg-indigo-50/60 px-8 py-6 text-sm text-indigo-900 leading-relaxed">
            By accessing our website or engaging CBS SOFTWARE for any service, you acknowledge that
            you have read, understood, and agreed to these Terms &amp; Conditions.
          </div>
        </Container>
      </section>

      {/* Main Sections */}
      <section className="py-10 pb-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto space-y-6">
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
                  viewport={{ once: true, margin: "-50px" }}
                  className="group rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-100/50 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300"
                >
                  {/* Section Header */}
                  <div className="flex items-start gap-5 p-6 border-b border-slate-50">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 shadow-lg shadow-indigo-200/50">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                        Section {section.number}
                      </span>
                      <h2 className="font-heading text-lg font-extrabold text-slate-900 mt-0.5">
                        {section.title}
                      </h2>
                    </div>
                  </div>

                  {/* Section Body */}
                  <div className="p-6">{section.content}</div>
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
              viewport={{ once: true, margin: "-50px" }}
              className="rounded-2xl border border-slate-100 bg-white shadow-sm shadow-slate-100/50 overflow-hidden hover:shadow-md hover:border-slate-200 transition-all duration-300"
            >
              <div className="flex items-start gap-5 p-6 border-b border-slate-50">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-blue-600 shadow-lg shadow-indigo-200/50">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-500">
                    Section 20
                  </span>
                  <h2 className="font-heading text-lg font-extrabold text-slate-900 mt-0.5">
                    Contact Information
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions regarding these Terms &amp; Conditions, please contact
                  us:
                </p>
                <div className="rounded-xl border border-slate-100 bg-slate-50 divide-y divide-slate-100">
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                      <Mail className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email</div>
                      <div className="text-sm font-semibold text-slate-700">
                        info@cbssoftware.in
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                      <Phone className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Phone</div>
                      <div className="text-sm font-semibold text-slate-700">+91 XXXXX XXXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                      <Globe className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Website</div>
                      <div className="text-sm font-semibold text-slate-700">www.cbssoftware.in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100">
                      <MapPin className="h-4 w-4 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Address</div>
                      <div className="text-sm font-semibold text-slate-700">
                        CBS SOFTWARE, Mumbai, Maharashtra, India
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Consent Banner */}
      <section className="py-16 bg-slate-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/20 border border-indigo-500/30 mb-6">
              <Scale className="h-7 w-7 text-indigo-400" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Agreement to Terms
            </h2>
            <p className="text-slate-300 leading-relaxed mb-2">
              By accessing our website or engaging CBS SOFTWARE for any service, you acknowledge
              that you have read, understood, and agreed to these Terms &amp; Conditions.
            </p>
            <p className="text-slate-400 text-sm">
              If you do not agree with any part of these terms, please discontinue use of our
              website and services.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-700 px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Get in Touch <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/privacy"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
