export interface Project {
  id: string;
  title: string;
  category: "web" | "mobile" | "brand" | "experimental";
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  video?: string;
  liveUrl?: string;
  repoUrl?: string;
  featured: boolean;
  year: number;
}

export interface Skill {
  name: string;
  category: "design" | "development" | "tools" | "soft";
  proficiency: number; // 0-100
  icon: string; // Lucide icon name
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  companyUrl?: string;
  location: string;
  startDate: string;
  endDate: string | null; // null = current
  description: string[];
  technologies: string[];
}

export interface SiteConfig {
  name: string;
  title: string;
  tagline: string;
  email: string;
  location: string;
  resumeUrl?: string;
  socials: {
    github?: string;
    linkedin?: string;
    dribbble?: string;
    twitter?: string;
    xiaohongshu?: string;
  };
  navLinks: { label: string; href: string }[];
}
