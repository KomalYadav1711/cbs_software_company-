"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  TrendingUp,
  Layers,
  Award,
  Sparkles,
  ChevronDown,
  Check,
  Code2,
  Users,
  Clock,
  Shield,
  MessageSquare,
  Building2,
  HeartPulse,
  BookOpen,
  Briefcase,
  Utensils,
  Plane,
  Truck,
  Car,
  Scale,
  Rocket,
  Laptop
} from "lucide-react";

// Why your business needs a professional website
const WHY_NEEDS = [
  "Build trust and credibility with your audience.",
  "Create a strong, professional first impression.",
  "Increase customer engagement and brand loyalty.",
  "Generate more inquiries, sales, and quality leads.",
  "Improve search engine visibility and keyword rankings.",
  "Provide seamless responsive experiences across all devices.",
  "Strengthen your brand identity and design standards.",
  "Stay ahead of your local and global competitors."
];

// Specific Web Design services
const WEB_SERVICES = [
  {
    title: "Custom Website Design",
    description: "Every business is unique, and your website should be too. We create fully customized website designs that align with your brand, business objectives, and target audience.",
    icon: Globe,
    listTitle: "Includes:",
    items: ["Unique layouts", "Brand-focused design", "Custom graphics", "User-friendly navigation", "Interactive elements"]
  },
  {
    title: "Responsive Website Design",
    description: "More than half of web traffic comes from mobile devices. We ensure your website delivers a flawless experience across desktops, tablets, and smartphones.",
    icon: Smartphone,
    listTitle: "Features:",
    items: ["Mobile-first approach", "Cross-browser compatibility", "Fast loading pages", "Optimized user experience", "Responsive layouts"]
  },
  {
    title: "UI/UX Design",
    description: "Great design is more than aesthetics—it's about creating intuitive, user-friendly experiences. We map out user journeys to optimize engagement and navigation.",
    icon: Layers,
    listTitle: "Our UI/UX experts focus on:",
    items: ["User research", "Wireframing", "Interactive prototypes", "User journey optimization", "Accessibility standards", "Intuitive navigation"]
  },
  {
    title: "Business Website Design",
    description: "Whether you're launching a startup or modernizing an existing business, we create professional websites that effectively showcase your products, services, and brand.",
    icon: Briefcase,
    listTitle: "Ideal for:",
    items: ["Startups", "Local Businesses", "Service Providers", "Consultants", "Agencies", "Professional Firms"]
  },
  {
    title: "Corporate Website Design",
    description: "Enterprise businesses require scalable, secure, and professionally designed websites that communicate authority, coordinate portals, and build customer trust.",
    icon: Building2,
    listTitle: "We create:",
    items: ["Corporate portals", "Company profile websites", "Investor information pages", "Multi-location websites", "Enterprise websites"]
  },
  {
    title: "Landing Page Design",
    description: "Need more leads from your marketing campaigns? We design high-converting, targeted landing pages optimized for search engine ads and social media campaigns.",
    icon: TargetIcon,
    listTitle: "Optimized for:",
    items: ["Google Ads", "Facebook Ads", "Product Launches", "Lead Generation", "Event Registration", "Promotional Campaigns"]
  }
];

function TargetIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

// Our Website Design Process
const WEB_DESIGN_PROCESS = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We begin by understanding your business, goals, competitors, and target audience."
  },
  {
    step: "02",
    title: "Planning & Content Layout",
    description: "We define the website structure, user journey, content hierarchy, and functionality."
  },
  {
    step: "03",
    title: "Wireframing",
    description: "Our designers create wireframes to map the layout and user experience before visual design begins."
  },
  {
    step: "04",
    title: "Visual Design",
    description: "We craft modern, engaging, and brand-aligned interfaces that leave a lasting impression."
  },
  {
    step: "05",
    title: "Review & Feedback",
    description: "You review the design, share feedback, and collaborate with our team to refine every detail."
  },
  {
    step: "06",
    title: "Development Handover",
    description: "Once approved, the designs are prepared for seamless development using modern technologies."
  }
];

// Key Features of Our Website Design Services
const KEY_FEATURES = [
  "100% Custom Design",
  "Modern & Professional Layouts",
  "Mobile Responsive Design",
  "SEO-Friendly Structure",
  "Fast Loading Pages",
  "User-Centric Navigation",
  "Conversion-Focused UI",
  "Interactive Elements",
  "High-Quality Visuals",
  "Cross-Browser Compatibility",
  "Secure Design Standards",
  "Easy Future Scalability"
];

