'use client';

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const STORAGE_KEY = 'portfolio-theme';

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('light');
  const [mounted, setMounted] = useState(false);

  // Apply theme to document root
  const applyThemeToDOM = useCallback((newTheme: Theme) => {
    if (typeof document === 'undefined') return;
    const root = document.documentElement;
    if (newTheme === 'dark') {
      root.classList.add('dark');
      root.setAttribute('data-theme', 'dark');
      root.style.colorScheme = 'dark';
    } else {
      root.classList.remove('dark');
      root.setAttribute('data-theme', 'light');
      root.style.colorScheme = 'light';
    }
  }, []);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      try {
        const storedTheme = localStorage.getItem(STORAGE_KEY) as Theme | null;
        if (storedTheme === 'dark' || storedTheme === 'light') {
          setThemeState(storedTheme);
          applyThemeToDOM(storedTheme);
        } else {
          const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
          const initialTheme: Theme = prefersDark ? 'dark' : 'light';
          setThemeState(initialTheme);
          applyThemeToDOM(initialTheme);
        }
      } catch {
        // Ignore localStorage errors (e.g., privacy modes)
      }
      setMounted(true);
    });

    return () => cancelAnimationFrame(frameId);
  }, [applyThemeToDOM]);

  // Listen for system theme changes if no explicit user preference is stored
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleSystemChange = (e: MediaQueryListEvent) => {
      try {
        const hasStored = localStorage.getItem(STORAGE_KEY);
        if (!hasStored) {
          const newTheme: Theme = e.matches ? 'dark' : 'light';
          setThemeState(newTheme);
          applyThemeToDOM(newTheme);
        }
      } catch {}
    };

    mediaQuery.addEventListener('change', handleSystemChange);
    return () => mediaQuery.removeEventListener('change', handleSystemChange);
  }, [applyThemeToDOM]);

  const setTheme = useCallback(
    (newTheme: Theme) => {
      setThemeState(newTheme);
      applyThemeToDOM(newTheme);
      try {
        localStorage.setItem(STORAGE_KEY, newTheme);
      } catch {}
    },
    [applyThemeToDOM]
  );

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  }, [theme, setTheme]);

  const value = {
    theme: mounted ? theme : 'light',
    setTheme,
    toggleTheme,
    isDark: mounted ? theme === 'dark' : false,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
