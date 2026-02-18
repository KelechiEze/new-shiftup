
import React, { useState } from 'react';
import { User, MessageSquareText, HandCoins, ChevronRight } from 'lucide-react';
import PartnerModal from './PartnerModal';

const opportunities = [
  {
    icon: User,
    title: "Become a Mentor",
    color: "bg-brand-yellow text-brand-black",
    desc: "Guide and shape emerging leaders as they develop the skills and confidence to lead with purpose."
  },
  {
    icon: MessageSquareText,
    title: "Become a Trainer",
    color: "bg-[#7C8D5E] text-white",
    desc: "Help young Africans master workplace readiness and technical skills through direct instruction."
  },
  {
    icon: HandCoins,
    title: "Become a Sponsor",
    color: "bg-brand-black text-white",
    desc: "Provide the financial backing or resource access that fuels our transformational programs."
  }
];

const PartnerOpportunities: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'Mentor' | 'Trainer' | 'Sponsorship' | null>(null);

  const handleApplyClick = (title: string) => {
    if (title.includes('Mentor')) setActiveModal('Mentor');
    else if (title.includes('Trainer')) setActiveModal('Trainer');
    else if (title.includes('Sponsor')) setActiveModal('Sponsorship');
  };

  return (
    <section className="bg-cream py-24 md:py-40 px-6 md:px-12 relative overflow-visible z-10">
      <style>{`
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        .animate-subtle-bounce {
          animation: subtle-bounce 2s infinite ease-in-out;
        }
      `}</style>
      
      <PartnerModal 
        isOpen={!!activeModal} 
        category={activeModal} 
        onClose={() => setActiveModal(null)} 
      />

      <div className="max-w-7xl mx-auto flex flex-col items-center mb-24 text-center">
         <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1.5px] bg-brand-yellow"></div>
            <span className="text-[12px] font-bold tracking-[0.3em] uppercase text-gray-400">PARTNERSHIP CATEGORIES</span>
            <div className="w-12 h-[1.5px] bg-brand-yellow"></div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-black tracking-tight leading-tight max-w-3xl">
            Ways You Can <br className="hidden md:block"/> Get Involved.
          </h2>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left: Image Container */}
        <div className="relative order-2 lg:order-1">
          <div className="w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
              alt="Mentorship in action" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-brand-yellow/10 mix-blend-overlay"></div>
          </div>
        </div>

        {/* Right: The Cards */}
        <div className="flex flex-col gap-6 order-1 lg:order-2 z-20">
          {opportunities.map((item, idx) => (
            <div 
              key={idx} 
              onClick={() => handleApplyClick(item.title)}
              className={`opp-card group ${item.color} p-8 md:p-10 rounded-[2.5rem] shadow-2xl hover:-translate-x-4 transition-all duration-500 cursor-pointer relative overflow-hidden`}
            >
              <div className="flex items-start justify-between mb-8 relative z-10">
                 <div className={`p-4 rounded-2xl backdrop-blur-md transition-colors duration-500 ${
                   item.title.includes('Mentor') 
                   ? 'bg-black/10 group-hover:bg-black group-hover:text-white' 
                   : 'bg-white/10 group-hover:bg-brand-yellow group-hover:text-brand-black'
                 }`}>
                   <item.icon size={28} strokeWidth={1.5} />
                 </div>
                 <div className={`w-10 h-10 rounded-full border border-current opacity-40 flex items-center justify-center group-hover:bg-current group-hover:opacity-100 transition-all ${
                   item.title.includes('Mentor') ? 'group-hover:text-white' : 'group-hover:text-brand-black'
                 }`}>
                   <ChevronRight size={20} />
                 </div>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">{item.title}</h3>
              <p className="opacity-70 text-sm md:text-base leading-relaxed mb-8 font-light max-w-sm relative z-10">
                {item.desc}
              </p>
              
              <div className="flex items-center gap-2 text-[11px] font-bold tracking-widest uppercase relative z-10 animate-subtle-bounce">
                <span className="border-b border-current pb-1 opacity-60 group-hover:opacity-100 transition-all">START YOUR JOURNEY</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerOpportunities;
