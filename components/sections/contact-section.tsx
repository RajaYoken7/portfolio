'use client';

import React, { useState } from 'react';
import { ContainerScroll } from '@/components/ui/container-scroll-animation';
import { DottedSurface } from '@/components/ui/dotted-surface';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('A network error occurred.');
    }
  };

  return (
    <section id="contact" className="relative w-full bg-gray-950 overflow-hidden">
      {/* 3D Dotted Background */}
      <DottedSurface className="absolute inset-0 w-full h-full" />

      {/* Foreground Container Scroll */}
      <div className="relative z-10 w-full">
        <ContainerScroll
          titleComponent={
            <>
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                Let&apos;s Build Something{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  Extraordinary
                </span>
              </h2>
              <p className="text-white/40 text-sm md:text-base font-medium max-w-xl mx-auto mb-8">
                Ready to elevate your digital presence? Send a request and let&apos;s turn your vision into reality.
              </p>
            </>
          }
        >
          {/* Glassmorphism Form Container inside the Card */}
          <div className="flex flex-col md:flex-row h-full w-full bg-black/40 backdrop-blur-xl relative">
            
            {/* Left side: Info / Graphic */}
            <div className="hidden md:flex flex-col justify-between w-1/2 p-8 md:p-12 border-r border-white/5 bg-gradient-to-br from-cyan-500/10 to-violet-500/5">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-400/30 bg-cyan-400/10 mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                  <span className="text-cyan-400 text-xs font-mono tracking-widest">AVAILABLE NOW</span>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Initialize<br/>Connection.</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  Fill out the form with your project details. I typically respond within 24 hours to discuss architecture, timeline, and next steps.
                </p>
              </div>

              <div className="flex items-center gap-4 text-white/30 text-xs font-mono">
                <span>SECURE_CHANNEL_ESTABLISHED</span>
                <div className="flex-1 h-px bg-white/10" />
              </div>
            </div>

            {/* Right side: The Form */}
            <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col justify-center relative">
              {/* Form Status Overlays */}
              {status === 'success' && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-300">
                  <CheckCircle className="w-16 h-16 text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Transmission Sent</h3>
                  <p className="text-white/60 text-center px-6">Your message has been routed securely. I will be in touch shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-6 py-2 rounded-full border border-white/20 text-white/80 hover:bg-white/10 transition-colors text-sm font-medium"
                  >
                    Send Another
                  </button>
                </div>
              )}

              <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full max-w-md mx-auto">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-medium text-white/50 uppercase tracking-wider">Name / Alias</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="Jane Doe"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-medium text-white/50 uppercase tracking-wider">Return Address (Email)</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-violet-500/50 focus:border-transparent transition-all disabled:opacity-50"
                    placeholder="jane@example.com"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-medium text-white/50 uppercase tracking-wider">Project Details</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-transparent transition-all resize-none disabled:opacity-50"
                    placeholder="Describe what we are building..."
                  />
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 text-sm bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="mt-2 group relative w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-bold text-sm hover:opacity-90 transition-all shadow-[0_0_20px_rgba(34,211,238,0.2)] disabled:opacity-70"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Encrypting & Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      Dispatch Request
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </ContainerScroll>
      </div>
    </section>
  );
}
