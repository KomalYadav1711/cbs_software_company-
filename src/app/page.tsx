"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/common/container";
import { Button, buttonVariants } from "@/components/ui/button";
import { ScrollReveal } from "@/components/common/scroll-reveal";
import { cn } from "@/lib/utils";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Star,
  Globe,
  Smartphone,
  Cpu,
  ShoppingBag,
  TrendingUp,
  Layers,
  Award,
  FileText,
  Sparkles,
  Clock,
  Shield,
  MessageSquare,
  Users,
  CheckCircle2,
  ThumbsUp,
  Code2,
  Database,
  Cloud,
  Rocket,
  HelpCircle,
  Building2,
  BookOpen,
  Briefcase,
  Utensils,
  Plane,
  Truck,
  Car,
  Scale,
  Handshake,
  Laptop,
  HeartPulse,
  Factory,
  Landmark,
  Hotel,
  Coffee
} from "lucide-react";


const CLIENT_LOGOS = [
  { name: "ApexCorp", industry: "SaaS" },
  { name: "NovaTech", industry: "AI Labs" },
  { name: "Vortex Digital", industry: "Cloud" },
  { name: "Helix Systems", industry: "Fintech" },
  { name: "QuantumLabs", industry: "MedTech" },
  { name: "Solis Agency", industry: "eCommerce" }
];


const STATS = [
  {
    percentage: "94%",
    title: "First Impression Focus",
    description: "Of first impressions are design-related. Users judge your credibility in milliseconds based on design.",
    icon: Sparkles,
  },
  {
    percentage: "88%",
    title: "Bounce Rate Risk",
    description: "Of consumers are less likely to return to a website after a single bad user experience.",
    icon: ThumbsUp,
  },
  {
    percentage: "74%",
    title: "Mobile Optimization",
    description: "Of users are more likely to return to mobile-friendly sites, making responsive layouts essential.",
    icon: Smartphone,
  },
  {
    percentage: "93%",
    title: "Search Engine Impact",
    description: "Of online experiences begin with a search engine. Clean SEO-optimized design maximizes visibility.",
    icon: Globe,
  }
];


const SERVICES_CARDS = [
  {
    title: "Website Design",
    description: "Modern, responsive, and user-centric website designs that create lasting first impressions and improve conversions.",
    icon: Globe,
    details: ["Brand-focused design", "Interactive elements", "Custom illustrations"]
  },
  {
    title: "Web Development",
    description: "High-performance web applications built using secure, scalable, and cutting-edge technologies like React & Next.js.",
    icon: Code2,
    details: ["Fast loading speeds", "Clean code standards", "API integrations"]
  },
  {
    title: "Ecommerce Development",
    description: "Powerful online stores designed to increase sales with seamless shopping experiences and secure payment integrations.",
    icon: ShoppingBag,
    details: ["Shopify & WooCommerce", "Inventory sync", "Custom checkout flows"]
  },
  {
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for Android and iOS that keep your business connected anytime, anywhere.",
    icon: Smartphone,
    details: ["Flutter & React Native", "Offline support", "App Store deployment"]
  },
  {
    title: "Digital Marketing",
    description: "Strategic SEO, social media marketing, and performance campaigns that increase visibility, traffic, and qualified leads.",
    icon: TrendingUp,
    details: ["SEO optimization", "Content marketing", "Analytics & tracking"]
  },
  {
    title: "Custom Software Development",
    description: "Tailor-made software solutions that streamline operations, improve productivity, and support your specific business growth.",
    icon: Cpu,
    details: ["CRM & ERP systems", "Process automation", "Enterprise scalability"]
  }
];


const WHY_CHOOSE_ITEMS = [
  {
    title: "Business-Driven Solutions",
    description: "Every project begins with understanding your business goals, ensuring that every solution delivers measurable value.",
    icon: Award
  },
  {
    title: "Customized Development",
    description: "We create tailor-made digital solutions designed specifically for your business—no generic templates used.",
    icon: Layers
  },
  {
    title: "Modern Technologies",
    description: "Our team leverages the latest frameworks, tools, and industry best practices to build secure, scalable solutions.",
    icon: Cpu
  },
  {
    title: "Experienced Professionals",
    description: "From UI/UX designers and developers to digital marketing specialists, our experts work collaboratively.",
    icon: Users
  },
  {
    title: "Transparent Communication",
    description: "Stay informed throughout every stage of your project with regular updates, milestone tracking, and dedicated support.",
    icon: MessageSquare
  },
  {
    title: "Long-Term Partnership",
    description: "Our commitment doesn't end at launch. We provide ongoing maintenance, upgrades, and support to keep you ahead.",
    icon: Handshake
  }
];


