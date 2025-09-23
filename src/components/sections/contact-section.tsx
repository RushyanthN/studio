'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would handle form submission here.
    console.log('Form submitted');
  };

  return (
    <section id="contact" className="container py-16 md:py-24">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold font-headline">Get In Touch</CardTitle>
          <CardDescription>Have a project in mind or just want to say hello? Drop me a line.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your Name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="your@email.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." required rows={5} />
            </div>
            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
              Send Message
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}
