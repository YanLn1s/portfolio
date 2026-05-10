"use client";

import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { TimelineItem } from "@/components/ui/TimelineItem";
import { skills, skillCategories } from "@/data/skills";
import { experiences } from "@/data/experience";
import { siteConfig } from "@/data/site-config";
import { Button } from "@/components/ui/Button";
import { Download } from "lucide-react";

export function Skills() {
  return (
    <SectionContainer id="skills">
      <SectionHeading number="02" title="技能与经历" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left: Skills */}
        <AnimatedReveal>
          <div>
            {skillCategories.map((category) => {
              const categorySkills = skills.filter(
                (s) => s.category === category.key
              );
              return (
                <div key={category.key} className="mb-10 last:mb-0">
                  <h3 className="text-xs font-mono text-text-secondary uppercase tracking-widest mb-4">
                    {category.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill) => (
                      <SkillBadge key={skill.name} skill={skill} />
                    ))}
                  </div>
                </div>
              );
            })}

            {siteConfig.resumeUrl && (
              <div className="mt-6">
                <Button
                  variant="secondary"
                  size="sm"
                  href={siteConfig.resumeUrl}
                >
                  <Download size={14} className="mr-2" />
                  下载简历
                </Button>
              </div>
            )}
          </div>
        </AnimatedReveal>

        {/* Right: Timeline */}
        <div>
          <AnimatedReveal>
            <div className="relative pl-8">
              {/* Timeline line */}
              <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-border" />

              <div className="flex flex-col gap-12">
                {experiences.map((exp, index) => (
                  <TimelineItem
                    key={exp.id}
                    experience={exp}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </SectionContainer>
  );
}
