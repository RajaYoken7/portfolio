'use client';

import React from 'react';
import DemoOne from '@/components/ui/demo';
import { MessageSquareQuote } from 'lucide-react';

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative w-full bg-[#EBE9E5] text-[#151514] dark:bg-[#111110] dark:text-[#F1EFEA] pt-24 pb-20 md:pt-32 md:pb-28 border-t border-[#DCD9D4] dark:border-[#242422] transition-colors duration-500 overflow-hidden"
    >
      {/* Section Header */}
      <div className="w-full max-w-3xl mx-auto px-6 mb-12 md:mb-16 flex flex-col items-center text-center gap-3">
        <div className="inline-flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full bg-[#E0DDD7] border border-[#D0CDC5] dark:bg-[#1F1F1D] dark:border-[#2E2E2A] transition-colors">
          <MessageSquareQuote className="w-3.5 h-3.5 text-[#151514] dark:text-[#F1EFEA]" />
          <span className="text-xs font-mono tracking-wider text-[#151514] dark:text-[#F1EFEA] font-medium uppercase transition-colors">
            Feedback &amp; Endorsements
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151514] dark:text-[#F1EFEA] transition-colors">
          Trusted by creators and teams globally.
        </h2>

        <p className="text-sm md:text-base text-[#525250] dark:text-[#8E8B85] leading-relaxed transition-colors">
          What founders, designers, and engineering collaborators say about delivering fast, reliable, and fluid digital experiences.
        </p>
      </div>

      {/* 3D Testimonials Marquee Component - Full Viewport Width */}
      <div className="w-full overflow-hidden flex justify-center items-center px-0 mx-0">
        <DemoOne />
      </div>
    </section>
  );
}
