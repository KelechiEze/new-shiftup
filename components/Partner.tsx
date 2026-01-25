import React from 'react';
import PartnerHero from './PartnerHero';
import PartnerBenefits from './PartnerBenefits';
import PartnerOpportunities from './PartnerOpportunities';
import { ArrowRight } from 'lucide-react';

const PartnerJoinSection: React.FC = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 text-center border-t border-gray-50">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-[#1A1A1A] mb-8 tracking-tight leading-tight">
          Ready to make a <br /> <span className="text-brand-gold">lasting impact?</span>
        </h2>
        <p className="text-gray-400 text-lg md:text-xl font-light mb-12 max-w-xl">
          Join a community of visionaries dedicated to building Africa's next generation of world-class leaders.
        </p>
        <button className="bg-brand-yellow hover:bg-brand-gold text-brand-black px-14 h-[64px] rounded-full font-bold tracking-widest text-xs flex items-center gap-3 transition-all shadow-2xl hover:-translate-y-1 uppercase">
          LET'S TALK PARTNERSHIP <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

const Partner: React.FC = () => {
  return (
    <div className="bg-cream min-h-screen relative overflow-x-hidden">
      <PartnerHero />
      <PartnerOpportunities />
      <PartnerBenefits />
      <PartnerJoinSection />
    </div>
  );
};

export default Partner;