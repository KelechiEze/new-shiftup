
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const PrivacyPolicy: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".policy-fade", {
        y: 20,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Animate decorative blocks
      gsap.from(".bg-block-policy", {
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
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FEF9C3] bg-block-policy"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FDE047] bg-block-policy"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FACC15] bg-block-policy"></div>
        </div>
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FEF9C3] opacity-60 bg-block-policy"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative z-10 pt-16 md:pt-24">
        
        {/* Breadcrumb */}
        <div className="policy-fade mb-4">
          <span className="text-sm font-medium text-brand-black border-b-2 border-brand-yellow pb-0.5">
            Privacy Policy
          </span>
        </div>

        {/* Title */}
        <h1 className="policy-fade text-4xl md:text-6xl font-bold text-brand-black mb-4 tracking-tight">
          Privacy Policy
        </h1>
        
        <p className="policy-fade text-gray-600 font-medium mb-12">
          Effective Date: 22|12|2025
        </p>

        {/* Policy Body */}
        <div className="policy-fade space-y-8 text-gray-700 leading-relaxed font-light">
          
          <p>
            ShiftUp Africa (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://shiftupafrica.com" className="text-brand-black font-medium underline">https://shiftupafrica.com</a> (the “Website”).
          </p>

          <p>
            ShiftUp Africa exists to empower young Africans with the mindset, tools, and access needed to succeed in their careers and personal lives. We take your trust seriously, and that includes how we handle your data.
          </p>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">1. Information We Collect</h2>
            <p className="mb-4">We may collect information about you in the following ways:</p>
            
            <div className="mb-4">
              <h3 className="font-bold text-brand-black mb-2">a. Personal Information</h3>
              <p className="mb-2">When you voluntarily provide it to us, we may collect:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Location (country or city)</li>
                <li>Any other information you submit through forms, registrations, newsletters, or contact pages</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-brand-black mb-2">b. Automatically Collected Information</h3>
              <p className="mb-2">When you access the Website, we may automatically collect:</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited and time spent on the site</li>
                <li>Referring URLs</li>
              </ul>
              <p className="mt-4">This data helps us understand how users interact with our platform and improve our services.</p>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">2. How We Use Your Information</h2>
            <p className="mb-2">We use the information we collect to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Provide and improve our programs, content, and services</li>
              <li>Communicate with you about updates, opportunities, and resources</li>
              <li>Respond to inquiries and support requests</li>
              <li>Send newsletters, announcements, and relevant opportunities (you can opt out anytime)</li>
              <li>Monitor and analyze website usage and trends</li>
              <li>Ensure security and prevent fraudulent activity</li>
            </ul>
            <p className="mt-4 font-medium italic">In short: we use your data to serve you better—not to sell you nonsense.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">3. Sharing of Information</h2>
            <p className="mb-4">We do not sell, rent, or trade your personal information.</p>
            <p className="mb-2">We may share information only:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>With trusted service providers who help us operate the Website (e.g., email platforms, analytics tools)</li>
              <li>When required by law, regulation, or legal process</li>
              <li>To protect the rights, safety, and integrity of ShiftUp Africa and its community</li>
            </ul>
            <p className="mt-4">All third parties are required to respect your data and use it only for the intended purpose.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="mb-2">We may use cookies and similar technologies to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Improve website functionality</li>
              <li>Understand user behavior</li>
              <li>Personalize content and experience</li>
            </ul>
            <p className="mt-4">You can disable cookies in your browser settings, but some parts of the Website may not function properly if you do so.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">5. Data Security</h2>
            <p>
              We implement reasonable administrative, technical, and organizational measures to protect your personal information.
              That said, no system is 100% secure. While we do our best, we cannot guarantee absolute security of data transmitted over the internet.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">6. Your Rights and Choices</h2>
            <p className="mb-2">Depending on your location, you may have the right to:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request corrections or updates</li>
              <li>Request deletion of your data</li>
              <li>Withdraw consent for communications</li>
            </ul>
            <p className="mt-4">To exercise any of these rights, contact us using the details below.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">7. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. Please review their privacy policies separately.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">8. Children's Privacy</h2>
            <p>
              ShiftUp Africa does not knowingly collect personal information from children under the age of 13. If we become aware that such data has been collected, we will take steps to delete it promptly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">9. Changes to This Privacy Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be reflected on this page, and the updated date will be revised accordingly. Your continued use of the Website means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-brand-black mb-4">10. Contact Us</h2>
            <p className="mb-2">If you have questions or concerns about this Privacy Policy or how we handle your data, please contact us at:</p>
            <ul className="space-y-1">
              <li>Email: <a href="mailto:info@shiftupafrica.com" className="text-brand-black font-medium underline">info@shiftupafrica.com</a></li>
              <li>Website: <a href="https://shiftupafrica.com" className="text-brand-black font-medium underline">https://shiftupafrica.com</a></li>
            </ul>
          </section>

        </div>
      </div>

      {/* Decorative Blocks - Bottom Left */}
      <div className="absolute bottom-0 left-0 z-0 flex flex-col pointer-events-none mb-12">
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FACC15] bg-block-policy"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FDE047] bg-block-policy"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FEF9C3] bg-block-policy"></div>
        </div>
        <div className="flex">
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-[#FDE047] opacity-60 bg-block-policy"></div>
          <div className="w-10 h-10 md:w-16 md:h-16 bg-transparent"></div>
        </div>
      </div>

    </div>
  );
};

export default PrivacyPolicy;
