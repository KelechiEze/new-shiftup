
import React, { useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Lock, Eye, Mail, FileText, ChevronRight, Info } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const PrivacyPolicy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState('intro');

  const sections = [
    { id: 'intro', title: 'Executive Summary', icon: Eye },
    { id: 'collection', title: 'Data Collection', icon: FileText },
    { id: 'usage', title: 'Usage Policy', icon: Shield },
    { id: 'sharing', title: 'Data Sharing', icon: Lock },
    { id: 'security', title: 'Security', icon: Lock },
    { id: 'contact', title: 'Contact', icon: Mail },
  ];

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Header Animation
      gsap.from(".policy-hero", {
        y: 80,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out"
      });

      // Section Animations
      const contentSections = gsap.utils.toArray('.policy-section');
      contentSections.forEach((section: any) => {
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

        // Track active section for sidebar
        ScrollTrigger.create({
          trigger: section,
          start: "top 40%",
          end: "bottom 40%",
          onEnter: () => setActiveSection(section.id),
          onEnterBack: () => setActiveSection(section.id),
        });
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div ref={containerRef} className="relative w-full bg-brand-black min-h-screen pt-24 pb-32 overflow-hidden">
      
      {/* Editorial Hero Header */}
      <header className="policy-hero max-w-7xl mx-auto px-6 md:px-12 pt-20 md:pt-32 mb-24 md:mb-40 relative z-10">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[200px] pointer-events-none"></div>
        
        <div className="flex flex-col md:flex-row items-end justify-between gap-12">
          <div className="max-w-3xl">
            <div className="flex items-center gap-6 mb-8">
              <div className="w-16 h-px bg-brand-yellow"></div>
              <span className="text-xs font-black tracking-[0.5em] text-brand-yellow uppercase">
                PRIVACY FRAMEWORK
              </span>
            </div>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-white tracking-tighter leading-[0.85]">
              Data <br /> <span className="font-serif italic text-brand-yellow">Dignity.</span>
            </h1>
          </div>
          <div className="pb-4 text-right hidden md:block">
            <p className="text-[10px] font-black text-white/40 uppercase tracking-[0.4em] mb-3">LAST AUDITED</p>
            <p className="text-2xl font-serif italic text-white/60">December 22, 2025</p>
          </div>
        </div>
        <div className="w-full h-px bg-white/10 mt-20"></div>
      </header>

      {/* Main Grid Content */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-32 relative">
        
        {/* Sticky Sidebar Navigation */}
        <aside className="hidden lg:block lg:col-span-3">
          <div className="sticky top-40 space-y-3">
            <p className="text-[10px] font-black tracking-[0.3em] text-white/30 uppercase mb-8">Governance Map</p>
            {sections.map((s) => (
              <button
                key={s.id}
                onClick={() => scrollToSection(s.id)}
                className={`flex items-center gap-4 w-full text-left py-4 px-6 rounded-2xl transition-all duration-500 group ${
                  activeSection === s.id 
                  ? 'bg-brand-yellow text-brand-black shadow-2xl shadow-brand-yellow/20 translate-x-4' 
                  : 'hover:bg-white/5 text-white/40 hover:text-white'
                }`}
              >
                <s.icon size={18} className={activeSection === s.id ? 'text-brand-black' : 'opacity-40 group-hover:opacity-100'} />
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{s.title}</span>
                {activeSection === s.id && <ChevronRight size={14} className="ml-auto text-brand-black" />}
              </button>
            ))}

            <div className="mt-16 p-10 bg-white/5 border border-white/10 rounded-[3rem] text-white">
              <div className="w-12 h-12 rounded-2xl bg-brand-yellow/10 flex items-center justify-center text-brand-yellow mb-6">
                <Info size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 tracking-tight">Questions?</h4>
              <p className="text-xs text-white/40 leading-relaxed mb-8 font-light">
                Our legal team is here to clarify any aspect of our data handling protocols.
              </p>
              <a href="mailto:privacy@shiftupafrica.com" className="text-brand-yellow font-bold text-xs uppercase tracking-widest border-b border-brand-yellow/30 pb-1 hover:border-brand-yellow transition-all">
                Email Privacy Team
              </a>
            </div>
          </div>
        </aside>

        {/* Content Flow */}
        <div className="lg:col-span-8 space-y-48">
          
          <section id="intro" className="policy-section">
            <div className="p-12 md:p-20 bg-white/5 rounded-[4rem] border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-yellow/5 rounded-full blur-3xl"></div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-10 tracking-tighter">Executive Summary</h2>
              <div className="space-y-8">
                <p className="text-2xl md:text-3xl text-white font-medium leading-snug italic border-l-4 border-brand-yellow pl-10">
                  ShiftUp Africa treats your digital identity with the same respect we give to your career potential.
                </p>
                <p className="text-white/50 text-xl font-light leading-relaxed">
                  This Privacy Policy describes how ShiftUp Africa (“we”, “us”, or “our”) collects, uses, and shares your personal information when you use our website, programs, or community portals.
                </p>
              </div>
            </div>
          </section>

          <section id="collection" className="policy-section">
            <div className="flex flex-col gap-12">
              <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter">01. Architecture</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-brand-yellow text-sm font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                    Direct Input
                  </h3>
                  <p className="text-white/40 font-light leading-relaxed">
                    Personal identity data provided during registration, including legal names, contact details, and career aspirations.
                  </p>
                </div>
                <div className="p-10 bg-white/5 rounded-[3rem] border border-white/10 hover:bg-white/10 transition-colors">
                  <h3 className="text-white text-sm font-black uppercase tracking-[0.3em] mb-6 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    Automated Logs
                  </h3>
                  <p className="text-white/40 font-light leading-relaxed">
                    Technical telemetry including IP addresses, browser fingerprints, and interaction patterns to optimize your experience.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section id="usage" className="policy-section">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-16">02. Protocols</h2>
            <div className="space-y-12">
              {[
                "Program Personalization: Tailoring cohort content to your background.",
                "Strategic Communication: Updates on selection cycles and alumni opportunities.",
                "System Integrity: Preventing fraudulent applications and ensuring secure access.",
                "Analytics: Measuring community growth and curriculum impact."
              ].map((item, i) => (
                <div key={i} className="flex gap-10 items-start group">
                  <span className="text-5xl md:text-6xl font-serif italic text-brand-yellow/20 group-hover:text-brand-yellow transition-colors duration-500">0{i+1}</span>
                  <p className="text-xl md:text-2xl font-medium text-white/80 pt-4 leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="sharing" className="policy-section">
            <div className="p-12 md:p-20 bg-brand-yellow rounded-[4rem] text-brand-black relative shadow-2xl shadow-brand-yellow/5">
               <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tighter uppercase leading-none">Sharing <br /> Thresholds.</h2>
               <p className="text-brand-black/70 text-xl font-medium leading-relaxed mb-12">
                 We do not trade your data. Sharing only occurs with vetted service providers (e.g., AWS, SendGrid) under strict confidentiality agreements or as required by law.
               </p>
               <div className="inline-flex items-center gap-4 px-8 py-4 bg-brand-black text-white rounded-full shadow-xl">
                  <Lock size={20} className="text-brand-yellow" />
                  <span className="text-[10px] font-black uppercase tracking-[0.3em]">End-to-End Governance</span>
               </div>
            </div>
          </section>

          <section id="security" className="policy-section">
            <h2 className="text-5xl md:text-7xl font-extrabold text-white tracking-tighter mb-10">03. Defense</h2>
            <p className="text-white/40 text-2xl font-light leading-relaxed max-w-3xl">
              We employ military-grade encryption for data at rest and in transit. Our internal protocols ensure that personal data is only accessible to personnel strictly necessary for program delivery.
            </p>
          </section>

          <section id="contact" className="policy-section pt-24 border-t border-white/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-16 bg-white/5 p-12 md:p-20 rounded-[4rem] border border-white/10">
              <div className="max-w-md">
                 <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter uppercase leading-none">Talk <br /> to us.</h2>
                 <p className="text-white/40 font-medium text-lg">Have questions about your digital footprint? Our Data Protection Officer is available for direct consultation.</p>
              </div>
              <button className="bg-brand-yellow text-brand-black px-16 h-[80px] rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-all shadow-2xl active:scale-95 flex items-center gap-4">
                GET CLARITY <Mail size={24} />
              </button>
            </div>
          </section>

        </div>
      </div>

      {/* Decorative Brand Accent */}
      <div className="fixed bottom-12 right-12 pointer-events-none opacity-[0.03] hidden xl:block">
        <p className="text-[15rem] font-serif italic text-white leading-none -rotate-12 select-none">SU</p>
      </div>

      {/* Footer Branded Glow */}
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-brand-yellow/5 rounded-full blur-[200px] pointer-events-none"></div>

    </div>
  );
};

export default PrivacyPolicy;
