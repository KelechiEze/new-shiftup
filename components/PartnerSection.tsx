
import React, { useLayoutEffect, useRef, useState } from 'react';
import { User, MessageSquareText, HandCoins, ChevronRight, ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const partnerTypes = [
  {
    icon: User,
    title: "Mentor",
    desc: "To guide, shape, and inspire emerging leaders as they develop the skills and confidence to lead with purpose."
  },
  {
    icon: MessageSquareText,
    title: "Trainer",
    desc: "To guide, shape, and inspire emerging leaders to lead with clarity, character, and purpose."
  },
  {
    icon: HandCoins,
    title: "Sponsorship",
    desc: "To guide, shape, and inspire emerging leaders as they develop the skills and confidence to lead with purpose."
  }
];

const PartnerSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".partner-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out"
      });

      // Cards Animation
      gsap.from(".partner-card-anim", {
        scrollTrigger: {
          trigger: ".partner-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-cream py-20 px-6 md:px-12 w-full">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
          
          {/* Left: Title Area */}
          <div className="partner-header-anim flex flex-col items-start max-w-lg">
            <div className="relative inline-block mb-4">
              <span className="text-sm font-bold uppercase tracking-widest text-brand-black relative z-10 pb-1">
                Partner with Us
              </span>
              <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-brand-black leading-tight tracking-tight">
              Join Our <br /> Partner Network
            </h2>
          </div>

          {/* Right: Description & Button */}
          <div className="partner-header-anim flex flex-col items-start md:items-end gap-8 max-w-md pt-4">
            <div className={`text-gray-400 text-base md:text-lg leading-relaxed md:text-right font-light overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[1000px]' : 'max-h-[80px]'}`}>
              <p className="mb-4">
                Shift Up Africa is dedicated to empowering Young African Graduates with the mindset, tools, and access to succeed.
              </p>
              {isExpanded && (
                <div className="space-y-4">
                  <p>Our network comprises global industry veterans, forward-thinking organizations, and educational visionaries who believe in the potential of Africa's youth.</p>
                  <p>By partnering with us, you join a movement that prioritizes measurable impact over empty rhetoric, ensuring every graduate we touch becomes a world-class contributor.</p>
                </div>
              )}
            </div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="group px-8 py-3 rounded-full bg-brand-yellow text-brand-black text-sm font-bold hover:bg-brand-gold transition-all duration-300 flex items-center gap-2 shadow-lg uppercase tracking-wider"
            >
              {isExpanded ? 'View less' : 'View more'} 
              {isExpanded ? <ChevronUp size={16} /> : <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />}
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="partner-grid grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTypes.map((item, idx) => (
            <div key={idx} className="partner-card-anim bg-white border border-gray-100 p-10 rounded-sm shadow-sm flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-300">
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full bg-[#FEF9C3] flex items-center justify-center mb-6 text-brand-black">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-xl font-bold text-brand-black mb-6">
                {item.title}
              </h3>
              
              <p className="text-gray-500 font-light leading-relaxed text-sm">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnerSection;
