// Site configuration
export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "en",
  title: "Shubham Patidar | Application Developer",
  description: "Portfolio of Shubham Patidar - Application Developer focused on reliable mobile experiences and robust payment integrations. Building production-ready Android and Flutter apps.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "SHUBHAM.P",
  links: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Experience", href: "#testimonials" },
  ],
  contactLabel: "Get in Touch",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
}

export const heroConfig: HeroConfig = {
  name: "SHUBHAM PATIDAR",
  roles: ["Application Developer", "Android Specialist", "Flutter Developer", "Payment Integration Expert"],
  backgroundImage: "/images/hero-bg.jpg",
};

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
}

export const aboutConfig: AboutConfig = {
  label: "About Me",
  description: "I'm an Application Developer focused on reliable mobile experiences and robust payment integrations. I build and ship production-ready Android and Flutter apps, optimize data flows with SQL-backed storage, and bring practical ML skills to prototype intelligent features. I design mobile-first solutions that are maintainable and performant, breaking complex features into small, testable components.",
  experienceValue: "3+",
  experienceLabel: "Years of\nExperience",
  stats: [
    { value: "10+", label: "Projects Completed" },
    { value: "5+", label: "Payment Integrations" },
    { value: "3", label: "Production Apps" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Android development" },
    { src: "/images/about-2.jpg", alt: "Code architecture" },
    { src: "/images/about-3.jpg", alt: "Team collaboration" },
    { src: "/images/about-4.jpg", alt: "Development workspace" },
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "Services",
  heading: "What I Do",
  services: [
    {
      iconName: "Smartphone",
      title: "Android Development",
      description: "Building production-ready Android apps with Kotlin and Java. Focus on modular architecture, clear API contracts, and performance-first engineering with testable code.",
      image: "/images/service-1.jpg",
    },
    {
      iconName: "Layers",
      title: "Flutter Development",
      description: "Cross-platform mobile development using Flutter and Dart. Creating responsive UIs, implementing state management, and integrating native features through platform channels.",
      image: "/images/service-2.jpg",
    },
    {
      iconName: "CreditCard",
      title: "Payment Integration",
      description: "Expert in payment gateway integrations including Stripe Terminal. Building secure, reliable payment flows with proper error handling and transaction management.",
      image: "/images/service-3.jpg",
    },
    {
      iconName: "Database",
      title: "Local Data Persistence",
      description: "Implementing SQL-backed storage solutions using Room DB. Optimizing data flows, designing efficient schemas, and ensuring data integrity across app lifecycle.",
      image: "/images/service-4.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "Portfolio",
  heading: "Selected Projects",
  description: "A collection of projects showcasing my expertise in mobile development, payment integrations, and building production-ready applications that scale.",
  projects: [
    {
      title: "treminalauto",
      category: "Payment Integration",
      year: "2024",
      image: "/images/portfolio-1.jpg",
      featured: true,
    },
    {
      title: "Shubho3CrudApp",
      category: "Android / Room DB",
      year: "2024",
      image: "/images/portfolio-2.jpg",
    },
    {
      title: "flutter_location",
      category: "Flutter / i18n",
      year: "2023",
      image: "/images/portfolio-3.jpg",
    },
    {
      title: "ML Prototype Features",
      category: "Machine Learning",
      year: "2023",
      image: "/images/portfolio-4.jpg",
    },
    {
      title: "CI/CD Pipeline Setup",
      category: "DevOps",
      year: "2023",
      image: "/images/portfolio-5.jpg",
    },
  ],
  cta: {
    label: "Have a project in mind?",
    heading: "Let's Build Something Great Together",
    linkText: "Start a Project",
    linkHref: "#contact",
  },
  viewAllLabel: "View All Projects",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "Experience",
  heading: "Professional Journey",
  testimonials: [
    {
      quote: "Working on mobile app development, payment integrations, and creating stable, maintainable codebases that scale. Specialized in Stripe Terminal integration and Flutter-Android interop.",
      author: "Mirnah Technology Systems",
      role: "Application Developer",
      company: "Current Role",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "Ship clean, testable code — iterate fast. My approach: modular architecture, clear API contracts, performance-first engineering, and breaking complex features into small, testable components.",
      author: "Shubham Patidar",
      role: "Developer Philosophy",
      company: "Personal",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Built multiple production-ready apps with focus on payment integrations, local persistence with Room DB, and cross-platform development using Flutter. Always learning, always shipping.",
      author: "Open Source",
      role: "Contributor",
      company: "GitHub",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Android Developer", "Flutter Expert", "Payment Integration"],
  heading: "Ready to Build Your Next Mobile App?",
  description: "I'm always excited to work on new mobile projects, especially those involving payment integrations, cross-platform development, or challenging technical problems. Let's discuss how I can help bring your ideas to life.",
  buttonText: "Let's Talk",
  buttonHref: "mailto:sbhimavat21@gmail.com",
  email: "sbhimavat21@gmail.com",
  backgroundImage: "/images/cta-bg.jpg",
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "SHUBHAM.P",
  description: "Application Developer focused on reliable mobile experiences and robust payment integrations. Building production-ready Android and Flutter apps.",
  columns: [
    {
      title: "Navigation",
      links: [
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Experience", href: "#testimonials" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Android Development", href: "#services" },
        { label: "Flutter Development", href: "#services" },
        { label: "Payment Integration", href: "#services" },
        { label: "Local Data Persistence", href: "#services" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/shubham-patidar-663821217" },
        { label: "GitHub", href: "https://github.com/Shubho3" },
        { label: "Email", href: "mailto:sbhimavat21@gmail.com" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Linkedin", href: "https://www.linkedin.com/in/shubham-patidar-663821217", label: "LinkedIn" },
    { iconName: "Github", href: "https://github.com/Shubho3", label: "GitHub" },
    { iconName: "Mail", href: "mailto:sbhimavat21@gmail.com", label: "Email" },
  ],
  newsletterHeading: "Stay Updated",
  newsletterDescription: "Subscribe to receive updates on new projects and mobile development insights.",
  newsletterButtonText: "Subscribe",
  newsletterPlaceholder: "Enter your email",
  copyright: "© 2024 Shubham Patidar. All rights reserved.",
  credit: "Built with passion for clean, testable code",
};
