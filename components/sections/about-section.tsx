'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

const socialLinks = [
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
    href: 'https://github.com/RajaYoken7',
    label: 'GitHub',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    href: 'https://linkedin.com',
    label: 'LinkedIn',
  },
  {
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
    href: 'https://twitter.com',
    label: 'Twitter / X',
  },
];

const capabilities = [
  'React & Next.js Ecosystem',
  'TypeScript Architecture',
  'Tailwind CSS & Design Systems',
  'Performance & Accessible UX',
  'Interactive Shader & 3D UI',
  'State & Animation Systems',
];

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative w-full bg-[#EBE9E5] text-[#151514] dark:bg-[#111110] dark:text-[#F1EFEA] py-24 md:py-32 border-t border-[#DCD9D4] dark:border-[#242422] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col gap-3 mb-16 max-w-2xl">
          <div className="inline-flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full bg-[#E0DDD7] border border-[#D0CDC5] dark:bg-[#1F1F1D] dark:border-[#2E2E2A] transition-colors">
            <span className="w-2 h-2 rounded-full bg-[#151514] dark:bg-[#F1EFEA] transition-colors" />
            <span className="text-xs font-mono tracking-wider text-[#151514] dark:text-[#F1EFEA] font-medium uppercase transition-colors">
              Profile &amp; Discipline
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151514] dark:text-[#F1EFEA] transition-colors">
            Engineering digital craft through rigorous design.
          </h2>

          <p className="text-sm md:text-base text-[#525250] dark:text-[#8E8B85] leading-relaxed transition-colors">
            A developer who bridges visual elegance with architectural precision. Clean components, 
            disciplined state management, and deliberate micro-interactions.
          </p>
        </div>

        {/* 2-Column Profile Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Portrait Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="relative rounded-2xl border border-[#D5D2CB] bg-[#F4F2EE] dark:border-[#262624] dark:bg-[#181816] p-3 shadow-sm transition-colors">
              <div className="relative w-full aspect-[4/4.2] rounded-xl overflow-hidden bg-white dark:bg-[#121211] border border-[#D5D2CB] dark:border-[#262624] transition-colors">
                <Image
                  src="/assets/hero.png"
                  alt="Raja Yoken S S R"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover object-top filter grayscale contrast-105"
                  priority
                />
              </div>

              {/* Caption */}
              <div className="px-3 pt-3.5 pb-1 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-[#151514] dark:text-[#F1EFEA] transition-colors">Raja Yoken S S R</p>
                  <p className="text-[11px] font-mono text-[#6A6863] dark:text-[#8E8B85] transition-colors">Frontend Developer &amp; UI Engineer</p>
                </div>
                <div className="text-[10px] font-mono px-2 py-0.5 rounded bg-white dark:bg-[#222220] border border-[#D5D2CB] dark:border-[#2E2E2A] text-[#151514] dark:text-[#F1EFEA] font-medium transition-colors">
                  PORTFOLIO &apos;26
                </div>
              </div>
            </div>

            {/* Availability Pill */}
            <div className="flex items-center justify-between p-4 rounded-xl border border-[#D5D2CB] bg-[#F4F2EE] dark:border-[#262624] dark:bg-[#181816] transition-colors">
              <div className="flex items-center gap-2.5">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                <span className="text-xs font-semibold text-[#151514] dark:text-[#F1EFEA] transition-colors">Currently Available</span>
              </div>
              <span className="text-[11px] font-mono text-[#6A6863] dark:text-[#8E8B85] transition-colors">Full-time / High-impact contracts</span>
            </div>
          </div>

          {/* Right Column: Bio & Competencies */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* Bio Block */}
            <div className="flex flex-col gap-4 text-base text-[#403F3C] dark:text-[#A8A5A0] leading-relaxed transition-colors">
              <p>
                I develop interfaces that prioritize clarity and user agency. In an era crowded with excessive noise, 
                I believe the most compelling web products combine <strong>tactile feedback</strong>, 
                <strong>clean typography</strong>, and <strong>sub-millisecond performance</strong>.
              </p>
              <p>
                Whether building real-time 3D configurators, custom animation engines, or full-stack Next.js platforms, 
                my codebases are organized around scalable component libraries, strict TypeScript types, and accessible design principles.
              </p>
            </div>

            {/* Core Competencies Box */}
            <div className="rounded-2xl border border-[#D5D2CB] bg-[#F4F2EE] dark:border-[#262624] dark:bg-[#181816] p-6 flex flex-col gap-4 transition-colors">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#6A6863] dark:text-[#8E8B85] font-semibold transition-colors">
                  Technical Core Competencies
                </span>
                <span className="text-[11px] font-mono text-[#6A6863] dark:text-[#8E8B85] transition-colors">Stack &amp; Tools</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-center gap-2.5 text-xs font-semibold text-[#151514] dark:text-[#F1EFEA] bg-white dark:bg-[#20201D] p-3 rounded-lg border border-[#D5D2CB]/80 dark:border-[#2E2E2A] transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-[#151514] dark:text-[#F1EFEA] shrink-0 transition-colors" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Connect Links */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-[#D5D2CB] dark:border-[#262624] transition-colors">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6A6863] dark:text-[#8E8B85] transition-colors">Direct Channels:</span>
                <div className="flex items-center gap-4 ml-2">
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs font-semibold text-[#151514] hover:opacity-70 dark:text-[#F1EFEA] dark:hover:opacity-80 transition-opacity"
                    >
                      <Icon className="w-3.5 h-3.5" />
                      <span>{label}</span>
                    </a>
                  ))}
                </div>
              </div>

              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 text-xs font-bold font-mono text-[#151514] hover:underline underline-offset-4 dark:text-[#F1EFEA] transition-colors"
              >
                <span>EXPLORE WORK</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
