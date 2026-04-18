"use client";

import { useState } from "react";

export default function PriceFilter() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(1000);
  
  const minPercent = (min / 1000) * 100;
  const maxPercent = (max / 1000) * 100;

  const handleMinChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), max - 1);
    setMin(value);
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), min + 1);
    setMax(value);
  };

  return (
    <div>
      <p className="mb-3 font-medium">Price</p>
      <div className="relative h-5 flex items-center">
        {/* Track Line */}
        <div className="absolute w-full h-[3px] bg-white/30 rounded-full" />
        
        {/* Active Track Line */}
        <div 
          className="absolute h-[3px] bg-white rounded-full pointer-events-none" 
          style={{ left: `${minPercent}%`, right: `${100 - maxPercent}%` }}
        />
        
        {/* Thumb Inputs */}
        <input 
          type="range" 
          min="0" max="1000" 
          value={min} 
          onChange={handleMinChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full z-20"
        />
        <input 
          type="range" 
          min="0" max="1000" 
          value={max} 
          onChange={handleMaxChange}
          className="absolute w-full appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3.5 [&::-webkit-slider-thumb]:h-3.5 [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:rounded-full [&::-moz-range-thumb]:pointer-events-auto [&::-moz-range-thumb]:w-3.5 [&::-moz-range-thumb]:h-3.5 [&::-moz-range-thumb]:bg-white [&::-moz-range-thumb]:border-none [&::-moz-range-thumb]:rounded-full z-30"
        />
      </div>
      <div className="flex justify-between text-sm mt-2 font-light">
        <span>0</span>
        <span>1000</span>
      </div>
    </div>
  );
}
