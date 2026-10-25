'use client';

import React from 'react';
import SculptureHero from '@/components/ui/liquid-sculpture-hero';

interface HeroSectionProps {
  onThemeChange?: (theme: 'light' | 'dark') => void;
}

export function HeroSection({ onThemeChange }: HeroSectionProps) {
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
        showNav={true}
        eyebrow="Frontend Developer, Portfolio '26"
        headline={"Crafting digital experiences with\nprecision & purpose."}
        headlineAccent="precision & purpose."
        body="I am a frontend developer specializing in scalable React and Next.js applications. My focus is on minimal aesthetics, rock-solid engineering, performance optimization, and fluid user interactions that stand the test of time."
        primaryCta={{ label: 'View Selected Work', href: '#projects' }}
        secondaryCta={{ label: 'Contact Directly', href: '#contact' }}
        backdropText="raja"
        showCredit={false}
        background="#EBE9E5"
        darkBackground="#111110"
        theme="light"
        themeToggle={true}
        onThemeChange={onThemeChange}
        height="100svh"
      />
    </div>
  );
}
