"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";

const socialLinks = [
  { href: "https://github.com/ykstorm", label: "GitHub", icon: Github },
  { href: "https://linkedin.com/in/lakshyaraj-singh-rao", label: "LinkedIn", icon: Linkedin },
  { href: "mailto:raolakshyaraj@gmail.com", label: "Email", icon: Mail },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]">
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.div
              className="font-mono text-lg font-medium text-[var(--color-text-primary)] mb-2"
              whileHover={{ color: "var(--color-accent)" }}
              transition={{ duration: 0.15 }}
            >
              ykstorm
            </motion.div>
            <p className="font-mono text-xs text-[var(--color-text-muted)]">
              Self-taught engineer building production AI systems.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">
              Navigate
            </p>
            <div className="flex flex-col gap-2">
              {["Projects", "Blog", "About", "Contact"].map((link) => (
                <Link
                  key={link}
                  href={`/${link.toLowerCase()}`}
                  className="font-mono text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-accent)] transition-colors duration-150 inline-flex items-center gap-1"
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <p className="font-mono text-xs text-[var(--color-text-muted)] mb-3 uppercase tracking-wider">
              Connect
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
              <motion.a
                href="/resume"
                className="ml-2 font-mono text-xs text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-150 inline-flex items-center gap-1"
                whileHover={{ x: 2 }}
              >
                Resume
                <ArrowUpRight size={14} />
              </motion.a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[var(--color-border)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            &copy; {year} Lakshyaraj Singh Rao
          </p>
          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            Built with Next.js 15 + Tailwind v4 + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}