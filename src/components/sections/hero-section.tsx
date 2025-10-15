import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section id="home" className="h-screen flex items-center justify-center text-center relative">
      <div className="z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-5 text-gradient-cyan-magenta-yellow">
          Rushyanth Nerellakunta
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-2">
          Data Scientist & ML Engineer | 3+ Years Experience | AWS Certified
        </p>
        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
          Transforming data into intelligent solutions that drive business impact
        </p>
        <Button asChild size="lg" className="bg-gradient-cyan-magenta text-white font-bold rounded-full py-4 px-8 transition-transform duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_20px_40px_rgba(0,255,255,0.5)]">
          <a href="#about">View My Work</a>
        </Button>
      </div>
    </section>
  );
}
