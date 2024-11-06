"use client"
import { useState } from "react";


const Banner = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mt-4 text-sm">
    <div className="w-full h-[0.4px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
      <div className="flex items-center py-4 mx-auto max-w-7xl">
        <div className="flex gap-4">
        <h2 className="text-white relative group
        cursor-pointer
        ">
    BEATS
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </h2>


          
  <h2 className="text-white relative group cursor-pointer">
    GENRES
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
  </h2>

        </div>
      </div>
      <div className="w-full h-[0.8px] bg-gradient-to-r from-transparent via-white to-transparent"></div>

</div>
  );
};

export default Banner;
