'use client';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ScrollFadeIn } from '../common/scroll-fade-in';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    alert("Thank you for your message! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-24 text-center bg-black/30">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-gradient-cyan-white">Get In Touch</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-5">
            <Input type="text" placeholder="Your Name" required className="bg-white/10 border-white/20 rounded-lg p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]" />
            <Input type="email" placeholder="Your Email" required className="bg-white/10 border-white/20 rounded-lg p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]" />
            <Input type="text" placeholder="Subject" required className="bg-white/10 border-white/20 rounded-lg p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]" />
            <Textarea placeholder="Your Message" required rows={5} className="bg-white/10 border-white/20 rounded-lg p-4 text-white focus:border-cyan-400 focus:shadow-[0_0_20px_rgba(0,255,255,0.3)]" />
            <Button type="submit" size="lg" className="bg-gradient-cyan-magenta text-white font-bold rounded-full py-4 px-8 transition-transform duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(0,255,255,0.3)] hover:shadow-[0_20px_40px_rgba(0,255,255,0.5)]">
              Send Message
            </Button>
          </form>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
