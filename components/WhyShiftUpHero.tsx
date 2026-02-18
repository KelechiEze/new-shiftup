
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const WhyShiftUpHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".why-hero-text", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out"
      });
      
      gsap.from(".why-hero-image", {
        scale: 1.1,
        duration: 1.5,
        ease: "power2.out"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Using a group image that resembles the description (students holding signs/celebrating)
  // Since I cannot access the exact uploaded file URL, I am using a high-quality Unsplash representative.
  const heroImage = "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2000&auto=format&fit=crop"; 

  return (
    <div ref={containerRef} className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img 
          src={heroImage} 
          alt="ShiftUp Africa Community Group" 
          className="why-hero-image w-full h-full object-cover opacity-70"
        />
        {/* Gradient Overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
      </div>

      {/* Text Content Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end items-center pb-16 md:pb-24 px-6 text-center z-10">
        <h1 className="why-hero-text text-2xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4">
          Why ShiftUp?
        </h1>
        <p className="why-hero-text text-white/90 text-lg md:text-xl font-light max-w-2xl">
          Because talent is evenly distributed, but opportunity is not.
        </p>
      </div>
    </div>
  );
};

export default WhyShiftUpHero;
