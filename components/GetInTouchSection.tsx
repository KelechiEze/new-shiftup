import React from 'react';
import { ArrowRight } from 'lucide-react';

const GetInTouchSection: React.FC = () => {
  return (
    <section className="relative w-full bg-cream pt-12 pb-24 md:py-24 overflow-hidden">
      
      {/* Decorative Blocks - Left Side */}
      <div className="absolute top-0 left-0 h-full w-[25%] hidden md:block">
         <div className="w-full h-[60%] bg-[#FEF9C3] opacity-60"></div> {/* Pale */}
         <div className="w-full h-[40%] flex">
            <div className="w-1/2 h-full bg-[#FEF08A]"></div> {/* Medium */}
            <div className="w-1/2 h-full bg-[#FDE68A] opacity-50"></div>
         </div>
      </div>
      
      {/* Mobile background adjustment to simulate the look */}
      <div className="absolute top-0 left-0 w-[80px] h-[150px] bg-[#FEF08A] md:hidden z-0"></div>

      <div className="relative w-full max-w-[1400px] mx-auto px-0 md:px-12 flex items-center justify-center z-10">
        
        {/* Main Black Box Container */}
        <div className="w-full md:w-[90%] bg-black py-20 px-8 md:px-24 flex flex-col items-center justify-center text-center relative shadow-2xl">
            
            {/* Small yellow accent on the left edge of black box (visible in image) */}
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-[#FACC15] hidden md:block transform translate-y-1/2 -translate-x-1/2 z-20"></div>

            <h2 className="text-4xl md:text-5xl font-medium text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-400 text-sm md:text-base mb-10 font-light tracking-wide">
              Let's build the future of Young Africans Graduates together.
            </p>
            
            <button className="bg-brand-yellow text-brand-black px-8 py-3 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-brand-gold transition-colors duration-300 shadow-xl uppercase tracking-widest">
              Support now <ArrowRight size={16} />
            </button>
        </div>

      </div>

      {/* Decorative Blocks - Right Side */}
      <div className="absolute bottom-0 right-0 h-1/2 w-[15%] hidden md:flex flex-col justify-end items-end z-0">
         <div className="w-full h-1/2 bg-white"></div>
         <div className="w-full h-1/2 bg-[#FACC15]"></div> {/* Bold Yellow */}
      </div>

    </section>
  );
};

export default GetInTouchSection;