import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Raja Yoken S S R — Frontend Developer',
  description:
    'Portfolio of Raja Yoken S S R — Frontend Developer crafting clean, modern, and high-performance digital experiences.',
  keywords: ['Frontend Developer', 'Portfolio', 'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'UI/UX'],
  authors: [{ name: 'Raja Yoken S S R' }],
  openGraph: {
    title: 'Raja Yoken S S R — Frontend Developer',
    description: 'Minimalist, performant, and purposeful web development.',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EBE9E5' },
    { media: '(prefers-color-scheme: dark)', color: '#111110' },
  ],
};

const themeInitScript = `
  try {
    var stored = localStorage.getItem('portfolio-theme');
    var isDark = stored ? stored === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDark) {
      document.documentElement.classList.add('dark');
      document.documentElement.setAttribute('data-theme', 'dark');
      document.documentElement.style.colorScheme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.setAttribute('data-theme', 'light');
      document.documentElement.style.colorScheme = 'light';
    }
  } catch (e) {}
`;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
