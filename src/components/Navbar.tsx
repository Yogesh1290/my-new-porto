
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 py-4 px-6 md:px-12 transition-all duration-500 ${
        scrolled ? 'glass shadow-md' : 'bg-transparent'
      }`}
    >
      {/* Add the fade circle behind the logo */}
      <div className="absolute top-0 left-0 w-48 h-48 md:w-64 md:h-64 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),rgba(255,255,255,0))] rounded-full -translate-x-1/4 -translate-y-1/4 blur-md"></div>
      
      <nav className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-heading font-bold tracking-tighter relative z-10">
          <span className="text-primary">Porto</span>
          <span className="text-muted-foreground">.</span>
        </Link>
        
        <div className="hidden md:flex space-x-8 items-center">
          <NavLink href="#hero">Home</NavLink>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>
        
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      className="text-sm font-medium relative py-2 px-1 text-foreground transition-colors after:absolute after:left-0 after:right-0 after:bottom-0 after:h-[2px] after:bg-primary after:scale-x-0 after:origin-right after:transition-transform hover:after:scale-x-100 hover:after:origin-left"
    >
      {children}
    </a>
  );
};

export default Navbar;
