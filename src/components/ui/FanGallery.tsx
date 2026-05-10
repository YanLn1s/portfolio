"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { DesignWork } from "@/data/projects";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface FanGalleryProps {
  works: DesignWork[];
}

export function FanGallery({ works }: FanGalleryProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const prefersReduced = useReducedMotion();

  return (
    <div className="relative select-none flex flex-col items-center pt-12">
      <span className="block text-xs font-mono text-text-secondary/40 tracking-widest" style={{ marginBottom: 32 }}>
        hover to explore
      </span>

      <div
        className="mx-auto"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 180px)",
          gap: "16px",
          justifyContent: "center",
        }}
      >
        {works.map((work, index) => {
          const isHovered = hoveredIndex === index;
          const isAnyHovered = hoveredIndex !== null;

          return (
            <motion.div
              key={work.id}
              className="cursor-pointer rounded-xl overflow-hidden border border-border shadow-md shrink-0"
              style={{ width: 180, aspectRatio: "1 / 1" }}
              animate={
                prefersReduced
                  ? {}
                  : {
                      y: isHovered ? -16 : 0,
                      scale: isHovered ? 1.18 : isAnyHovered ? 0.88 : 1,
                      rotate: isHovered ? 0 : (index - (works.length - 1) / 2) * 2.5,
                      zIndex: isHovered ? 100 : 10,
                      filter: isAnyHovered && !isHovered
                        ? "brightness(0.5)"
                        : "brightness(1)",
                      boxShadow: isHovered
                        ? "0 20px 40px -12px rgba(0,0,0,0.3)"
                        : "0 4px 12px rgba(0,0,0,0.08)",
                    }
              }
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 22,
                mass: 0.8,
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
