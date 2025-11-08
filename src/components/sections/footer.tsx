import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-8 text-center bg-gray-200 dark:bg-gray-900 border-t border-gray-300 dark:border-gray-700">
      <div className="container">
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/RushyanthN" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Github size={24} />
          </a>
          <a href="https://www.linkedin.com/in/nerellakunta-rushyanth" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <Linkedin size={24} />
          </a>
          <a href="https://medium.com/@rushyanth55" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5.12 11.23a.79.79 0 0 0-.21.57v.4a.83.83 0 0 0 .21.58l4.89 4.89 4.89-4.89a.83.83 0 0 0 .21-.58v-.4a.79.79 0 0 0-.21-.57L10 6.34zM22 7h-2.13a.47.47 0 0 0-.47.47v10.15a.47.47 0 0 0 .47.47H22a.47.47 0 0 0 .47-.47V7.47A.47.47 0 0 0 22 7zM16.8 7h-2.13a.47.47 0 0 0-.47.47v10.15a.47.47 0 0 0 .47.47h2.13a.47.47 0 0 0 .47-.47V7.47a.47.47 0 0 0-.47-.47z"/></svg>
          </a>
        </div>
        <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Rushyanth Nerellakunta. All rights reserved.</p>
        <p className="text-muted-foreground">Indianapolis, IN | rushyanth55@gmail.com | +1 (317) 935-0710</p>
      </div>
    </footer>
  );
}
