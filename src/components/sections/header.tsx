'use client';

import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/95 backdrop-blur-md' : 'bg-transparent'}`}>
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-gradient-cyan-magenta">
          Rushyanth Nerellakunta
        </div>
        <div className="flex items-center">
          <ul className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-white hover:text-cyan-400 transition-colors duration-300">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex items-center gap-6 ml-8">
            <a href="https://github.com/RushyanthN" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://www.linkedin.com/in/nerellakunta-rushyanth" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://medium.com/@rushyanth55" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M5.12 11.23a.79.79 0 0 0-.21.57v.4a.83.83 0 0 0 .21.58l4.89 4.89 4.89-4.89a.83.83 0 0 0 .21-.58v-.4a.79.79 0 0 0-.21-.57L10 6.34zM22 7h-2.13a.47.47 0 0 0-.47.47v10.15a.47.47 0 0 0 .47.47H22a.47.47 0 0 0 .47-.47V7.47A.47.47 0 0 0 22 7zM16.8 7h-2.13a.47.47 0 0 0-.47.47v10.15a.47.47 0 0 0 .47.47h2.13a.47.47 0 0 0 .47-.47V7.47a.47.47 0 0 0-.47-.47z"/></svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
