import React, { useLayoutEffect, useRef } from 'react';
import { Play, Check, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ImpactSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.from(".impact-image", { x: -50, opacity: 0, duration: 1 })
        .from(".impact-content > *", { x: 50, opacity: 0, duration: 0.8, stagger: 0.2 }, "-=0.6")
        .from(".impact-stats-bar", { y: 50, opacity: 0, duration: 0.8 }, "-=0.4");

      gsap.to(".impact-deco", {
        y: 10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" ref={containerRef} className="bg-white py-24 md:py-32 px-6 md:px-12 relative overflow-visible scroll-mt-24">
      
      {/* Decorative elements */}
      <div className="impact-deco absolute top-10 right-[40%] text-brand-gold opacity-40 hidden lg:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
          <path d="M12 4V20M4 12H20" />
        </svg>
      </div>
      <div className="absolute top-12 right-[10%] w-12 h-12 rounded-full bg-brand-yellow opacity-80 hidden lg:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        {/* Left: Video Image */}
        <div className="impact-image relative group">
          <div className="w-full aspect-square rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" 
              className="w-full h-full object-cover" 
              alt="Hands together"
            />
          </div>
          {/* Play Button Overlay */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-full shadow-2xl flex items-center justify-center cursor-pointer transition-transform hover:scale-110">
              <div className="w-16 h-16 rounded-full border-2 border-yellow-100 flex items-center justify-center">
                <Play fill="#FACC15" className="text-brand-yellow ml-1" size={24} />
              </div>
            </div>
          </div>
        </div>

        {/* Right: Content */}
        <div className="impact-content flex flex-col">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-[1px] bg-brand-yellow"></div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400">IMPACT STORIES</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight">
            Discover How We're Making A Difference And How You Can Get Involved.
          </h2>

          <p className="text-gray-500 text-lg font-light leading-relaxed mb-8">
            Our stories are written by the lives we touch and the communities we transform. Every effort counts towards a greater future.
          </p>

          <ul className="space-y-4 mb-10">
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <Check size={20} className="text-brand-yellow" /> Community Growth
            </li>
            <li className="flex items-center gap-3 text-gray-700 font-medium">
              <Check size={20} className="text-brand-yellow" /> Sustainable Impact
            </li>
          </ul>

          <button className="self-start bg-brand-yellow hover:bg-brand-gold text-brand-black px-10 h-[56px] rounded-full font-bold tracking-widest text-sm transition-all shadow-lg transform hover:-translate-y-1 uppercase">
            LEARN MORE
          </button>
        </div>
      </div>

      {/* Overlapping Stats Bar */}
      <div className="impact-stats-bar relative z-30 max-w-7xl mx-auto -mb-48 lg:-mb-64">
        <div className="bg-[#1A1A1A] rounded-[2.5rem] p-10 md:p-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-white shadow-2xl">
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-brand-yellow mb-4">10,000<sup>+</sup></span>
            <h4 className="text-xl font-bold mb-2">Volunteer Hours Logged</h4>
            <p className="text-gray-400 text-sm">Empowering communities through dedicated time and skill-sharing.</p>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-brand-yellow mb-4">50,000<sup>+</sup></span>
            <h4 className="text-xl font-bold mb-2">Meals Distributed</h4>
            <p className="text-gray-400 text-sm">Ensuring no one in our focus communities goes hungry.</p>
          </div>
          <div className="flex flex-col">
            <span className="text-5xl font-bold text-brand-yellow mb-4">$100,000<sup>+</sup></span>
            <h4 className="text-xl font-bold mb-2">Funds Raised</h4>
            <p className="text-gray-400 text-sm">Direct investment into education and youth development.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;