import { ArrowUp } from "lucide-react";
import { siteConfig } from "@/data/site-config";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-text-secondary">
          &copy; {currentYear} {siteConfig.name}. 设计与开发 by{" "}
          {siteConfig.name}.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-sm text-text-secondary hover:text-accent transition-colors"
          >
            {siteConfig.email}
          </a>
          <a
            href="#"
            className="flex items-center gap-1 text-sm text-text-secondary hover:text-accent transition-colors"
            aria-label="返回顶部"
          >
            <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
