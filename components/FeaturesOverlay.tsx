import React, { useLayoutEffect, useRef } from 'react';
import { Users, Calendar, Heart, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

const FeaturesOverlay: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-card", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const cards = [
    {
      title: "Diverse Volunteer",
      desc: "Empowering communities through inclusive and diverse volunteer programs that drive real change.",
      image: "https://images.unsplash.com/photo-1559027615-cd9419515982?q=80&w=800&auto=format&fit=crop",
      icon: Users,
      targetId: "opportunities"
    },
    {
      title: "Flexible Scheduling Options",
      desc: "We understand your time is valuable. Join us at your convenience with our flexible engagement models.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
      icon: Calendar,
      targetId: "about-mission"
    },
    {
      title: "Impactful Social Initiatives",
      desc: "Our initiatives are designed to create lasting social impact and build a sustainable future for all.",
      bg: "bg-[#222222]",
      icon: Heart,
      targetId: "impact"
    }
  ];

  return (
    <div ref={containerRef} className="relative z-30 w-full max-w-7xl mx-auto px-6 -mt-4 md:-mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {cards.map((card, idx) => (
          <div 
            key={idx} 
            className={`feature-card group relative flex flex-col h-full min-h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 hover:-translate-y-2 ${card.bg || 'bg-black'}`}
          >
            {/* Background Image for first two cards */}
            {card.image && (
              <div className="absolute inset-0 z-0">
                <img src={card.image} alt={card.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/40"></div>
              </div>
            )}

            {/* Content Container */}
            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8 text-white flex-grow">
              {/* Icon Overlay Circle */}
              <div className="mb-8 p-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm">
                <card.icon size={40} strokeWidth={1.5} className="text-white" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-4 tracking-tight leading-tight">
                {card.title}
              </h3>

              <p className="text-sm md:text-base text-white/80 mb-8 font-light leading-relaxed max-w-[280px]">
                {card.desc}
              </p>

              <button 
                onClick={() => scrollToSection(card.targetId)}
                className="mt-auto bg-brand-yellow hover:bg-brand-gold text-brand-black px-8 py-3 rounded-full flex items-center gap-2 font-bold text-sm tracking-widest uppercase transition-all shadow-lg active:scale-95"
              >
                LEARN MORE
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesOverlay;