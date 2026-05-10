"use client";

import { motion } from "framer-motion";
import { Skill } from "@/lib/types";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <motion.div
      className="group relative inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg-secondary border border-border hover:border-accent/20 transition-colors cursor-default"
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <span className="text-sm font-medium text-text-primary">{skill.name}</span>
      <div className="absolute -bottom-0.5 left-2 right-2 h-[2px] bg-border rounded-full overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
        <motion.div
          className="h-full bg-accent/40 rounded-full"
          initial={{ width: 0 }}
          whileHover={{ width: `${skill.proficiency}%` }}
          transition={{ type: "spring", stiffness: 100, damping: 15 }}
        />
      </div>
    </motion.div>
  );
}