// Why Choose Us
const WHY_CHOOSE_US = [
  {
    title: "Strategic Thinking",
    description: "Every design decision is backed by business objectives, user behavior, and conversion best practices."
  },
  {
    title: "Creative Excellence",
    description: "Our designers blend creativity with functionality to create visually compelling digital experiences."
  },
  {
    title: "SEO-Ready Foundation",
    description: "We build websites with clean structures, optimized layouts, and best practices that support search engine rankings."
  },
  {
    title: "Business-Focused Approach",
    description: "Your website isn't just about looks—it's built to generate enquiries, sales, and long-term business growth."
  },
  {
    title: "Experienced Design Team",
    description: "Our UI/UX professionals stay updated with the latest design trends, accessibility standards, and modern technologies."
  },
  {
    title: "Ongoing Support",
    description: "We continue supporting your website after launch with updates, improvements, and technical assistance."
  }
];

// Technologies & Tools We Use
const TECH_TOOLS = {
  "Design Tools": ["Figma", "Adobe XD", "Adobe Photoshop", "Adobe Illustrator"],
  "Front-End Technologies": ["HTML5", "CSS3", "Bootstrap", "JavaScript", "React"],
  "Performance Optimization": ["Responsive Frameworks", "Image Optimization", "Speed Optimization", "Core Web Vitals Best Practices"]
};

// Industries We Design For
const INDUSTRIES = [
  "Healthcare", "Education", "Real Estate", "Manufacturing", "Retail", "Ecommerce",
  "Hospitality", "Finance", "Legal Services", "Travel & Tourism", "NGOs", "Startups",
  "Corporate Enterprises", "Professional Services"
];

