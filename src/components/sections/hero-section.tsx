'use client';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import Image from 'next/image';

const stats = [
  { number: '1M+', label: 'Data Points Analyzed' },
  { number: '95%+', label: 'Model Accuracy' },
  { number: '15+', label: 'ML Frameworks Mastered' },
  { number: '6+', label: 'Cloud Deployments' },
  { number: '50+', label: 'Experiments Tracked' },
  { number: '4+', label: 'LLM Applications Built' },
  { number: '3M+', label: 'Tokens Processed' },
];

const rotatingTexts = [
  'Learn',
  'Understand',
  'Predict',
  'Automate',
  'Optimize',
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % rotatingTexts.length);
        setIsAnimating(false);
      }, 300); // Half of animation duration
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center py-20 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Making Machines{' '}
              <span className="relative inline-block min-w-[200px] md:min-w-[280px]">
                <span
                  key={currentIndex}
                  className={`inline-block text-primary-blue transition-all duration-500 ${
                    isAnimating ? 'opacity-0 -translate-y-5' : 'opacity-100 translate-y-0'
                  }`}
                >
                  {rotatingTexts[currentIndex]}
                </span>
              </span>
            </h1>
            
            <div className="inline-flex items-center gap-2 bg-blue-50 dark:bg-blue-900/30 px-4 py-2 rounded-full">
              <span className="text-sm font-medium text-foreground">
                AIML Engineer • Data Scientist • ML Engineer • AWS Certified
              </span>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Crafting intelligent systems with AI, ML, Deep Learning, and Computer Vision. 
              Designed to enhance performance, scale through robust ML pipelines, and drive business 
              value through automation, improved models, and intelligent decision-making.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary-blue text-white hover:opacity-90">
                <a href="#projects">View My Work</a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-blue text-primary-blue hover:bg-blue-50 dark:hover:bg-blue-900/30">
                <a href="#contact">Get In Touch</a>
              </Button>
              <Button asChild size="lg" className="bg-primary-green text-white hover:opacity-90">
                <a href="/RushyanthNerellakunta.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
          </div>

          {/* Right Side - Professional Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg border-4 border-white dark:border-gray-800">
              <Image
                src="/Rushy_Profile_pic.jpg"
                alt="Rushyanth Nerellakunta - Professional Photo"
                fill
                className="object-cover object-[center_20%]"
                priority
                sizes="(max-width: 768px) 288px, 320px"
              />
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 mt-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white dark:bg-card border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-primary-blue mb-2">{stat.number}</div>
              <div className="text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
