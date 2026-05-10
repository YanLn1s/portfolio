"use client";

import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { aboutText } from "@/data/about";

export function About() {
  return (
    <SectionContainer id="about">
      <SectionHeading number="03" title="关于" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <AnimatedReveal>
          <div className="space-y-6">
            {aboutText.paragraphs.map((paragraph, index) => (
              <p
                key={index}
                className="text-text-secondary leading-relaxed text-pretty"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </AnimatedReveal>

        <AnimatedReveal delay={0.2}>
          <div className="flex flex-col justify-center h-full">
            <blockquote className="border-l-2 border-accent pl-6 py-2">
              <p className="text-xl md:text-2xl font-light leading-relaxed tracking-tight text-text-primary">
                {aboutText.quote}
              </p>
            </blockquote>
            <p className="text-sm text-text-secondary mt-4">
              — Charles Eames
            </p>
          </div>
        </AnimatedReveal>
      </div>
    </SectionContainer>
  );
}
