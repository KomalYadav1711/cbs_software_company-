export interface PortfolioMetric {
  label: string;
  value: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  client: string;
  category: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  results: string;
  technologies: string[];
  metrics: PortfolioMetric[];
  duration: string;
  coverImage: string;
  features: string[];
  liveUrl?: string;
  confidential?: boolean;
}

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: "apex-erp",
    title: "Apex Cloud ERP Platform",
    client: "Apex Manufacturing Corp",
    category: "Custom Software",
    shortDescription: "A cloud-native Enterprise Resource Planning (ERP) platform automating complex supply chain logistics and warehouse inventory tracking.",
    challenge: "Apex Manufacturing operated on fragmented legacy desktop software. Warehouses struggled with stock latency, leading to inventory discrepancies, material shortages on the production floor, and high administrative overhead from manual reconciliation.",
    solution: "We engineered a web-based, real-time ERP solution. It features smart inventory tracking with automatic barcode scanners integration, predictive stock ordering based on historical demand models, and automated resource scheduling for floor workers.",
    results: "The platform streamlined supply chain operations by eliminating paper trails, enabling instant stock visibility across 4 regional sites, and reducing order-to-dispatch latency.",
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "Docker", "Amazon Web Services (AWS)", "Redis"],
    metrics: [
      { label: "Operational Efficiency", value: "+42%" },
      { label: "Inventory Discrepancy", value: "-98%" },
      { label: "System Sync Latency", value: "<150ms" }
    ],
    duration: "6 Months",
    coverImage: "/images/blog/ai-enterprise-systems.png",
    features: [
      "Real-time global inventory monitoring",
      "Dynamic workforce scheduling calendar",
      "Supplier ledger integration & automated PO generation",
      "Comprehensive compliance and financial reporting",
      "Interactive data visualization dashboard"
    ],
    liveUrl: "https://cbs-software.vercel.app",
    confidential: false
  },
  {
    id: "novapay-wallet",
    title: "NovaPay Secure Digital Wallet",
    client: "Nova Fintech Group",
    category: "Custom Software",
    shortDescription: "A next-generation P2P mobile payment, lending, and investment wallet for modern users.",
    challenge: "Nova Fintech Group needed to enter the highly competitive P2P payments market. They required a system that could handle instantaneous financial transactions with zero downtime, robust security compliance, and an incredibly intuitive user interface that appeals to younger demographics.",
    solution: "We designed and built a mobile application with a microservices-based backend. The app integrates secure biometric login, instant payment rails utilizing gRPC protocols, and a micro-investment algorithm that rounds up spare change to purchase index funds.",
    results: "NovaPay launched successfully, scaling to process millions of transactions per month while maintaining top-tier security compliance and a 99.99% system availability rate.",
    technologies: ["Flutter", "Go (Golang)", "Kubernetes", "Redis", "gRPC", "MongoDB", "Google Cloud Platform"],
    metrics: [
      { label: "Monthly Active Users", value: "250K+" },
      { label: "Transaction Speed", value: "<2.1s" },
      { label: "Platform Uptime", value: "99.99%" }
    ],
    duration: "8 Months",
    coverImage: "/images/blog/cloud-scale-arch.png",
    features: [
      "Instant peer-to-peer money transfers via QR codes",
      "Spare-change round-up automated investing engine",
      "Bank-grade biometrics and end-to-end data encryption",
      "Push notification systems for instant transaction alerts",
      "PDF statements and tax report exports"
    ],
    confidential: true
  },
  {
    id: "solis-ecommerce",
    title: "Solis Headless Storefront",
    client: "Solis Lifestyle Brand",
    category: "eCommerce Solutions",
    shortDescription: "A high-conversion headless eCommerce shopping experience built for speed and custom product options.",
    challenge: "Solis Lifestyle experienced high cart abandonment rates on their legacy eCommerce store. The page load times were exceeding 4.2 seconds on mobile, and the interface lacked flexible product customization rules, hindering sales of their bespoke items.",
    solution: "We built a customized headless storefront leveraging a fast frontend connected to Shopify's eCommerce engine via GraphQL. We optimized static pages, compressed image assets dynamically, and developed an interactive, highly visual custom product configurator.",
    results: "Page speed improved drastically, achieving under-second mobile load times. This optimization directly boosted conversion rates and pushed average order value (AOV) higher.",
    technologies: ["Next.js", "React", "GraphQL", "Tailwind CSS", "Shopify API", "Vercel", "Framer Motion"],
    metrics: [
      { label: "Mobile Page Load", value: "0.85s" },
      { label: "Conversion Rate", value: "+38%" },
      { label: "Average Order Value", value: "+22%" }
    ],
    duration: "4 Months",
    coverImage: "/images/blog/web-dev-future.png",
    features: [
      "Lightning-fast static page generation & server rendering",
      "Interactive 3D-like custom product building panel",
      "One-click guest checkout integration",
      "Real-time inventory levels syncing",
      "Personalized recommendation engine"
    ],
    liveUrl: "https://cbs-software.vercel.app",
    confidential: false
  },
  {
    id: "vortex-workspace",
    title: "Vortex Collaborative Workspace",
    client: "Vortex Digital Inc",
    category: "Web Development",
    shortDescription: "A real-time project management and document-editing collaboration app for creative agencies.",
    challenge: "Creative teams struggled with desynchronized project files and fragmented feedback loops. Existing cloud solutions either lacked high-fidelity real-time editing or were too rigid for creative project mapping.",
    solution: "We developed a real-time collaborative web application utilizing WebSockets and conflict-free replicated data types (CRDTs). The editor supports simultaneous document editing, interactive canvas design boards, and video conferencing directly inside the workspace.",
    results: "Vortex Digital was able to centralize its agency operations, reducing cross-department communication delays and enhancing asset design review times.",
    technologies: ["React", "TypeScript", "Node.js", "Express", "Socket.io", "MongoDB", "Framer Motion"],
    metrics: [
      { label: "Active Team Workspaces", value: "12K+" },
      { label: "Collaboration Latency", value: "<80ms" },
      { label: "Review Feedback Loops", value: "-60%" }
    ],
    duration: "5 Months",
    coverImage: "/images/blog/mobile-ux-principles.png",
    features: [
      "Multi-user real-time document editing and canvas sketching",
      "In-app text chat, comment threads, and audio/video calls",
      "Granular permission controls and link-sharing features",
      "Version history recovery system",
      "Third-party integrations with Slack, Figma, and Jira"
    ],
    liveUrl: "https://cbs-software.vercel.app",
    confidential: false
  },
  {
    id: "carepulse-telehealth",
    title: "CarePulse Telehealth App",
    client: "CarePulse Health Group",
    category: "Mobile Apps",
    shortDescription: "A HIPAA-compliant secure telemedicine platform connecting doctors and patients instantly.",
    challenge: "CarePulse needed to address the growing demand for remote clinical consultations. The app required HIPAA-compliant security standards, secure end-to-end video streams, and an interface simple enough for elderly patients to navigate.",
    solution: "We developed cross-platform iOS and Android mobile apps using React Native. The system features WebRTC encrypted video connections, digital prescription signatures, and integrates with major health record systems via secure APIs.",
    results: "CarePulse launched on the App Store and Google Play with stellar reviews, facilitating thousands of virtual visits and improving care delivery for rural patients.",
    technologies: ["React Native", "TypeScript", "WebRTC", "Firebase", "Node.js", "HIPAA APIs", "AWS"],
    metrics: [
      { label: "App Store Rating", value: "4.9/5" },
      { label: "Consultation Volume", value: "50K+" },
      { label: "Patient Wait Time", value: "<8m" }
    ],
    duration: "7 Months",
    coverImage: "/images/blog/mobile-ux-principles.png",
    features: [
      "Encrypted HD video and voice consulting screens",
      "Secure instant message messaging for care plans",
      "Automated appointment scheduling and reminders",
      "Digital prescription routing to local pharmacies",
      "Apple Health and Google Fit integration"
    ],
    confidential: false
  },
  {
    id: "helix-saas-marketing",
    title: "Helix B2B Lead Acquisition",
    client: "Helix Security Systems",
    category: "Digital Marketing",
    shortDescription: "A performance-focused SEO and targeted campaign setup driving high-quality B2B enterprise leads.",
    challenge: "Helix Security Systems struggled with a high cost-per-acquisition (CPA) on their search advertising campaigns and low organic visibility for critical cybersecurity industry keywords.",
    solution: "We conducted a thorough technical SEO site restructure, created conversion-optimized landing pages, and implemented a targeted content marketing strategy combined with structured cold/warm search ad campaigns.",
    results: "Helix Security experienced a massive surge in organic search traffic and qualified demo registrations, while reducing the overall cost of customer acquisition.",
    technologies: ["Google Ads", "Google Analytics 4", "SEMrush", "HubSpot CRM", "Webflow", "Hotjar"],
    metrics: [
      { label: "Qualified Lead Volume", value: "+240%" },
      { label: "Cost Per Acquisition", value: "-45%" },
      { label: "Organic Search Traffic", value: "+180%" }
    ],
    duration: "Ongoing",
    coverImage: "/images/blog/ai-enterprise-systems.png",
    features: [
      "Custom SEO audits & implementation schedules",
      "High-converting B2B SaaS landing page development",
      "Advanced attribution tracking and behavior heatmaps",
      "Automated lead scoring and CRM synchronization",
      "Continuous A/B testing of ad copywriting"
    ],
    liveUrl: "https://cbs-software.vercel.app",
    confidential: false
  }
];
