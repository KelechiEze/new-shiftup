import React from 'react';

const ProgrammeHero: React.FC = () => {
  return (
    <section className="relative w-full h-[70vh] flex items-center overflow-hidden bg-brand-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2400&auto=format&fit=crop" 
          alt="African youth learning" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
        <div className="absolute inset-0 bg-brand-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="w-16 h-[2px] bg-brand-yellow rounded-full"></div>
            <span className="text-[12px] md:text-[14px] font-extrabold tracking-[0.3em] text-white uppercase opacity-80">
              CULTIVATING EXCELLENCE
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            Master Your <br />
            <span className="text-brand-yellow italic font-serif">Future Journey.</span>
          </h1>

          <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl">
            Our programs are meticulously designed to bridge the gap between academic theory and workplace reality, transforming high-potential graduates into world-class leaders.
          </p>
        </div>
      </div>

      {/* Decorative Blocks - Using Brand Yellow */}
      <div className="absolute bottom-0 right-0 hidden lg:grid grid-cols-2 gap-0 z-10 opacity-40">
        <div className="w-24 h-24 bg-brand-pale"></div>
        <div className="w-24 h-24 bg-brand-yellow"></div>
      </div>
    </section>
  );
};

export default ProgrammeHero;