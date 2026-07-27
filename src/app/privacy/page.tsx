"use client";

import { motion } from "framer-motion";
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
} from "lucide-react";

const EFFECTIVE_DATE = "July 27, 2026";

const SECTIONS = [
  {
    id: "who-we-are",
    number: "01",
    title: "Who We Are",
    icon: Users,
    content: (
      <div>
        <p className="text-slate-600 leading-relaxed mb-4">
          CBS SOFTWARE is a technology-driven IT solutions company dedicated to helping businesses
          establish a powerful digital presence. Our services include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
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
    id: "information-we-collect",
    number: "02",
    title: "Information We Collect",
    icon: Database,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="font-heading font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 inline-block" />
            Personal Information
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
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
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-indigo-500 inline-block" />
            Technical Information (Collected Automatically)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
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
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <ChevronRight className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-heading font-bold text-slate-800 mb-3 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 inline-block" />
            Information You Voluntarily Provide
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-4">
            {[
              "Filling out our contact form",
              "Requesting a quotation",
              "Booking a consultation",
              "Subscribing to newsletters",
              "Applying for jobs",
              "Contacting us by email or phone",
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
                <ChevronRight className="h-4 w-4 text-cyan-500 flex-shrink-0" />
                {item}
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
    content: (
      <div>
        <p className="text-slate-600 leading-relaxed mb-4">
          We use your information to provide and improve our services responsibly:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Respond to your enquiries",
            "Prepare project proposals and quotations",
            "Deliver our services",
            "Communicate project updates",
            "Improve our website and services",
            "Provide customer support",
            "Process payments (where applicable)",
            "Send service-related communications",
            "Send newsletters or marketing communications (only where permitted)",
            "Comply with legal obligations",
            "Protect against fraud and misuse",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {item}
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Our website may use cookies and similar technologies to improve your browsing experience.
          Cookies help us:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Remember your preferences",
            "Analyze website traffic",
            "Improve website performance",
            "Understand visitor behavior",
            "Enhance website security",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="mt-4 rounded-xl bg-amber-50 border border-amber-100 px-5 py-4 text-sm text-amber-800">
          <strong>Note:</strong> You may disable cookies through your browser settings. However, some
          website features may not function properly if cookies are disabled.
        </div>
      </div>
    ),
  },
  {
    id: "analytics",
    number: "05",
    title: "Analytics",
    icon: BarChart2,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          We may use analytics tools to understand visitor behavior, improve user experience, and
          measure marketing effectiveness. These may include:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            "Google Analytics",
            "Google Search Console",
            "Microsoft Clarity",
            "Meta Pixel",
            "LinkedIn Insight Tag",
          ].map((tool) => (
            <div
              key={tool}
              className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              {tool}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          When you submit a contact form, we collect the information you provide to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Respond to your enquiry",
            "Schedule consultations",
            "Prepare quotations",
            "Provide requested services",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-green-50 border border-green-100 px-5 py-4 text-sm text-green-800 font-medium">
          ✅ We do not sell or rent your personal information.
        </div>
      </div>
    ),
  },
  {
    id: "how-we-share",
    number: "07",
    title: "How We Share Information",
    icon: Share2,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE does not sell, trade, or rent your personal information. We may share
          information only in the following circumstances:
        </p>
        <div className="space-y-2">
          {[
            "With trusted service providers assisting us in delivering our services",
            "With payment processing providers (where applicable)",
            "With hosting or cloud infrastructure providers",
            "With legal or regulatory authorities when required by law",
            "To protect our legal rights or prevent fraud",
          ].map((item) => (
            <div key={item} className="flex items-start gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0 mt-0.5" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500 italic">
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Protecting your information is a priority. We implement appropriate technical and
          organizational measures, including:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {[
            { label: "Secure Servers", icon: "🖥️" },
            { label: "SSL Encryption", icon: "🔒" },
            { label: "Firewall Protection", icon: "🛡️" },
            { label: "Access Controls", icon: "🔑" },
            { label: "Password Protection", icon: "🔐" },
            { label: "Regular Software Updates", icon: "🔄" },
            { label: "Secure Backups", icon: "💾" },
            { label: "Security Monitoring", icon: "👁️" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
            >
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>
        <div className="rounded-xl bg-blue-50 border border-blue-100 px-5 py-4 text-sm text-blue-800">
          <strong>Note:</strong> While we take reasonable precautions, no internet transmission or
          electronic storage method is completely secure.
        </div>
      </div>
    ),
  },
  {
    id: "data-retention",
    number: "09",
    title: "Data Retention",
    icon: Clock,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          We retain personal information only for as long as necessary to:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Provide our services",
            "Meet contractual obligations",
            "Comply with legal requirements",
            "Resolve disputes",
            "Maintain business records",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
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
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          Subject to applicable law, you may have the right to:
        </p>
        <div className="space-y-3">
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
              className="flex items-start gap-3 rounded-lg border border-slate-100 bg-slate-50 px-4 py-3"
            >
              <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-600 flex-shrink-0">
                ✓
              </span>
              <div>
                <div className="text-sm font-semibold text-slate-800">{item.right}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
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
    content: (
      <p className="text-slate-600 leading-relaxed">
        Our website may contain links to external websites. CBS SOFTWARE is not responsible for the
        privacy practices, security, or content of third-party websites. We encourage you to review
        the privacy policies of any external sites you visit.
      </p>
    ),
  },
  {
    id: "email-communications",
    number: "12",
    title: "Email Communications",
    icon: Mail,
    content: (
      <div className="space-y-4">
        <p className="text-slate-600 leading-relaxed">
          If you subscribe to our newsletter or marketing communications, you may receive updates
          about:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {[
            "Company news",
            "New services",
            "Technology insights",
            "Offers and promotions",
            "Educational content",
          ].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-slate-600">
              <ChevronRight className="h-4 w-4 text-blue-500 flex-shrink-0" />
              {item}
            </div>
          ))}
        </div>
        <p className="text-sm text-slate-500">
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
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          Our website and services are intended for businesses and individuals aged{" "}
          <strong>18 years or older</strong>. We do not knowingly collect personal information from
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
    content: (
      <div className="space-y-3">
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
    content: (
      <div className="space-y-3">
        <p className="text-slate-600 leading-relaxed">
          CBS SOFTWARE may update this Privacy Policy from time to time to reflect changes in our
          services, legal requirements, or business practices. The updated version will be published
          on this page with a revised effective date.
        </p>
        <p className="text-sm text-slate-500">
          We encourage you to review this page periodically to stay informed.
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
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

export default function PrivacyPolicyPage() {
  return (
    <main className="w-full bg-slate-50/30 text-slate-800 antialiased pt-28">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-600/20 blur-[140px]" />
          <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-indigo-600/15 blur-[120px]" />
        </div>

        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Shield className="h-4 w-4" />
              <span>Privacy &amp; Data Protection</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Privacy{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Policy
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
            >
              At CBS SOFTWARE, we value your privacy and are committed to protecting your personal
              information. This policy explains how we collect, use, disclose, store, and safeguard
              your information.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-2 text-sm text-slate-400"
            >
              <Clock className="h-4 w-4 text-blue-400" />
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
                  className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
                >
                  {s.number}. {s.title}
                </a>
              ))}
              <a
                href="#contact-us"
                className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600 transition-all hover:border-blue-300 hover:bg-blue-50 hover:text-blue-700"
              >
                16. Contact Us
              </a>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Intro Note */}
      <section className="py-10 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto rounded-2xl border border-blue-100 bg-blue-50/60 px-8 py-6 text-sm text-blue-900 leading-relaxed">
            By using our website or engaging our services, you agree to the practices described in
            this Privacy Policy. Please read it carefully before proceeding.
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
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-200/50">
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
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

            {/* Section 16: Contact Us */}
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
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 shadow-lg shadow-blue-200/50">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-500">
                    Section 16
                  </span>
                  <h2 className="font-heading text-lg font-extrabold text-slate-900 mt-0.5">
                    Contact Us
                  </h2>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <p className="text-slate-600 leading-relaxed">
                  If you have any questions, concerns, or requests regarding this Privacy Policy or
                  how your information is handled, please contact us:
                </p>
                <div className="rounded-xl border border-slate-100 bg-slate-50 divide-y divide-slate-100">
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                      <Mail className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Email</div>
                      <div className="text-sm font-semibold text-slate-700">info@cbssoftware.in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                      <Phone className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Phone</div>
                      <div className="text-sm font-semibold text-slate-700">+91 XXXXX XXXXX</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                      <Globe className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Website</div>
                      <div className="text-sm font-semibold text-slate-700">www.cbssoftware.in</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 px-5 py-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-100">
                      <MapPin className="h-4 w-4 text-blue-600" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-400 font-medium">Address</div>
                      <div className="text-sm font-semibold text-slate-700">CBS SOFTWARE, India</div>
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
            <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-600/20 border border-blue-500/30 mb-6">
              <Shield className="h-7 w-7 text-blue-400" />
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight mb-4">
              Your Consent
            </h2>
            <p className="text-slate-300 leading-relaxed mb-2">
              By accessing our website or using our services, you acknowledge that you have read,
              understood, and agreed to this Privacy Policy.
            </p>
            <p className="text-slate-400 text-sm">
              If you do not agree with this Privacy Policy, please discontinue use of our website
              and services.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-blue-600 hover:bg-blue-700 px-6 py-3 text-sm font-semibold text-white transition-colors"
              >
                Contact Us <ChevronRight className="h-4 w-4" />
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 px-6 py-3 text-sm font-semibold text-white transition-colors"
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
