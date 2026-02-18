
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const PartnerHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".ph-bg", { scale: 1.1, opacity: 0, duration: 2 })
        .from(".ph-line", { scaleX: 0, transformOrigin: "left", duration: 1 }, "-=1.4")
        .from(".ph-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=1")
        .from(".ph-title", { y: 50, opacity: 0, duration: 1.2, stagger: 0.2 }, "-=0.8")
        .from(".ph-desc", { opacity: 0, y: 30, duration: 1 }, "-=0.8")
        .from(".ph-btn", { scale: 0.8, opacity: 0, duration: 1 }, "-=0.6");
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative h-[80vh] w-full flex items-center overflow-hidden bg-brand-black">
      {/* Cinematic Background */}
      <div className="ph-bg absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=2400&auto=format&fit=crop" 
          alt="Partnership and collaboration" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-20">
        <div className="max-w-3xl">
          <div className="flex items-center gap-5 mb-8">
            <div className="ph-line w-16 h-[2px] bg-brand-yellow rounded-full"></div>
            <span className="ph-subtitle text-[12px] md:text-[14px] font-extrabold tracking-[0.3em] text-white uppercase opacity-80">
              JOIN THE MOVEMENT
            </span>
          </div>
          
          <h1 className="ph-title text-3xl md:text-5xl lg:text-[4rem] font-extrabold text-white leading-[1.05] tracking-tight mb-8">
            Transforming Talent <br />
            <span className="text-brand-yellow">Together.</span>
          </h1>

          <p className="ph-desc text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 max-w-2xl">
            ShiftUp Africa partners with individuals and organisations committed to empowering young Africans with the mindset, skills, and access they need to thrive.
          </p>

          <button className="ph-btn bg-brand-yellow hover:bg-brand-gold text-brand-black px-12 h-[64px] rounded-full font-bold tracking-widest text-sm transition-all shadow-2xl hover:-translate-y-1 active:scale-95 uppercase flex items-center gap-3">
            PARTNER WITH US <ArrowRight size={18} />
          </button>
        </div>
      </div>

      {/* Decorative Blocks */}
      <div className="absolute bottom-0 right-0 hidden lg:grid grid-cols-2 gap-0 z-10 opacity-30">
        <div className="w-24 h-24 bg-[#FEF9C3]"></div>
        <div className="w-24 h-24 bg-brand-yellow"></div>
      </div>
    </div>
  );
};

export default PartnerHero;
