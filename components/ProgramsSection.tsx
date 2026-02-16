
import React, { useLayoutEffect, useRef, useState } from 'react';
import { ChevronRight, ChevronUp } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ProgramsSectionProps {
  hideHeader?: boolean;
}

const ProgramsSection: React.FC<ProgramsSectionProps> = ({ hideHeader = false }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Header only if visible
      if (!hideHeader) {
        gsap.from(".prog-header", {
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
          y: 30,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out"
        });
      }

      // Animate Columns
      gsap.from(".prog-col", {
        scrollTrigger: {
          trigger: ".prog-grid",
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [hideHeader]);

  return (
    <section ref={sectionRef} className={`bg-cream px-6 md:px-12 w-full overflow-hidden ${hideHeader ? 'pb-16 md:pb-24' : 'py-16 md:py-24'}`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section - Conditionally Rendered */}
        {!hideHeader && (
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 md:gap-10 mb-12 md:mb-20">
            <div className="prog-header flex flex-col items-start max-w-xl">
              <div className="relative inline-block mb-4">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-black relative z-10 pb-1">
                  SU Africa Programmes
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
              </div>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-bold text-brand-black leading-tight tracking-tight">
                Most Popular <br /> Programs
              </h2>
            </div>

            <div className="prog-header flex flex-col items-start gap-6 md:gap-8 max-w-md">
              <div className={`text-gray-500 text-base md:text-lg leading-relaxed text-left font-light transition-all duration-500 overflow-hidden ${isExpanded ? 'max-h-[1000px]' : 'max-h-[80px]'}`}>
                <p className="mb-4">
                  Shift Up Africa empowers young graduates with the mindset, skills, and practical exposure needed to thrive in today’s workplace.
                </p>
                {isExpanded && (
                  <div className="space-y-4">
                    <p>Our methodology focuses on behavioral competencies that matter most in world-class organizations: execution, curiosity, and high-performance habits.</p>
                    <p>Through our 100-day sprints, we guide participants from a state of uncertainty to professional clarity and institutional readiness.</p>
                  </div>
                )}
              </div>
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="group px-8 py-3 rounded-full border border-gray-400 text-sm font-medium text-brand-black hover:bg-black hover:text-white hover:border-black transition-all duration-300 flex items-center gap-2"
              >
                {isExpanded ? 'View less' : 'View more'}
                {isExpanded ? <ChevronUp size={16} /> : <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </button>
            </div>
          </div>
        )}

        {/* Content Grid / Slider */}
        <div className="prog-grid flex md:grid md:grid-cols-3 gap-5 md:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
          
          {/* Card 1: SUA Graduate Launchpad (Yellow Bottom) */}
          <div className="prog-col min-w-[85vw] md:min-w-0 snap-center flex flex-col gap-4 md:gap-6 h-auto">
            <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=800&auto=format&fit=crop" 
                 alt="Notebook and Laptop" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="flex-grow bg-brand-yellow p-6 md:p-8 rounded-xl shadow-sm flex flex-col justify-center items-start min-h-[180px] md:min-h-[220px]">
              <h3 className="text-xl md:text-2xl font-bold text-brand-black mb-3">
                SUA Graduate Launchpad
              </h3>
              <p className="text-brand-black/80 font-medium leading-relaxed text-sm md:text-base">
                Career clarity, mindset, and workplace readiness for young graduates.
              </p>
            </div>
          </div>

          {/* Card 2: Graduate Accelerator (Black Top) */}
          <div className="prog-col min-w-[85vw] md:min-w-0 snap-center flex flex-col-reverse md:flex-col gap-4 md:gap-6 h-auto">
            <div className="flex-grow bg-black p-6 md:p-8 rounded-xl shadow-sm flex flex-col justify-center items-start min-h-[180px] md:min-h-[220px]">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 leading-tight">
                Graduate <br /> Accelerator
              </h3>
              <p className="text-gray-400 font-medium leading-relaxed text-sm md:text-base">
                Behavioural competencies and performing your best work.
              </p>
            </div>
            <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1551847677-dc82d764e1eb?q=80&w=800&auto=format&fit=crop" 
                 alt="Man holding paper plane" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
          </div>

          {/* Card 3: Specialized Tracks (Yellow Bottom) */}
          <div className="prog-col min-w-[85vw] md:min-w-0 snap-center flex flex-col gap-4 md:gap-6 h-auto">
            <div className="relative w-full h-[280px] md:h-[320px] overflow-hidden rounded-xl shadow-sm">
               <img 
                 src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop" 
                 alt="Agile Presentation" 
                 className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
               />
            </div>
            <div className="flex-grow bg-brand-yellow p-6 md:p-8 rounded-xl shadow-sm flex flex-col justify-center items-start min-h-[180px] md:min-h-[220px]">
              <h3 className="text-xl md:text-2xl font-bold text-brand-black leading-tight mb-3">
                Agile and project management foundations
              </h3>
               <p className="text-brand-black/80 font-medium leading-relaxed text-sm md:text-base">
                Specialized tracks for modern professionals.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ProgramsSection;
