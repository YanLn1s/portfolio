"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { siteConfig } from "@/data/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const activeSection = useActiveSection(
    siteConfig.navLinks.map((l) => l.href.replace("#", ""))
  );
  const { scrollDirection } = useScrollProgress();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => setIsAtTop(window.scrollY < 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isVisible = scrollDirection === "up" || isAtTop;

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          isAtTop
            ? "bg-transparent"
            : "bg-bg-primary/80 backdrop-blur-xl border-b border-border"
        )}
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <nav className="max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a
            href="#"
            className="text-lg font-semibold tracking-tight hover:text-accent transition-colors"
          >
            {siteConfig.name}
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {siteConfig.navLinks.map((link) => {
              const sectionId = link.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors py-1",
                    isActive ? "text-text-primary" : "text-text-secondary hover:text-text-primary"
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-[2px] bg-accent rounded-full"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(true)}
              className="p-2 -mr-2 text-text-primary"
              aria-label="打开菜单"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-bg-primary md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div className="flex items-center justify-between px-6 h-16">
              <span className="text-lg font-semibold">{siteConfig.name}</span>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 -mr-2 text-text-primary"
                aria-label="关闭菜单"
              >
                <X size={20} />
              </button>
            </div>
            <nav className="flex flex-col px-6 pt-12 gap-6">
              {siteConfig.navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl font-light tracking-tight hover:text-accent transition-colors"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
