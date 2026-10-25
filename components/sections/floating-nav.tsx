'use client';

import React from 'react';
import { FloatingDock } from '@/components/ui/floating-dock';
import {
  IconHome,
  IconUser,
  IconBriefcase,
  IconMail,
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandX,
} from '@tabler/icons-react';

export function FloatingNav() {
  const navItems = [
    {
      title: 'Overview',
      icon: <IconHome className="h-full w-full" />,
      href: '#hero',
    },
    {
      title: 'Profile',
      icon: <IconUser className="h-full w-full" />,
      href: '#about',
    },
    {
      title: 'Projects',
      icon: <IconBriefcase className="h-full w-full" />,
      href: '#projects',
    },
    {
      title: 'Contact',
      icon: <IconMail className="h-full w-full" />,
      href: '#contact',
    },
    {
      title: 'GitHub',
      icon: <IconBrandGithub className="h-full w-full" />,
      href: 'https://github.com/RajaYoken7',
    },
    {
      title: 'LinkedIn',
      icon: <IconBrandLinkedin className="h-full w-full" />,
      href: 'https://linkedin.com',
    },
    {
      title: 'Twitter / X',
      icon: <IconBrandX className="h-full w-full" />,
      href: 'https://twitter.com',
    },
  ];

  return (
    <nav
      aria-label="Floating Navigation Bar"
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto flex justify-center"
    >
      <FloatingDock
        items={navItems}
        tooltipPosition="bottom"
        mobileMenuPosition="bottom"
        desktopClassName="bg-white/60 dark:bg-[#151514]/70 backdrop-blur-xl border border-[#D5D2CB]/80 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)]"
        mobileClassName="bg-white/60 dark:bg-[#151514]/70 backdrop-blur-xl border border-[#D5D2CB]/80 dark:border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.06)] p-1.5 rounded-full"
      />
    </nav>
  );
}

export default FloatingNav;