// FAQs
const FAQS = [
  {
    question: "How long does it take to design a website?",
    answer: "Project timelines vary depending on complexity, but most business website designs are completed within 2–6 weeks."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Absolutely. Every website we design is fully responsive and optimized for desktops, tablets, and smartphones."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes. We specialize in modern website redesigns that improve appearance, performance, user experience, and conversions."
  },
  {
    question: "Do you design websites with SEO in mind?",
    answer: "Yes. Our designs follow SEO best practices, ensuring your website has a strong foundation for better visibility on search engines."
  },
  {
    question: "Can you also develop the website?",
    answer: "Yes. CBS SOFTWARE provides complete website design and development services, taking your project from concept to launch."
  }
];

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState<keyof typeof TECH_TOOLS>("Design Tools");
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="w-full bg-slate-50/20 text-slate-800 antialiased pt-28">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-600/15 blur-[100px]" />
        </div>

        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Globe className="h-4.5 w-4.5" />
              <span>Tailored Digital Execution</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Professional Website Design Services That{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Inspire, Engage & Convert
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
            >
              Create a Powerful First Impression with a Website Designed for Business Growth. At CBS SOFTWARE, we design visually stunning, user-friendly, and conversion-focused websites that not only capture attention but also turn visitors into loyal customers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-4 items-center"
            >
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "h-12 px-6 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 cursor-pointer shadow-lg shadow-blue-500/20 flex items-center justify-center"
                )}
              >
                Get a Free Website Consultation
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 px-6 rounded-full font-semibold bg-white/10 hover:bg-white/15 text-white border-white/10 backdrop-blur-md cursor-pointer flex items-center justify-center"
                )}
              >
                View Our Portfolio
              </Link>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Why Your Business Needs a Professional Website */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-[4/3] bg-gradient-to-tr from-blue-600/10 to-indigo-600/5 rounded-3xl border border-slate-100 p-8 flex flex-col justify-center items-center shadow-lg shadow-slate-100/50">
                <Laptop className="h-16 w-16 text-blue-600 animate-pulse" />
                <span className="font-heading text-lg font-bold text-slate-800 mt-4">Corporate Excellence</span>
                <span className="text-xs text-slate-500 text-center mt-2 leading-relaxed">Built to generate inquiries, sales, and long-term brand equity.</span>
              </div>
            </div>

            {/* Content */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Value Added
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Why Your Business Needs a Professional Website
              </h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Whether you're a startup, small business, corporate enterprise, or eCommerce brand, our custom website design solutions are tailored to reflect your brand identity and drive measurable business results.
              </p>
              
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {WHY_NEEDS.map((need) => (
                  <div key={need} className="flex items-start gap-2.5">
                    <Check className="h-4.5 w-4.5 text-blue-600 shrink-0 mt-0.5" />
                    <span className="text-xs font-medium text-slate-700">{need}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Specific Website Design Services (6 service cards) */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Services Portfolio
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
              Our Website Design Services
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              Explore the individual layout structures and conversion optimizations we implement across various website categories.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WEB_SERVICES.map((serv) => {
              const Icon = serv.icon;
              return (
                <div key={serv.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col justify-between hover:border-blue-500/20 transition-all">
                  <div>
                    <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-heading text-lg font-bold text-slate-900 leading-snug">
                      {serv.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-3.5 leading-relaxed">
                      {serv.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-5">
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2.5">
                      {serv.listTitle}
                    </div>
                    <ul className="space-y-2">
                      {serv.items.map((item) => (
                        <li key={item} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Our Website Design Process (6-step timeline) */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Work Flow
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
              Our Website Design Process
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              A step-by-step breakdown of how we take your website from initial discovery call through design, visual styling, feedback, and code handover.
            </p>
          </div>

          <div className="mt-16 relative">
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {WEB_DESIGN_PROCESS.map((step, idx) => (
                <div key={step.step} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <div className="h-22 w-22 rounded-full border-2 border-slate-100 bg-white shadow-sm flex items-center justify-center mb-6">
                    <span className="font-heading text-2xl font-black text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      {step.step}
                    </span>
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900 leading-tight">
                    {step.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Key Features of Our Website Design Services */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Features
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Key Features of Our Website Design
              </h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                We make sure that every website we build is optimized for fast loading speeds, contains clean markup structures for search engine crawlers, and feels extremely smooth to browse.
              </p>
            </div>

            {/* Right checklist */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {KEY_FEATURES.map((feat) => (
                  <div key={feat} className="flex items-center gap-2.5 p-3.5 bg-white border border-slate-100 rounded-xl">
                    <Check className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Why Choose CBS Software? */}
      <section className="py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Why Us
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
              We Design Websites That Deliver Business Results
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_US.map((item) => (
              <div key={item.title} className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl flex flex-col items-start">
                <h3 className="font-heading text-base font-bold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Technologies & Tools We Use */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Tech Stack
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight font-sans">
              Technologies & Tools We Use
            </h2>
          </div>

          {/* Switch Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-2xl mx-auto bg-slate-100 p-1.5 rounded-full">
            {Object.keys(TECH_TOOLS).map((tabName) => (
              <button
                key={tabName}
                onClick={() => setActiveTab(tabName as keyof typeof TECH_TOOLS)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTab === tabName
                    ? "bg-white text-blue-600 shadow-sm"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {tabName}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-10 max-w-2xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/30 min-h-[140px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-3 w-full"
              >
                {TECH_TOOLS[activeTab].map((tool) => (
                  <span
                    key={tool}
                    className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-semibold rounded-xl"
                  >
                    {tool}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* Industries We Design For */}
      <section className="py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Industries
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight font-sans">
              Industries We Design For
            </h2>
            <p className="mt-4 text-slate-600 text-sm">
              We create customized website solutions across a wide range of industries:
            </p>
          </div>

          <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-5xl mx-auto">
            {INDUSTRIES.map((ind) => (
              <span
                key={ind}
                className="px-4.5 py-2.5 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-bold rounded-xl hover:border-blue-500/20 hover:bg-blue-50/5 transition-all cursor-default"
              >
                {ind}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* Frequently Asked Questions */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              FAQ
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight font-sans">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="mt-16 max-w-3xl mx-auto flex flex-col gap-4">
            {FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left font-heading font-bold text-slate-900 text-sm md:text-base cursor-pointer select-none"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      openFAQ === idx ? "rotate-180 text-blue-500" : ""
                    }`}
                  />
                </button>
                
                <AnimatePresence initial={false}>
                  {openFAQ === idx && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed border-t border-slate-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ready to Build final CTA banner */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-800/40 px-3.5 py-1.5 rounded-full mb-6">
              LET'S COLLABORATE
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Build a Website That Grows Your Business?
            </h2>
            <p className="mt-6 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Your website should do more than look good—it should generate leads, build trust, and support your long-term business growth. Partner with CBS SOFTWARE to create a modern, responsive, and conversion-focused website that sets your business apart.
            </p>
            <p className="mt-4 font-heading text-base font-extrabold text-blue-400">
              Let's Design Something Extraordinary Together.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "default" }),
                  "h-12 px-6 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 cursor-pointer shadow-lg shadow-blue-500/20 flex items-center justify-center"
                )}
              >
                Start Your Website Project
              </Link>
              <Link
                href="/contact"
                className={cn(
                  buttonVariants({ size: "lg", variant: "outline" }),
                  "h-12 px-6 rounded-full font-semibold bg-white/10 hover:bg-white/15 text-white border-white/10 backdrop-blur-md cursor-pointer flex items-center justify-center"
                )}
              >
                Request a Free Quote
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
