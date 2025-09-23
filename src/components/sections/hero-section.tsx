'use client';

import { Button } from '@/components/ui/button';

export function HeroSection() {
  const displayedTagline =
    "Data Scientist with 3+ years of experience spanning data science, analytics, engineering, and applied ML.";

  return (
    <section id="home" className="container py-20 md:py-32">
      <div className="grid grid-cols-1 gap-12 items-center text-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
            Rushyanth Nerellakunta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {displayedTagline}
          </p>
          <div className="flex justify-center space-x-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild size="lg" variant="outline">
                <a href="#portfolio">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
