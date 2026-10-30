'use client';

import React from 'react';
import SculptureHero from '@/components/ui/liquid-sculpture-hero';

interface HeroSectionProps {
  theme?: 'light' | 'dark';
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export function HeroSection({ theme = 'light', onThemeChange }: HeroSectionProps) {
  return (
    <div id="hero" className="relative w-full overflow-hidden">
      <SculptureHero
        brand="Raja Yoken S S R"
        navLinks={[
          { label: 'Overview', href: '#hero' },
          { label: 'Projects', href: '#projects' },
          { label: 'Contact', href: '#contact' },
        ]}
        navCta={{ label: 'Get in Touch', href: '#contact' }}
        showNav={false}
        eyebrow="Full-Stack Engineer, Portfolio '26"
        headline={"Crafting digital experiences with\nprecision & purpose."}
        headlineAccent="precision & purpose."
        body="Raja Yoken — Full-stack engineer building AI-powered products and scalable web applications."
        primaryCta={{
          label: 'Download Resume',
          href: '/Raja_Yoken_Resume.pdf',
          download: 'Raja_Yoken_Resume.pdf',
          target: '_blank',
        }}
        secondaryCta={{ label: 'View Selected Work', href: '#projects' }}
        backdropText="raja"
        showCredit={false}
        background="#EBE9E5"
        darkBackground="#111110"
        theme={theme}
        themeToggle={false}
        onThemeChange={onThemeChange}
        height="100svh"
      />
    </div>
  );
}
