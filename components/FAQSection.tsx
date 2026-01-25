import React, { useState, useRef, useLayoutEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const faqData = [
  {
    q: "Who is this program for?",
    a: "This program is designed for ambitious young African graduates who are eager to accelerate their careers, build leadership skills, and make a meaningful impact in their communities."
  },
  {
    q: "Do I need to know my career path before joining?",
    a: "No, you don't. One of the core pillars of the program is helping you gain clarity on your career path through mentorship, self-discovery exercises, and exposure to various industries."
  },
  {
    q: "Is the program online or physical?",
    a: "The program is primarily hybrid, combining virtual learning sessions with optional physical meetups and networking events in select cities to foster community building."
  },
  {
    q: "What is the weekly time commitment?",
    a: "Participants should expect to commit approximately 5-8 hours per week. This includes live sessions, self-paced learning modules, and group projects."
  },
  {
    q: "How much does it cost?",
    a: "We offer various scholarship opportunities and flexible payment plans. Please download the program guide or contact our support team for the most up-to-date pricing information."
  },
  {
    q: "Will I receive a certificate?",
    a: "Yes, upon successful completion of the program requirements, you will be awarded a Certificate of Completion from Shift Up Africa, recognized by our partner organizations."
  },
  {
    q: "Do you help participants get jobs?",
    a: "While we do not guarantee jobs, we provide extensive career support, including resume reviews, interview prep, and direct connections to our network of hiring partners."
  }
];

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleToggle = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Image Container
      gsap.fromTo(".faq-visual-container", 
        { x: -50, autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
          },
          x: 0,
          autoAlpha: 1,
          duration: 1,
          ease: "power3.out"
        }
      );

      // Animate List Items
      gsap.fromTo(".faq-card", 
        { y: 30, autoAlpha: 0 },
        {
          scrollTrigger: {
            trigger: ".faq-grid-wrapper",
            start: "top 80%",
          },
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          clearProps: "transform,opacity,visibility" // Ensure they remain visible after animation
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-cream py-20 px-6 md:px-12 w-full relative z-30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-medium text-black text-center mb-12 md:mb-16 tracking-tight">
          Frequently asked questions
        </h2>

        <div className="faq-grid-wrapper grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          
          {/* Left Column: Image */}
          <div className="faq-visual-container w-full h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl relative order-2 lg:order-1 border-4 border-white">
             <img 
               src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" 
               alt="ShiftUp Africa Group" 
               className="w-full h-full object-cover object-center"
             />
             <div className="absolute inset-0 bg-yellow-400/10 mix-blend-multiply"></div>
          </div>

          {/* Right Column: Accordion List */}
          <div className="flex flex-col gap-4 order-1 lg:order-2 w-full">
            {faqData.map((item, idx) => (
              <div 
                key={idx} 
                className="faq-card bg-white border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
              >
                <button 
                  onClick={() => handleToggle(idx)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none bg-white cursor-pointer group"
                >
                  {/* Explicit text-black to ensure visibility */}
                  <span className={`font-semibold text-base md:text-lg pr-4 transition-colors duration-300 ${activeIndex === idx ? 'text-brand-gold' : 'text-black'}`}>
                    {item.q}
                  </span>
                  
                  <div className={`flex-shrink-0 transition-colors duration-300 ${activeIndex === idx ? 'text-brand-gold' : 'text-gray-400'}`}>
                    {activeIndex === idx ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} className="group-hover:text-brand-black" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${
                    activeIndex === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-5 md:p-6 pt-0 text-gray-700 leading-7 font-normal border-t border-transparent">
                    {item.a}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FAQSection;