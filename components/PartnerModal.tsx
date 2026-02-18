
import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import gsap from 'gsap';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: 'Mentor' | 'Trainer' | 'Sponsorship' | null;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose, category }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const leftSideRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { 
        opacity: 1, 
        duration: 0.4,
        display: "block" 
      })
      .fromTo(modalRef.current, 
        { y: 100, opacity: 0, scale: 0.9 },
        { y: 0, opacity: 1, scale: 1, duration: 0.6, ease: "power4.out" },
        "-=0.2"
      )
      .fromTo(leftSideRef.current, 
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(".form-field-anim", 
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
    tl.to(modalRef.current, { y: 100, opacity: 0, scale: 0.9, duration: 0.4, ease: "power4.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.3 }, "-=0.2");
  };

  if (!isOpen && !category) return null;
  if (!category) return null;

  const isSponsorship = category === 'Sponsorship';

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-8 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Immersive Overlay */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-brand-black/90 backdrop-blur-2xl opacity-0 hidden"
        onClick={handleClose}
      ></div>
      
      {/* Magnificent Split-Screen Modal */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-6xl bg-white rounded-[2rem] md:rounded-[3rem] shadow-[0_50px_150px_rgba(0,0,0,0.6)] overflow-hidden h-full max-h-[90vh] lg:max-h-[850px] flex flex-col lg:flex-row opacity-0"
      >
        {/* LEFT SIDE: Cinematic Brand Experience */}
        <div ref={leftSideRef} className="hidden lg:flex lg:w-5/12 bg-brand-black relative overflow-hidden p-12 lg:p-16 flex-col justify-between">
          <div className="absolute inset-0 z-0">
            <img 
              src={isSponsorship 
                ? "https://images.unsplash.com/photo-152173711867-e3b97375f902?q=80&w=1200&auto=format&fit=crop" 
                : "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=1200&auto=format&fit=crop"} 
              alt="Background" 
              className="w-full h-full object-cover opacity-40 scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/20 to-transparent"></div>
          </div>

          <div className="relative z-10">
             <div className="w-12 h-1 bg-brand-yellow mb-8"></div>
             <h2 className="text-white text-4xl font-serif italic mb-4">The ShiftUp <br /> Network</h2>
             <p className="text-white/60 font-light tracking-wide max-w-xs">
               Join a league of visionaries rewriting the narrative of African potential.
             </p>
          </div>

          <div className="relative z-10">
            <blockquote className="text-white/80 text-xl font-light mb-8 leading-relaxed italic">
              "True leadership isn't about being in charge. It's about taking care of those in your charge."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 flex items-center justify-center">
                <CheckCircle2 className="text-brand-yellow" size={20} />
              </div>
              <span className="text-white text-[10px] font-bold uppercase tracking-widest">Verified Opportunity</span>
            </div>
          </div>

          {/* Floating Brand Glow */}
          <div className="absolute top-1/4 -right-20 w-64 h-64 bg-brand-yellow/10 rounded-full blur-[100px]"></div>
        </div>

        {/* RIGHT SIDE: The Form Experience */}
        <div className="flex-1 bg-white relative flex flex-col min-h-0 overflow-hidden">
          {/* Header */}
          <div className="p-8 md:p-12 flex justify-between items-start border-b border-gray-50 flex-shrink-0">
            <div>
              <span className="text-brand-gold font-bold text-[10px] tracking-[0.4em] uppercase mb-3 block">Application Gateway</span>
              <h3 className="text-2xl md:text-4xl font-extrabold text-brand-black tracking-tight">
                {isSponsorship ? 'Secure Partnership' : `${category} Registration`}
              </h3>
            </div>
            <button 
              onClick={handleClose}
              className="p-3 md:p-4 rounded-full bg-gray-50 text-gray-400 hover:bg-brand-black hover:text-white transition-all duration-300"
            >
              <X size={24} />
            </button>
          </div>

          {/* Form Scrollable Area */}
          <div className="flex-1 overflow-y-auto custom-scrollbar p-8 md:p-12">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {isSponsorship ? (
                <>
                  <div className="form-field-anim col-span-2 group">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Organisation Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="e.g. Google Africa" 
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium"
                    />
                  </div>
                  <div className="form-field-anim col-span-2 group md:col-span-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Work Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="partnerships@company.com" 
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium"
                    />
                  </div>
                  <div className="form-field-anim col-span-2 group md:col-span-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Interest Category</label>
                    <div className="relative">
                      <select className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium appearance-none cursor-pointer">
                        <option value="">Choose Path...</option>
                        <option value="financial">Financial Investment</option>
                        <option value="internship">Internship Pipeline</option>
                        <option value="scholarship">Full Scholarships</option>
                      </select>
                      <ChevronDown size={20} className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-300 pointer-events-none" />
                    </div>
                  </div>
                  <div className="form-field-anim col-span-2 group">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Legacy Vision</label>
                    <textarea 
                      rows={3}
                      placeholder="What impact do you wish to create?"
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium resize-none"
                    ></textarea>
                  </div>
                </>
              ) : (
                <>
                  <div className="form-field-anim col-span-2 group">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Full Legal Name</label>
                    <input 
                      required
                      type="text" 
                      placeholder="Your full name" 
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium"
                    />
                  </div>
                  <div className="form-field-anim col-span-2 group md:col-span-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Personal Email</label>
                    <input 
                      required
                      type="email" 
                      placeholder="name@example.com" 
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium"
                    />
                  </div>
                  <div className="form-field-anim col-span-2 group md:col-span-1">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">LinkedIn Profile</label>
                    <input 
                      required
                      type="url" 
                      placeholder="linkedin.com/in/..." 
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium"
                    />
                  </div>
                  <div className="form-field-anim col-span-2 group">
                    <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] mb-2 block group-focus-within:text-brand-gold transition-colors">Core Expertise</label>
                    <textarea 
                      required
                      rows={3}
                      placeholder="Briefly describe your professional journey..."
                      className="w-full bg-gray-50 border-b-2 border-transparent px-0 py-4 focus:bg-transparent focus:border-brand-yellow transition-all outline-none text-lg text-brand-black font-medium resize-none"
                    ></textarea>
                  </div>
                </>
              )}

              {/* Action Button Container */}
              <div className="form-field-anim col-span-2 pt-8 pb-12">
                <button className="w-full bg-brand-black text-white hover:bg-brand-yellow hover:text-brand-black h-[72px] rounded-2xl flex items-center justify-center gap-4 transition-all duration-500 group shadow-2xl active:scale-95">
                  <span className="text-xs font-extrabold uppercase tracking-[0.3em]">Ignite This Journey</span>
                  <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
                <p className="text-center text-gray-400 text-[10px] mt-6 font-medium">By submitting, you agree to our Code of Conduct and Privacy Terms.</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
