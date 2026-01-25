
import React, { useLayoutEffect, useRef } from 'react';
import { Play, ArrowRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const EventsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.from(".event-header", { y: 30, opacity: 0, duration: 0.8 })
        .from(".event-card", { y: 50, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.4")
        .from(".event-bg-image", { x: 100, opacity: 0, duration: 1 }, "-=1");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  const events = [
    {
      title: "Community Cleanup Day Events",
      img: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop"
    },
    {
      title: "Food Drive For The Homeless",
      img: "https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Fundraising Gala: A Night Of Giving",
      img: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={containerRef} className="bg-[#1A1A1A] pt-48 pb-32 md:pt-64 md:pb-40 relative overflow-hidden">
      
      {/* Decorative Plus */}
      <div className="absolute top-[10%] left-[30%] text-[#7C8D5E] opacity-50 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>

      {/* Right side background image of person */}
      <div className="event-bg-image absolute top-0 right-0 w-1/2 h-full hidden lg:block pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-40 grayscale" 
          alt="Supportive smile"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="event-header mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-yellow"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/60">UPCOMING EVENTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-2xl">
            Stay Up-To-Date With Our Latest Events And Community Initiatives.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map((event, idx) => (
            <div key={idx} className="event-card group bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col h-full">
              {/* Image Area */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={event.img} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  alt={event.title}
                />
                <div className="absolute top-4 left-4 bg-[#7C8D5E] text-white text-[10px] font-bold px-3 py-1 rounded-md uppercase tracking-widest">
                  UPCOMING
                </div>
                {/* Small play overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-lg">
                  <Play size={16} fill="black" />
                </div>
              </div>
              
              {/* Text Area */}
              <div className="p-8 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-[#1A1A1A] mb-4 leading-tight group-hover:text-[#8D5E44] transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-500 text-sm mb-8 leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod.
                </p>
                <button className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#8D5E44] group-hover:gap-4 transition-all">
                  GET REMINDER <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
