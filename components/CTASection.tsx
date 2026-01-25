import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CTASection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".cta-content", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 60,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-[60vh] md:h-[75vh] flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop" 
          alt="Volunteers running" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="cta-content max-w-2xl">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-8 tracking-tight">
            Join Us & Be A Part Of <br className="hidden md:block" /> Something Meaningful.
          </h2>
          <p className="text-white/70 text-lg md:text-xl font-light leading-relaxed mb-10 max-w-xl">
            Shift Up Africa is a movement dedicated to bridging the gap between graduation and career success, transforming talent into world-class leaders.
          </p>
          <button className="bg-brand-yellow hover:bg-brand-gold text-brand-black px-10 h-[60px] rounded-full font-bold tracking-widest text-sm flex items-center gap-3 transition-all transform hover:-translate-y-1 shadow-2xl uppercase">
            JOIN NOW <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;