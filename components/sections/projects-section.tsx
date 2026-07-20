'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, Monitor, Car, Terminal, Activity, Cpu } from 'lucide-react';
import { InteractiveSelector } from '@/components/ui/interactive-selector';

const projectOptions = [
  {
    title: 'Dell G15 Ultimate Edition',
    description: 'High-end gaming laptop showcase featuring 3D product visualization and interactive configuration experiences.',
    image: '/assets/projects_done/Project_1_—_Dell_G15_202606102150.jpeg',
    icon: <Monitor className="w-6 h-6" />,
    projectUrl: 'https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/',
  },
  {
    title: 'Cyberpunk Portfolio',
    description: 'Neon-soaked developer portfolio with glitch animations, terminal-style interfaces, and a fully immersive cyberpunk aesthetic.',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80',
    icon: <Terminal className="w-6 h-6" />,
  },
  {
    title: 'Elite Gym Website',
    description: 'Premium fitness platform with dynamic class schedules, trainer profiles, progress tracking, and high-energy motion design.',
    image: '/assets/projects_done/Project_4_—_Gym_Website_202606102150.jpeg',
    icon: <Activity className="w-6 h-6" />,
    projectUrl: 'https://ecommerce-three-sigma-27.vercel.app/',
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="relative bg-gray-950 py-24 md:py-32 overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(rgba(139,92,246,1) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">

        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center mb-12 gap-4"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-400/30 bg-violet-400/10">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
            <span className="text-violet-400 text-xs font-mono tracking-widest">PORTFOLIO</span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <p className="text-white/40 text-base md:text-lg max-w-2xl leading-relaxed">
            A collection of immersive digital experiences, interactive interfaces, and high-performance web applications.
          </p>
        </motion.div>

        {/* Interactive Selector replaces the lagging spotlight cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <InteractiveSelector options={projectOptions} />
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/RajaYoken7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 text-white/50 text-sm font-medium hover:text-white hover:border-white/20 hover:bg-white/5 transition-all duration-200"
          >
            <GitBranch className="w-4 h-4" />
            View All on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}
