import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const BackgroundBlocks: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate blocks appearing
      gsap.from(".bg-block", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: {
          amount: 0.8,
          from: "random"
        },
        ease: "back.out(1.7)"
      });

      // Continuous floating motion for groups
      gsap.to(".block-group-left", {
        y: 10,
        duration: 3,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

      gsap.to(".block-group-right", {
        y: -15,
        duration: 4,
        yoyo: true,
        repeat: -1,
        ease: "sine.inOut"
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Standard block size to replicate the grid look
  const blockSize = "w-8 h-8 md:w-16 md:h-16";

  return (
    <div ref={containerRef} className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-[80vh]">
      
      {/* Top Left Cluster */}
      <div className="block-group-left absolute top-[10%] left-0 flex flex-col">
        <div className="flex">
            <div className={`bg-[#FDE68A] opacity-60 ${blockSize} bg-block`}></div> {/* Pale */}
            <div className={`bg-[#FCD34D] opacity-80 ${blockSize} bg-block`}></div> {/* Medium */}
            <div className={`bg-[#FACC15] ${blockSize} bg-block`}></div> {/* Strong */}
        </div>
        <div className="flex">
            <div className={`${blockSize}`}></div> {/* Empty spacer */}
            <div className={`bg-[#FEF9C3] opacity-40 ${blockSize} bg-block`}></div>
            <div className={`${blockSize}`}></div>
        </div>
      </div>

      {/* Right Side Cluster (Mid-Upper) */}
      <div className="block-group-right absolute top-[20%] right-0 flex flex-col items-end">
        <div className="flex">
            <div className={`bg-[#FEF3C7] opacity-50 ${blockSize} bg-block`}></div>
            <div className={`bg-[#FDE68A] ${blockSize} bg-block`}></div>
            <div className={`bg-[#FACC15] ${blockSize} bg-block`}></div>
        </div>
         <div className="flex">
            <div className={`${blockSize}`}></div>
            <div className={`${blockSize}`}></div>
            <div className={`bg-[#FEF9C3] opacity-50 ${blockSize} bg-block`}></div>
        </div>
      </div>

      {/* NOTE: Bottom clusters removed to accommodate the new Hero Image Slider vertical bars */}

    </div>
  );
};

export default BackgroundBlocks;