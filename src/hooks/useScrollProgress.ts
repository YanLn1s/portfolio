"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let raf: number;

    const handleScroll = () => {
      raf = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const totalHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const currentProgress = totalHeight > 0 ? scrollY / totalHeight : 0;

        setProgress(currentProgress);
        setScrollDirection(scrollY > lastScrollY ? "down" : "up");
        setLastScrollY(scrollY);
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(raf);
    };
  }, [lastScrollY]);

  return { progress, scrollDirection };
}
