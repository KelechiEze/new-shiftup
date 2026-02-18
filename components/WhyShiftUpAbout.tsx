
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WhyShiftUpAbout: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for left column elements
      gsap.from(".about-left-anim", {
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Animation for right column elements
      gsap.from(".about-right-anim", {
        scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        stagger: 0.2,
        ease: "power2.out"
      });
      
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-20 md:py-32 px-6 md:px-12 w-full relative">
      
      {/* Decorative Yellow Blocks - Bottom Left */}
      {/* Replicating the pixel-style grid from the design corner */}
      <div className="absolute bottom-0 left-0 hidden md:grid grid-cols-2 gap-0 z-10">
         <div className="w-16 h-16 bg-transparent"></div>
         <div className="w-16 h-16 bg-[#FEF08A]"></div> {/* Light Yellow */}
         <div className="w-16 h-16 bg-[#FEF9C3]"></div> {/* Pale Yellow */}
         <div className="w-16 h-16 bg-[#FACC15]"></div> {/* Brand Yellow */}
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
        
        {/* LEFT COLUMN */}
        <div className="flex flex-col w-full">
            {/* Label */}
            <div className="about-left-anim relative inline-block mb-6 md:mb-8 self-start">
                <span className="text-sm font-bold uppercase tracking-widest text-brand-black relative z-10 pb-1 block">
                  About Us
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
            </div>

            {/* Main Heading */}
            <h2 className="about-left-anim text-2xl md:text-3xl lg:text-[2.5rem] font-bold text-brand-black leading-[1.1] mb-12">
                Africa’s greatest <br />
                resource is her <br />
                people.
            </h2>

            {/* Image Container */}
            <div className="about-left-anim w-full h-[400px] md:h-[500px] rounded-sm overflow-hidden shadow-xl relative mt-4 group">
                {/* Image matching the vibe of 'Community' and 'Hugging' */}
                <img 
                   src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop"
                   alt="ShiftUp Africa Community Hug"
                   className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
                />
            </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col pt-4 lg:pt-24">
            {/* Intro Paragraph 1 */}
            <p className="about-right-anim text-gray-500 text-base md:text-lg leading-relaxed mb-6 font-light">
                <span className="font-bold text-gray-800">ShiftUp Africa</span> is a movement committed to equipping young Africans with the mindset, tools, and access they need to build successful careers and meaningful lives.
            </p>

            {/* Intro Paragraph 2 */}
            <p className="about-right-anim text-gray-500 text-base md:text-lg leading-relaxed mb-12 font-light">
                We bridge the gap between education and real-world readiness; transforming young graduates into confident, competent, purpose-driven leaders.
            </p>

            {/* Section: Our Journey */}
            <div className="about-right-anim mb-10">
                <h3 className="text-xl font-bold text-gray-800 mb-3">Our Journey</h3>
                <p className="text-gray-500 text-base leading-relaxed font-light">
                    Founded in 2022, ShiftUp Africa started as a passionate initiative to empower young graduates with clarity and confidence. Now, we aim to impact 5 million young Africans in five years through innovative programs and partnerships.
                </p>
            </div>

            {/* Section: The Challenge */}
            <div className="about-right-anim">
                <h3 className="text-xl font-bold text-gray-800 mb-3">The Challenge</h3>
                <p className="text-gray-500 text-base leading-relaxed font-light">
                    Many graduates leave school lacking the clarity and tools for real-world success. This includes gaps in identity, mindset, exposure, support, and structure. ShiftUp Africa addresses these issues with a comprehensive approach that builds identity, strengthens mindset, enhances skills, and broadens access.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
};

export default WhyShiftUpAbout;
