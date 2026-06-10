'use client';

import React, { useState, useEffect } from 'react';

export interface SelectorOption {
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  projectUrl?: string;
}

interface InteractiveSelectorProps {
  options: SelectorOption[];
}

export function InteractiveSelector({ options }: InteractiveSelectorProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);
  
  const handleOptionClick = (index: number) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [options]);

  return (
    <div className="w-full flex justify-center py-8">
      {/* Options Container */}
      <div className="flex w-full max-w-[1100px] h-[500px] md:h-[600px] items-stretch overflow-hidden relative rounded-3xl border border-white/5 bg-white/[0.02] p-2 gap-2">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
              ${activeIndex === index ? 'active' : ''}
              rounded-2xl
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-40px)',
              cursor: 'pointer',
              flex: activeIndex === index ? '8 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              willChange: 'flex',
            }}
            onClick={() => handleOptionClick(index)}
          >
            {/* Dark gradient overlay for text readability */}
            <div 
              className="absolute inset-0 transition-opacity duration-700 pointer-events-none"
              style={{
                background: activeIndex === index 
                  ? 'linear-gradient(to top, rgba(3,7,18,0.95) 0%, rgba(3,7,18,0.4) 40%, transparent 100%)' 
                  : 'rgba(3,7,18,0.5)',
              }}
            />
            
            {/* Label with icon and info */}
            <div className="absolute left-0 right-0 bottom-6 flex items-center justify-start z-10 pointer-events-none px-4 md:px-6 gap-4 w-full">
              <div 
                className={`min-w-[48px] max-w-[48px] h-[48px] flex items-center justify-center rounded-full border flex-shrink-0 transition-all duration-500
                  ${activeIndex === index ? 'bg-cyan-900 border-cyan-400 text-cyan-300' : 'bg-black border-white/20 text-white/70'}
                `}
              >
                {option.icon}
              </div>
              <div className="text-white whitespace-pre relative overflow-hidden flex-1">
                <div 
                  className="font-bold text-xl md:text-3xl tracking-tight transition-all duration-700 ease-out truncate"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(20px)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="text-sm md:text-base text-gray-400 transition-all duration-700 ease-out truncate mt-1.5"
                  style={{
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? 'translateX(0)' : 'translateX(20px)',
                    transitionDelay: '100ms'
                  }}
                >
                  {option.description}
                </div>
                {option.projectUrl && (
                  <div
                    className="mt-3 transition-all duration-700 ease-out"
                    style={{
                      opacity: activeIndex === index ? 1 : 0,
                      transform: activeIndex === index ? 'translateY(0)' : 'translateY(10px)',
                      transitionDelay: '150ms'
                    }}
                  >
                    <a
                      href={option.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 hover:bg-cyan-500/30 hover:border-cyan-400/50 transition-colors text-sm font-medium pointer-events-auto shadow-lg"
                    >
                      View Project
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
