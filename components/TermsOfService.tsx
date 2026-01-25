
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const TermsOfService: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".terms-fade", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "power2.out"
      });

      // Animate decorative blocks
      gsap.from(".bg-block-terms", {
        scale: 0,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full bg-cream min-h-screen pt-12 pb-24 px-6 md:px-12 overflow-hidden">
      
      {/* Decorative Blocks - Top Left */}
      <div className="absolute top-0 left-0 z-0 flex flex-col pointer-events-none">
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FEF9C3] bg-block-terms"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FDE047] bg-block-terms"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FACC15] bg-block-terms"></div>
        </div>
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FEF9C3] opacity-60 bg-block-terms"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 pt-16 md:pt-24">
        
        {/* Breadcrumb */}
        <div className="terms-fade mb-4">
          <span className="text-sm font-medium text-brand-black border-b-2 border-brand-yellow pb-0.5">
            Privacy Policy
          </span>
        </div>

        {/* Title */}
        <h1 className="terms-fade text-3xl md:text-5xl lg:text-6xl font-bold text-brand-black mb-6 tracking-tight">
          Privacy Policy
        </h1>
        
        <div className="terms-fade space-y-6 text-gray-700 leading-relaxed font-light mb-12">
          <p className="font-medium text-brand-black">
            Alright—here’s a clean, solid, no-fluff Combined Terms of Service + Code of Conduct tailored specifically for ShiftUp Africa.
          </p>
          <p>
            This is written to protect the platform, set culture early, and scale with you.
          </p>
          <p className="font-bold text-brand-black">
            Terms of Service & Code of Conduct
          </p>
          <p>
            Effective Date: 22|12|2025
          </p>
          <p>
            Welcome to ShiftUp Africa (“ShiftUp Africa,” “we,” “our,” or “us”).
          </p>
          <p>
            By accessing or using our website, programs, platforms, communities, or services (collectively, the “Services”), you agree to comply with and be bound by these Terms of Service & Code of Conduct (“Terms”).
          </p>
          <p>
            If you do not agree, please do not use our Services.
          </p>
        </div>

        {/* Detailed Sections */}
        <div className="terms-fade space-y-10 text-gray-700 leading-relaxed font-light">
          
          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">1. Our Mission (Read This First)</h2>
            <p>ShiftUp Africa exists to empower young Africans with the mindset, tools, and access needed to succeed in their careers and personal lives.</p>
            <p className="mt-4">Everything we build—content, programs, communities—exists to help people grow responsibly, ethically, and sustainably.</p>
            <p className="mt-2">These Terms exist to protect that mission.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">2. Eligibility</h2>
            <p className="mb-2">By using ShiftUp Africa, you confirm that:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>You are at least 13 years old</li>
              <li>You can legally agree to these Terms</li>
              <li>You will use the platform for lawful, constructive purposes</li>
            </ul>
            <p className="mt-4">We reserve the right to deny or terminate access if eligibility requirements are violated.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">3. Use of the Platform</h2>
            <p className="mb-2">You agree to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Use ShiftUp Africa only for its intended purpose</li>
              <li>Provide accurate and truthful information</li>
              <li>Respect other users, mentors, facilitators, and staff</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>
            <p className="mt-6 mb-2">You agree not to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Misuse the platform or attempt to disrupt its operation</li>
              <li>Access restricted areas without authorization</li>
              <li>Use ShiftUp Africa to exploit, deceive, or harm others</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">4. User Accounts & Responsibilities</h2>
            <p className="mb-2">If you create an account or register for a program:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>You are responsible for maintaining the confidentiality of your login details</li>
              <li>You are responsible for all activity under your account</li>
              <li>You must notify us immediately of any unauthorized use</li>
            </ul>
            <p className="mt-4">We are not liable for losses caused by compromised accounts due to user negligence.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">5. Code of Conduct (Community Rules)</h2>
            <p className="mb-4">This section is non-negotiable.</p>
            
            <div className="mb-6">
              <h3 className="font-bold text-brand-black mb-2">a. Respect & Integrity</h3>
              <p className="mb-1">All users must:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Treat others with dignity and respect</li>
                <li>Engage in constructive, professional communication</li>
                <li>Disagree without being disrespectful</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="font-bold text-brand-black mb-2">b. Zero Tolerance Behavior</h3>
              <p className="mb-1">The following are strictly prohibited:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Harassment, bullying, intimidation, or threats</li>
                <li>Hate speech, discrimination, or exclusion based on race, gender, religion, nationality, disability, or background</li>
                <li>Sexual misconduct, inappropriate messages, or exploitation</li>
                <li>Spamming, solicitation, or self-promotion without permission</li>
                <li>Impersonation or misrepresentation of identity</li>
                <li>Sharing false, misleading, or harmful information</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-brand-black mb-2">c. Community Spaces</h3>
              <p className="mb-1">This Code applies across:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Website interactions</li>
                <li>Programs, cohorts, and classes</li>
                <li>Online communities (WhatsApp, Slack, Discord, etc.)</li>
                <li>Events, workshops, and meetups (online or offline)</li>
              </ul>
              <p className="mt-4">If you’re in a ShiftUp Africa space, these rules apply. Period.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">6. Content & Intellectual Property</h2>
            <div className="mb-6">
              <h3 className="font-bold text-brand-black mb-2">a. Our Content</h3>
              <p className="mb-4">All content provided by ShiftUp Africa—including text, videos, training materials, branding, and resources—is owned by ShiftUp Africa or licensed to us.</p>
              <p className="font-medium mb-1">You may:</p>
              <ul className="list-disc ml-6 space-y-1 mb-4">
                <li>Use content for personal, non-commercial learning</li>
              </ul>
              <p className="font-medium mb-1">You may not:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Reproduce, resell, or distribute our content without written permission</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-brand-black mb-2">b. User-Submitted Content</h3>
              <p className="mb-2">If you submit content (comments, feedback, posts):</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>You retain ownership</li>
                <li>You grant ShiftUp Africa a non-exclusive, royalty-free license to use it for platform-related purposes</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">7. Enforcement & Consequences</h2>
            <p className="mb-2">We reserve the right to take action if these Terms are violated, including:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Warnings</li>
              <li>Content removal</li>
              <li>Temporary suspension</li>
              <li>Permanent account termination</li>
              <li>Removal from programs or communities without refund (where applicable)</li>
            </ul>
            <p className="mt-4">We don’t enjoy enforcing rules—but we will, to protect the community.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">8. Program Participation Disclaimer</h2>
            <p>ShiftUp Africa provides educational, career development, and personal growth resources.</p>
            <p className="mt-4 font-bold text-brand-black">We do not guarantee:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Employment</li>
              <li>Income</li>
              <li>Business success</li>
              <li>Specific outcomes</li>
            </ul>
            <p className="mt-4 italic">Results depend on individual effort, consistency, and external factors.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">9. Limitation of Liability</h2>
            <p>To the fullest extent permitted by law:</p>
            <ul className="list-disc ml-6 space-y-2 mt-2">
              <li>ShiftUp Africa is not liable for indirect, incidental, or consequential damages.</li>
              <li>Use of the platform is at your own risk.</li>
            </ul>
            <p className="mt-4 font-medium">We provide value, guidance, and opportunity—not magic.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">10. Termination of Access</h2>
            <p className="mb-2">We may suspend or terminate your access:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>For violations of these Terms</li>
              <li>For behavior that harms the community or brand</li>
              <li>At our discretion, with or without prior notice</li>
            </ul>
            <p className="mt-4">You may stop using our Services at any time.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">11. Governing Law</h2>
            <p>
              These Terms shall be governed by and interpreted in accordance with the laws of the Federal Republic of Nigeria, without regard to conflict of law principles.
            </p>
          </section>

        </div>
      </div>

      {/* Decorative Blocks - Bottom Left */}
      <div className="absolute bottom-0 left-0 z-0 flex flex-col pointer-events-none mb-12">
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FACC15] bg-block-terms"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FDE047] bg-block-terms"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FEF9C3] bg-block-terms"></div>
        </div>
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FDE047] opacity-60 bg-block-terms"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
        </div>
      </div>

    </div>
  );
};

export default TermsOfService;
