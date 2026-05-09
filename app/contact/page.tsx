"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/section-header";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";

const contactLinks = [
  {
    href: "mailto:raolakshyaraj@gmail.com",
    icon: Mail,
    label: "Email",
    value: "raolakshyaraj@gmail.com",
    external: false,
  },
  {
    href: "https://github.com/ykstorm",
    icon: Github,
    label: "GitHub",
    value: "github.com/ykstorm",
    external: true,
  },
  {
    href: "https://linkedin.com/in/lakshyaraj-singh-rao",
    icon: Linkedin,
    label: "LinkedIn",
    value: "Lakshyaraj Singh Rao",
    external: true,
  },
];

const lookingFor = [
  "Staff-level engineering roles at AI product companies",
  "Founding engineer positions (first 10 employees)",
  "DevTools, Platform, or Infrastructure teams",
  "Problems involving LLM systems, RAG, or production AI",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-24 pb-16 bg-[var(--color-bg-primary)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <SectionHeader
          label="// contact"
          title="Let's talk"
          description="Open to staff-level engineering roles at AI product companies. Not looking for FAANG — smaller teams with harder problems."
        />

        <div className="max-w-2xl">
          <div className="space-y-4 mb-12">
            {contactLinks.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-4 bg-[var(--color-bg-secondary)] border border-[var(--color-border)] rounded group hover:border-[var(--color-accent)] transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ x: 4 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 5, scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <link.icon
                    size={24}
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                  />
                </motion.div>
                <div className="flex-1">
                  <p className="font-mono text-xs text-[var(--color-text-muted)] mb-0.5">
                    {link.label}
                  </p>
                  <p className="text-[var(--color-text-primary)]">
                    {link.value}
                  </p>
                </div>
                {link.external && (
                  <ArrowRight
                    size={16}
                    className="text-[var(--color-text-muted)] group-hover:text-[var(--color-accent)] transition-colors"
                  />
                )}
              </motion.a>
            ))}
          </div>

          <motion.div
            className="p-6 border border-[var(--color-border)] rounded bg-[var(--color-bg-secondary)]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="font-mono text-sm text-[var(--color-accent)] mb-4">
              What I'm looking for
            </p>
            <ul className="space-y-3">
              {lookingFor.map((item, index) => (
                <motion.li
                  key={index}
                  className="flex items-start gap-3 text-[var(--color-text-secondary)] text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.4 + index * 0.08 }}
                >
                  <span className="text-[var(--color-accent)] mt-0.5">→</span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}