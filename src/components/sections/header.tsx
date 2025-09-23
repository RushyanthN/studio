'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu, PenSquare } from 'lucide-react';
import React from 'react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#resume', label: 'Resume' },
  { href: '#portfolio', label: 'Portfolio' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex items-center">
          <a href="#home" className="mr-6 flex items-center space-x-2">
            <PenSquare className="h-6 w-6 text-primary" />
            <span className="font-bold font-headline">Persona Canvas</span>
          </a>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <div className="flex flex-col gap-6 mt-8">
                <a href="#home" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
                  <PenSquare className="h-6 w-6 text-primary" />
                  <span className="font-bold font-headline">Persona Canvas</span>
                </a>
                <nav className="grid gap-4">
                  {navLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
