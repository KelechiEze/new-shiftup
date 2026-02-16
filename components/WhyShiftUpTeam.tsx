
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Define team members here. You can easily edit the name, role, and image for each person.
const teamMembers = [
  {
    name: "Ibijoke Oyewole",
    role: "Convener",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
  {
    name: "Team Member",
    role: "Role",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=600&auto=format&fit=crop", 
  },
];

const WhyShiftUpTeam: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate Header Elements
      gsap.from(".team-header-anim", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out"
      });

      // Animate Grid Items
      gsap.from(".team-card-anim", {
        scrollTrigger: {
          trigger: ".team-grid",
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="team-section" ref={sectionRef} className="bg-white py-24 px-6 md:px-12 w-full relative overflow-hidden scroll-mt-24">
      
      {/* Decorative Blocks - Top Right */}
      <div className="absolute top-0 right-0 hidden md:grid grid-cols-3 gap-0 z-10 opacity-80">
         <div className="w-16 h-16 bg-[#FEF9C3]"></div> {/* Pale */}
         <div className="w-16 h-16 bg-[#FDE047]"></div> {/* Medium */}
         <div className="w-16 h-16 bg-[#FACC15]"></div> {/* Dark */}
         <div className="w-16 h-16 bg-transparent"></div>
         <div className="w-16 h-16 bg-transparent"></div>
         <div className="w-16 h-16 bg-[#FEF9C3]"></div> {/* Pale */}
      </div>

      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            
            {/* Title */}
            <div className="team-header-anim relative inline-block">
                <span className="text-xl md:text-2xl font-medium text-brand-black relative z-10 pb-1 block">
                  Meet the Team
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-brand-yellow z-0"></div>
            </div>

            {/* Description Paragraph */}
            <div className="team-header-anim max-w-xl">
                <p className="text-gray-400 font-light text-base md:text-lg leading-relaxed">
                    Shift Up Africa is built by people who give their time, skills, hearts, and faith to the mission of raising a generation of purpose-driven professionals.
                </p>
            </div>
        </div>
      </div>

      {/* Team Grid */}
      <div className="team-grid max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {teamMembers.map((member, idx) => (
            <div key={idx} className="team-card-anim flex flex-col group cursor-default">
                <div className="w-full aspect-square bg-gray-100 mb-4 overflow-hidden rounded-sm grayscale group-hover:grayscale-0 transition-all duration-500">
                     <img 
                        src={member.image} 
                        alt={member.name} 
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                     />
                </div>
                <h3 className="text-lg font-bold text-brand-black leading-tight">
                    {/* Splits the name to make the second part bolder if present */}
                    {member.name.split(' ')[0]} <span className="font-extrabold">{member.name.split(' ').slice(1).join(' ')}</span>
                </h3>
                <p className="text-xs text-gray-500 mt-1 uppercase tracking-wide">
                    {member.role}
                </p>
            </div>
        ))}
      </div>

      {/* Decorative Blocks - Bottom Left */}
      <div className="absolute bottom-0 left-0 hidden md:grid grid-cols-3 gap-0 z-10 opacity-80">
         <div className="w-16 h-16 bg-[#FEF9C3]"></div> {/* Pale */}
         <div className="w-16 h-16 bg-transparent"></div>
         <div className="w-16 h-16 bg-transparent"></div>
         <div className="w-16 h-16 bg-[#FACC15]"></div> {/* Dark */}
         <div className="w-16 h-16 bg-[#FDE047]"></div> {/* Medium */}
         <div className="w-16 h-16 bg-[#FEF9C3]"></div> {/* Pale */}
      </div>

    </section>
  );
};

export default WhyShiftUpTeam;
