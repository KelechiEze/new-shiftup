
import React, { useState, useEffect, useRef } from 'react';
import { X, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import gsap from 'gsap';

interface ProgrammeRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
  programImage: string;
}

const ProgrammeRegistrationModal: React.FC<ProgrammeRegistrationModalProps> = ({ isOpen, onClose, programTitle, programImage }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const contentSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
      setIsSuccess(false);
      setIsSubmitting(false);

      const tl = gsap.timeline();
      tl.to(overlayRef.current, { 
        display: 'block', 
        opacity: 1, 
        duration: 0.4 
      })
      .fromTo(modalRef.current, 
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" },
        "-=0.2"
      )
      .fromTo(contentSideRef.current, 
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(".reg-field", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.05, duration: 0.5, ease: "power2.out" },
        "-=0.6"
      );
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-active');
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { y: 100, opacity: 0, scale: 0.95, duration: 0.4, ease: "power4.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.3, display: 'none' }, "-=0.2");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      gsap.to(".reg-form-wrap", {
        opacity: 0,
        y: -30,
        duration: 0.5,
        onComplete: () => setIsSuccess(true)
      });
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-12 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Immersive Overlay */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-brand-black/95 backdrop-blur-3xl opacity-0 hidden"
        onClick={handleClose}
      ></div>

      {/* Cinematic Modal Shell */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-7xl bg-white rounded-[2rem] md:rounded-[3.5rem] shadow-[0_50px_200px_rgba(0,0,0,0.7)] flex flex-col lg:flex-row h-full max-h-[90vh] lg:max-h-[850px] opacity-0 overflow-hidden"
      >
        {/* Left Side: Dynamic Contextual Image */}
        <div ref={contentSideRef} className="hidden lg:flex lg:w-[40%] bg-brand-yellow relative flex-col justify-between p-12 lg:p-16">
           <div className="absolute inset-0 z-0 overflow-hidden">
              <img 
                src={programImage || "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"} 
                alt={programTitle} 
                className="w-full h-full object-cover mix-blend-multiply opacity-20 grayscale scale-110"
              />
           </div>
           
           <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                 <Sparkles className="text-brand-black" size={24} />
                 <span className="text-[10px] font-black tracking-[0.5em] uppercase text-brand-black">The Launchpad</span>
              </div>
              <h2 className="text-4xl lg:text-5xl font-serif italic text-brand-black leading-tight mb-8">
                Tomorrow <br /> belongs to <br /> the prepared.
              </h2>
              <div className="w-24 h-1.5 bg-brand-black rounded-full"></div>
           </div>

           <div className="relative z-10 bg-white/20 backdrop-blur-xl p-8 rounded-[2rem] border border-white/40">
              <p className="text-brand-black text-lg font-medium leading-relaxed italic">
                "Apply for <span className="font-bold underline">{programTitle}</span>. It is the bridge between who you are and who you are destined to be."
              </p>
           </div>
        </div>

        {/* Right Side: Interactive Registration */}
        <div className="flex-1 bg-white flex flex-col relative min-h-0 overflow-hidden">
          {!isSuccess ? (
            <div className="flex-1 flex flex-col reg-form-wrap min-h-0">
              {/* Header */}
              <div className="p-8 md:p-12 lg:p-16 flex justify-between items-start border-b border-gray-100 flex-shrink-0">
                <div>
                  <h3 className="text-brand-black text-2xl md:text-3xl font-extrabold tracking-tighter mb-2">Secure Your Spot</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-brand-yellow"></span>
                    <p className="text-brand-black/60 text-xs md:text-sm font-bold uppercase tracking-widest">{programTitle}</p>
                  </div>
                </div>
                <button 
                  onClick={handleClose}
                  className="p-3 md:p-4 rounded-full bg-gray-50 text-gray-500 hover:bg-brand-black hover:text-white transition-all duration-300"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Scrollable Registration Form */}
              <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12 lg:p-16 bg-gray-50/30">
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="reg-field group">
                    <label className="text-[11px] font-black text-brand-black/70 uppercase tracking-[0.3em] mb-2 block group-focus-within:text-brand-gold transition-colors">Your Professional Identity</label>
                    <input 
                      required 
                      type="text" 
                      placeholder="Enter full legal name" 
                      className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-lg md:text-xl font-bold text-brand-black placeholder:text-gray-400 focus:border-brand-yellow outline-none transition-all"
                    />
                  </div>

                  <div className="reg-field group">
                    <label className="text-[11px] font-black text-brand-black/70 uppercase tracking-[0.3em] mb-2 block group-focus-within:text-brand-yellow transition-colors">Digital Contact</label>
                    <input 
                      required 
                      type="email" 
                      placeholder="your@email.com" 
                      className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-lg md:text-xl font-bold text-brand-black placeholder:text-gray-400 focus:border-brand-yellow outline-none transition-all"
                    />
                  </div>

                  <div className="reg-field group">
                    <label className="text-[11px] font-black text-brand-black/70 uppercase tracking-[0.3em] mb-2 block group-focus-within:text-brand-yellow transition-colors">Manifesto of Intent</label>
                    <textarea 
                      required 
                      rows={2} 
                      placeholder="What does success look like to you?" 
                      className="w-full bg-transparent border-b-2 border-gray-200 py-4 text-lg md:text-xl font-bold text-brand-black placeholder:text-gray-400 focus:border-brand-yellow outline-none transition-all resize-none"
                    ></textarea>
                  </div>

                  <div className="reg-field pt-10 pb-6">
                    <button 
                      type="submit" 
                      disabled={isSubmitting} 
                      className="w-full bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black h-[70px] md:h-[80px] rounded-[1.5rem] md:rounded-[2rem] flex items-center justify-center gap-4 transition-all duration-500 group shadow-2xl active:scale-95 disabled:opacity-50"
                    >
                      <span className="text-xs font-black uppercase tracking-[0.4em]">
                        {isSubmitting ? 'Validating Application...' : 'Apply for this Cohort'}
                      </span>
                      {!isSubmitting && <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                    </button>
                    <p className="text-center text-gray-500 text-[10px] font-bold mt-8 uppercase tracking-[0.2em] opacity-80">Selection is merit-based. You will be notified via email.</p>
                  </div>
                </form>
              </div>
            </div>
          ) : (
            /* Immersive Success State */
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 md:p-16 text-center bg-white z-50">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-brand-yellow/10 flex items-center justify-center mb-10">
                <div className="w-16 h-16 md:w-24 md:h-24 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_0_50px_rgba(250,204,21,0.6)] animate-pulse">
                  <Check size={48} strokeWidth={4} className="text-brand-black" />
                </div>
              </div>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-black mb-6 tracking-tighter uppercase">Manifested.</h2>
              <p className="text-gray-500 text-lg md:text-xl font-light leading-relaxed max-w-md mx-auto mb-12">
                Your application for <span className="font-bold text-brand-black">{programTitle}</span> has entered our processing cycle. <br /> Prepare for the shift.
              </p>
              <button 
                onClick={handleClose} 
                className="px-12 md:px-16 h-[64px] md:h-[72px] rounded-full bg-brand-black text-white font-black uppercase tracking-widest text-[10px] md:text-xs hover:bg-brand-yellow hover:text-brand-black transition-all shadow-2xl active:scale-95"
              >
                Return to Portal
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgrammeRegistrationModal;
