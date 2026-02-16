
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
import FeaturesOverlay from './FeaturesOverlay';
import { PageType } from '../App';

interface HomeProps {
  onNavigate?: (page: PageType, sectionId?: string, blogId?: number) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
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
        <AboutSection onNavigate={onNavigate} />
        <CTASection onNavigate={onNavigate} />
        <TestimonialsSection />
        <OpportunitiesSection />
        <ProgramsSection />
        <div id="events">
          <EventsSection />
        </div>
        <TeamPreviewSection onNavigate={onNavigate} />
        
        <PartnerSection />
        <BlogSection onNavigate={onNavigate} />
        <FAQSection />
      </div>
    </>
  );
};

export default Home;
