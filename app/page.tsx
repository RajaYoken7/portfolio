import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  return (
    <main className="bg-[#EBE9E5] text-[#151514] min-h-screen flex flex-col overflow-x-hidden selection:bg-[#151514] selection:text-white">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />

      {/* Cohesive Minimalist Footer */}
      <footer className="w-full bg-[#EBE9E5] text-[#6A6863] border-t border-[#DCD9D4] py-12">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className="text-[#151514] font-semibold">Raja Yoken S S R</span>
            <span>·</span>
            <span>© {new Date().getFullYear()} All rights reserved</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Next.js · TypeScript · Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/RajaYoken7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A6863] hover:text-[#151514] transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A6863] hover:text-[#151514] transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6A6863] hover:text-[#151514] transition-colors"
            >
              Twitter
            </a>
            <a
              href="#hero"
              className="flex items-center gap-1 text-[#151514] font-medium hover:underline underline-offset-4 ml-2"
            >
              <span>Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
