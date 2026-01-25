import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import gsap from 'gsap';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero-bg-anim", {
        scale: 1.1,
        opacity: 0,
        duration: 2.2,
      })
      .from(".hero-line", {
        scaleX: 0,
        transformOrigin: "left",
        duration: 1.2,
      }, "-=1.5")
      .from(".hero-subtitle-anim", {
        opacity: 0,
        x: -30,
        duration: 1,
      }, "-=1")
      .from(".hero-title-anim", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.15,
      }, "-=0.8")
      .from(".hero-p-anim", {
        opacity: 0,
        y: 30,
        duration: 1,
      }, "-=0.8")
      .from(".hero-btn-anim", {
        x: -30,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
      }, "-=0.6")
      .from(".hero-play-anim", {
        scale: 0,
        opacity: 0,
        rotate: -90,
        duration: 1.5,
        ease: "back.out(1.7)"
      }, "-=1");

    }, heroRef);

    return () => ctx.revert();
  }, []);

  const closeVideo = () => {
    if (!modalRef.current) return;
    
    const tl = gsap.timeline({
      onComplete: () => setIsVideoOpen(false)
    });

    tl.to(".modal-content", {
      scale: 0.9,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in"
    })
    .to(modalRef.current, {
      opacity: 0,
      backdropFilter: 'blur(0px)',
      duration: 0.3,
    }, "-=0.1");
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeVideo();
    };

    if (isVideoOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      
      gsap.fromTo(modalRef.current, 
        { opacity: 0, backdropFilter: 'blur(0px)' }, 
        { opacity: 1, backdropFilter: 'blur(16px)', duration: 0.5, ease: 'power2.out' }
      );
      gsap.fromTo(".modal-content", 
        { scale: 0.85, opacity: 0 }, 
        { scale: 1, opacity: 1, duration: 0.6, delay: 0.2, ease: 'back.out(1.2)' }
      );
    } else {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    }
    
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVideoOpen]);

  // Function to open video modal
  const openVideo = () => {
    setIsVideoOpen(true);
  };

  return (
    <div ref={heroRef} className="relative h-screen w-full flex items-center overflow-hidden bg-brand-black">
      
      {/* Cinematic Full Screen Background */}
      <div className="hero-bg-anim absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=2400&auto=format&fit=crop" 
          alt="African youth community" 
          className="w-full h-full object-cover opacity-50"
        />
        {/* Rich Vignette and Dark Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
        
        {/* Left Side Content */}
        <div className="lg:col-span-8 flex flex-col items-start">
          {/* Subtitle - Pushed downwards as requested */}
          <div className="flex items-center gap-5 mb-8 mt-14 md:mt-20">
            <div className="hero-line w-20 h-[2px] bg-brand-yellow rounded-full"></div>
            <span className="hero-subtitle-anim text-[12px] md:text-[14px] font-extrabold tracking-[0.3em] text-white uppercase opacity-80">
              MAKING A DIFFERENCE
            </span>
          </div>
          
          <div className="overflow-hidden mb-8">
            <h1 className="hero-title-anim text-4xl md:text-6xl lg:text-[5rem] font-extrabold text-white leading-[1.1] tracking-tight max-w-5xl">
              Together We Can <br />
              <span className="text-brand-yellow italic font-serif">Create Positive Change</span> <br />
              In The World.
            </h1>
          </div>

          <p className="hero-p-anim text-lg md:text-xl text-white/70 max-w-xl mb-12 font-light leading-relaxed">
            ShiftUp Africa is a movement dedicated to bridging the gap between graduation and career success, transforming talent into world-class leaders in 100 days.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-10 w-full sm:w-auto">
            <button className="hero-btn-anim w-full sm:w-auto bg-brand-yellow hover:bg-brand-gold text-brand-black px-14 h-[64px] rounded-full font-bold tracking-widest text-sm transition-all shadow-2xl hover:-translate-y-1 active:scale-95 uppercase">
              OUR HELP
            </button>
            <button className="hero-btn-anim group flex items-center gap-4 text-xs font-bold tracking-[0.25em] text-white hover:text-brand-yellow transition-colors uppercase">
              SEE EVENTS
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-3" />
            </button>
          </div>
        </div>

        {/* Play Button - Iconic Yellow Circle */}
        <div className="lg:col-span-4 flex justify-center lg:justify-end items-center mt-12 lg:mt-0">
          <button
            onClick={openVideo}
            className="hero-play-anim relative group cursor-pointer focus:outline-none"
            aria-label="Watch our impact video"
          >
            {/* Pulsing Outer Rings */}
            <div className="absolute inset-0 rounded-full bg-brand-yellow/30 animate-ping"></div>
            
            {/* Design Rings */}
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full border-2 border-white/10 flex items-center justify-center transition-all duration-700 group-hover:border-brand-yellow/30">
               {/* Middle Ring */}
               <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-brand-yellow/60 flex items-center justify-center transition-all duration-700 group-hover:scale-110">
                  {/* Solid White Center with Yellow Icon */}
                  <div className="w-16 h-16 md:w-22 md:h-22 bg-white rounded-full flex items-center justify-center shadow-[0_20px_50px_rgba(0,0,0,0.3)] transition-all duration-500 group-hover:scale-90">
                    <Play fill="#FACC15" className="text-brand-yellow ml-1 w-8 h-8 md:w-10 md:h-10" />
                  </div>
               </div>
            </div>
          </button>
        </div>
      </div>

      {/* Subtle Bottom Elements */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-5 text-white/20">
        <span className="text-[10px] font-bold tracking-[0.6em] uppercase">Scroll</span>
        <div className="w-[1px] h-14 bg-gradient-to-b from-white/30 to-transparent"></div>
      </div>

      {/* Epic Video Overlay Context */}
      {isVideoOpen && (
        <div 
          ref={modalRef}
          onClick={(e) => {
            if (e.target === e.currentTarget) closeVideo();
          }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-6 md:p-12 bg-black/90 backdrop-blur-2xl cursor-pointer"
        >
          {/* Refined, Small Close Button - Positioned to avoid navbar overlap */}
          <button 
            onClick={closeVideo}
            className="absolute top-28 right-8 md:top-32 md:right-16 text-white/50 hover:text-white transition-all p-2 rounded-full hover:bg-white/10 z-[110] border border-white/10 focus:outline-none focus:ring-2 focus:ring-brand-yellow"
            title="Close Video"
            aria-label="Close video"
          >
            <X size={20} className="md:w-5 md:h-5" />
          </button>
          
          {/* Cinematic Video Container */}
          <div className="modal-content relative w-full max-w-5xl aspect-video bg-black rounded-[2.5rem] overflow-hidden shadow-[0_0_150px_rgba(250,204,21,0.2)] border border-white/5 cursor-default">
            <iframe 
              className="w-full h-full"
              src="https://www.youtube.com/embed/vU8dCYocuyI?autoplay=1&mute=0&rel=0&modestbranding=1&showinfo=0" 
              title="ShiftUp Africa - Transforming African Youth Leadership"
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
          </div>
          
          {/* Subtle Branded Glow */}
          <div className="absolute -z-10 w-[50%] h-[50%] bg-brand-yellow/10 rounded-full blur-[180px] pointer-events-none"></div>
          
          {/* Video Info Overlay */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-white/60 text-sm">
            Watch our story • 3:24 min
          </div>
        </div>
      )}

    </div>
  );
};

export default Hero;