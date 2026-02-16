
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyShiftUp from './components/WhyShiftUp';
import Partner from './components/Partner';
import Programme from './components/Programme';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import BlogPage from './components/BlogPage';
import Footer from './components/Footer';
import { ArrowUp } from 'lucide-react';

export type PageType = 'home' | 'why-shiftup' | 'partner' | 'programme' | 'privacy-policy' | 'terms-of-service' | 'blog';

const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-[60] p-4 bg-brand-yellow text-brand-black rounded-full shadow-2xl transition-all duration-500 transform hover:-translate-y-2 active:scale-95 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Scroll to top"
    >
      <ArrowUp size={24} strokeWidth={3} />
    </button>
  );
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');
  const [activeBlogId, setActiveBlogId] = useState<number | null>(null);

  const navigateTo = (page: PageType, sectionId?: string, blogId?: number) => {
    setCurrentPage(page);
    if (blogId !== undefined) setActiveBlogId(blogId);
    
    // Smooth scroll handling
    setTimeout(() => {
      if (sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className="relative min-h-screen w-full bg-cream text-brand-black overflow-x-hidden font-sans selection:bg-brand-yellow selection:text-black">
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />

      <main>
        {currentPage === 'home' && <Home onNavigate={navigateTo} />}
        {currentPage === 'why-shiftup' && <WhyShiftUp />}
        {currentPage === 'partner' && <Partner />}
        {currentPage === 'programme' && <Programme />}
        {currentPage === 'privacy-policy' && <PrivacyPolicy />}
        {currentPage === 'terms-of-service' && <TermsOfService />}
        {currentPage === 'blog' && <BlogPage onNavigate={navigateTo} initialPostId={activeBlogId} />}
      </main>

      <ScrollToTop />

      <div className="relative z-20">
        <Footer onNavigate={navigateTo} />
      </div>
    </div>
  );
};

export default App;
