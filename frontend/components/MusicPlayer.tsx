"use client";
import { Button } from "@/components/ui/button"; 
import { Slider } from "@/components/ui/slider";
import { dataContext } from "@/context/dataContext";
import { Pause, Play, ShoppingCart, Volume2 } from "lucide-react"; 
import Image from "next/image";
import React, { useContext, useEffect, useRef, useState } from "react";





export default function MusicPlayer() {
  const [progress, setProgress] = useState(30);
  const [volume, setVolume] = useState(100);


  const { playingSong } = useContext(dataContext);

  const audioRef = useRef<HTMLAudioElement>(new Audio(playingSong?.src));

  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const togglePlayPause = (): void => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause();
    };
  }, []);


  return (
    <div className="pt-16">
    <div className="fixed bottom-0 left-0 right-0 bg-black text-white py-4 px-6 flex items-center justify-between shadow-lg z-50">
      <div className="flex gap-4">

      <Image
        src={playingSong?.img}
        alt="cover"
        className="w-12 h-12 rounded-md"
        width={48}
        height={48}
      />
      <div className="flex flex-col">
        <span className="font-semibold text-lg">{playingSong.artist}</span>
        <span className="text-sm text-gray-400">{playingSong.title} | {playingSong.bpm} BPM</span>
      </div>
      </div>


      <div className="flex items-center gap-4">
        <Button
          onClick={togglePlayPause}
          variant="link"
          className="
          absolute bottom-20 right-28 text-white flex sm:hidden 
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
     {playingSong.price}
    </button>
      </div>
    </div>
    </div>
  );
}