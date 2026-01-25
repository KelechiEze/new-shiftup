import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: '150', label: 'Youths Trained' },
  { value: '6', label: 'Communities Reached' },
  { value: '85%', label: 'Confidence Boost' },
  { value: '100%', label: 'Free Education' },
];

const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#F9F9F9] py-16 md:py-20 px-6 md:px-12 w-full border-b border-gray-100">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item flex flex-col items-center justify-start">
            <span className="text-4xl md:text-5xl lg:text-6xl font-medium text-brand-black mb-3 tracking-tight">
              {stat.value}
            </span>
            <span className="text-xs md:text-sm text-gray-600 font-medium uppercase tracking-wider leading-tight max-w-[100px] md:max-w-[120px]">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;