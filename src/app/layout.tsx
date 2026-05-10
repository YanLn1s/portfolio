import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "严润霖 — 软件工程 · 设计 & 开发",
    template: "%s — 严润霖",
  },
  description:
    "广东金融学院软件工程大一学生，热爱设计与前端开发，记录成长与创作。",
  keywords: ["严润霖", "作品集", "前端开发", "UI设计", "软件工程", "广东金融学院"],
  openGraph: {
    title: "严润霖 — 软件工程 · 设计 & 开发",
    description:
      "广东金融学院软件工程大一学生，热爱设计与前端开发，记录成长与创作。",
    type: "website",
    locale: "zh_CN",
  },
  twitter: {
    card: "summary_large_image",
    title: "严润霖 — 软件工程 · 设计 & 开发",
    description:
      "广东金融学院软件工程大一学生，热爱设计与前端开发，记录成长与创作。",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-bg-primary text-text-primary font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
