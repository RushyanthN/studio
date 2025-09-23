'use client';

import { Button } from '@/components/ui/button';
import { useCallback } from "react";
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

export function HeroSection() {
  const displayedTagline =
    "Data Scientist with 3+ years of experience spanning data science, analytics, engineering, and applied ML.";

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // You can add any logic here for when the particles are loaded
  }, []);

  return (
    <section id="home" className="relative container py-20 md:py-32">
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "hsl(var(--background))",
            },
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "hsl(var(--primary))",
            },
            links: {
              color: "hsl(var(--primary))",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
                direction: "none",
                enable: true,
                outModes: {
                    default: "bounce",
                },
                random: false,
                speed: 1,
                straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.2,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />
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
