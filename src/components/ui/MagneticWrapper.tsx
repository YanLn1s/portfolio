"use client";

import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface MagneticWrapperProps {
  children: ReactNode;
  className?: string;
  strength?: number;
}

export function MagneticWrapper({
  children,
  className,
  strength = 20,
}: MagneticWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDesktop || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);
    const y = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2);
    setPosition({
      x: x * strength,
      y: y * strength,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      animate={position}
      transition={{ type: "spring", stiffness: 150, damping: 15 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
}
