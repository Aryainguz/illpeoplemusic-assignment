"use client";
import { useEffect, useState } from "react";
import BeatsList from "./BeatsList";
import MusicPlayer from "./MusicPlayer";

const ExploreBeats = () => {
  const [isRefresh, setIsRefresh] = useState(false);

  const handleRefresh = () => {
    setIsRefresh(true);
    setTimeout(() => {
      setIsRefresh(false);
    }, 1000);
  };



  return (
    <>
           <div className="flex flex-col gap-4 py-4 px-7 md:px-8 md:py-8">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-white">
            Explore <span className="text-indigo-400">Beats</span>
          </h1>
          <button
            className="px-4 py-2 text-[#cb99e9] border-[#cb99e9] border-2 rounded-3xl
            text-xs sm:text-lg
            "
            onClick={handleRefresh}
          >
            {isRefresh ? "Refreshing..." : "Refresh"}
          </button>
        </div>

        <div className="flex gap-4 mt-4 overflow-x-auto scrollbar-hide">
          <button
            className="bg-[#262626] px-4 py-2 rounded-3xl shadow-lg text-xs text-white transition-all duration-300 ease-in-out
              hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 whitespace-nowrap"
          >
            Trending Beats
          </button>
          <button
            className="bg-[#262626] px-4 py-2 rounded-3xl shadow-lg text-xs text-white hover:bg-gradient-to-r hover:from-violet-600 hover:to-indigo-600 whitespace-nowrap"
          >
            Trending Beats
          </button>
          <button
            className="bg-[#262626] px-4 py-2 rounded-3xl shadow-lg text-xs text-white hover:bg-gradient-to-r hover:from-emerald-400 hover:to-cyan-400 whitespace-nowrap"
          >
            Trending Beats
          </button>
          <button
            className="bg-[#262626] px-4 py-2 rounded-3xl shadow-lg text-xs text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 whitespace-nowrap"
          >
            Trending Beats
          </button>
        </div>
      </div>
      <BeatsList />
      <MusicPlayer />
    </>
  );
};

export default ExploreBeats;
