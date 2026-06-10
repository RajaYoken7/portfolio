'use client';

import { Suspense, lazy, useRef } from 'react';
import { useInView } from 'framer-motion';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface InteractiveRobotSplineProps {
  scene: string;
  className?: string;
}

export function InteractiveRobotSpline({ scene, className }: InteractiveRobotSplineProps) {
  const ref = useRef<HTMLDivElement>(null);
  // Unmount the scene if it's more than 20% out of view to save GPU
  const isInView = useInView(ref, { margin: "20%" });

  return (
    <div ref={ref} className="w-full h-full">
      {isInView ? (
        <Suspense
          fallback={
            <div className={`w-full h-full flex items-center justify-center bg-gray-950 text-white ${className ?? ''}`}>
              <div className="flex flex-col items-center gap-4">
                <svg
                  className="animate-spin h-10 w-10 text-cyan-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l2-2.647z"
                  />
                </svg>
                <p className="text-cyan-400/70 text-sm font-mono tracking-widest animate-pulse">INITIALIZING...</p>
              </div>
            </div>
          }
        >
          <Spline scene={scene} className={className} />
        </Suspense>
      ) : null}
    </div>
  );
}
