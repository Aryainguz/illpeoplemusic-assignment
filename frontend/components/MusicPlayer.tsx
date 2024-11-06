"use client";
import { Button } from "@/components/ui/button"; 
import { Slider } from "@/components/ui/slider";
import { Pause, Play, ShoppingCart, Volume2 } from "lucide-react"; 
import Image from "next/image";
import React, { useState } from "react";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(100);

  const togglePlayPause = () => setIsPlaying(!isPlaying);

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 flex items-center justify-between shadow-lg z-50">
      <div className="flex gap-4">

      <Image
        src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1730869604~exp=1730873204~hmac=4860b332d3e72d2402d2460228cc511256340ff38adba3b6870d06f59f4d5727&w=740"
        alt="cover"
        className="w-12 h-12 rounded-md"
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-lg">ALIEN OG</span>
        <span className="text-sm text-gray-400">BEATOONS | 160 BPM</span>
      </div>
      </div>


      <div className="flex items-center gap-4">
        <Button
          onClick={togglePlayPause}
          variant="link"
          className="
          absolute bottom-20 right-28 text-white
          "
          size="icon"
        >
          {isPlaying ? <Pause size={24} /> : <Play size={24} />}
        </Button>

        <div className="w-48">
          <Slider
            value={[progress]}
            onValueChange={(value) => setProgress(value[0])}
            max={100}
            step={1}
            className="w-full"
          />
        </div>

        {/* Volume Control */}
        <div className="hidden sm:flex items-center gap-2">
          <Volume2 size={20} 
          />
          <Slider
            value={[volume]}
            onValueChange={(value) => setVolume(value[0])}
            max={100}
            step={1}
            className="w-20"
          />
        </div>
      </div>

      {/* Purchase Buttons */}
      <div className="hidden sm:flex gap-2">
      <button className="bg-gradient-to-r from-violet-600 to-indigo-600 flex text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
      <ShoppingCart size={16} className="mr-2" />
      ₹2,000
    </button>
      </div>
    </div>
  );
}