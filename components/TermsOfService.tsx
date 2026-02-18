
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Gavel, Users, Info, Scale, HelpCircle, ArrowRight, Zap, Ban } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TermsOfService: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState('principles');

  const navItems = [
    { id: 'principles', title: 'Principles', icon: Zap },
    { id: 'conduct', title: 'Conduct', icon: Users },
    { id: 'rights', title: 'Rights', icon: Scale },
    { id: 'legal', title: 'Legalities', icon: Gavel },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".terms-hero", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      const termSections = gsap.utils.toArray('.terms-section');
      termSections.forEach((section: any) => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: "top 85%",
            toggleActions: "play none none reverse"
          },
          y: 40,
          opacity: 0,
          duration: 1,
          ease: "expo.out"
        });

        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveTab(section.id),
          onEnterBack: () => setActiveTab(section.id),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const jumpTo = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 100,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full bg-brand-black min-h-screen pt-24 pb-32 overflow-hidden">
      
      {/* Immersive Dark Hero */}
      <header className="terms-hero max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 mb-24 md:mb-40 relative z-10">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[200px] pointer-events-none"></div>
        
        <div className="flex flex-col gap-8">
           <div className="flex items-center gap-6">
              <div className="w-16 h-px bg-brand-yellow"></div>
              <span className="text-xs font-black tracking-[0.5em] text-brand-yellow uppercase">The Social Contract</span>
           </div>
           <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85]">
             Terms <br /> & <span className="font-serif italic text-brand-yellow">Culture.</span>
           </h1>
           <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mt-12">
              <p className="text-white/40 text-xl font-light max-w-xl leading-relaxed">
                By entering the ShiftUp ecosystem, you agree to a standard of excellence, integrity, and mutual growth.
              </p>
              <div className="flex items-center gap-4 bg-white/5 p-6 rounded-[2.5rem] border border-white/10">
                 <div className="w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center text-brand-black">
                    <Info size={24} />
                 </div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/50">Effective Cycle</p>
                    <p className="text-sm font-bold text-white">2025-2026 Batch</p>
                 </div>
              </div>
           </div>
        </div>
      </header>

      {/* Modern Split Layout */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 relative">
        
        {/* Navigation Rail */}
        <aside className="hidden lg:block lg:col-span-1">
          <div className="sticky top-40 flex flex-col items-center gap-12">
             {navItems.map((item) => (
               <button 
                 key={item.id}
                 onClick={() => jumpTo(item.id)}
                 className={`group relative flex flex-col items-center transition-all duration-500 ${
                   activeTab === item.id ? 'scale-125' : 'opacity-30 hover:opacity-100'
                 }`}
                 title={item.title}
               >
                 <item.icon size={28} className={activeTab === item.id ? 'text-brand-yellow' : 'text-white'} />
                 <div className={`absolute -right-24 bg-brand-yellow text-brand-black px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all pointer-events-none whitespace-nowrap`}>
                    {item.title}
                 </div>
                 {activeTab === item.id && <div className="absolute -bottom-4 w-1 h-1 bg-brand-yellow rounded-full"></div>}
               </button>
             ))}
          </div>
        </aside>

        {/* Content Body */}
        <div className="lg:col-span-8 space-y-48">
          
          <section id="principles" className="terms-section">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">01. Principles</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-brand-yellow text-sm font-black uppercase tracking-[0.3em] mb-6">Mission First</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    ShiftUp Africa exists for the ambitious. Everything we build is designed to help you scale your potential. We protect our community from mediocrity.
                  </p>
                </div>
                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-brand-yellow text-sm font-black uppercase tracking-[0.3em] mb-6">Meritocracy</h3>
                  <p className="text-white/60 font-light leading-relaxed">
                    Access to our cohorts and partners is merit-based. We do not guarantee jobs; we guarantee transformation for those who put in the work.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="conduct" className="terms-section">
             <div className="p-12 md:p-20 bg-brand-yellow rounded-[4rem] text-brand-black">
                <div className="flex items-center gap-6 mb-12">
                   <Ban size={40} />
                   <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase leading-none">Code of <br /> Conduct.</h2>
                </div>
                <div className="space-y-10">
                   <div className="flex gap-8 border-b border-brand-black/10 pb-10">
                      <span className="text-2xl font-black">A.</span>
                      <div>
                        <h4 className="text-xl font-extrabold mb-2 uppercase">Zero Tolerance Policy</h4>
                        <p className="font-medium opacity-70 leading-relaxed">Harassment, hate speech, or exploitation of any community member results in immediate, permanent termination with no right of appeal.</p>
                      </div>
                   </div>
                   <div className="flex gap-8 border-b border-brand-black/10 pb-10">
                      <span className="text-2xl font-black">B.</span>
                      <div>
                        <h4 className="text-xl font-extrabold mb-2 uppercase">Professional Integrity</h4>
                        <p className="font-medium opacity-70 leading-relaxed">Plagiarism in sprints or misrepresentation of your credentials during program cycles will lead to immediate expulsion.</p>
                      </div>
                   </div>
                   <div className="flex gap-8">
                      <span className="text-2xl font-black">C.</span>
                      <div>
                        <h4 className="text-xl font-extrabold mb-2 uppercase">Confidentiality</h4>
                        <p className="font-medium opacity-70 leading-relaxed">Internal training materials, proprietary frameworks, and partner insights are strictly for ShiftUp participants only.</p>
                      </div>
                   </div>
                </div>
             </div>
          </section>

          <section id="rights" className="terms-section">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-12">02. IP & Usage</h2>
            <div className="prose prose-invert prose-xl text-white/50 font-light leading-relaxed max-w-none">
              <p className="text-white text-2xl font-medium leading-snug mb-10">
                You own your work. We own our platforms.
              </p>
              <p>
                All content provided by ShiftUp Africa—videos, guides, datasets, and branding—remains our exclusive property. You are granted a limited, non-transferable license to use these materials for your personal development during your active program cycle.
              </p>
              <div className="bg-white/5 p-12 rounded-[3rem] border border-white/10 mt-16">
                 <h4 className="text-white text-lg font-bold mb-4 uppercase tracking-widest">Digital Footprint</h4>
                 <p className="text-sm">By participating in our sessions, you grant us the right to record and use snippets of your participation for educational and promotional storytelling, ensuring your journey inspires others.</p>
              </div>
            </div>
          </section>

          <section id="legal" className="terms-section pt-20">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-end">
                <div>
                   <h2 className="text-4xl font-black text-white mb-8">Governing <br /> Jurisdiction</h2>
                   <p className="text-white/40 text-lg font-light leading-relaxed">
                     These terms are governed by the laws of the Federal Republic of Nigeria. Any disputes shall be settled through mandatory arbitration in Lagos before legal proceedings are initiated.
                   </p>
                </div>
                <div className="flex flex-col gap-6">
                   <button className="w-full bg-brand-yellow text-brand-black h-[72px] rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:scale-105 transition-all shadow-2xl">
                     DOWNLOAD PDF TERMS <ArrowRight size={20} />
                   </button>
                   <button className="w-full bg-white/10 text-white h-[72px] rounded-full font-black uppercase tracking-widest text-xs flex items-center justify-center gap-4 hover:bg-white/20 transition-all">
                     CONTACT LEGAL <HelpCircle size={20} />
                   </button>
                </div>
             </div>
          </section>

        </div>

        {/* Floating Sidebar Decoration */}
        <aside className="hidden xl:block xl:col-span-3">
           <div className="sticky top-40 bg-white p-12 rounded-[3rem] shadow-2xl">
              <p className="text-[10px] font-black tracking-[0.3em] text-brand-black/40 uppercase mb-6">Need Clarity?</p>
              <h4 className="text-2xl font-black text-brand-black mb-6 leading-tight">Professional <br /> Standards.</h4>
              <p className="text-gray-500 text-sm font-light leading-relaxed mb-10">
                If you find any clause ambiguous, our compliance team is ready to assist your understanding.
              </p>
              <div className="h-px bg-gray-100 mb-10"></div>
              <div className="space-y-4">
                 <div className="flex items-center gap-3 text-brand-black font-bold text-xs uppercase tracking-widest">
                    <Zap size={16} className="text-brand-yellow" /> Fast Response
                 </div>
                 <div className="flex items-center gap-3 text-brand-black font-bold text-xs uppercase tracking-widest">
                    <Scale size={16} className="text-brand-yellow" /> Fair Play
                 </div>
              </div>
           </div>
        </aside>

      </div>

      {/* Footer Branded Glow */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[200px] pointer-events-none"></div>

    </div>
  );
};

export default TermsOfService;
