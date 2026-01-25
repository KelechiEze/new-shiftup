
import React, { useLayoutEffect, useRef } from 'react';
import { Binoculars, Target } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyShiftUpVisionMission: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".vm-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#FFFBE6] py-20 px-6 md:px-12 w-full border-t border-gray-100/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 lg:gap-32">
        
        {/* Our Vision */}
        <div className="vm-card flex flex-col items-start">
          <div className="mb-6 text-brand-black">
            {/* Using Binoculars icon to match the 'looking forward' icon in design */}
            <Binoculars size={48} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-gray-500 font-bold text-lg uppercase tracking-wide mb-6">
            Our Vision
          </h3>
          
          <p className="text-gray-500 font-light leading-relaxed text-lg md:text-xl">
            An Africa where young people are grounded in identity, excellent in execution, purpose-driven in leadership, and confident to take their place in the world.
          </p>
        </div>

        {/* Our Mission */}
        <div className="vm-card flex flex-col items-start">
          <div className="mb-6 text-brand-black">
            {/* Using Target icon to match the 'goal/mission' icon in design */}
            <Target size={48} strokeWidth={1.5} />
          </div>
          
          <h3 className="text-gray-500 font-bold text-lg uppercase tracking-wide mb-6">
            Our Mission
          </h3>
          
          <p className="text-gray-500 font-light leading-relaxed text-lg md:text-xl">
            To equip young African graduates with the mindset, tools, and access they need to build world-class careers, rise into leadership, and live fulfilling, meaningful lives.
          </p>
        </div>

      </div>
    </section>
  );
};

export default WhyShiftUpVisionMission;
