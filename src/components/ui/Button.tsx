"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  children,
  href,
  disabled,
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-medium tracking-tight transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-primary";

  const variants = {
    primary: "bg-accent text-white hover:bg-accent-hover",

    secondary:
      "bg-bg-secondary text-text-primary hover:bg-border border border-border",
    ghost: "text-text-primary hover:bg-bg-secondary",
  };

  const sizes = {
    sm: "h-9 px-4 text-sm",
    md: "h-11 px-6 text-sm",
    lg: "h-12 px-8 text-base",
  };

  const classes = cn(
    baseClasses,
    variants[variant],
    sizes[size],
    disabled && "opacity-50 pointer-events-none",
    className
  );

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      type={!href ? type : undefined}
      className={classes}
      disabled={disabled}
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </Component>
  );
}
