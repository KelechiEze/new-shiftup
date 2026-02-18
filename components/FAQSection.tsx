
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqData = [
  {
    q: "Who is this program specifically designed for?",
    a: "ShiftUp Africa targets ambitious young African graduates—both recent and those within 3 years post-graduation—who are seeking a competitive edge in the global marketplace. It's for those who have the talent but lack the institutional access or professional polish to land world-class roles."
  },
  {
    q: "Is there a specific technical background required?",
    a: "While some of our tracks are specialized, our core Graduate Launchpad is industry-agnostic. We focus on 'power skills'—critical thinking, agile execution, and workplace readiness—that are essential whether you're in tech, finance, or creative industries."
  },
  {
    q: "How does the mentorship component work?",
    a: "Mentorship is the cornerstone of our experience. You are paired with industry veterans from global firms who provide 1-on-1 guidance, portfolio reviews, and, most importantly, exposure to high-level professional networks."
  },
  {
    q: "What is the hybrid commitment like?",
    a: "The program is designed for maximum impact with minimum friction. We recommend a commitment of 10-12 hours per week, covering live sessions, asynchronous modules, and team-based execution sprints."
  },
  {
    q: "How do you handle post-program support?",
    a: "Graduation is just the beginning. Our alumni gain lifetime access to the SU Africa Network, exclusive job boards, and ongoing professional development workshops to ensure long-term career trajectory."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-32 md:py-56 px-6 md:px-12 w-full border-t border-gray-100 relative z-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32">
          
          {/* Left Column: Branding */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-40">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-[2px] bg-brand-yellow"></div>
                <span className="text-xs font-bold tracking-[0.5em] uppercase text-gray-400">INQUIRIES</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-extrabold text-brand-black leading-tight mb-10 tracking-tighter">
                Clarity for your <br /> next move.
              </h2>
              <p className="text-gray-500 text-lg font-light leading-relaxed mb-12 max-w-sm">
                We've synthesized the most essential information to help you decide if ShiftUp Africa is the right partner for your growth.
              </p>
              <div className="p-6 bg-brand-pale/10 rounded-2xl border border-brand-yellow/10">
                <p className="text-xs font-bold uppercase tracking-widest text-brand-black mb-2">Need more info?</p>
                <a href="mailto:support@shiftupafrica.com" className="text-brand-gold font-bold hover:underline">support@shiftupafrica.com</a>
              </div>
            </div>
          </div>

          {/* Right Column: Accordion */}
          <div className="lg:col-span-8 flex justify-start">
            {/* Reduced width for the FAQ containers here using max-w-2xl */}
            <div className="space-y-4 w-full max-w-2xl">
              {faqData.map((item, idx) => (
                <div 
                  key={idx} 
                  className={`rounded-3xl border border-gray-100 transition-all duration-300 ${
                    activeIndex === idx ? 'bg-brand-black text-white shadow-xl' : 'bg-gray-50 text-brand-black'
                  }`}
                >
                  <button 
                    onClick={() => setActiveIndex(activeIndex === idx ? null : idx)}
                    className="w-full text-left px-8 py-8 md:px-10 md:py-9 flex items-center justify-between gap-6 outline-none"
                  >
                    <span className="text-lg md:text-xl font-bold tracking-tight">
                      {item.q}
                    </span>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      activeIndex === idx ? 'bg-brand-yellow text-brand-black' : 'bg-black/5 text-brand-black'
                    }`}>
                      {activeIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                    </div>
                  </button>
                  
                  <div 
                    className={`overflow-hidden transition-all duration-300 ${
                      activeIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-8 pb-10 md:px-10">
                      <p className={`text-base md:text-lg font-light leading-relaxed ${
                        activeIndex === idx ? 'text-white/60' : 'text-gray-500'
                      }`}>
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;
