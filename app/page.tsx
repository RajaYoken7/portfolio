'use client';

import React from 'react';
import { useTheme } from '@/components/theme-provider';
import { FloatingNav } from '@/components/sections/floating-nav';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';
import { ArrowUp } from 'lucide-react';

export default function Home() {
  const { theme, setTheme, toggleTheme, isDark } = useTheme();

  return (
    <main
      data-theme={theme}
      className={`min-h-screen flex flex-col overflow-x-hidden selection:bg-[#151514] selection:text-white dark:selection:bg-[#F1EFEA] dark:selection:text-[#111110] transition-colors duration-500 ${
        isDark ? 'bg-[#111110] text-[#F1EFEA]' : 'bg-[#EBE9E5] text-[#151514]'
      }`}
    >
      {/* Floating Liquid Glass Navigation Bar */}
      <FloatingNav theme={theme} onToggleTheme={toggleTheme} />
      
      {/* Hero Section */}
      <HeroSection theme={theme} onThemeChange={setTheme} />
      
      {/* About / Profile Section */}
      <AboutSection />
      
      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <ContactSection />

      {/* Cohesive Minimalist Footer */}
      <footer
        className={`w-full py-12 border-t transition-colors duration-500 ${
          isDark
            ? 'bg-[#111110] text-[#8E8B85] border-[#242422]'
            : 'bg-[#EBE9E5] text-[#6A6863] border-[#DCD9D4]'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6 text-xs font-mono">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
            <span className={isDark ? 'text-[#F1EFEA] font-semibold' : 'text-[#151514] font-semibold'}>
              Raja Yoken S S R
            </span>
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
              className={isDark ? 'text-[#8E8B85] hover:text-[#F1EFEA] transition-colors' : 'text-[#6A6863] hover:text-[#151514] transition-colors'}
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className={isDark ? 'text-[#8E8B85] hover:text-[#F1EFEA] transition-colors' : 'text-[#6A6863] hover:text-[#151514] transition-colors'}
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className={isDark ? 'text-[#8E8B85] hover:text-[#F1EFEA] transition-colors' : 'text-[#6A6863] hover:text-[#151514] transition-colors'}
            >
              Twitter
            </a>
            <a
              href="#hero"
              className={`flex items-center gap-1 font-medium hover:underline underline-offset-4 ml-2 ${
                isDark ? 'text-[#F1EFEA]' : 'text-[#151514]'
              }`}
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
