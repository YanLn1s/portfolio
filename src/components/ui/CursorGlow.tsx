"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    if (!isDesktop) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isDesktop]);

  if (!isDesktop) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-0 inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle at center, var(--accent) 0%, transparent 70%)",
        }}
        animate={{
          x: position.x - 300,
          y: position.y - 300,
        }}
        transition={{ type: "spring", stiffness: 50, damping: 25, mass: 0.5 }}
      />
    </motion.div>
  );
}
