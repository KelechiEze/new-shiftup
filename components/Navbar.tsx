
import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import Logo from './Logo';
import { PageType } from '../App';

interface NavbarProps {
  onNavigate?: (page: PageType, sectionId?: string) => void;
  currentPage: PageType;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const isBlogPage = currentPage === 'blog';

  const navLinks = [
    { name: 'HOME', id: 'home', hasDropdown: false },
    { name: 'WHY SHIFTUP', id: 'why-shiftup', hasDropdown: true },
    { name: 'PARTNER', id: 'partner', hasDropdown: true },
    { name: 'PROGRAM', id: 'programme', hasDropdown: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigation = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(id as PageType);
    }
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo(".mobile-menu-overlay", { opacity: 0 }, { opacity: 1, duration: 0.3 })
          .fromTo(".mobile-link", { y: 20, opacity: 0 }, { y: 0, opacity: 1, stagger: 0.08, duration: 0.4, ease: "power2.out" }, "-=0.1");
      }, menuRef);
      return () => ctx.revert();
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 py-6 px-6 md:px-12 flex items-center justify-between ${
      (isScrolled || isBlogPage) ? 'bg-brand-black/95 backdrop-blur-lg py-4 shadow-2xl border-b border-white/10' : 'bg-transparent'
    }`}>
      {/* Logo */}
      <div 
        onClick={(e) => handleNavigation('home', e)} 
        className="cursor-pointer text-white relative z-50"
      >
        <Logo />
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href="#"
            onClick={(e) => handleNavigation(link.id, e)}
            className={`group flex items-center gap-1 text-[11px] font-bold tracking-[0.2em] transition-all duration-300 ${
              currentPage === link.id ? 'text-brand-yellow' : 'text-white/80 hover:text-white'
            }`}
          >
            {link.name}
            {link.hasDropdown && <ChevronDown size={14} className="opacity-40 group-hover:rotate-180 transition-transform duration-300" />}
          </a>
        ))}
      </div>

      {/* Right Action Button */}
      <div className="hidden md:flex items-center relative z-50">
        <button 
          onClick={(e) => handleNavigation('programme', e as any)}
          className="bg-brand-yellow text-brand-black text-[11px] font-extrabold tracking-[0.2em] px-10 h-[52px] rounded-full transition-all hover:bg-brand-gold shadow-xl transform hover:-translate-y-0.5 active:scale-95 uppercase"
        >
          APPLY NOW
        </button>
      </div>

      {/* Mobile Menu Toggle */}
      <button 
        className="lg:hidden p-2 z-50 text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div ref={menuRef} className="mobile-menu-overlay fixed inset-0 w-full h-screen bg-brand-black flex flex-col items-center justify-center gap-8 z-40">
          <div className="absolute top-8 left-12 text-white">
             <Logo />
          </div>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href="#"
              onClick={(e) => handleNavigation(link.id, e)}
              className={`mobile-link text-3xl font-extrabold tracking-tight ${
                currentPage === link.id ? 'text-brand-yellow' : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={(e) => handleNavigation('programme', e as any)}
            className="mobile-link bg-brand-yellow text-brand-black px-12 h-[60px] rounded-full font-extrabold text-sm tracking-widest mt-4"
          >
            APPLY NOW
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
