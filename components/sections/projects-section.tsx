'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitBranch, ArrowUpRight, Code2, FolderGit2 } from 'lucide-react';
import GlassFolder, { FolderFile, FolderMenuItem } from '@/components/ui/glass-folder-cards';

interface ProjectData {
  id: string;
  title: string;
  category: string;
  year: string;
  description: string;
  projectUrl: string;
  githubUrl: string;
  tags: string[];
  folder: {
    label: string;
    meta: string;
    tone: 'light';
    art: 'glacier' | 'ember' | 'verdant';
    seed: number;
    image?: string;
    labelPlacement: 'bottom-left' | 'top-left' | 'top-right';
    files: FolderFile[];
    menu: FolderMenuItem[];
  };
}

const projects: ProjectData[] = [
  {
    id: 'dell-g15',
    title: 'Dell G15 Ultimate Edition',
    category: '3D WebGL Configurator',
    year: '2026',
    description:
      'High-end 3D product showcase featuring real-time WebGL rendering, 360° orbital viewport controls, and interactive component customization.',
    projectUrl: 'https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/',
    githubUrl: 'https://github.com/RajaYoken7',
    tags: ['Three.js', 'WebGL', 'React', 'Netlify'],
    folder: {
      label: 'Dell G15',
      meta: '4 Files',
      tone: 'light',
      art: 'glacier',
      seed: 7,
      labelPlacement: 'bottom-left',
      files: [
        {
          name: 'Launch 3D Configurator',
          meta: 'Live Deployment',
          image: '/assets/projects_done/Project_1_Dell_G15_202606102150.jpeg',
          href: 'https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/',
        },
        {
          name: 'Hardware Specifications',
          meta: 'RTX 4060 · i7-13650HX',
          art: 'glacier',
        },
        {
          name: 'Orbital Camera Controls',
          meta: 'Real-time Shaders',
        },
        {
          name: 'Netlify Production Build',
          meta: 'Verified Deploy',
          href: 'https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/',
        },
      ],
      menu: [
        {
          label: 'Open Live Demo ↗',
          onSelect: () => window.open('https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/', '_blank'),
        },
        {
          label: 'View GitHub Profile',
          onSelect: () => window.open('https://github.com/RajaYoken7', '_blank'),
        },
        {
          label: 'Copy Project URL',
          onSelect: () => {
            if (typeof navigator !== 'undefined') {
              navigator.clipboard.writeText('https://6a28658718f0eb7cf358c4e1--fantastic-daifuku-be5a75.netlify.app/');
            }
          },
        },
      ],
    },
  },
  {
    id: 'cyberpunk-portfolio',
    title: 'Cyberpunk Portfolio Engine',
    category: 'Interactive Web Experience',
    year: '2026',
    description:
      'Modern web application with terminal-style command interface, canvas animations, and reactive state management built with Next.js and TypeScript.',
    projectUrl: 'https://github.com/RajaYoken7',
    githubUrl: 'https://github.com/RajaYoken7',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Canvas API'],
    folder: {
      label: 'Cyberpunk CLI',
      meta: '4 Files',
      tone: 'light',
      art: 'ember',
      seed: 19,
      labelPlacement: 'top-left',
      files: [
        {
          name: 'Interactive CLI Engine',
          meta: 'Terminal Emulator',
          image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=1600&q=80',
          href: 'https://github.com/RajaYoken7',
        },
        {
          name: 'Procedural Matrix Stream',
          meta: 'HTML5 Canvas',
          art: 'ember',
        },
        {
          name: 'Web Audio Synthesizer',
          meta: 'Audio Context API',
        },
        {
          name: 'Source Code Repository',
          meta: 'GitHub Public',
          href: 'https://github.com/RajaYoken7',
        },
      ],
      menu: [
        {
          label: 'View on GitHub ↗',
          onSelect: () => window.open('https://github.com/RajaYoken7', '_blank'),
        },
        {
          label: 'Copy Repository URL',
          onSelect: () => {
            if (typeof navigator !== 'undefined') {
              navigator.clipboard.writeText('https://github.com/RajaYoken7');
            }
          },
        },
      ],
    },
  },
  {
    id: 'elite-gym',
    title: 'Elite Gym Web Platform',
    category: 'Full-Stack Web Application',
    year: '2026',
    description:
      'Production-ready fitness commerce platform featuring dynamic schedules, trainer rosters, interactive membership booking, and clean UX flows.',
    projectUrl: 'https://ecommerce-three-sigma-27.vercel.app/',
    githubUrl: 'https://github.com/RajaYoken7',
    tags: ['React', 'Next.js 14', 'Vercel', 'Tailwind CSS'],
    folder: {
      label: 'Elite Gym',
      meta: '4 Files',
      tone: 'light',
      art: 'verdant',
      seed: 42,
      labelPlacement: 'top-right',
      files: [
        {
          name: 'Live Gym Application',
          meta: 'Vercel Deploy',
          image: '/assets/projects_done/Project_4_Gym_Website_202606102150.jpeg',
          href: 'https://ecommerce-three-sigma-27.vercel.app/',
        },
        {
          name: 'Schedule Booking Calendar',
          meta: 'Interactive Views',
          art: 'verdant',
        },
        {
          name: 'Coaching Roster & Metrics',
          meta: 'Data Architecture',
        },
        {
          name: 'Production Storefront',
          meta: 'Live Build',
          href: 'https://ecommerce-three-sigma-27.vercel.app/',
        },
      ],
      menu: [
        {
          label: 'Open Live Demo ↗',
          onSelect: () => window.open('https://ecommerce-three-sigma-27.vercel.app/', '_blank'),
        },
        {
          label: 'View GitHub Profile',
          onSelect: () => window.open('https://github.com/RajaYoken7', '_blank'),
        },
        {
          label: 'Copy Project URL',
          onSelect: () => {
            if (typeof navigator !== 'undefined') {
              navigator.clipboard.writeText('https://ecommerce-three-sigma-27.vercel.app/');
            }
          },
        },
      ],
    },
  },
];

