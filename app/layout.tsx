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
    'Portfolio of Raja Yoken S S R — Frontend Developer crafting immersive digital experiences with cutting-edge interactivity, cinematic motion, and pixel-perfect interfaces.',
  keywords: ['Frontend Developer', 'Portfolio', 'React', 'Next.js', 'Web Development', 'UI/UX'],
  authors: [{ name: 'Raja Yoken S S R' }],
  openGraph: {
    title: 'Raja Yoken S S R — Frontend Developer',
    description: 'Crafting Digital Experiences That Defy Gravity',
    type: 'website',
  },
};

export const viewport: Viewport = {
  themeColor: '#030712',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-gray-950 text-white`}>
        {children}
      </body>
    </html>
  );
}
