
import React, { useLayoutEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PageType } from '../App';

interface CTASectionProps {
  onNavigate?: (page: PageType) => void;
}

gsap.registerPlugin(ScrollTrigger);

const CTASection: React.FC<CTASectionProps> = ({ onNavigate }) => {
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
    <section ref={containerRef} className="relative w-full min-h-[90vh] py-48 md:py-64 flex items-center overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1559027615-cd9419515982?q=80&w=2000&auto=format&fit=crop" 
          alt="Volunteers running" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="cta-content max-w-4xl">
          <h2 className="text-3xl md:text-5xl lg:text-7xl font-extrabold text-white leading-[1] mb-12 tracking-tighter">
            Join Us & Be A Part Of <br className="hidden lg:block" /> Something Meaningful.
          </h2>
          <p className="text-white/70 text-lg md:text-2xl font-light leading-relaxed mb-16 max-w-2xl">
            Shift Up Africa is a movement dedicated to bridging the gap between graduation and career success, transforming talent into world-class leaders.
          </p>
          <button 
            onClick={() => onNavigate?.('programme')}
            className="bg-brand-yellow hover:bg-brand-gold text-brand-black px-16 h-[72px] rounded-full font-bold tracking-[0.2em] text-sm flex items-center gap-4 transition-all transform hover:-translate-y-1 shadow-[0_20px_60px_rgba(0,0,0,0.5)] uppercase active:scale-95"
          >
            JOIN THE COHORT <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
