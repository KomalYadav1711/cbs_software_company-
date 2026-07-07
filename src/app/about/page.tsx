"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import {
  Sparkles,
  Trophy,
  Target,
  Lightbulb,
  Shield,
  Users,
  Award,
  BookOpen,
  Check,
  ChevronRight,
  Handshake,
  Compass,
  Cpu,
  Laptop
} from "lucide-react";

// Core values
const CORE_VALUES = [
  {
    title: "Innovation",
    description: "We continuously explore new technologies, ideas, and creative approaches to deliver modern solutions that keep our clients ahead of the competition.",
    icon: Lightbulb,
  },
  {
    title: "Integrity",
    description: "We believe in honesty, transparency, and ethical business practices in every single project and client relationship we establish.",
    icon: Shield,
  },
  {
    title: "Customer Success",
    description: "Our clients' success is our success. Every decision we make is hyper-focused on delivering real value and measurable business outcomes.",
    icon: Users,
  },
  {
    title: "Excellence",
    description: "We maintain the highest standards of quality in design, development, testing, and support to ensure exceptional results.",
    icon: Trophy,
  },
  {
    title: "Collaboration",
    description: "Great ideas come from teamwork. We work closely with our clients, treating every project as a true partnership built on trust.",
    icon: Handshake,
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. Our team is committed to continuous learning and adopting the latest frameworks and practices.",
    icon: BookOpen,
  }
];

// Why clients choose us
const WHY_CLIENTS_CHOOSE = [
  {
    title: "Customized Solutions",
    description: "Every business is unique. We design and develop solutions tailored precisely to your specific goals, processes, and target audience.",
  },
  {
    title: "Experienced Professionals",
    description: "Our multidisciplinary team brings deep expertise in UI/UX design, frontend and backend development, mobile apps, and digital marketing.",
  },
  {
    title: "End-to-End Services",
    description: "From strategy and design to coding, QA, deployment, and ongoing optimization, we provide complete digital solutions under one roof.",
  },
  {
    title: "Transparent Communication",
    description: "We keep you informed throughout every phase of the project with regular updates, milestones reviews, and clear support channels.",
  },
  {
    title: "Quality Assurance",
    description: "Every digital solution undergoes comprehensive automated and manual testing to ensure top-notch security, speed, and reliability.",
  },
  {
    title: "Long-Term Support",
    description: "Our relationship doesn't end after launch. We provide maintenance, optimization, and upgrades to help your business continue scaling.",
  }
];

// Strengths list
const STRENGTHS = [
  "Customer-Centric Approach",
  "Innovative & Future-Ready Solutions",
  "Experienced Development Team",
  "Agile Development Methodology",
  "Modern UI/UX Design Expertise",
  "Secure Coding Standards",
  "SEO-Friendly Development",
  "Scalable Software Architecture",
  "On-Time Project Delivery",
  "Dedicated Project Management",
  "Affordable & Transparent Pricing",
  "Ongoing Technical Support",
  "Commitment to Continuous Improvement"
];

// Business philosophy
const PHILOSOPHY = [
  {
    title: "Understand Before We Build",
    description: "We invest time in deeply understanding your business model, operational challenges, and goals before recommending any technology solution.",
    icon: Compass
  },
  {
    title: "Build for the Future",
    description: "Our architectures are designed with scalability, clean coding, and future compatibility in mind, ensuring your software grows with your business.",
    icon: Cpu
  },
  {
    title: "Partner for Long-Term Success",
    description: "We believe the best results come from lasting collaborations. We stand by you with post-launch support and upgrades as your needs evolve.",
    icon: Handshake
  }
];

