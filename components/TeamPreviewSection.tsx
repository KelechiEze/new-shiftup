
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageType } from '../App';

interface TeamPreviewSectionProps {
  onNavigate?: (page: PageType, sectionId?: string) => void;
}

gsap.registerPlugin(ScrollTrigger);

const TeamPreviewSection: React.FC<TeamPreviewSectionProps> = ({ onNavigate }) => {
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
    <section ref={containerRef} className="relative w-full min-h-screen py-48 md:py-64 flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2000&auto=format&fit=crop" 
          alt="Volunteer smiling" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-0 md:px-12 flex">
        {/* Dark Sidebar Style Overlay */}
        <div className="team-preview-content w-full md:w-3/5 lg:w-1/2 bg-black/90 backdrop-blur-2xl py-24 md:py-40 px-10 md:px-24 flex flex-col justify-center text-white min-h-[700px] border-r border-white/5 shadow-2xl">
          <div className="flex items-center gap-6 mb-10">
            <div className="w-16 h-[2px] bg-brand-yellow"></div>
            <span className="text-sm font-bold tracking-[0.4em] uppercase text-brand-yellow">PEOPLE OF PURPOSE</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.05] mb-12 tracking-tighter">
            Get To Know The <br /> Passionate Hearts <br /> Behind Our Work.
          </h2>

          <p className="text-white/50 text-xl font-light leading-relaxed mb-16 max-w-md">
            Our team is comprised of dedicated experts and volunteers who are passionate about empowering the next generation of African leaders.
          </p>

          <button 
            onClick={() => onNavigate?.('why-shiftup', 'team-section')}
            className="self-start group bg-brand-yellow hover:bg-brand-gold text-brand-black px-12 h-[64px] rounded-full font-bold tracking-widest text-xs flex items-center gap-4 transition-all shadow-2xl uppercase"
          >
            MEET THE TEAM <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamPreviewSection;
