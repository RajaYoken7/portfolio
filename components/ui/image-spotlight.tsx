'use client';

import React, { useState, useCallback, useRef } from 'react';

// Removed PerspectiveState interface as it's no longer used for React state

interface SpotlightConfig {
  spotlightSize?: number;
  overlayOpacity?: number;
  className?: string;
}

interface ImageSpotlightProps {
  src: string;
  alt: string;
  orientation?: 'landscape' | 'portrait';
  width?: number;
  height?: number;
  config?: SpotlightConfig;
}

export default function ImageSpotlight({
  src,
  alt,
  orientation = 'landscape',
  width,
  height,
  config = {},
}: ImageSpotlightProps) {
  const defaultConfig: Required<SpotlightConfig> = {
    spotlightSize: 120,
    overlayOpacity: 0.7,
    className: '',
  };

  const finalConfig = { ...defaultConfig, ...config };

  // We use direct DOM manipulation for perspective instead of React state
  // to avoid re-rendering the component 60 times a second on mouse move, which causes severe lag.
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;

    containerRef.current.style.setProperty('--mouse-x', `${x}%`);
    containerRef.current.style.setProperty('--mouse-y', `${y}%`);

    const rotateY = ((x - 50) / 50) * 8;
    const rotateX = ((50 - y) / 50) * 8;

    // Apply rotation directly to avoid state updates and lag
    containerRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  }, []);

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)`;
    }
  };

  const getContainerDimensions = (): React.CSSProperties => {
    if (width && height) {
      return { width: `${width}px`, height: `${height}px`, maxWidth: '100%' };
    }
    if (orientation === 'landscape') {
      return { width: '100%', height: '280px', maxWidth: '100%' };
    }
    return { width: '450px', height: '600px', maxWidth: '100%' };
  };

  const containerClasses = `relative overflow-hidden cursor-none rounded-xl shadow-lg border border-white/10 transform-gpu will-change-transform ${finalConfig.className}`.trim();

  return (
    <div className="flex items-center justify-center w-full">
      <div
        ref={containerRef}
        className={containerClasses}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => {}}
        onMouseLeave={handleMouseLeave}
        role="img"
        aria-label={alt}
        aria-describedby="spotlight-instructions"
        tabIndex={0}
        style={{
          ...getContainerDimensions(),
          '--mouse-x': '50%',
          '--mouse-y': '50%',
          '--spotlight-size': `${finalConfig.spotlightSize}px`,
          '--overlay-opacity': finalConfig.overlayOpacity,
          transformStyle: 'preserve-3d',
          transition: 'transform 0.2s ease-out',
        } as React.CSSProperties}
      >
        <div id="spotlight-instructions" className="sr-only">
          Interactive image with mouse spotlight effect. Move your mouse to reveal.
        </div>

        {/* Blurred Base */}
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          style={{ filter: 'blur(6px) brightness(0.8)' }}
        />

        {/* Sharp Image — revealed through spotlight */}
        <img
          src={src}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
          style={{
            maskImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black ${finalConfig.spotlightSize * 0.4}px, transparent ${finalConfig.spotlightSize * 1.6}px)`,
            WebkitMaskImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), black ${finalConfig.spotlightSize * 0.4}px, transparent ${finalConfig.spotlightSize * 1.6}px)`,
            zIndex: 2,
          }}
        />

        {/* Dark Overlay with spotlight cutout */}
        <div
          className="absolute inset-0 bg-black will-change-[mask-position] transition-all duration-100 ease-out"
          style={{
            opacity: finalConfig.overlayOpacity,
            maskImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent ${finalConfig.spotlightSize * 0.4}px, black ${finalConfig.spotlightSize * 1.6}px)`,
            WebkitMaskImage: `radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), transparent ${finalConfig.spotlightSize * 0.4}px, black ${finalConfig.spotlightSize * 1.6}px)`,
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}
