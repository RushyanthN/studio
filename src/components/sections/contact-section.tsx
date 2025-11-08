'use client';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { ScrollFadeIn } from '../common/scroll-fade-in';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message');
      }

      toast({
        title: "Message Sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });

      // Reset form
      form.reset();
    } catch (error) {
      // Fallback to mailto if API fails
      const mailtoLink = `mailto:rushyanth55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening Email Client",
        description: "Please send your message through your email client, or contact me directly at rushyanth55@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="container">
        <ScrollFadeIn>
          <h2 className="section-title text-center">Get In Touch</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto grid gap-5">
            <Input 
              type="text" 
              name="name"
              placeholder="Your Name" 
              required 
              className="bg-white dark:bg-card border-gray-300 dark:border-gray-700 rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" 
            />
            <Input 
              type="email" 
              name="email"
              placeholder="Your Email" 
              required 
              className="bg-white dark:bg-card border-gray-300 dark:border-gray-700 rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" 
            />
            <Input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              required 
              className="bg-white dark:bg-card border-gray-300 dark:border-gray-700 rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" 
            />
            <Textarea 
              name="message"
              placeholder="Your Message" 
              required 
              rows={5} 
              className="bg-white dark:bg-card border-gray-300 dark:border-gray-700 rounded-lg p-4 text-foreground placeholder:text-muted-foreground focus:border-primary-blue focus:ring-1 focus:ring-primary-blue" 
            />
            <Button 
              type="submit" 
              size="lg" 
              disabled={isSubmitting}
              className="bg-primary-blue text-white font-semibold rounded-lg py-4 px-8 transition-all duration-300 hover:opacity-90 disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </ScrollFadeIn>
      </div>
    </section>
  );
}
