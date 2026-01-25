import React from 'react';
import { Share2, Handshake, Medal, MessageSquareQuote, Puzzle, Award } from 'lucide-react';

const benefits = [
  {
    icon: Share2,
    title: "Talent Pipeline",
    text: "Direct access to a vetted pipeline of well-trained young African talent for your team's growth."
  },
  {
    icon: Handshake,
    title: "Brand Visibility",
    text: "Premium placement in our community newsletters, global events, and high-traffic digital platforms."
  },
  {
    icon: Medal,
    title: "Global Recognition",
    text: "Join a network of globally recognised leaders shaping the future of African industry and culture."
  },
  {
    icon: MessageSquareQuote,
    title: "Impact Stories",
    text: "Co-authored impact stories and professional media coverage profiling your direct contribution."
  },
  {
    icon: Puzzle,
    title: "Strategic Collaboration",
    text: "Participate in exclusive high-level networking and strategic roundtable sessions with top partners."
  },
  {
    icon: Award,
    title: "Legacy Building",
    text: "The personal fulfilment of directly building a sustainable legacy for the next generation of leaders."
  }
];

const PartnerBenefits: React.FC = () => {
  return (
    <section className="bg-brand-black py-32 md:py-48 px-6 md:px-12 w-full relative overflow-visible z-20">
      {/* Dynamic Glow Background */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[180px] -z-0 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow/5 rounded-full blur-[150px] -z-0 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-24">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1.5px] bg-brand-yellow"></div>
            <span className="text-[12px] md:text-[14px] font-bold tracking-[0.4em] uppercase text-brand-yellow">THE VALUE EXCHANGE</span>
            <div className="w-12 h-[1.5px] bg-brand-yellow"></div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight max-w-4xl">
            Exclusivity & Value <br /> For Our Partners.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
           {benefits.map((item, idx) => (
             <div 
               key={idx} 
               className="group bg-white/5 border border-white/10 p-10 md:p-12 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:border-brand-yellow/30 flex flex-col items-start opacity-100"
             >
                <div className="w-16 h-16 rounded-2xl bg-brand-yellow/10 flex items-center justify-center mb-10 text-brand-yellow transition-all duration-500 group-hover:bg-brand-yellow group-hover:text-brand-black group-hover:-rotate-12">
                   <item.icon size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 group-hover:text-brand-yellow transition-colors">
                  {item.title}
                </h3>
                <p className="text-white/40 font-light leading-relaxed text-sm md:text-base group-hover:text-white/70 transition-colors">
                   {item.text}
                </p>
             </div>
           ))}
        </div>
      </div>

      {/* Footer Accent Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
    </section>
  );
};

export default PartnerBenefits;