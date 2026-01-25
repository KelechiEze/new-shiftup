import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const allTestimonials = [
  {
    id: 1,
    text: "ShiftUp Africa gave me the clarity I needed to navigate my career path. The 100-day journey was truly transformational for my mindset.",
    author: "Mr. John Doe",
    role: "CHARITY RECIPIENT",
    avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 2,
    text: "The community support and mentorship provided are world-class. I feel more confident in my professional abilities than ever before.",
    author: "Jane Smith",
    role: "PROGRAMME GRADUATE",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 3,
    text: "A life of great possibilities indeed! The execution-focused approach helped me secure my dream job within months of graduating.",
    author: "Michael Obi",
    role: "ALUMNI",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 4,
    text: "Bridging the gap between school and work is a challenge ShiftUp Africa solves perfectly. The workplace readiness modules are invaluable.",
    author: "Sarah Ahmed",
    role: "TRAINEE",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 5,
    text: "Empowering young Africans with the right tools is the mission, and they are doing it exceptionally well. I am proud to be a beneficiary.",
    author: "David Mensah",
    role: "COMMUNITY MEMBER",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=150&auto=format&fit=crop"
  },
  {
    id: 6,
    text: "The mentorship I received was pivotal. It wasn't just about technical skills, but about building the character required for leadership.",
    author: "Chioma Okoro",
    role: "SUCCESS STORY",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=150&auto=format&fit=crop"
  }
];

const TestimonialsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleTestimonials, setVisibleTestimonials] = useState([allTestimonials[0], allTestimonials[1]]);

  // Carousel Logic with Slide Out / Slide In
  useEffect(() => {
    const interval = setInterval(() => {
      const tl = gsap.timeline();
      
      // 1. Slide OUT to the Left
      tl.to(".testi-card-fixed", {
        x: -150,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.in",
        onComplete: () => {
          // 2. Update State while cards are invisible/off-screen
          setCurrentIndex((prev) => {
            const nextIdx = (prev + 2) % allTestimonials.length;
            const nextVisible = [
              allTestimonials[nextIdx],
              allTestimonials[(nextIdx + 1) % allTestimonials.length]
            ];
            setVisibleTestimonials(nextVisible);
            return nextIdx;
          });
        }
      });

      // 3. Slide IN from the Right
      tl.fromTo(".testi-card-fixed", 
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out" }
      );

    }, 6000); // 6 seconds for each slide

    return () => clearInterval(interval);
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
        }
      });

      tl.from(".testi-img-main", { x: -60, opacity: 0, duration: 1, ease: "power3.out" })
        .from(".testi-text-content > *", { y: 30, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.6")
        .from(".testi-card-fixed", { y: 40, opacity: 0, duration: 0.8, stagger: 0.2, ease: "power3.out" }, "-=0.4")
        .from(".testi-deco-svg", { scale: 0, opacity: 0, duration: 0.6, stagger: 0.2, ease: "back.out(1.7)" }, "-=0.4");

    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="bg-white py-24 md:py-32 px-6 md:px-12 w-full relative overflow-hidden">
      
      {/* Decorative Icons */}
      <div className="testi-deco-svg absolute top-[8%] left-[60%] text-[#7C8D5E] z-10 hidden md:block">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4">
          <path d="M12 6V18M6 12H18" />
        </svg>
      </div>
      <div className="testi-deco-svg absolute top-[12%] right-[20%] w-10 h-10 rounded-full bg-[#8D5E44]/80 z-10 hidden md:block"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start relative pb-24 md:pb-32">
        
        {/* Left Side: Main Image */}
        <div className="testi-img-main relative">
          <div className="w-full aspect-[4/5] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
            <img 
              src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop" 
              alt="Person holding donation box" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side: Text Content */}
        <div className="testi-text-content flex flex-col pt-4 md:pt-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-[1.5px] bg-[#8D5E44]"></div>
            <span className="text-[10px] md:text-[12px] font-bold tracking-[0.2em] uppercase text-gray-400">
              STORIES OF CHANGE
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-[#1A1A1A] leading-[1.1] mb-8 tracking-tight max-w-lg">
            Read Inspiring Stories Of Individuals And Communities.
          </h2>

          <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed max-w-md mb-12">
            Every career transformed and every life touched is a testament to the power of community and growth. Here are some of the voices from our ecosystem.
          </p>
        </div>

        {/* Sliding Testimonial Cards Overlay */}
        <div 
          ref={cardsContainerRef}
          className="lg:absolute -bottom-16 right-0 w-full lg:w-[85%] grid grid-cols-1 md:grid-cols-2 gap-8 z-20"
        >
          {visibleTestimonials.map((testi, idx) => (
            <div 
              key={`${testi.id}-${currentIndex}-${idx}`} 
              className="testi-card-fixed bg-white/95 backdrop-blur-md p-8 md:p-10 rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,0,0,0.08)] flex flex-col relative border border-gray-50 h-full min-h-[300px] transform-gpu"
            >
              <p className="italic text-gray-400 font-medium text-sm md:text-base leading-relaxed mb-10">
                "{testi.text}"
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                  <img src={testi.avatar} alt={testi.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-[#1A1A1A] text-sm md:text-base">{testi.author}</h4>
                  <p className="text-[10px] md:text-[11px] font-bold tracking-widest text-[#8D5E44] uppercase">{testi.role}</p>
                </div>
              </div>

              {/* Large quote icon overlay */}
              <div className="absolute bottom-6 right-8 text-gray-100 pointer-events-none opacity-50">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017V14C19.017 11.7909 17.2261 10 15.017 10V8C18.3307 8 21.017 10.6863 21.017 14V21H14.017ZM3.01697 21L3.01697 18C3.01697 16.8954 3.91241 16 5.01697 16H8.01697V14C8.01697 11.7909 6.2261 10 4.01697 10V8C7.33068 8 10.017 10.6863 10.017 14V21H3.01697Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="testi-deco-svg absolute bottom-8 right-[15%] text-[#8D5E44]/40 z-10 hidden lg:block">
        <svg width="100" height="30" viewBox="0 0 100 30" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          <path d="M5 25C15 5 25 25 35 5C45 25 55 5 65 25C75 5 85 25 95 5" />
        </svg>
      </div>

    </section>
  );
};

export default TestimonialsSection;