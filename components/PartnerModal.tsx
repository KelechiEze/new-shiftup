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
      
      const tl = gsap.timeline();
      // Fade in overlay
      tl.to(overlayRef.current, { 
        opacity: 1, 
        duration: 0.3,
        display: "block" 
      })
      // Slide up and fade in content
      .fromTo(contentRef.current, 
        { y: 100, opacity: 0, scale: 0.95 },
        { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power4.out" },
        "-=0.2"
      );
        
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleClose = () => {
    const tl = gsap.timeline({ onComplete: onClose });
    tl.to(contentRef.current, { y: 100, opacity: 0, scale: 0.95, duration: 0.3, ease: "power4.in" })
      .to(overlayRef.current, { opacity: 0, duration: 0.2 }, "-=0.1");
  };

  if (!isOpen && !category) return null;
  if (!category) return null;

  const isSponsorship = category === 'Sponsorship';

  return (
    <div className={`fixed inset-0 z-[9999] flex items-end md:items-center justify-center p-0 md:p-6 ${!isOpen ? 'pointer-events-none' : ''}`}>
      {/* Overlay */}
      <div 
        ref={overlayRef} 
        className="absolute inset-0 bg-brand-black/80 backdrop-blur-md opacity-0 hidden"
        onClick={handleClose}
      ></div>
      
      {/* Modal Content */}
      <div 
        ref={contentRef}
        className="relative w-full md:w-full max-w-[550px] bg-white rounded-t-[2.5rem] md:rounded-[2.5rem] shadow-2xl overflow-hidden max-h-[90vh] md:max-h-[85vh] flex flex-col opacity-0"
      >
        {/* Header - Pinned at top */}
        <div className="bg-brand-pale/30 px-6 py-6 md:px-10 md:py-8 border-b border-brand-yellow/20 flex justify-between items-start flex-shrink-0 z-20">
          <div className="pr-6">
            <h3 className="text-xl md:text-2xl font-extrabold text-brand-black mb-1 leading-tight">
              {isSponsorship ? 'Sponsorship Form' : `${category} Application`}
            </h3>
            <p className="text-[11px] md:text-xs text-gray-500 font-light tracking-wide">
              Partner with ShiftUp Africa to shape the next generation of leaders.
            </p>
          </div>
          <button 
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-black/5 transition-colors text-brand-black flex-shrink-0 border border-black/5"
          >
            <X size={20} />
          </button>
        </div>

        {/* Form Fields - Scrollable */}
        <div className="p-6 md:p-10 space-y-6 bg-white overflow-y-auto custom-scrollbar flex-grow">
           
           {isSponsorship ? (
             <>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Organisation Name</label>
                 <input 
                   required
                   type="text" 
                   placeholder="Enter your company name" 
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Work Email</label>
                 <input 
                   required
                   type="email" 
                   placeholder="partnerships@company.com" 
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Sponsorship Category</label>
                 <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select category</option>
                        <option value="financial">Financial Support</option>
                        <option value="resource">Resource & Hardware</option>
                        <option value="scholarship">Full Scholarships</option>
                        <option value="internship">Internship Placement</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                 </div>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Additional Notes</label>
                 <textarea 
                   rows={4}
                   placeholder="Briefly describe your interest..."
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all resize-none placeholder:text-gray-300"
                 ></textarea>
               </div>
             </>
           ) : (
             <>
               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Full Name</label>
                 <input 
                   required
                   type="text" 
                   placeholder="Your professional name" 
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Professional Email</label>
                 <input 
                   required
                   type="email" 
                   placeholder="name@company.com" 
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">LinkedIn Profile</label>
                 <input 
                   required
                   type="url" 
                   placeholder="https://linkedin.com/in/username" 
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all placeholder:text-gray-300"
                 />
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Areas of Expertise</label>
                 <textarea 
                   required
                   rows={3}
                   placeholder="e.g. UX Design, Agile, Financial Literacy..."
                   className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all resize-none placeholder:text-gray-300"
                 ></textarea>
               </div>

               <div className="space-y-2">
                 <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Experience Level</label>
                 <div className="relative">
                    <select className="w-full px-5 py-4 rounded-xl border border-gray-100 bg-gray-50/50 text-brand-black focus:outline-none focus:border-brand-yellow focus:ring-4 focus:ring-brand-yellow/10 text-sm transition-all appearance-none cursor-pointer">
                        <option value="" disabled selected>Select experience</option>
                        <option value="3-5">3 - 5 Years</option>
                        <option value="5-10">5 - 10 Years</option>
                        <option value="10+">10+ Years</option>
                    </select>
                    <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                 </div>
               </div>
             </>
           )}

           {/* Submit Button */}
           <div className="pt-6 pb-4">
             <button className="w-full bg-brand-yellow hover:bg-brand-gold text-brand-black font-extrabold py-5 rounded-2xl flex items-center justify-center gap-2 transition-all duration-300 shadow-xl hover:-translate-y-1 active:scale-95 group uppercase tracking-widest text-xs">
               SUBMIT INTEREST
               <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
             </button>
           </div>

        </div>
      </div>
    </div>
  );
};

export default PartnerModal;