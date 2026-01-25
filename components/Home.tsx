
import React from 'react';
import Hero from './Hero';
import BackgroundBlocks from './BackgroundBlocks';
import ImpactSection from './ImpactSection';
import AboutSection from './AboutSection';
import OpportunitiesSection from './OpportunitiesSection';
import ProgramsSection from './ProgramsSection';
import EventsSection from './EventsSection';
import TestimonialsSection from './TestimonialsSection';
import TeamPreviewSection from './TeamPreviewSection';
import CTASection from './CTASection';
import PartnerSection from './PartnerSection';
import BlogSection from './BlogSection';
import FAQSection from './FAQSection';
import GetInTouchSection from './GetInTouchSection';
import FeaturesOverlay from './FeaturesOverlay';

const Home: React.FC = () => {
  return (
    <>
      {/* Background decoration layer */}
      <BackgroundBlocks />
      
      {/* Content layer */}
      <div className="relative z-10">
        <Hero />
      </div>

      {/* Feature Cards Overlaying Hero */}
      <FeaturesOverlay />

      {/* Sections Layer */}
      <div className="relative z-20 mt-12 md:mt-24">
        <ImpactSection />
        <AboutSection />
        <CTASection />
        <TestimonialsSection />
        <OpportunitiesSection />
        <ProgramsSection />
        <EventsSection />
        <TeamPreviewSection />
        
        <PartnerSection />
        <BlogSection />
        <GetInTouchSection />
        <FAQSection />
      </div>
    </>
  );
};

export default Home;
