'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar';

interface FloatingNavProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

const SunIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.3" />
    <path
      d="M8 1.2v1.6M8 13.2v1.6M1.2 8h1.6M13.2 8h1.6M3.2 3.2l1.1 1.1M11.7 11.7l1.1 1.1M3.2 12.8l1.1-1.1M11.7 4.3l1.1-1.1"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const MoonIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M13.6 10.1A5.9 5.9 0 0 1 5.9 2.4a5.9 5.9 0 1 0 7.7 7.7Z"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
);

export function FloatingNav({ theme = 'light', onToggleTheme }: FloatingNavProps) {
  const isDark = theme === 'dark';
  const [activeIdx, setActiveIdx] = useState(0);

  const navItems = [
    { label: 'Home', href: '#hero', icon: NimbusIcons.home, fx: 'glow' as const },
    { label: 'About', href: '#about', icon: NimbusIcons.user, fx: 'wave' as const },
    { label: 'Projects', href: '#projects', icon: NimbusIcons.globe, fx: 'spin' as const },
    { label: 'Contact', href: '#contact', icon: NimbusIcons.drop, fx: 'drop' as const },
  ];

  // Observe which section is in view and sync with the Liquid drop indicator
  useEffect(() => {
    const sectionIds = ['hero', 'about', 'projects', 'contact'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id, idx) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveIdx(idx);
            }
          });
        },
        { rootMargin: '-20% 0px -55% 0px', threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-3.5 sm:top-5 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex items-center gap-2 sm:gap-3 max-w-[96vw]"
    >
      {/* Liquid Glass Fluid WebGL Navbar */}
      <LiquidNavbar
        tone={isDark ? 'dark' : 'light'}
        active={activeIdx}
        onChange={(idx) => setActiveIdx(idx)}
        items={navItems}
        sound={true}
        className="shadow-xl"
      />

      {/* Theme Toggle Button styled with matching liquid glass aesthetics */}
      {onToggleTheme && (
        <motion.button
          type="button"
          onClick={onToggleTheme}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.92 }}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          className={`h-[42px] w-[42px] rounded-full flex items-center justify-center border transition-colors duration-300 backdrop-blur-md shadow-lg cursor-pointer shrink-0 ${
            isDark
              ? 'bg-[rgba(10,18,40,0.35)] border-white/20 text-[#F1F7FF] hover:bg-white/[0.12] hover:border-white/35'
              : 'bg-white/40 border-white/70 text-[#0B132B] hover:bg-white/60 hover:border-white'
          }`}
          style={{
            boxShadow: isDark
              ? 'inset 0 1px 1px rgba(255,255,255,0.25), 0 8px 24px -8px rgba(0,0,0,0.6)'
              : 'inset 0 1px 1px rgba(255,255,255,0.9), 0 8px 24px -8px rgba(0,40,90,0.25)',
          }}
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </motion.button>
      )}

      {/* Direct Contact CTA Pill on Medium+ screens */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`hidden md:inline-flex h-[42px] px-4 rounded-full items-center justify-center text-xs font-semibold tracking-tight border transition-colors duration-300 backdrop-blur-md shadow-lg shrink-0 ${
          isDark
            ? 'bg-white/10 hover:bg-white/20 border-white/25 text-[#F1F7FF]'
            : 'bg-[#0B132B] hover:bg-[#1a2544] border-black/10 text-white'
        }`}
        style={{
          boxShadow: isDark
            ? 'inset 0 1px 1px rgba(255,255,255,0.2), 0 8px 24px -8px rgba(0,0,0,0.5)'
            : '0 8px 24px -8px rgba(0,40,90,0.3)',
        }}
      >
        Get in Touch
      </motion.a>
    </motion.header>
  );
}

export default FloatingNav;
