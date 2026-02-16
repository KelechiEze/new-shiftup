import React, { useState } from 'react';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import ProgrammeRegistrationModal from './ProgrammeRegistrationModal';

const programs = [
  {
    title: "SUA Graduate Launchpad",
    tag: "100-DAY JOURNEY",
    subtitle: "Clarity. Confidence. Competence.",
    description: "A transformational journey that builds identity, mindset, work ethic, and workplace readiness; preparing young graduates to rise and thrive in the global marketplace.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1200&auto=format&fit=crop",
    features: ["Mindset Mastery", "Workplace Readiness", "Career Clarity"]
  },
  {
    title: "Graduate Performance Accelerator",
    tag: "BEHAVIOURAL ACTIVATION",
    subtitle: "Upgrade how you think, act, and perform.",
    description: "Built around five power drivers: Hunger, Courage, Initiative, Execution, and Growth Mindset to shape high-performing young professionals who lead with purpose.",
    image: "https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=1200&auto=format&fit=crop",
    features: ["Leadership Skills", "High-Performance Habit", "Strategic Execution"]
  },
  {
    title: "Agility to Result",
    tag: "PRACTICAL EXECUTION",
    subtitle: "Execute fast. Deliver well. Work smart.",
    description: "A hands-on training that teaches Agile thinking, sprint execution, prioritisation, and collaboration to get things done in any professional environment.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    features: ["Agile Frameworks", "Sprint Planning", "Priority Management"]
  },
  {
    title: "Speak to Lead",
    tag: "COMMUNICATION MASTERY",
    subtitle: "Communicate with clarity. Present with confidence.",
    description: "Master the art of storytelling and public speaking. Influence with ease and lead teams through powerful, clear communication and presence.",
    image: "https://images.unsplash.com/photo-1475721027767-4d536da81a46?q=80&w=1200&auto=format&fit=crop",
    features: ["Public Speaking", "Persuasive Storytelling", "Presence & Poise"]
  }
];

const ProgrammeList: React.FC = () => {
  const [selectedProgram, setSelectedProgram] = useState<string | null>(null);

  const handleApply = (programTitle: string) => {
    setSelectedProgram(programTitle);
  };

  return (
    <section className="bg-white py-32 px-6 md:px-12 w-full">
      <ProgrammeRegistrationModal 
        isOpen={!!selectedProgram} 
        onClose={() => setSelectedProgram(null)} 
        programTitle={selectedProgram || ''} 
      />

      <div className="max-w-7xl mx-auto flex flex-col gap-32">
        {programs.map((prog, idx) => (
          <div 
            key={idx} 
            className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${
              idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image Side */}
            <div className="w-full lg:w-1/2 relative group">
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src={prog.image} 
                  alt={prog.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-brand-yellow/10 mix-blend-overlay"></div>
              </div>
              {/* Floating Badge */}
              <div className="absolute -bottom-6 -right-6 md:right-10 bg-brand-black text-brand-yellow p-8 rounded-2xl shadow-2xl hidden md:block">
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase">{prog.tag}</span>
              </div>
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-1/2 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[1.5px] bg-brand-yellow"></div>
                <span className="text-[12px] font-extrabold tracking-[0.3em] uppercase text-brand-yellow">{prog.tag}</span>
              </div>
              
              <h3 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-4 tracking-tight leading-tight">
                {prog.title}
              </h3>
              
              <h4 className="text-xl font-medium text-gray-400 mb-8 italic font-serif">
                "{prog.subtitle}"
              </h4>

              <p className="text-gray-500 text-lg font-light leading-relaxed mb-10 max-w-xl">
                {prog.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 w-full">
                {prog.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                    <span className="text-sm font-semibold text-brand-black uppercase tracking-wider">{feature}</span>
                  </div>
                ))}
              </div>

              <button 
                onClick={() => handleApply(prog.title)}
                className="group bg-brand-yellow hover:bg-brand-gold text-brand-black px-12 h-[64px] rounded-full font-bold tracking-widest text-xs flex items-center gap-3 transition-all shadow-xl hover:-translate-y-1 active:scale-95 uppercase"
              >
                APPLY FOR THIS PROGRAMME <ArrowUpRight size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProgrammeList;