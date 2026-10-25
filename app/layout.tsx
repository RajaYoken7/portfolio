import type { Metadata, Viewport } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';

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
  themeColor: '#ffffff',
  colorScheme: 'only light',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-white text-black`}>
        {children}
      </body>
    </html>
  );
}
