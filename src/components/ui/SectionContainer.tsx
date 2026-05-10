import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SectionContainerProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionContainer({
  id,
  children,
  className,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-24 md:py-32 lg:py-40 px-6 md:px-12", className)}
    >
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
