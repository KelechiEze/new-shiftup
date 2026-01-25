import React, { useLayoutEffect, useRef } from 'react';
import { Flag, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.from(".about-img-main", { x: -60, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".about-card-overlay", { y: 40, opacity: 0, duration: 0.8, ease: "power3.out" }, "-=0.6")
        .from(".about-content-text", { x: 60, opacity: 0, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=0.8")
        .from(".about-img-small", { scale: 0.8, opacity: 0, duration: 0.8, ease: "back.out(1.7)" }, "-=0.6");

      // Floating squiggles/elements
      gsap.to(".about-deco", {
        y: 15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about-mission" ref={containerRef} className="bg-white py-24 md:py-32 px-6 md:px-12 w-full overflow-hidden relative scroll-mt-24">
      
      {/* Decorative Cross Top Right */}
      <div className="about-deco absolute top-10 left-[55%] text-brand-gold opacity-50 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        
        {/* Left Column: Main Image & Overlay Card */}
        <div className="relative">
          <div className="about-img-main relative w-full aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop" 
              alt="African youth professionals" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Brand Yellow Overlay Card */}
          <div className="about-card-overlay absolute -bottom-8 -left-4 md:-left-8 bg-brand-yellow text-brand-black p-8 md:p-10 rounded-[2rem] shadow-2xl max-w-[280px] md:max-w-[320px] z-10">
            <div className="mb-4">
              <Flag size={32} className="text-brand-black/80" />
            </div>
            <h4 className="text-xl md:text-2xl font-bold mb-3 leading-tight">
              We're Making A <br /> Difference
            </h4>
            <p className="text-brand-black/70 text-sm md:text-base font-light leading-relaxed">
              Equipping young Africans with the mindset and tools needed to thrive and lead in a changing world.
            </p>
          </div>
        </div>

        {/* Right Column: Content */}
        <div className="flex flex-col">
          {/* Subtitle */}
          <div className="about-content-text flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-yellow"></div>
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400">
              ABOUT US
            </span>
          </div>

          {/* Heading */}
          <h2 className="about-content-text text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight">
            Learn More About Our Mission, Values, And The Impact We've Made.
          </h2>

          <p className="about-content-text text-gray-500 text-lg md:text-xl font-light leading-relaxed mb-12">
            Shift Up Africa is a movement dedicated to bridging the gap between graduation and career success, transforming talent into world-class leaders.
          </p>

          {/* Stats & Small Image Row */}
          <div className="flex flex-col md:flex-row items-center gap-10 mb-12">
            <div className="about-content-text flex flex-col items-start min-w-[200px]">
              <div className="flex items-baseline">
                <span className="text-5xl md:text-6xl font-bold text-brand-yellow">365</span>
                <span className="text-3xl font-bold text-brand-yellow ml-1">+</span>
              </div>
              <p className="text-[#1A1A1A] font-bold text-lg mt-2 mb-2">Charity Events Done</p>
              <p className="text-gray-400 text-sm leading-relaxed max-w-[200px]">
                Providing access to opportunities many never imagined possible.
              </p>
            </div>

            <div className="about-img-small w-full md:w-auto flex-grow h-48 rounded-[2rem] overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=800&auto=format&fit=crop" 
                alt="Volunteers packing boxes" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Button */}
          <div className="about-content-text">
            <button className="bg-brand-yellow hover:bg-brand-gold text-brand-black px-10 h-[56px] rounded-full font-bold tracking-widest text-sm transition-all transform hover:-translate-y-1 shadow-lg uppercase">
              LEARN MORE
            </button>
          </div>
        </div>

      </div>

      {/* Decorative Squiggle Bottom Right */}
      <div className="about-deco absolute bottom-20 right-[15%] text-brand-gold opacity-30 hidden lg:block">
        <svg width="80" height="40" viewBox="0 0 80 40" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M0 20C10 5 20 35 30 20C40 5 50 35 60 20C70 5 80 35 90 20" strokeDasharray="4 4" />
        </svg>
      </div>

    </section>
  );
};

export default AboutSection;