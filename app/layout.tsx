import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";
import CursorTrail from "@/components/cursor-trail";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lakshyaraj Singh Rao — Staff Engineer",
  description:
    "Self-taught engineer. Built production AI systems at Homesty.ai. Seeking staff-level roles at AI product companies.",
  keywords: ["engineer", "AI", "full-stack", "Next.js", "TypeScript", "portfolio"],
  authors: [{ name: "Lakshyaraj Singh Rao" }],
  openGraph: {
    title: "Lakshyaraj Singh Rao — Staff Engineer",
    description: "Self-taught engineer. Built production AI systems at Homesty.ai.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <ScrollProgress />
        <CursorTrail />
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}