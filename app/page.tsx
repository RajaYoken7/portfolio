import { HeroSection } from '@/components/sections/hero-section';
import { ProjectsSection } from '@/components/sections/projects-section';
import { ContactSection } from '@/components/sections/contact-section';

export default function Home() {
  return (
    <main className="bg-gray-950 min-h-screen">
      <HeroSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
