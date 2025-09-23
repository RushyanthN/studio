'use client';

import { useFormState } from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import { generateTaglineAction, type ActionState } from '@/app/actions';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { SubmitButton } from '@/components/submit-button';
import { Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const initialState: ActionState = {};

export function HeroSection() {
  const [state, formAction] = useFormState(generateTaglineAction, initialState);
  const [displayedTagline, setDisplayedTagline] = useState(
    "Data Scientist with 3+ years of experience in data science, analytics, and applied ML."
  );
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.tagline) {
      setDisplayedTagline(state.tagline);
      formRef.current?.reset();
    }
    if (state.error) {
      toast({
        variant: 'destructive',
        title: 'Error',
        description: state.error,
      });
    }
  }, [state, toast]);

  return (
    <section id="home" className="container py-20 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center lg:text-left">
          <h1 className="text-4xl md:text-6xl font-headline font-bold tracking-tighter">
            Rushyanth Nerellakunta
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            {displayedTagline}
          </p>
          <div className="flex justify-center lg:justify-start space-x-4">
             <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild size="lg" variant="outline">
                <a href="#portfolio">View My Work</a>
            </Button>
          </div>
        </div>
        
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline flex items-center gap-2">
              <Sparkles className="text-accent" />
              Generate a New Tagline
            </CardTitle>
            <CardDescription>
              Use AI to create a unique tagline based on your skills and experience.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form ref={formRef} action={formAction} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="userDetails">Your Skills & Experience</Label>
                <Textarea
                  id="userDetails"
                  name="userDetails"
                  placeholder="e.g., 'I am a software engineer with 5 years of experience in React, Node.js, and cloud technologies. I love creating beautiful and performant user interfaces.'"
                  required
                  rows={4}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="priorContent">Any Existing Tagline? (Optional)</Label>
                <Textarea
                  id="priorContent"
                  name="priorContent"
                  placeholder="e.g., 'Software Developer'"
                  rows={2}
                />
              </div>
              <SubmitButton className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">Generate</SubmitButton>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
