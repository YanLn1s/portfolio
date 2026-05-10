"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Send, ExternalLink, Heart, Mail, Check, Loader2, AlertCircle } from "lucide-react";
import { SectionContainer } from "@/components/ui/SectionContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedReveal } from "@/components/ui/AnimatedReveal";
import { MagneticWrapper } from "@/components/ui/MagneticWrapper";
import { siteConfig } from "@/data/site-config";

// Get your free key at https://web3forms.com/
const WEB3FORMS_KEY = "eed09230-cbbd-4426-804f-949ae9936636";

const socialLinks = [
  {
    label: "GitHub",
    href: siteConfig.socials.github,
    icon: ExternalLink,
  },
  {
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
].filter((l) => l.href);

export function Contact() {
  const [formState, setFormState] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [liked, setLiked] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_KEY);
    formData.append("subject", `Portfolio 留言 from ${formData.get("name")}`);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <SectionContainer id="contact">
      <SectionHeading number="04" title="与我联系" />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Form */}
        <AnimatedReveal>
          {formState === "success" ? (
            <motion.div
              className="flex flex-col items-center justify-center h-full text-center py-12"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center mb-4">
                <Check size={22} />
              </div>
              <h3 className="text-lg font-semibold mb-2">消息已发送！</h3>
              <p className="text-text-secondary text-sm">
                我会尽快回复你。
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="text-sm text-accent hover:text-accent-hover mt-4 transition-colors"
              >
                发送新消息
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="hidden"
                name="from_name"
                value={`Portfolio 访客: ${siteConfig.name}`}
              />

              <div className="space-y-1.5">
                <label
                  htmlFor="name"
                  className="text-xs font-mono text-text-secondary uppercase tracking-wider"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full bg-transparent border-b border-border py-2.5 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="你的名字"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="email"
                  className="text-xs font-mono text-text-secondary uppercase tracking-wider"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full bg-transparent border-b border-border py-2.5 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors"
                  placeholder="you@example.com"
                />
              </div>
              <div className="space-y-1.5">
                <label
                  htmlFor="message"
                  className="text-xs font-mono text-text-secondary uppercase tracking-wider"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-2.5 text-text-primary placeholder:text-text-secondary/40 focus:outline-none focus:border-accent transition-colors resize-none"
                  placeholder="说说你的项目想法..."
                />
              </div>

              {formState === "error" && (
                <motion.p
                  className="flex items-center gap-2 text-sm text-red-500"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <AlertCircle size={14} />
                  发送失败，请稍后重试或直接发送邮件给我。
                </motion.p>
              )}

              <button
                type="submit"
                disabled={formState === "sending"}
                className="inline-flex items-center gap-2 h-11 px-6 bg-accent text-white font-medium text-sm rounded-lg hover:bg-accent-hover transition-colors disabled:opacity-60"
              >
                {formState === "sending" ? (
                  <>
                    <Loader2 size={14} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={14} />
                    发送消息
                  </>
                )}
              </button>
            </form>
          )}
        </AnimatedReveal>

        {/* Social links */}
        <AnimatedReveal delay={0.2}>
          <div className="flex flex-col justify-center space-y-8">
            <p className="text-text-secondary leading-relaxed">
              有项目想法，或者只是想打个招呼？填写表单或通过下面的渠道联系我。我始终欢迎探讨新的合作机会和有趣的创意。
            </p>
            <div className="flex gap-4 items-center">
              {socialLinks.map((social) => (
                <MagneticWrapper key={social.label} strength={8}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/30 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon size={18} />
                  </a>
                </MagneticWrapper>
              ))}
              {/* Heart like button */}
              <MagneticWrapper strength={8}>
                <button
                  onClick={() => setLiked(!liked)}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center transition-colors hover:border-red-300"
                  aria-label="点赞"
                >
                  <Heart
                    size={18}
                    className={liked ? "fill-red-500 text-red-500" : "text-text-secondary"}
                  />
                </button>
              </MagneticWrapper>
            </div>
            <div>
              <p className="text-xs font-mono text-text-secondary uppercase tracking-wider mb-1">
                Location
              </p>
              <p className="text-sm text-text-primary">{siteConfig.location}</p>
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </SectionContainer>
  );
}
