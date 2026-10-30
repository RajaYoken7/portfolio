'use client';

import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Marquee } from '@/components/ui/3d-testimonails';

// Unique reviews data with verified working Unsplash portraits
const testimonials = [
  {
    name: 'Ava Green',
    username: '@ava',
    body: 'Cascade AI made my workflow 10x faster!',
    img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    country: '🇦🇺 Australia',
  },
  {
    name: 'Ana Miller',
    username: '@ana',
    body: 'Vertical marquee is a game changer!',
    img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
    country: '🇩🇪 Germany',
  },
  {
    name: 'Mateo Rossi',
    username: '@mat',
    body: 'Animations are buttery smooth!',
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    country: '🇮🇹 Italy',
  },
  {
    name: 'Maya Patel',
    username: '@maya',
    body: 'Setup was a breeze!',
    img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80',
    country: '🇮🇳 India',
  },
  {
    name: 'Noah Smith',
    username: '@noah',
    body: 'Best marquee component!',
    img: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    country: '🇺🇸 USA',
  },
  {
    name: 'Lucas Stone',
    username: '@luc',
    body: 'Very customizable and smooth.',
    img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    country: '🇫🇷 France',
  },
  {
    name: 'Haruto Sato',
    username: '@haru',
    body: 'Impressive performance on mobile!',
    img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    country: '🇯🇵 Japan',
  },
  {
    name: 'Emma Lee',
    username: '@emma',
    body: 'Love the pause on hover feature!',
    img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    country: '🇨🇦 Canada',
  },
  {
    name: 'Carlos Ray',
    username: '@carl',
    body: 'Great for testimonials and logos.',
    img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&auto=format&fit=crop&q=80',
    country: '🇪🇸 Spain',
  },
];

// Memoized, flicker-free testimonial card with hardware-accelerated composition
const TestimonialCard = React.memo(function TestimonialCard({
  img,
  name,
  username,
  body,
  country,
}: (typeof testimonials)[number]) {
  return (
    <Card className="w-56 sm:w-60 md:w-64 bg-[#F8F6F2] dark:bg-[#181816] border border-[#D5D2CB] dark:border-[#262624] shadow-md hover:shadow-xl transition-shadow duration-200 [backface-visibility:hidden] [transform:translateZ(0)] select-none">
      <CardContent className="p-4 sm:p-5">
        <div className="flex items-center gap-3">
          <div className="relative size-9 sm:size-10 shrink-0 overflow-hidden rounded-full border border-[#D5D2CB]/70 dark:border-[#2E2E2A] bg-[#E0DDD7] dark:bg-[#222220]">
            <img
              src={img}
              alt={name}
              loading="lazy"
              decoding="async"
              className="aspect-square size-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <figcaption className="text-xs sm:text-sm font-semibold text-[#151514] dark:text-[#F1EFEA] flex items-center gap-1.5">
              {name} <span className="text-[11px] opacity-80">{country}</span>
            </figcaption>
            <p className="text-[11px] font-mono text-[#6A6863] dark:text-[#8E8B85]">{username}</p>
          </div>
        </div>
        <blockquote className="mt-3 text-xs sm:text-sm text-[#403F3C] dark:text-[#A8A5A0] leading-relaxed">
          &ldquo;{body}&rdquo;
        </blockquote>
      </CardContent>
    </Card>
  );
});

export default function DemoOne() {
  // Stagger start reviews for each column for natural visual variety
  const col1 = testimonials;
  const col2 = [...testimonials.slice(2), ...testimonials.slice(0, 2)];
  const col3 = [...testimonials.slice(5), ...testimonials.slice(0, 5)];
  const col4 = [...testimonials.slice(7), ...testimonials.slice(0, 7)];
  const col5 = [...testimonials.slice(1), ...testimonials.slice(0, 1)];
  const col6 = [...testimonials.slice(4), ...testimonials.slice(0, 4)];
  const col7 = [...testimonials.slice(6), ...testimonials.slice(0, 6)];
  const col8 = [...testimonials.slice(3), ...testimonials.slice(0, 3)];

  return (
    <div className="relative flex h-[500px] sm:h-[580px] lg:h-[640px] w-full max-w-full flex-row items-center justify-center overflow-hidden select-none isolation-auto">
      {/* 3D Perspective Stage - Decoupled from 2D overlays to prevent Z-depth sorting flickering */}
      <div className="relative w-full h-full flex items-center justify-center overflow-hidden [perspective:1200px] [transform-style:preserve-3d]">
        <div
          className="flex flex-row items-center justify-center gap-4 sm:gap-5 md:gap-6 w-max min-w-[140vw] sm:min-w-[125vw] lg:min-w-[112vw] will-change-transform [backface-visibility:hidden] [transform-style:preserve-3d]"
          style={{
            transform:
              'translateZ(-140px) rotateX(20deg) rotateY(-10deg) rotateZ(20deg)',
            transformOrigin: 'center center',
          }}
        >
          {/* Column 1 - downwards */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:44s]">
            {col1.map((review) => (
              <TestimonialCard key={`c1-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 2 - upwards */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:36s]">
            {col2.map((review) => (
              <TestimonialCard key={`c2-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 3 - downwards */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:48s]">
            {col3.map((review) => (
              <TestimonialCard key={`c3-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 4 - upwards */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:40s]">
            {col4.map((review) => (
              <TestimonialCard key={`c4-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 5 - downwards */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:46s]">
            {col5.map((review) => (
              <TestimonialCard key={`c5-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 6 - upwards */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:38s]">
            {col6.map((review) => (
              <TestimonialCard key={`c6-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 7 - downwards */}
          <Marquee vertical pauseOnHover repeat={3} className="[--duration:50s]">
            {col7.map((review) => (
              <TestimonialCard key={`c7-${review.username}`} {...review} />
            ))}
          </Marquee>

          {/* Column 8 - upwards */}
          <Marquee vertical pauseOnHover reverse repeat={3} className="[--duration:42s]">
            {col8.map((review) => (
              <TestimonialCard key={`c8-${review.username}`} {...review} />
            ))}
          </Marquee>
        </div>
      </div>

      {/* Seamless edge gradient overlays: strictly placed in front in 2D stacking context (Z=0) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-36 bg-gradient-to-b from-[#EBE9E5] dark:from-[#111110] to-transparent z-20 [transform:translateZ(0)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-36 bg-gradient-to-t from-[#EBE9E5] dark:from-[#111110] to-transparent z-20 [transform:translateZ(0)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 sm:w-44 md:w-60 lg:w-72 bg-gradient-to-r from-[#EBE9E5] dark:from-[#111110] to-transparent z-20 [transform:translateZ(0)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 sm:w-44 md:w-60 lg:w-72 bg-gradient-to-l from-[#EBE9E5] dark:from-[#111110] to-transparent z-20 [transform:translateZ(0)]" />
    </div>
  );
}
export { DemoOne };
