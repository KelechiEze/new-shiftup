
import React from 'react';
import WhyShiftUpHero from './WhyShiftUpHero';
import WhyShiftUpAbout from './WhyShiftUpAbout';
import WhyShiftUpVisionMission from './WhyShiftUpVisionMission';
import WhyShiftUpTeam from './WhyShiftUpTeam';

const WhyShiftUp: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <WhyShiftUpHero />
      <WhyShiftUpAbout />
      <WhyShiftUpVisionMission />
      <WhyShiftUpTeam />
    </div>
  );
};

export default WhyShiftUp;