export default function AboutPage() {
  return (
    <main className="w-full bg-slate-50/20 text-slate-800 antialiased pt-28">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/20 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 w-[350px] h-[350px] rounded-full bg-indigo-600/15 blur-[100px]" />
        </div>

        <Container>
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-xs font-semibold text-blue-400"
            >
              <Award className="h-4.5 w-4.5" />
              <span>Who We Are</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-6 font-heading text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight"
            >
              Empowering Businesses Through{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Technology & Innovation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl"
            >
              At CBS SOFTWARE, we believe technology is more than just code—it's the foundation of business growth, innovation, and long-term success. We are a technology-driven IT solutions company dedicated to helping brands expand their digital presence.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Story Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-square bg-gradient-to-br from-blue-600/10 to-indigo-600/5 rounded-3xl border border-slate-100 p-8 flex flex-col justify-between shadow-lg shadow-slate-100/50">
                <Laptop className="h-16 w-16 text-blue-600" />
                <div>
                  <div className="font-heading text-xl font-bold text-slate-800">CBS SOFTWARE</div>
                  <div className="text-xs text-slate-500 mt-2">Established with a vision to build technology partnerships built on trust.</div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Our Story
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
                How We Started & Where We Are Going
              </h2>
              <div className="mt-6 space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  Every successful business begins with an idea, and so did ours. CBS SOFTWARE was founded with a simple yet powerful vision—to help businesses leverage technology to unlock new opportunities and achieve sustainable growth.
                </p>
                <p>
                  Over the years, we've evolved into a trusted technology partner by consistently delivering innovative solutions, maintaining transparency, and building long-term relationships with our clients. We understand that every business is unique, which is why we focus on creating customized strategies.
                </p>
                <p>
                  Our success is measured not by the number of projects we complete, but by the success our clients achieve through our work. From ambitious startups to established enterprises, we partner with businesses of all sizes to design digital experiences that solve real-world challenges.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-slate-50/50 border-y border-slate-100">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Mission Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-start">
              <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                Our Mission
              </h3>
              <p className="font-heading text-base font-bold text-blue-600 mt-3">
                Delivering Technology That Creates Real Business Value
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Our mission is to empower businesses with innovative, reliable, and scalable technology solutions that simplify operations, enhance customer experiences, and drive sustainable growth.
              </p>
              <ul className="mt-6 space-y-2 w-full">
                {[
                  "Deliver high-quality digital solutions that exceed client expectations.",
                  "Build long-term partnerships based on trust, transparency, and collaboration.",
                  "Stay ahead of technological advancements to provide future-ready solutions.",
                  "Help businesses improve productivity and profitability through digital transformation."
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs text-slate-600 leading-normal">
                    <Check className="h-3.5 w-3.5 text-blue-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Vision Card */}
            <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm flex flex-col items-start">
              <div className="h-12 w-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6">
                <Compass className="h-6 w-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-slate-900 leading-snug">
                Our Vision
              </h3>
              <p className="font-heading text-base font-bold text-indigo-600 mt-3">
                To Be a Globally Trusted Digital Transformation Partner
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                Our vision is to become one of the most trusted and respected IT service companies by delivering innovative solutions that inspire growth, create lasting value, and help businesses thrive in the digital era.
              </p>
              <p className="text-slate-500 text-sm mt-4 leading-relaxed">
                We envision a future where organizations of every size can harness the power of technology to achieve their full potential, eliminating operational bottlenecks and establishing a dominant online presence.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Values
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
              The Principles That Guide Everything We Do
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              We anchor our relationships and development methodologies in core values that ensure code quality, business alignment, and client satisfaction.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_VALUES.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="p-6 bg-slate-50/50 border border-slate-100 rounded-2xl flex flex-col items-start">
                  <div className="h-10 w-10 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900">
                    {val.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why Choose CBS Software / Clients Choose us */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Differentiators
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
              Why Clients Partner with CBS SOFTWARE
            </h2>
            <p className="mt-4 text-slate-600 text-sm sm:text-base">
              Businesses choose us because we go beyond delivering code—we build digital products that drive growth and create real operational impact.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CLIENTS_CHOOSE.map((item, idx) => (
              <div key={item.title} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col justify-between">
                <div>
                  <span className="font-heading text-xs font-extrabold text-blue-600">
                    0{idx + 1}.
                  </span>
                  <h3 className="font-heading text-base font-bold text-slate-900 mt-3 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Our Strengths */}
      <section className="py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Text left */}
            <div className="lg:col-span-5">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                What Sets Us Apart
              </span>
              <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Our Key Strengths
              </h2>
              <p className="mt-4 text-slate-600 text-sm leading-relaxed">
                Over years of technical execution, we have honed specific competencies that make our software architecture, security, and project delivery bulletproof.
              </p>
            </div>

            {/* Checklist right */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {STRENGTHS.map((str) => (
                  <div key={str} className="flex items-center gap-2.5 p-3.5 bg-slate-50 border border-slate-100 rounded-xl">
                    <Check className="h-4.5 w-4.5 text-blue-600 shrink-0" />
                    <span className="text-xs font-semibold text-slate-700">{str}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Business Philosophy */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Core Beliefs
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight">
              Technology with Purpose. Partnerships with Trust.
            </h2>
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {PHILOSOPHY.map((phil) => {
              const Icon = phil.icon;
              return (
                <div key={phil.title} className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center">
                  <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                    {phil.title}
                  </h3>
                  <p className="text-slate-500 text-xs mt-4 leading-relaxed">
                    {phil.description}
                  </p>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Why We Exist Section */}
      <section className="py-20 bg-white border-t border-slate-100">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Why We Exist
            </span>
            <h2 className="font-heading text-3xl font-extrabold text-slate-900 mt-6 tracking-tight font-sans">
              Embracing Digital Transformation with Confidence
            </h2>
            <p className="mt-6 text-slate-600 text-sm sm:text-base leading-relaxed">
              Our purpose is simple—to help businesses embrace digital transformation with confidence. We are passionate about turning ideas into impactful digital products that enhance customer experiences, streamline operations, and unlock new growth opportunities.
            </p>
            <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              Whether you're launching a startup, modernizing an existing business, or scaling to new markets, CBS SOFTWARE is here to help you succeed.
            </p>
          </div>
        </Container>
      </section>

      {/* Ready to Build CTA */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        <Container>
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-800/40 px-3.5 py-1.5 rounded-full mb-6">
              WORK WITH EXPERTS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-tight leading-tight">
              Ready to Build Something Exceptional?
            </h2>
            <p className="mt-6 text-slate-300 text-xs sm:text-sm leading-relaxed max-w-2xl">
              Let's transform your ideas into innovative digital solutions that drive growth, improve efficiency, and create lasting business value. Your success starts with the right partner.
            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="lg" className="h-12 px-6 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 cursor-pointer shadow-lg shadow-blue-500/20" asChild>
                <Link href="/contact">Let's Discuss Your Project</Link>
              </Button>
              <Button size="lg" className="h-12 px-6 rounded-full font-semibold bg-white/10 hover:bg-white/15 text-white border-white/10 backdrop-blur-md cursor-pointer" variant="outline" asChild>
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
