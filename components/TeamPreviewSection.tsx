import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamPreviewSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".team-preview-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        },
        x: -50,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[75vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop" 
          alt="Volunteer smiling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-0 md:px-12 flex">
        {/* Dark Sidebar Style Overlay */}
        <div className="team-preview-content w-full md:w-1/2 bg-black/80 backdrop-blur-md py-16 md:py-24 px-8 md:px-16 flex flex-col justify-center text-white min-h-[500px]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-yellow"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">MEET THE TEAM</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold text-white leading-tight mb-8 tracking-tight">
            Get To Know The <br /> Passionate Individuals <br /> Behind Organization.
          </h2>

          <p className="text-white/60 text-lg font-light leading-relaxed mb-10 max-w-md">
            Our team is comprised of dedicated experts and volunteers who are passionate about empowering the next generation of African leaders.
          </p>

          <button className="self-start bg-brand-yellow hover:bg-brand-gold text-brand-black px-8 h-[56px] rounded-full font-bold tracking-widest text-xs flex items-center gap-2 transition-all shadow-xl uppercase">
            OUR VOLUNTEERS <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreviewSection;