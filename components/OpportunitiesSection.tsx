import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const OpportunitiesSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.from(".opp-header", { y: 30, opacity: 0, duration: 0.8 })
        .from(".opp-main-img", { x: -50, opacity: 0, duration: 1 }, "-=0.4")
        .from(".opp-card", { x: 50, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.8");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="opportunities" ref={containerRef} className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-hidden scroll-mt-24">
      
      {/* Texture Background Simulation */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="opp-header grid grid-cols-1 lg:grid-cols-2 gap-8 items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-10 h-[1px] bg-brand-yellow"></div>
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">VOLUNTEER OPPORTUNITIES</span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              Explore Our Diverse Range Of Volunteer Opportunities.
            </h2>
          </div>
          <div className="pb-2">
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-lg">
              We provide opportunities that align with your passion and skill set to create real, lasting change across the continent.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Main Image */}
          <div className="opp-main-img rounded-[2.5rem] overflow-hidden shadow-2xl aspect-[4/3] lg:aspect-[5/4]">
            <img 
              src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Volunteering"
            />
          </div>

          {/* Right: Stacked Cards */}
          <div className="flex flex-col gap-6 lg:pl-12">
            <div className="opp-card bg-brand-yellow p-8 md:p-10 rounded-[2.5rem] text-brand-black shadow-xl transform hover:-translate-x-2 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-4">Cause That Aligns Passion</h3>
              <p className="text-brand-black/80 leading-relaxed">Join a movement where your specific talents are used to solve real-world problems.</p>
            </div>

            <div className="opp-card bg-brand-gold p-10 md:p-12 rounded-[2.5rem] text-brand-black shadow-xl transform hover:-translate-x-4 transition-transform duration-500 scale-105 origin-right">
              <h3 className="text-2xl font-bold mb-4">Build A Brighter Future For All</h3>
              <p className="text-brand-black/80 leading-relaxed">Collaborate with experts and peers to design sustainable solutions for Africa's youth.</p>
            </div>

            <div className="opp-card bg-brand-yellow p-8 md:p-10 rounded-[2.5rem] text-brand-black shadow-xl transform hover:-translate-x-2 transition-transform duration-500">
              <h3 className="text-2xl font-bold mb-4">Contribution Help Others</h3>
              <p className="text-brand-black/80 leading-relaxed">Your contribution directly supports the growth of emerging leaders across the continent.</p>
            </div>
          </div>
        </div>

      </div>

      {/* Decorative dots bottom right */}
      <div className="absolute bottom-10 right-10 text-brand-gold opacity-30 hidden md:block">
        <div className="grid grid-cols-5 gap-2">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="w-1 h-1 rounded-full bg-current"></div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default OpportunitiesSection;