export interface NavSubItem {
  title: string;
  href: string;
  description: string;
  iconName: string;
}

export interface NavItemType {
  title: string;
  href: string;
  subItems?: NavSubItem[];
}

export const navigation: NavItemType[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
    subItems: [
      {
        title: "Web Development",
        href: "/services",
        description: "Build fast, custom responsive websites and robust web applications.",
        iconName: "Globe",
      },
      {
        title: "Mobile Apps",
        href: "/services",
        description: "Develop premium native & cross-platform iOS and Android applications.",
        iconName: "Smartphone",
      },
      {
        title: "Custom Software",
        href: "/services",
        description: "Tailored software solutions designed to automate and scale your business operations.",
        iconName: "Cpu",
      },
      {
        title: "eCommerce Solutions",
        href: "/services",
        description: "Create high-converting, secure, and user-friendly online stores.",
        iconName: "ShoppingBag",
      },
      {
        title: "Digital Marketing",
        href: "/services",
        description: "Drive traffic, increase sales, and grow your brand with targeted digital campaigns.",
        iconName: "TrendingUp",
      },
    ],
  },
  {
    title: "Portfolio",
    href: "/portfolio",
    subItems: [
      {
        title: "Case Studies",
        href: "/portfolio",
        description: "Deep dive into our custom software projects and successful solutions.",
        iconName: "FileText",
      },
      {
        title: "Client Success",
        href: "/portfolio",
        description: "See what our clients say about partnering with CBS Software.",
        iconName: "Award",
      },
      {
        title: "Our Tech Stack",
        href: "/portfolio",
        description: "Explore the modern tools, frameworks, and cloud systems we build with.",
        iconName: "Layers",
      },
    ],
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];