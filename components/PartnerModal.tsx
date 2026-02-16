
import React, { useEffect, useRef } from 'react';
import { X, ArrowUpRight, ChevronDown } from 'lucide-react';
import gsap from 'gsap';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: 'Mentor' | 'Trainer' | 'Sponsorship' | null;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose, category }) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.classList.add('modal-active');
      
      const tl = gsap.timeline();
      tl.to(overlayRef.current, { 
        opacity: 1, 
        duration: 0.3,
        display: "block" 
      })
      .fromTo(contentRef.current, 
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
    tl.to(contentRef.current, { y: 60, opacity: 0, scale: 0.98, duration: 0.3, ease: "power4.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  if (!isOpen && !category) return null;
  if (!category) return null;

  const isSponsorship = category === 'Sponsorship';

  return (
    <div className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Overlay */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-brand-black/95 backdrop-blur-xl opacity-0 hidden"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content - Centered */}
      <div 
        ref={contentRef}
        className="relative w-full max-w-[580px] bg-white rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.5)] overflow-hidden max-h-[90vh] flex flex-col opacity-0"
      >
        {/* Header */}
        <div className="bg-brand-pale/20 px-8 py-8 md:px-12 md:py-10 border-b border-brand-yellow/10 flex justify-between items-start flex-shrink-0 z-20">
          <div className="pr-8">
            <h3 className="text-2xl md:text-3xl font-extrabold text-brand-black mb-2 leading-tight">
              {isSponsorship ? 'Sponsorship Form' : `${category} Application`}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 font-light tracking-wide">
              Join ShiftUp Africa to empower the next generation.
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-3 rounded-full hover:bg-black/5 transition-colors text-brand-black border border-black/5"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form Fields - with mt-5 (20px) margin top */}
        <div className="p-8 md:p-12 space-y-8 bg-white overflow-y-auto custom-scrollbar flex-grow mt-5">
           
           {isSponsorship ? (
             <>
               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Organisation Name</label>
                 <input 
                   required
                   type="text" 
                   placeholder="Enter your company name" 
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none"
                 />
               </div>

               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Work Email</label>
                 <input 
                   required
                   type="email" 
                   placeholder="partnerships@company.com" 
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none"
                 />
               </div>

               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Category</label>
                 <div className="relative">
                    <select className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select a category</option>
                        <option value="financial">Financial Support</option>
                        <option value="resource">Resource & Hardware</option>
                        <option value="scholarship">Full Scholarships</option>
                        <option value="internship">Internship Placement</option>
                    </select>
                    <ChevronDown size={20} className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                 </div>
               </div>

               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Additional Notes</label>
                 <textarea 
                   rows={4}
                   placeholder="Tell us about your interest..."
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all resize-none appearance-none"
                 ></textarea>
               </div>
             </>
           ) : (
             <>
               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Full Name</label>
                 <input 
                   required
                   type="text" 
                   placeholder="Your full legal name" 
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none"
                 />
               </div>

               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Email Address</label>
                 <input 
                   required
                   type="email" 
                   placeholder="name@example.com" 
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none"
                 />
               </div>

               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">LinkedIn URL</label>
                 <input 
                   required
                   type="url" 
                   placeholder="linkedin.com/in/username" 
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all appearance-none"
                 />
               </div>

               <div className="space-y-3">
                 <label className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em]">Expertise</label>
                 <textarea 
                   required
                   rows={3}
                   placeholder="e.g. Design, Coding, Management..."
                   className="w-full px-6 py-4 rounded-2xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-base transition-all resize-none appearance-none"
                 ></textarea>
               </div>
             </>
           )}

           <div className="pt-8 pb-4">
             <button className="w-full bg-brand-yellow hover:bg-brand-gold text-brand-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 group uppercase tracking-[0.2em] text-xs">
               SUBMIT INTEREST
               <ArrowUpRight size={20} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </button>
           </div>

        </div>
      </div>
    </div>
  );
};

export default PartnerModal;