const TIMELINE_STEPS = [
  {
    step: "01",
    title: "Discovery & Consultation",
    description: "We understand your business objectives, target audience, and project requirements."
  },
  {
    step: "02",
    title: "Planning & Strategy",
    description: "Our experts create a detailed project roadmap, defining timelines, technologies, and deliverables."
  },
  {
    step: "03",
    title: "UI/UX Design",
    description: "We design intuitive, engaging, and visually appealing user experiences that align with your brand."
  },
  {
    step: "04",
    title: "Development & Coding",
    description: "Using modern technologies and best coding practices, we build secure and scalable digital solutions."
  },
  {
    step: "05",
    title: "Testing & Quality Assurance",
    description: "Every project undergoes rigorous testing to ensure optimal performance, security, and reliability."
  },
  {
    step: "06",
    title: "Deployment & Support",
    description: "After a successful launch, we provide continuous monitoring, maintenance, and technical assistance."
  }
];


const TECH_CATEGORIES = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js", "Angular", "Vue.js"],
  Backend: ["ASP.NET", "PHP", "Laravel", "Node.js", "Python", "Java"],
  Mobile: ["Flutter", "React Native", "Android", "iOS"],
  Database: ["MySQL", "Microsoft SQL Server", "PostgreSQL", "MongoDB", "Firebase"],
  Ecommerce: ["Shopify", "WooCommerce", "Magento", "OpenCart", "Custom Ecommerce Platforms"],
  "Cloud & DevOps": ["AWS", "Microsoft Azure", "Google Cloud Platform", "Docker", "Git", "GitHub", "CI/CD"]
};


const INDUSTRIES = [
  { name: "Healthcare", icon: HeartPulse },
  { name: "Education", icon: BookOpen },
  { name: "Real Estate", icon: Building2 },
  { name: "Retail & Ecommerce", icon: ShoppingBag },
  { name: "Manufacturing", icon: Factory },
  { name: "Finance & Banking", icon: Landmark },
  { name: "Hospitality", icon: Hotel },
  { name: "Travel & Tourism", icon: Plane },
  { name: "Logistics & Transportation", icon: Truck },
  { name: "Restaurants & Cafés", icon: Coffee },
  { name: "Automobile", icon: Car },
  { name: "Legal & Consulting", icon: Scale },
  { name: "Startups", icon: Rocket },
  { name: "Corporate Enterprises", icon: Briefcase },
  { name: "NGOs", icon: Handshake },
  { name: "Government Organizations", icon: Shield }
];


const PORTFOLIO_PROJECTS = [
  {
    title: "Apex SaaS Platform",
    category: "Custom Software",
    description: "A comprehensive analytics and workflow management platform for enterprise marketing teams.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"],
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Velo eCommerce",
    category: "eCommerce Store",
    description: "High-converting online store with customized inventory syncing and dynamic layout engines.",
    tech: ["Shopify", "React.js", "GraphQL", "Tailwind CSS"],
    color: "from-cyan-500 to-blue-600"
  },
  {
    title: "Pulse MedTech App",
    category: "Mobile Application",
    description: "A secure telemedicine mobile app connecting patients with qualified healthcare experts globally.",
    tech: ["Flutter", "Firebase", "Node.js", "WebRTC"],
    color: "from-purple-500 to-violet-600"
  }
];


const TESTIMONIALS = [
  {
    text: "Partnering with CBS Software transformed our digital strategy. Their team took the time to understand our exact business goals, delivering a custom eCommerce platform that increased our sales conversion rate by 34% within the first three months.",
    author: "Sarah Jenkins",
    role: "VP of Product, RetailX",
    rating: 5
  },
  {
    text: "The custom CRM software built by CBS Software has streamlined our operations. Processes that used to take our administrators hours now happen instantly, boosting team productivity and customer satisfaction overall.",
    author: "Marcus Chen",
    role: "Director of Operations, Helix Logistics",
    rating: 5
  },
  {
    text: "We needed a modern, responsive website that would load rapidly and reflect our brand identity. The UI/UX designers and frontend developers at CBS Software exceeded all our expectations. We couldn't be happier with the outcome.",
    author: "Elena Rostova",
    role: "Founder, Nova BioLabs",
    rating: 5
  }
];


const FAQS = [
  {
    question: "How long does it take to design and develop a website?",
    answer: "Project timelines vary depending on complexity, but most business website designs and custom developments are completed within 2 to 6 weeks. After our initial consultation, we provide a detailed project roadmap with clear milestones."
  },
  {
    question: "Will my website be mobile-friendly and responsive?",
    answer: "Absolutely. Every website we design is fully responsive and optimized for desktops, tablets, and smartphones. We employ a mobile-first design strategy to guarantee a flawless browsing experience across all device sizes."
  },
  {
    question: "Can you redesign my existing website?",
    answer: "Yes, we specialize in website redesigns. We evaluate your current site's performance, identify conversion bottlenecks, and modernize the design, accessibility, and tech stack to improve speed, search rankings, and user engagement."
  },
  {
    question: "Do you design websites with SEO in mind?",
    answer: "Yes, our designs follow SEO best practices. This includes optimization of site speed, responsive structure, clean HTML5 tags, fast loading speeds, meta tag hierarchies, and Schema structure to ensure your site has a strong foundation for search engines."
  },
  {
    question: "Can you also develop the website after designing it?",
    answer: "Yes. CBS Software provides complete, end-to-end design and development services. We take your project from concept, wireframing, and interactive design prototypes all the way through to deployment, hosting setup, and long-term support."
  }
];

const HIGHLIGHTS = [
  {
    value: "500+",
    title: "Successful Projects Delivered",
    description: "Successfully delivered high-quality software solutions and custom designs.",
    icon: Briefcase,
  },
  {
    value: "300+",
    title: "Happy Clients Worldwide",
    description: "Trusted by companies, startups, and brands across the globe.",
    icon: Users,
  },
  {
    value: "10+",
    title: "Years of Industry Experience",
    description: "A decade of building reliable, scalable, and cutting-edge software solutions.",
    icon: Award,
  },
  {
    value: "20+",
    title: "Skilled Technology Experts",
    description: "A certified team of dedicated UI/UX designers, developers, and consultants.",
    icon: Laptop,
  },
  {
    value: "98%",
    title: "Client Satisfaction",
    description: "Our commitment to excellence translates directly into client success and positive feedback.",
    icon: ThumbsUp,
  },
  {
    value: "24×7",
    title: "Technical Support",
    description: "Round-the-clock assistance and maintenance to keep your services running smoothly.",
    icon: Clock,
  },
  {
    value: "15+",
    title: "Industries Served",
    description: "Deep domain expertise in healthcare, education, retail, finance, and more.",
    icon: Building2,
  },
  {
    value: "100%",
    title: "Custom Development Solutions",
    description: "Tailored software built precisely to match your unique workflow and business goals.",
    icon: Code2,
  }
];

