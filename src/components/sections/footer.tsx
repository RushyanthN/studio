import { Button } from '@/components/ui/button';
import { Github, Linkedin, Twitter, PenSquare } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-card border-t">
      <div className="container py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center space-x-2">
            <PenSquare className="h-5 w-5 text-primary" />
            <p className="text-sm text-muted-foreground">
              &copy; {new Date().getFullYear()} Persona Canvas. All rights reserved.
            </p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Twitter className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  );
}
