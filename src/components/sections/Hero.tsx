"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { TextReveal } from "@/components/ui/TextReveal";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/data/site-config";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export function Hero() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--text-primary) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-32 text-center">
        <motion.p
          className="text-sm font-mono text-accent tracking-widest mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          个人简介
        </motion.p>

        <h1 className="text-hero font-light tracking-tight leading-none mb-6">
          <TextReveal text={siteConfig.name} delay={0.4} />
        </h1>

        <motion.p
          className="text-lg md:text-xl text-text-secondary font-light max-w-lg mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          className="flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
        >
          <Button href="#work">查看作品</Button>
          <Button href="#contact" variant="secondary">
            联系我
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.6 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-text-secondary"
          animate={
            prefersReduced
              ? {}
              : {
                  y: [0, 8, 0],
                }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-xs font-mono tracking-widest">SCROLL</span>
          <div className="w-[1px] h-8 bg-border relative overflow-hidden">
            <motion.div
              className="absolute top-0 left-0 right-0 h-2 bg-accent rounded-full"
              animate={
                prefersReduced
                  ? { top: "80%" }
                  : { top: ["0%", "80%", "0%"] }
              }
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