export default function HomePage() {
  const [activeTechCategory, setActiveTechCategory] = useState<keyof typeof TECH_CATEGORIES>("Frontend");
  const [portfolioIndex, setPortfolioIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  return (
    <main className="w-full overflow-hidden bg-slate-50/20 text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* 1. Hero Banner */}
      <section className="relative min-h-[95vh] flex items-center pt-32 pb-20 md:pt-40 md:pb-24">
        {/* Glow Effects */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-1/4 w-[350px] h-[350px] rounded-full bg-cyan-400/20 blur-[100px] animate-pulse" />
          <div className="absolute top-40 right-1/4 w-[400px] h-[400px] rounded-full bg-blue-500/15 blur-[120px] animation-delay-2000" />
          <div className="absolute bottom-10 left-1/3 w-[300px] h-[300px] rounded-full bg-indigo-500/10 blur-[90px]" />
          
          {/* Futuristic grid mesh background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#0f172a08_1px,transparent_1px),linear-gradient(to_bottom,#0f172a08_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        </div>

        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50/50 px-4 py-1.5 text-xs font-semibold text-blue-600 md:text-sm"
              >
                <Sparkles className="h-4.5 w-4.5 text-blue-500" />
                <span>Transforming Businesses Through Innovation</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.1] tracking-tight text-slate-900"
              >
                Transforming Businesses Through{" "}
                <span className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Smart Digital Solutions
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal"
              >
                Helping startups, SMEs, and enterprises establish a powerful digital presence with custom
                websites, scalable web applications, mobile apps, eCommerce solutions, and result-driven
                digital marketing.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-4 text-sm text-slate-500 leading-relaxed max-w-2xl"
              >
                At CBS SOFTWARE, we combine creativity, technology, and strategy to build digital solutions,
                that accelerate business growth. From responsive website design and custom software development
                to mobile applications, we help businesses turn ideas into measurable success.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-4 items-center"
              >
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "h-12 px-6 rounded-full font-semibold shadow-md shadow-blue-500/20 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 cursor-pointer flex items-center justify-center"
                  )}
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-12 px-6 rounded-full font-semibold border-slate-200 text-slate-700 hover:bg-slate-100 hover:text-slate-900 flex items-center justify-center"
                  )}
                >
                  View Our Portfolio
                </Link>
              </motion.div>
            </div>

            {/* Right Hero Visual elements */}
            <div className="lg:col-span-5 relative h-[380px] sm:h-[450px] w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative w-full max-w-[400px] aspect-square rounded-3xl bg-gradient-to-tr from-blue-600/10 via-cyan-500/5 to-indigo-600/15 border border-slate-200/50 p-6 flex flex-col justify-center items-center shadow-xl shadow-slate-100/50"
              >
                {/* Floating Micro-UI Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                  className="absolute top-10 -left-6 bg-white p-4 rounded-2xl border border-slate-100 shadow-md flex items-center gap-3 w-48"
                >
                  <div className="h-9 w-9 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">PROJECT DELIVERED</div>
                    <div className="text-sm font-extrabold text-slate-800">500+ Completed</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}
                  className="absolute bottom-12 -right-8 bg-white p-4 rounded-2xl border border-slate-100 shadow-md flex items-center gap-3 w-52"
                >
                  <div className="h-9 w-9 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                    <Star className="fill-blue-500 h-5 w-5 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">CLIENT SATISFACTION</div>
                    <div className="text-sm font-extrabold text-slate-800">98% Satisfied Reviews</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ scale: [1, 1.03, 1] }}
                  transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                  className="absolute -top-6 right-8 bg-white/80 backdrop-blur-md p-3.5 rounded-full border border-slate-100 shadow-md flex items-center gap-2"
                >
                  <div className="h-6.5 w-6.5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold">10+</div>
                  <div className="text-xs font-semibold text-slate-700 pr-1">Years of Excellence</div>
                </motion.div>

                {/* Animated core icon */}
                <div className="relative flex h-28 w-28 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/30">
                  <Cpu className="h-12 w-12 animate-pulse" />
                </div>
                <div className="mt-8 text-center">
                  <div className="font-heading text-lg font-bold text-slate-800">CBS SOFTWARE</div>
                  <div className="text-xs text-slate-500 mt-1.5">Delivering Digital Excellence, One Project at a Time</div>
                </div>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. Trusted by Businesses */}
      <section className="py-12 border-y border-slate-100 bg-white">
        <Container>
          <div className="flex flex-col items-center">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest text-center">
              TRUSTED BY LEADING BUSINESSES & STARTUPS WORLDWIDE
            </span>
            <div className="mt-8 w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-center items-center">
              {CLIENT_LOGOS.map((logo, index) => (
                <motion.div
                  key={logo.name}
                  whileHover={{ y: -3, opacity: 1 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col items-center justify-center p-4 border border-slate-50 hover:border-slate-100 rounded-xl transition-all cursor-pointer opacity-70"
                >
                  <span className="font-heading font-extrabold text-slate-800 text-lg tracking-tight">
                    {logo.name}
                  </span>
                  <span className="text-[10px] text-blue-500 font-bold uppercase tracking-wider mt-0.5">
                    {logo.industry}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Company Highlights */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full">
                Company Highlights
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Delivering Digital Excellence, One Project at a Time
              </h2>
              <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                Our track record speaks for itself. We deliver high-performing solutions that drive real results.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {HIGHLIGHTS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={idx * 0.05} duration={0.5}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="bg-slate-50/40 hover:bg-white rounded-2xl p-6 border border-slate-100 hover:border-blue-500/20 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full group"
                  >
                    <div>
                      <div className="h-10 w-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="font-heading text-3xl font-black text-blue-600 tracking-tight">
                        {item.value}
                      </div>
                      <h3 className="font-heading text-base font-bold text-slate-800 mt-3 leading-snug group-hover:text-blue-600 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-xs mt-2.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 3. Why Professional Website Design Matters */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                Why Professional Website Design Matters
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
                In today's digital-first world, your website is more than just an online brochure. It is your
                most valuable marketing and sales asset. A professional website builds immediate authority and accelerates growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={stat.title} delay={idx * 0.1} duration={0.5}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="bg-white rounded-2xl p-6 border border-slate-100 shadow-md shadow-slate-100/50 flex flex-col justify-between h-full hover:shadow-lg hover:border-blue-500/20 transition-all duration-300"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="font-heading text-4xl font-black text-blue-600 tracking-tight">
                        {stat.percentage}
                      </div>
                      <h3 className="font-heading text-base font-bold text-slate-800 mt-4 leading-snug">
                        {stat.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-3 leading-relaxed">
                        {stat.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 4. Our Website Design Services (6 service cards) */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Core Expertise
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Comprehensive IT Solutions Under One Roof
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg">
                We design and build bespoke platforms that solve real-world challenges, optimize efficiency, and turn business ideas into measurable success.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES_CARDS.map((card, idx) => {
              const Icon = card.icon;
              return (
                <ScrollReveal key={card.title} delay={idx * 0.08} duration={0.5}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="group rounded-2xl border border-slate-100 p-8 hover:border-blue-500/20 bg-slate-50/20 hover:bg-white transition-all shadow-sm hover:shadow-lg flex flex-col justify-between h-full"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-slate-900 mt-6 transition-colors group-hover:text-blue-600">
                        {card.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-3.5 leading-relaxed">
                        {card.description}
                      </p>
                    </div>

                    <div className="mt-8 border-t border-slate-100 pt-6">
                      <ul className="grid grid-cols-1 gap-2.5">
                        {card.details.map((detail) => (
                          <li key={detail} className="flex items-center gap-2 text-xs text-slate-600">
                            <Check className="h-3.5 w-3.5 text-blue-500 shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 5. Why Choose CBS SOFTWARE (icon grid) */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Our Value Proposition
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                More Than a Technology Company — We're Your Digital Growth Partner
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg">
                Choosing the right technology partner can make all the difference. At CBS SOFTWARE, we don't
                just build websites or applications—we create custom digital experiences that help businesses scale.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {WHY_CHOOSE_ITEMS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={item.title} delay={idx * 0.06} duration={0.5}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="flex gap-4 p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-500/10 transition-all duration-300 h-full"
                  >
                    <div className="h-10 w-10 shrink-0 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-base font-bold text-slate-900 leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-slate-500 text-sm mt-2.5 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 6. Our Design Process (6-step timeline) */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Methodology
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                A Proven Process That Delivers Exceptional Results
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg">
                We employ a collaborative, agile workflow to ensure transparency, milestone accuracy, and high quality at every phase of the project.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 relative">
            {/* Horizontal progress bar for desktop */}
            <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-slate-100/70 -z-10" />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              {TIMELINE_STEPS.map((step, idx) => (
                <ScrollReveal key={step.step} delay={idx * 0.08} duration={0.5}>
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left group/step">
                    {/* Step Bubble */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      className="h-22 w-22 rounded-full border-2 border-slate-100 bg-white shadow-sm flex items-center justify-center mb-6 group-hover/step:border-blue-600 group-hover/step:shadow-md transition-all duration-300 cursor-default"
                    >
                      <span className="font-heading text-2xl font-black text-blue-600 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        {step.step}
                      </span>
                    </motion.div>
                    <h3 className="font-heading text-base font-bold text-slate-900 leading-tight group-hover/step:text-blue-600 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-xs mt-3 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. Technologies We Work With */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Tech Stack
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Building with Industry-Leading Technologies
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg">
                We leverage modern tools, high-performance database engines, secure payment pathways, and robust cloud hosting architectures.
              </p>
            </div>
          </ScrollReveal>

          {/* Switch Tabs */}
          <div className="mt-12 flex flex-wrap justify-center gap-2 max-w-4xl mx-auto bg-slate-100 p-1.5 rounded-full relative">
            {Object.keys(TECH_CATEGORIES).map((catName) => (
              <button
                key={catName}
                onClick={() => setActiveTechCategory(catName as keyof typeof TECH_CATEGORIES)}
                className={`relative px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer z-10 ${
                  activeTechCategory === catName
                    ? "text-blue-600"
                    : "text-slate-500 hover:text-slate-800"
                }`}
              >
                {catName}
                {activeTechCategory === catName && (
                  <motion.div
                    layoutId="active-tech-tab"
                    className="absolute inset-0 rounded-full bg-white shadow-sm -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>

          {/* Category tech grid */}
          <div className="mt-10 max-w-4xl mx-auto bg-white p-8 rounded-3xl border border-slate-100 shadow-lg shadow-slate-100/30 min-h-[160px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTechCategory}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="flex flex-wrap justify-center gap-3 w-full"
              >
                {TECH_CATEGORIES[activeTechCategory].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-semibold rounded-xl hover:border-blue-500/30 hover:bg-blue-50/10 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </Container>
      </section>

      {/* 8. Industries We Serve */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Our Verticals
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Empowering Businesses Across Diverse Industries
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg">
                Our technology solutions are trusted by organizations across various sectors, helping them innovate, optimize operations, and achieve sustainable growth.
              </p>
            </div>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {INDUSTRIES.map((ind, idx) => {
              const Icon = ind.icon;
              return (
                <ScrollReveal key={ind.name} delay={idx * 0.04} duration={0.4}>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 450, damping: 20 }}
                    className="group flex flex-col items-center justify-center p-6 border border-slate-100 rounded-2xl hover:border-blue-500/20 hover:bg-blue-50/5 transition-all text-center cursor-default bg-slate-50/20 hover:shadow-md h-full"
                  >
                    <div className="h-10 w-10 rounded-lg bg-blue-50 group-hover:bg-blue-600 group-hover:text-white text-blue-600 transition-colors flex items-center justify-center mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="font-heading text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {ind.name}
                    </span>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 9. Portfolio Showcase */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-5xl mx-auto">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  Featured Work
                </span>
                <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                  Case Studies & Work Showcase
                </h2>
              </div>
              <div className="flex items-center gap-2">
                {PORTFOLIO_PROJECTS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setPortfolioIndex(idx)}
                    className={`h-3 w-3 rounded-full transition-all cursor-pointer ${
                      portfolioIndex === idx ? "bg-blue-600 w-6" : "bg-slate-300"
                    }`}
                    aria-label={`Show project ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Active project card */}
          <div className="mt-12 max-w-5xl mx-auto">
            <ScrollReveal direction="none" duration={0.6}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={portfolioIndex}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100/50 p-6 md:p-10"
                >
                  {/* Visual */}
                  <div className="lg:col-span-6">
                    <div className={`aspect-[16/10] w-full rounded-2xl bg-gradient-to-tr ${PORTFOLIO_PROJECTS[portfolioIndex].color} flex flex-col justify-center items-center text-white p-6 relative overflow-hidden shadow-inner`}>
                      <div className="absolute top-4 left-4 text-[10px] font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1.5 rounded-full">
                        {PORTFOLIO_PROJECTS[portfolioIndex].category}
                      </div>
                      <Laptop className="h-20 w-20 opacity-80" />
                      <span className="font-heading font-black text-2xl tracking-tight mt-4">
                        {PORTFOLIO_PROJECTS[portfolioIndex].title}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="lg:col-span-6 flex flex-col items-start">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
                      Featured Project
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-slate-900 leading-tight">
                      {PORTFOLIO_PROJECTS[portfolioIndex].title}
                    </h3>
                    <p className="text-slate-600 text-sm mt-4 leading-relaxed">
                      {PORTFOLIO_PROJECTS[portfolioIndex].description}
                    </p>
                    
                    <div className="mt-6 flex flex-wrap gap-2">
                      {PORTFOLIO_PROJECTS[portfolioIndex].tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-slate-50 border border-slate-100 text-slate-500 text-[10px] font-bold rounded-lg uppercase tracking-wide">
                          {t}
                        </span>
                      ))}
                    </div>

                    <Link
                      href="/services"
                      className={cn(
                        buttonVariants({ variant: "outline" }),
                        "mt-8 rounded-full font-semibold border-slate-200 text-slate-700 hover:bg-slate-100 flex items-center justify-center"
                      )}
                    >
                      Explore Services Details <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </ScrollReveal>
          </div>
        </Container>
      </section>

      {/* 10. Testimonials */}
      <section className="py-20 bg-white">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Success Stories
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                What Our Clients Say About Us
              </h2>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} duration={0.6}>
            <div className="mt-16 max-w-4xl mx-auto bg-slate-50/50 border border-slate-100 rounded-3xl p-8 md:p-12 shadow-sm relative">
              <div className="absolute top-8 left-8 text-slate-200 font-serif text-8xl pointer-events-none select-none leading-none">“</div>
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIndex}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative z-10 flex flex-col items-center text-center"
                >
                  {/* Rating stars */}
                  <div className="flex items-center gap-1 text-amber-500 justify-center">
                    {[...Array(TESTIMONIALS[testimonialIndex].rating)].map((_, i) => (
                      <Star key={i} className="fill-current h-4.5 w-4.5" />
                    ))}
                  </div>

                  <p className="mt-8 text-base md:text-lg text-slate-700 leading-relaxed font-medium italic">
                    "{TESTIMONIALS[testimonialIndex].text}"
                  </p>

                  <div className="mt-8 flex flex-col items-center">
                    <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center font-heading text-sm font-extrabold text-blue-600">
                      {TESTIMONIALS[testimonialIndex].author.substring(0,2).toUpperCase()}
                    </div>
                    <div className="font-heading text-base font-bold text-slate-900 mt-4 leading-tight">
                      {TESTIMONIALS[testimonialIndex].author}
                    </div>
                    <div className="text-xs text-slate-500 mt-1">
                      {TESTIMONIALS[testimonialIndex].role}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Carousel navigation controls */}
              <div className="mt-10 flex justify-center gap-3">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
                      testimonialIndex === idx ? "bg-blue-600 w-5" : "bg-slate-300"
                    }`}
                    aria-label={`Show testimonial ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>

      {/* 11. FAQs */}
      <section className="py-20 bg-slate-50/50">
        <Container>
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Got Questions?
              </span>
              <h2 className="font-heading text-3xl md:text-4xl font-extrabold text-slate-900 mt-6 tracking-tight">
                Frequently Asked Questions
              </h2>
              <p className="mt-4 text-slate-600 text-base md:text-lg">
                Here are the most common inquiries we receive regarding our design processes, timelines, and deployment capabilities.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} duration={0.6}>
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
          </ScrollReveal>
        </Container>
      </section>

      {/* 12. Final CTA Banner */}
      <section className="py-20 bg-slate-950 text-white relative overflow-hidden">
        {/* Glow behind final CTA */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
          <div className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full bg-indigo-500/15 blur-[150px]" />
        </div>

        <Container>
          <ScrollReveal direction="up" duration={0.6}>
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
              <span className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-900/40 border border-blue-800/40 px-3.5 py-1.5 rounded-full mb-6">
                LET'S CREATE SOMETHING REMARKABLE
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
                Ready to Build Something Exceptional?
              </h2>
              <p className="mt-6 text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                Let's transform your ideas into innovative, fast, and high-converting digital solutions that
                accelerate your business growth. Your success starts with the right technology partner.
              </p>

              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "default" }),
                    "h-12 px-6 rounded-full font-semibold bg-blue-600 hover:bg-blue-700 text-white border-0 shadow-lg shadow-blue-500/25 cursor-pointer flex items-center justify-center"
                  )}
                >
                  Let's Discuss Your Project
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    buttonVariants({ size: "lg", variant: "outline" }),
                    "h-12 px-6 rounded-full font-semibold bg-white/10 hover:bg-white/15 text-white border-white/10 backdrop-blur-md cursor-pointer flex items-center justify-center"
                  )}
                >
                  Get a Free Consultation
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </Container>
      </section>
    </main>
  );
}