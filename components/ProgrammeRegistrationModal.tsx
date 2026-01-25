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

  // Form State
  const [formData, setFormData] = useState({
    program: programTitle,
    fullName: '',
    email: '',
    phone: '',
    reason: '',
    source: ''
  });

  useEffect(() => {
    setFormData(prev => ({ ...prev, program: programTitle }));
  }, [programTitle]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsSuccess(false); // Reset state
      setIsSubmitting(false);

      // Reset GSAP inline styles
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
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" },
        "-=0.2"
      );
    } else {
      document.body.style.overflow = '';
      const tl = gsap.timeline();
      tl.to(modalRef.current, { y: 100, opacity: 0, scale: 0.95, duration: 0.3, ease: "power4.in" })
        .to(overlayRef.current, { opacity: 0, duration: 0.2, display: 'none' }, "-=0.1");
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      animateToSuccess();
    }, 1500);
  };

  const animateToSuccess = () => {
    const tl = gsap.timeline();
    
    // Fade out form
    tl.to(formRef.current, {
      opacity: 0,
      y: -20,
      duration: 0.3,
      display: 'none',
      onComplete: () => setIsSuccess(true)
    })
    // Fade in success message
    .fromTo(successRef.current,
      { opacity: 0, y: 20, display: 'none' },
      { opacity: 1, y: 0, display: 'flex', duration: 0.4, ease: "back.out(1.7)" }
    );
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({
        program: '',
        fullName: '',
        email: '',
        phone: '',
        reason: '',
        source: ''
      });
    }, 300);
  };

  return (
    <div className={`fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-4 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Overlay */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-brand-black/80 backdrop-blur-md opacity-0 hidden"
        onClick={handleClose}
      ></div>

      {/* Modal Container */}
      <div 
        ref={modalRef}
        className="relative w-full md:w-full max-w-[550px] bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl flex flex-col max-h-[90vh] md:max-h-[85vh] opacity-0 overflow-hidden"
      >
        {/* Header - Stays fixed at top of modal */}
        {!isSuccess && (
          <div className="bg-brand-pale/30 px-6 py-6 md:px-10 md:py-8 border-b border-brand-yellow/20 flex justify-between items-start flex-shrink-0 z-20">
            <div>
              <h2 className="text-xl md:text-2xl font-extrabold text-brand-black mb-1 leading-tight">
                Programme Registration
              </h2>
              <p className="text-xs md:text-sm text-gray-500 font-light tracking-wide">
                Join our next cohort and transform your career journey.
              </p>
            </div>
            <button 
              onClick={handleClose}
              className="p-2 rounded-full hover:bg-black/5 transition-colors text-gray-500 hover:text-black border border-black/5"
            >
              <X size={20} />
            </button>
          </div>
        )}

        {/* Scrollable Content Area */}
        <div className="overflow-y-auto overflow-x-hidden custom-scrollbar flex-grow bg-white">
          <div className="relative min-h-full">
          
            {/* --- FORM VIEW --- */}
            <div ref={formRef} className={`${isSuccess ? 'hidden' : 'block'}`}>
              <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-6">
                
                {/* Program Select (Fixed/Read-only) */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Selected Programme</label>
                  <div className="w-full px-5 py-4 bg-brand-pale/10 rounded-xl border border-brand-yellow/10 text-brand-gold text-sm font-bold">
                    {programTitle}
                  </div>
                </div>

                {/* Full Name */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                  <input 
                    required
                    type="text" 
                    placeholder="Enter your full name" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300 appearance-none"
                    value={formData.fullName}
                    onChange={e => setFormData({...formData, fullName: e.target.value})}
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Email Address</label>
                  <input 
                    required
                    type="email" 
                    placeholder="your.email@address.com" 
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300 appearance-none"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Phone Number</label>
                  <input 
                    required
                    type="tel" 
                    placeholder="+234..." 
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300 appearance-none"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>

                {/* Reason */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Motivation</label>
                  <textarea 
                    required
                    rows={3}
                    placeholder="What do you hope to achieve?"
                    className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all resize-none placeholder:text-gray-300 appearance-none"
                    value={formData.reason}
                    onChange={e => setFormData({...formData, reason: e.target.value})}
                  ></textarea>
                </div>

                {/* Source */}
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">How did you hear about us?</label>
                  <div className="relative">
                    <select 
                      required
                      className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all appearance-none cursor-pointer"
                      value={formData.source}
                      onChange={e => setFormData({...formData, source: e.target.value})}
                    >
                      <option value="" disabled>Select Source</option>
                      <option value="social_media">Social Media</option>
                      <option value="friend">Friend / Colleague</option>
                      <option value="search">Search Engine</option>
                      <option value="other">Other</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4 pb-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-yellow hover:bg-brand-gold text-brand-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group uppercase tracking-widest text-xs"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-5 w-5 text-brand-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        PROCESSING...
                      </span>
                    ) : (
                      <>
                        SUBMIT APPLICATION
                        <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>

            {/* --- SUCCESS VIEW --- */}
            <div 
              ref={successRef} 
              className="hidden absolute inset-0 flex-col items-center justify-center p-8 md:p-12 text-center h-full min-h-[450px] bg-white z-10"
            >
              {/* Success Icon */}
              <div className="w-24 h-24 rounded-full bg-brand-yellow/20 flex items-center justify-center mb-8 relative">
                <div className="w-16 h-16 rounded-full bg-brand-yellow flex items-center justify-center shadow-[0_0_20px_rgba(250,204,21,0.5)]">
                  <Check size={32} strokeWidth={3} className="text-brand-black" />
                </div>
              </div>

              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-black mb-4 tracking-tight">
                Enrollment Successful
              </h2>
              
              <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm mx-auto mb-10">
                Your application has been received. <br />
                A member of our team will contact you regarding the next steps within 48 hours.
              </p>

              <button 
                onClick={handleClose}
                className="px-10 py-3 rounded-full border border-brand-yellow text-brand-black font-bold uppercase tracking-widest text-xs hover:bg-brand-yellow transition-all duration-300"
              >
                Back to Programs
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgrammeRegistrationModal;