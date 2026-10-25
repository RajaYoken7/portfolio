'use client';

import React from 'react';

interface FloatingNavProps {
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

const SunIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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

  // Explicit theme-aware CSS variables for instant responsiveness and zero override leakage
  const navStyle = {
    '--nav-text': isDark ? '#F5F5F5' : '#151514',
    '--nav-icon': isDark ? '#F5F5F5' : '#151514',
    '--nav-cta-text': isDark ? '#F5F5F5' : '#151514',
    '--nav-cta-bg': isDark ? '#222220' : '#FFFFFF',
    '--nav-cta-border': isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(21, 21, 20, 0.18)',
    '--nav-toggle-border': isDark ? 'rgba(255, 255, 255, 0.22)' : 'rgba(21, 21, 20, 0.2)',
    '--nav-glass-bg': isDark ? 'rgba(18, 18, 18, 0.35)' : 'rgba(255, 255, 255, 0.28)',
    '--nav-glass-border': isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.55)',
    '--nav-glass-shadow': isDark
      ? '0 8px 32px 0 rgba(0, 0, 0, 0.45), inset 0 1px 1px 0 rgba(255, 255, 255, 0.1)'
      : '0 8px 32px 0 rgba(0, 0, 0, 0.06), inset 0 1px 1px 0 rgba(255, 255, 255, 0.7)',
  } as React.CSSProperties;

  return (
    <header className="fixed top-4 right-4 sm:top-5 sm:right-6 md:top-6 md:right-8 z-50 pointer-events-auto">
      <nav
        aria-label="Main Navigation"
        style={{
          ...navStyle,
          background: 'var(--nav-glass-bg)',
          backdropFilter: 'blur(20px) saturate(160%)',
          WebkitBackdropFilter: 'blur(20px) saturate(160%)',
          borderColor: 'var(--nav-glass-border)',
          boxShadow: 'var(--nav-glass-shadow)',
        }}
        className="flex items-center gap-3 sm:gap-5 md:gap-6 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full border transition-all duration-300"
      >
        {/* Navigation Links */}
        <ul className="flex items-center gap-3 sm:gap-5 md:gap-6 m-0 p-0 list-none">
          <li className="hidden sm:inline-block">
            <a
              href="#hero"
              style={{ color: 'var(--nav-text)' }}
              className="text-xs sm:text-[13.5px] font-medium tracking-tight opacity-90 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#projects"
              style={{ color: 'var(--nav-text)' }}
              className="text-xs sm:text-[13.5px] font-medium tracking-tight opacity-90 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              style={{ color: 'var(--nav-text)' }}
              className="text-xs sm:text-[13.5px] font-medium tracking-tight opacity-90 hover:opacity-100 transition-opacity focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Theme Toggle Button */}
        <button
          type="button"
          onClick={onToggleTheme}
          aria-label={isDark ? 'Switch to light theme' : 'Switch to dark theme'}
          style={{
            color: 'var(--nav-icon)',
            borderColor: 'var(--nav-toggle-border)',
          }}
          className="flex items-center justify-center w-8 h-8 rounded-full border bg-transparent hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-200 shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          {isDark ? <SunIcon /> : <MoonIcon />}
        </button>

        {/* Opaque "Get in Touch" Action Button */}
        <a
          href="#contact"
          style={{
            color: 'var(--nav-cta-text)',
            backgroundColor: 'var(--nav-cta-bg)',
            borderColor: 'var(--nav-cta-border)',
          }}
          className="inline-flex items-center justify-center px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs sm:text-[13px] font-semibold tracking-tight border shadow-sm shrink-0 whitespace-nowrap hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-current"
        >
          Get in Touch
        </a>
      </nav>
    </header>
  );
}

export default FloatingNav;
