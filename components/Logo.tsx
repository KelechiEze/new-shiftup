import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-baseline group font-bold text-2xl tracking-tight select-none cursor-pointer leading-none">
      <div className="flex items-center">
        <span>SH</span>
        <div className="relative mx-[1px]">
          {/* The 'I' */}
          <span>I</span>
          {/* The yellow arrow specifically placed above the I */}
          <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[4px] border-l-transparent border-r-[4px] border-r-transparent border-b-[6px] border-b-brand-yellow"></div>
        </div>
        <span>FTUP</span>
      </div>
      
      <div className="flex flex-col items-start ml-1.5">
        <span className="font-normal text-sm uppercase tracking-wide opacity-90 leading-none">AFRICA</span>
        <span className="font-serif italic text-[0.5rem] md:text-[0.6rem] tracking-wider opacity-80 mt-1 whitespace-nowrap">
          ..A Life Of Great Possibilities
        </span>
      </div>
    </div>
  );
};

export default Logo;