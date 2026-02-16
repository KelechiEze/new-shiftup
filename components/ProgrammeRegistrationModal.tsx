import React, { useState, useEffect, useRef } from 'react';
import { X, ChevronDown, ArrowUpRight, Check } from 'lucide-react';
import gsap from 'gsap';

interface ProgrammeRegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
  programTitle: string;
}

const ProgrammeRegistrationModal: React.FC<ProgrammeRegistrationModalProps> = ({ isOpen, onClose, programTitle }) => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
      setIsSuccess(false);
      setIsSubmitting(false);

      if (formRef.current) {
        gsap.set(formRef.current, { clearProps: "all" }); 
        gsap.set(formRef.current, { opacity: 1, display: 'block', y: 0 });
      }
      if (successRef.current) {
        gsap.set(successRef.current, { clearProps: "all" });
        gsap.set(successRef.current, { display: 'none' }); 
      }
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { 
        display: 'block', 
        opacity: 1, 
        duration: 0.3 
      })
      .fromTo(modalRef.current, 
        { y: 60, opacity: 0, scale: 0.98 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" },
        "-=0.2"
      );
    } else {
      document.body.style.overflow = '';
      document.body.classList.remove('modal-active');
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(modalRef.current, { y: 60, opacity: 0, scale: 0.98, duration: 0.3, ease: "power4.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.2, display: 'none' }, "-=0.1");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const tl = gsap.timeline();
      tl.to(formRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.3,
        display: 'none',
        onComplete: () => setIsSuccess(true)
      })
      .fromTo(successRef.current,
        { opacity: 0, y: 20, display: 'none' },
        { opacity: 1, y: 0, display: 'flex', duration: 0.4, ease: "back.out(1.7)" }
      );
    }, 1500);
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Overlay */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl opacity-0 hidden"
        onClick={handleClose}
      ></div>

      {/* Modal Container - Centered */}
      <div 
        ref={modalRef}
        className="relative w-full max-w-[580px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] flex flex-col max-h-[90vh] opacity-0 overflow-hidden"
      >
        {!isSuccess && (
          <div className="bg-brand-pale/20 px-8 py-8 md:px-12 md:py-10 border-b border-brand-yellow/10 flex justify-between items-start flex-shrink-0 z-20">
            <div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-brand-black mb-2 leading-tight">
                Registration
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light tracking-wide">
                Join our next cohort and transform your career.
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="p-3 rounded-full hover:bg-black/5 transition-colors text-gray-500 hover:text-black border border-black/5"
            >
              <X size={24} />
            </button>
          </div>
        )}

        <div className="overflow-y-auto overflow-x-hidden custom-scrollbar flex-grow bg-white">
          <div className="relative min-h-full">
            <div ref={formRef} className={`${isSuccess ? 'hidden' : 'block'}`}>
              <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-8 mt-5">
                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Selected Programme</label>
                  <div className="w-full px-6 py-4 bg-brand-pale/10 rounded-2xl border border-brand-yellow/10 text-brand-gold text-base font-bold">
                    {programTitle}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Full Name</label>
                  <input required type="text" placeholder="Enter your full name" className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none" />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Email Address</label>
                  <input required type="email" placeholder="your@email.com" className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none" />
                </div>

                <div className="space-y-3">
                  <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Motivation</label>
                  <textarea required rows={3} placeholder="What do you hope to achieve?" className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all resize-none appearance-none"></textarea>
                </div>

                <div className="pt-8 pb-4">
                  <button type="submit" disabled={isSubmitting} className="w-full bg-brand-yellow hover:bg-brand-gold text-brand-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-70 group uppercase tracking-[0.2em] text-xs">
                    {isSubmitting ? 'PROCESSING...' : 'SUBMIT APPLICATION'}
                    {!isSubmitting && <ArrowUpRight size={20} />}
                  </button>
                </div>
              </form>
            </div>

            <div ref={successRef} className="hidden absolute inset-0 flex-col items-center justify-center p-12 text-center h-full min-h-[500px] bg-white z-10">
              <div className="w-24 h-24 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-10">
                <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                  <Check size={32} strokeWidth={3} className="text-brand-black" />
                </div>
              </div>
              <h2 className="text-4xl font-extrabold text-brand-black mb-6 tracking-tight">Success!</h2>
              <p className="text-gray-500 text-xl font-light leading-relaxed max-w-sm mx-auto mb-12">
                Your application has been received. Our team will contact you within 48 hours.
              </p>
              <button onClick={handleClose} className="px-12 py-4 rounded-full border-2 border-brand-yellow text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-yellow transition-all">
                Close Window
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeRegistrationModal;