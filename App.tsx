
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import WhyShiftUp from './components/WhyShiftUp';
import Partner from './components/Partner';
import Programme from './components/Programme';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Footer from './components/Footer';

export type PageType = 'home' | 'why-shiftup' | 'partner' | 'programme' | 'privacy-policy' | 'terms-of-service';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<PageType>('home');

  const navigateTo = (page: PageType) => {
    // Scroll to top when changing pages
    window.scrollTo(0, 0);
    setCurrentPage(page);
  };

  return (
    <div className="relative min-h-screen w-full bg-cream text-brand-black overflow-x-hidden font-sans selection:bg-brand-yellow selection:text-black">
      
      {/* Navbar handles its own sticky/transparent behavior now */}
      <Navbar onNavigate={navigateTo} currentPage={currentPage} />

      {/* Page Content */}
      <main>
        {currentPage === 'home' && <Home />}
        {currentPage === 'why-shiftup' && <WhyShiftUp />}
        {currentPage === 'partner' && <Partner />}
        {currentPage === 'programme' && <Programme />}
        {currentPage === 'privacy-policy' && <PrivacyPolicy />}
        {currentPage === 'terms-of-service' && <TermsOfService />}
      </main>

      {/* Footer is persistent */}
      <div className="relative z-20">
        <Footer onNavigate={navigateTo} />
      </div>
    </div>
  );
};

export default App;
