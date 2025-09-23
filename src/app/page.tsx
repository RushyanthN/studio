import { Header } from '@/components/sections/header';
import { HeroSection } from '@/components/sections/hero-section';
import { AboutSection } from '@/components/sections/about-section';
import { ResumeSection } from '@/components/sections/resume-section';
import { PortfolioSection } from '@/components/sections/portfolio-section';
import { ContactSection } from '@/components/sections/contact-section';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <div className="space-y-16 md:space-y-24">
          <AboutSection />
          <ResumeSection />
          <PortfolioSection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
