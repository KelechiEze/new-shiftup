import React from 'react';
import { Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import Logo from './Logo';
import { PageType } from '../App';

interface FooterProps {
  onNavigate?: (page: PageType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNavClick = (page: PageType, e: React.MouseEvent) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(page);
    }
  };

  return (
    <footer className="bg-black text-white w-full border-t border-gray-900 pt-16 md:pt-24 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20 md:mb-32">
          
          {/* Column 1: Brand (Span 4 cols) */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="text-white mb-8 cursor-pointer" onClick={(e) => handleNavClick('home', e)}>
              <Logo />
            </div>
            
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 border border-gray-700 rounded-sm flex items-center justify-center text-gray-400 hover:text-brand-yellow hover:border-brand-yellow transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Programmes (Span 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Programmes
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "RMSC", 
                "100 Days to Your Dream Job", 
                "Agile and project management foundations", 
                "Book study and mindset mastery",
                "Work ethic, excellence, and workplace readiness",
                "Community, mentoring, and accountability"
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    onClick={(e) => handleNavClick('programme', e)}
                    className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200 block leading-relaxed"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Company (Span 2 cols) */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Company
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                { name: "Why ShiftUp", id: 'why-shiftup' as PageType }, 
                { name: "Our People", id: 'why-shiftup' as PageType }, 
                { name: "Our Partners", id: 'partner' as PageType },
                { name: "Join Our Community", id: 'home' as PageType }
              ].map((item, idx) => (
                <li key={idx}>
                  <a 
                    href="#" 
                    onClick={(e) => handleNavClick(item.id, e)}
                    className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Resources (Span 1.5 col) */}
          <div className="lg:col-span-1.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Resources
            </h3>
            <ul className="flex flex-col gap-3">
              {[
                "Blog", 
                "Discord Community", 
                "FAQ", 
                "Support"
              ].map((item, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 5: Legal (Span 1.5 col) */}
          <div className="lg:col-span-1.5">
            <h3 className="text-white font-bold text-xs uppercase tracking-wider mb-6 md:mb-8">
              Legal
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick('privacy-policy', e)}
                  className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  onClick={(e) => handleNavClick('terms-of-service', e)}
                  className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200"
                >
                  Terms of Use & Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-brand-yellow text-xs md:text-sm transition-colors duration-200">
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2025 Shift Up Africa. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => handleNavClick('privacy-policy', e)} className="hover:text-white transition-colors">Privacy</a>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <a href="#" onClick={(e) => handleNavClick('terms-of-service', e)} className="hover:text-white transition-colors">Terms</a>
            <span className="w-1 h-1 rounded-full bg-gray-700"></span>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;