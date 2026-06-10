'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink, Mail, GitBranch, Link2, X } from 'lucide-react';
import { InteractiveRobotSpline } from '@/components/ui/interactive-3d-robot';
import Image from 'next/image';

const ROBOT_SCENE_URL = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const socialLinks = [
  { icon: GitBranch, href: 'https://github.com/RajaYoken7', label: 'GitHub' },
  { icon: Link2, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: X, href: 'https://twitter.com', label: 'Twitter' },
];

export function HeroSection() {
  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden bg-gray-950">
      {/* ── 3D Robot Background ── */}
      <div className="absolute inset-0 z-0">
        <InteractiveRobotSpline
          scene={ROBOT_SCENE_URL}
          className="w-full h-full"
        />
      </div>

      {/* ── Gradient overlays for depth ── */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-gray-950/90 via-gray-950/40 to-transparent pointer-events-none" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/30 pointer-events-none" />

      {/* ── Navigation ── */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="absolute top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-6"
      >
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-violet-500 flex items-center justify-center">
            <span className="text-white font-black text-sm">RY</span>
          </div>
          <span className="text-white font-bold tracking-wider text-sm">RAJA YOKEN</span>
        </div>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white/60 hover:text-white text-sm font-medium tracking-widest uppercase transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-400 text-sm font-medium hover:bg-cyan-400/10 transition-all duration-200"
        >
          <Mail className="w-3.5 h-3.5" />
          Hire Me
        </a>
      </motion.nav>

      {/* ── Hero Content ── */}
      <div className="absolute inset-0 z-20 flex items-center pointer-events-none">
        <div className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center md:items-center gap-12">

          {/* Left: Text content */}
          <div className="flex-1 flex flex-col gap-6 pointer-events-auto">

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 w-fit px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-cyan-400 text-xs font-mono tracking-widest">FRONTEND DEVELOPER</span>
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
            >
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
                Raja
                <span className="block bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  Yoken S S R
                </span>
              </h1>
            </motion.div>

            {/* Headline */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="text-xl md:text-2xl font-semibold text-white/90 leading-snug max-w-lg"
            >
              Crafting Digital Experiences That{' '}
              <span className="text-cyan-400">Defy Gravity</span>
            </motion.p>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="text-white/50 text-sm md:text-base leading-relaxed max-w-md"
            >
              I engineer immersive web experiences—where cutting-edge interactivity, cinematic motion, and pixel-perfect interfaces converge into something extraordinary.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold text-sm hover:opacity-90 hover:scale-105 transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                <ExternalLink className="w-4 h-4" />
                View Projects
              </a>
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-semibold text-sm backdrop-blur-sm hover:bg-white/10 hover:scale-105 transition-all duration-200"
              >
                <Mail className="w-4 h-4" />
                Contact Me
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="flex items-center gap-4 pt-2"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: Personal photo card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex flex-col items-center gap-4 pointer-events-auto"
          >
            {/* Glassmorphism photo frame */}
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-cyan-400/40 via-violet-500/40 to-fuchsia-500/40 blur-md" />
              <div className="relative w-64 h-64 rounded-full overflow-hidden border border-white/10 backdrop-blur-sm bg-white/5">
                <Image
                  src="/assets/hero.png"
                  alt="Raja Yoken S S R — Frontend Developer"
                  fill
                  className="object-cover object-top"
                  priority
                />
                {/* Inner overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating info pill */}
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-white/70 text-xs font-mono">Available for work</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-white/30 text-xs font-mono tracking-widest">SCROLL</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="w-4 h-4 text-white/30" />
        </motion.div>
      </motion.div>

      {/* ── Grid decoration ── */}
      <div
        className="absolute inset-0 z-[5] pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(rgba(99,179,237,1) 1px, transparent 1px), linear-gradient(90deg, rgba(99,179,237,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />
    </section>
  );
}
