'use client';

import React, { useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

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
    } catch {
      setStatus('error');
      setErrorMessage('A network error occurred.');
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#EBE9E5] text-[#151514] dark:bg-[#111110] dark:text-[#F1EFEA] py-24 md:py-32 border-t border-[#DCD9D4] dark:border-[#242422] transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="flex flex-col gap-3 max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 w-fit px-3 py-1 rounded-full bg-[#E0DDD7] border border-[#D0CDC5] dark:bg-[#1F1F1D] dark:border-[#2E2E2A] transition-colors">
            <span className="w-1.5 h-1.5 rounded-full bg-[#151514] dark:bg-[#F1EFEA] transition-colors" />
            <span className="text-[11px] font-mono tracking-widest uppercase text-[#151514] dark:text-[#F1EFEA] font-medium transition-colors">
              Direct Communication
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#151514] dark:text-[#F1EFEA] transition-colors">
            Let&apos;s Build Something Meaningful.
          </h2>

          <p className="text-sm md:text-base text-[#525250] dark:text-[#8E8B85] leading-relaxed transition-colors">
            Have a project in mind, need frontend engineering consultation, or want to discuss full-time opportunities? 
            Send an inquiry below or reach out directly.
          </p>
        </motion.div>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Info Cards */}
            <div className="flex flex-col gap-4">
              
              {/* Email Card */}
              <a
                href="mailto:rajayoken072@gmail.com"
                className="group p-5 rounded-xl border border-[#D5D2CB] bg-[#F4F2EE] hover:bg-white hover:border-[#151514] dark:border-[#262624] dark:bg-[#181816] dark:hover:bg-[#20201D] dark:hover:border-[#F1EFEA]/40 transition-all duration-200 flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-white border border-[#D5D2CB] dark:bg-[#222220] dark:border-[#2E2E2A] flex items-center justify-center text-[#151514] dark:text-[#F1EFEA] transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono uppercase text-[#6A6863] dark:text-[#8E8B85] transition-colors">Direct Email</span>
                    <p className="text-sm font-semibold text-[#151514] dark:text-[#F1EFEA] transition-colors">rajayoken072@gmail.com</p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#6A6863] group-hover:text-[#151514] dark:text-[#8E8B85] dark:group-hover:text-[#F1EFEA] transition-colors" />
              </a>

              {/* Response Time Card */}
              <div className="p-5 rounded-xl border border-[#D5D2CB] bg-[#F4F2EE] dark:border-[#262624] dark:bg-[#181816] flex items-center gap-4 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#D5D2CB] dark:bg-[#222220] dark:border-[#2E2E2A] flex items-center justify-center text-[#151514] dark:text-[#F1EFEA] transition-colors">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#6A6863] dark:text-[#8E8B85] transition-colors">Response Time</span>
                  <p className="text-sm font-semibold text-[#151514] dark:text-[#F1EFEA] transition-colors">Typically within 24 hours</p>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-5 rounded-xl border border-[#D5D2CB] bg-[#F4F2EE] dark:border-[#262624] dark:bg-[#181816] flex items-center gap-4 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white border border-[#D5D2CB] dark:bg-[#222220] dark:border-[#2E2E2A] flex items-center justify-center text-[#151514] dark:text-[#F1EFEA] transition-colors">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-[11px] font-mono uppercase text-[#6A6863] dark:text-[#8E8B85] transition-colors">Location &amp; Modality</span>
                  <p className="text-sm font-semibold text-[#151514] dark:text-[#F1EFEA] transition-colors">Available Globally · Remote</p>
                </div>
              </div>
            </div>

            {/* Note on Process */}
            <div className="p-6 rounded-xl border border-[#D5D2CB] bg-white dark:border-[#262624] dark:bg-[#181816] flex flex-col gap-2 transition-colors">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#151514] dark:text-[#F1EFEA] font-semibold transition-colors">
                Engagement Process
              </span>
              <p className="text-xs text-[#525250] dark:text-[#8E8B85] leading-relaxed transition-colors">
                Every project begins with a quick conversation to define requirements, architecture scope, 
                and delivery timelines. Clean specifications and direct communication guarantee efficient execution.
              </p>
            </div>
          </motion.div>

          {/* Right Column: Clean Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7 bg-[#F4F2EE] dark:bg-[#181816] p-8 md:p-10 rounded-2xl border border-[#D5D2CB] dark:border-[#262624] relative transition-colors"
          >
            {/* Success Overlay */}
            {status === 'success' && (
              <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#F4F2EE] dark:bg-[#181816] p-8 rounded-2xl border border-[#D5D2CB] dark:border-[#262624] animate-in fade-in duration-200">
                <div className="w-12 h-12 rounded-full bg-white dark:bg-[#222220] border border-[#D5D2CB] dark:border-[#2E2E2A] flex items-center justify-center text-[#151514] dark:text-[#F1EFEA] mb-4 transition-colors">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#151514] dark:text-[#F1EFEA] mb-1 transition-colors">Message Sent Successfully</h3>
                <p className="text-xs text-[#525250] dark:text-[#8E8B85] text-center max-w-sm mb-6 transition-colors">
                  Thank you for reaching out. I have received your message and will review it promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="px-5 py-2.5 rounded-lg border border-[#D5D2CB] dark:border-[#2E2E2A] bg-white dark:bg-[#222220] text-xs font-semibold text-[#151514] dark:text-[#F1EFEA] hover:bg-[#EBE9E5] dark:hover:bg-[#2A2A26] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-[#151514] dark:text-[#F1EFEA] font-medium transition-colors">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="e.g. Alex Morgan"
                    className="w-full bg-white dark:bg-[#121211] border border-[#D5D2CB] dark:border-[#2E2E2A] rounded-lg px-4 py-3 text-sm text-[#151514] dark:text-[#F1EFEA] placeholder:text-[#9E9B95] dark:placeholder:text-[#6A6863] focus:outline-none focus:border-[#151514] dark:focus:border-[#F1EFEA] focus:ring-1 focus:ring-[#151514] dark:focus:ring-[#F1EFEA] transition-all disabled:opacity-50"
                  />
                </div>

                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-[#151514] dark:text-[#F1EFEA] font-medium transition-colors">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status === 'loading'}
                    placeholder="alex@company.com"
                    className="w-full bg-white dark:bg-[#121211] border border-[#D5D2CB] dark:border-[#2E2E2A] rounded-lg px-4 py-3 text-sm text-[#151514] dark:text-[#F1EFEA] placeholder:text-[#9E9B95] dark:placeholder:text-[#6A6863] focus:outline-none focus:border-[#151514] dark:focus:border-[#F1EFEA] focus:ring-1 focus:ring-[#151514] dark:focus:ring-[#F1EFEA] transition-all disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-[#151514] dark:text-[#F1EFEA] font-medium transition-colors">
                  Project Details or Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={status === 'loading'}
                  rows={5}
                  placeholder="Tell me about what you are building, timeline expectations, or any specific questions..."
                  className="w-full bg-white dark:bg-[#121211] border border-[#D5D2CB] dark:border-[#2E2E2A] rounded-lg px-4 py-3 text-sm text-[#151514] dark:text-[#F1EFEA] placeholder:text-[#9E9B95] dark:placeholder:text-[#6A6863] focus:outline-none focus:border-[#151514] dark:focus:border-[#F1EFEA] focus:ring-1 focus:ring-[#151514] dark:focus:ring-[#F1EFEA] transition-all resize-none disabled:opacity-50"
                />
              </div>

              {/* Error Message */}
              {status === 'error' && (
                <div className="flex items-center gap-2 p-3 rounded-lg border border-red-300 dark:border-red-900/60 bg-red-50 dark:bg-red-950/40 text-xs text-red-700 dark:text-red-400">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-[#111110] text-[#F1EFEA] dark:bg-[#F1EFEA] dark:text-[#111110] text-sm font-semibold hover:bg-black dark:hover:bg-white transition-colors duration-200 disabled:opacity-50 cursor-pointer shadow-sm"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Transmitting Message...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
