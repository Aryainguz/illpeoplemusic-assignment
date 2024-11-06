"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import {
  ArrowDown,
  ArrowDown01Icon,
  Music,
  PlayCircle,
  Search,
  Waves,
} from "lucide-react";
import Image from "next/image";

const FilterDropdown = ({ title }: {title:string}) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="text-[#787878] text-xs font-semibold flex">
      {title}
      <ArrowDown size={16} className="text-[#787878] relative ml-1" />
    </DropdownMenuTrigger>

    <DropdownMenuContent
      className="bg-[#303030]
          text-white
          "
    >
      <DropdownMenuItem className="cursor-pointer">Beats</DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer">
        Beats With Hook
      </DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer">
        Switch Beat
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

const Filters = () => (
  <div className="flex gap-6 text-[#787878] text-xs font-semibold">
    <span>Filters:</span>
    <FilterDropdown title="Beat Types" />
    <FilterDropdown title="Moods" />
    <FilterDropdown title="Tempo" />
    <FilterDropdown title="Genre" />
    <FilterDropdown title="Keys" />
    <FilterDropdown title="Instruments" />
    <FilterDropdown title="Price" />
  </div>
);

const SortDropdown = () => (
  <div className="flex items-center gap-2 text-white text-xs">
    <span>Sort by:</span>
    <FilterDropdown title="For you" />
  </div>
);

const BeatCard = ({ title, artist, bpm, genere, price, tags }: any) => (
  <div className="flex items-center justify-between py-4 border-b border-gray-700">
    <div className="flex items-center gap-4">
      {/* <img
        src="/path/to/cover.jpg"
        alt="Cover"
        className="w-12 h-12 rounded-md"
      /> */}
      <PlayCircle className="text-white" size={24} />

      <Image
        src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1730869604~exp=1730873204~hmac=4860b332d3e72d2402d2460228cc511256340ff38adba3b6870d06f59f4d5727&w=740"
        alt="cover"
        className="w-12 h-12 rounded-md"
        width={48}
        height={48}
      />

      <div>
        <h3 className="text-white font-semibold text-sm">{title}</h3>
        <div className="text-gray-500 text-xs flex items-center gap-2">
          <p className="text-gray-400 text-xs">{artist}</p>
          <span className="flex mr-2 ml-2">
            <Waves size={16} className="mr-2" />
            {bpm} BPM
          </span>
          <span className="flex">
            <Music size={16} className="mr-2" />
            {genere}
          </span>
        </div>
      </div>
    </div>
    <div className="flex gap-2">
      {tags.map((tag: any) => (
        <span
          key={tag}
          className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full"
        >
          {tag}
        </span>
      ))}
    </div>
    <button className="bg-purple-600 text-white px-4 py-2 rounded-full text-xs font-semibold shadow-lg">
      ₹{price}
    </button>
  </div>
);

const BeatsList = () => (
  <div className="min-h-screen p-6 text-white">
    <div className="flex">
      <Search
        className="text-white relative z-10 left-[32px] top-3"
        size={20}
      />
      <Input
        placeholder="Search top beats"
        className="w-80 bg-[#303030] 
  h-11 px-4 py-2 rounded-lg text-center
  "
      />
    </div>

    <div className="flex items-center justify-between mt-6">
      <Filters />
      <SortDropdown />
    </div>
    <div className="mt-6">
      <BeatCard
        title="DIE SOON"
        artist="subu beats"
        bpm="140"
        genere="G Minor"
        price="599"
        tags={["HORON BEAT"]}
      />
      <BeatCard
        title="BLAZING FLAMES"
        artist="Gehra Samandar"
        bpm="128"
        genere="C# Minor"
        price="999"
        tags={["NEW STYLE", "TRAP", "CONFIDENT"]}
      />
      <BeatCard
        title="OYE"
        artist="RAYZ-X"
        bpm="104"
        genere="A Minor"
        price="2,499"
        tags={["Indian", "Badshah", "Moombahton"]}
      />
    </div>
  </div>
);

export default BeatsList;
