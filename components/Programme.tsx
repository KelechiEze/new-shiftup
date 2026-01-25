import React from 'react';
import ProgrammeHero from './ProgrammeHero';
import ProgrammeList from './ProgrammeList';
import { ArrowRight } from 'lucide-react';

const ProgrammeCTA: React.FC = () => {
  return (
    <section className="bg-brand-black py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-yellow/5 rounded-full blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight leading-tight">
          Not sure which <br /> <span className="text-brand-yellow">program is for you?</span>
        </h2>
        <p className="text-white/50 text-lg md:text-xl font-light mb-12 max-w-xl leading-relaxed">
          Our advisors are here to help you navigate your options and find the perfect path for your career goals.
        </p>
        <button className="bg-brand-yellow hover:bg-brand-gold text-brand-black px-14 h-[64px] rounded-full font-bold tracking-widest text-xs flex items-center gap-3 transition-all shadow-2xl hover:-translate-y-1 active:scale-95 uppercase">
          SPEAK WITH AN ADVISOR <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

const Programme: React.FC = () => {
  return (
    <div className="bg-white min-h-screen relative overflow-x-hidden">
      <ProgrammeHero />
      <ProgrammeList />
      <ProgrammeCTA />
    </div>
  );
};

export default Programme;