export function ProjectsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="projects" className="relative w-full bg-[#EBE9E5] text-[#151514] py-24 md:py-32 border-t border-b border-[#DCD9D4]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2.5 w-fit px-3.5 py-1.5 rounded-full bg-[#E0DDD7] border border-[#D0CDC5]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#151514]" />
              <span className="text-[11px] font-mono tracking-widest uppercase text-[#151514] font-medium">
                Selected Works
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151514]">
              Featured Projects
            </h2>
            
            <p className="text-sm md:text-base text-[#525250] leading-relaxed">
              Interactive tactile folders containing live project files, deployment builds, and architecture details.
              Hover to lean the folder, click to open and fan out the files.
            </p>
          </div>

          <div className="hidden md:flex items-center gap-2 font-mono text-xs text-[#6A6863]">
            <span>01</span>
            <span className="w-8 h-px bg-[#D0CDC5]" />
            <span>03</span>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 items-start">
          {projects.map((project, idx) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col bg-white rounded-2xl border border-[#D5D2CB] p-5 shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:border-[#151514] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Folder Presentation Stage */}
              <div className="w-full flex justify-center py-6 bg-[#F4F2EE] rounded-xl border border-[#D5D2CB] overflow-visible">
                <GlassFolder
                  label={project.folder.label}
                  meta={project.folder.meta}
                  tone="light"
                  art={project.folder.art}
                  seed={project.folder.seed}
                  image={project.folder.image}
                  files={project.folder.files}
                  action="more"
                  menu={project.folder.menu}
                  labelPlacement={project.folder.labelPlacement}
                  width={310}
                />
              </div>

              {/* Project Metadata */}
              <div className="flex flex-col gap-3 pt-5">
                <div className="flex items-center justify-between text-xs font-mono text-[#6A6863]">
                  <span>{project.category}</span>
                  <span>{project.year}</span>
                </div>

                <h3 className="text-lg font-bold text-[#151514] tracking-tight">
                  {project.title}
                </h3>

                <p className="text-xs text-[#525250] leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-[#F4F2EE] border border-[#D5D2CB] text-[#151514] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Direct Action Buttons */}
                <div className="flex items-center gap-2 pt-3 border-t border-[#D5D2CB] mt-2">
                  <a
                    href={project.projectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-[#151514] text-white text-xs font-medium hover:bg-[#2A2A28] transition-colors"
                  >
                    <span>Launch</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg border border-[#D5D2CB] bg-white text-[#151514] text-xs font-medium hover:bg-[#F4F2EE] hover:border-[#151514] transition-colors"
                    aria-label="View source code"
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Code</span>
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom GitHub Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl bg-white border border-[#D5D2CB] shadow-[0_2px_8px_rgba(0,0,0,0.03)] flex flex-col sm:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4 text-center sm:text-left">
            <div className="w-12 h-12 rounded-xl bg-[#F4F2EE] border border-[#D5D2CB] flex items-center justify-center shrink-0 text-[#151514]">
              <FolderGit2 className="w-5 h-5 text-[#151514]" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-[#151514]">Interested in more repositories?</h4>
              <p className="text-xs text-[#525250] mt-0.5">Explore open-source experiments, component demos, and prototypes.</p>
            </div>
          </div>

          <a
            href="https://github.com/RajaYoken7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#151514] bg-[#151514] text-white text-xs font-semibold hover:bg-[#2A2A28] transition-colors shrink-0"
          >
            <GitBranch className="w-3.5 h-3.5" />
            <span>GitHub Repositories</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
