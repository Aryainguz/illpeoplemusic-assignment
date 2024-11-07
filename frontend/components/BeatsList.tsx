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
  DropletsIcon,
  EllipsisVertical,
  MoreVertical,
  Music,
  PlayCircle,
  Search,
  ShoppingCart,
  Waves,
} from "lucide-react";
import Image from "next/image";
import { Card } from "./ui/card";
import { Avatar } from "./ui/avatar";
import { Button } from "./ui/button";
import { dataContext } from "@/context/dataContext";
import { useContext } from "react";

const FilterDropdown = ({ title }: { title: string }) => (




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
  <div className="hidden sm:flex gap-6 text-[#787878] text-xs font-semibold">
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
    <span className="flex sm:hidden">Filter by:</span>
    <span className="hidden sm:flex">Sort by:</span>
    <FilterDropdown title="For you" />
  </div>
);

const BeatCard = ({ title, artist, bpm, genere, price, tags }: any) => (




  <div className="beat-card">
    {/* <div className="min-h-screen "> */}
      <Card className="bg-zinc-900 border-[#1e1e1e] block sm:hidden">
        <div className="divide-y divide-zinc-800">
          <div
            // key={index}
            className="flex items-center justify-between gap-4
              bg-[#1e1e1e] p-4"
          >
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <Image
                  src="https://img.freepik.com/free-psd/saturday-party-social-media-template_505751-2936.jpg?t=st=1730869604~exp=1730873204~hmac=4860b332d3e72d2402d2460228cc511256340ff38adba3b6870d06f59f4d5727&w=740"
                  alt="cover"
                  className="w-14 h-14 rounded-md"
                  width={48}
                  height={48}
                />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white truncate">
                  {title}
                </h3>
                <p className="text-sm text-zinc-400 truncate">{artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
            <div className="flex">
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 flex text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
          <ShoppingCart size={16} className="mr-2" />₹{price}
        </button>
      </div>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-zinc-400 hover:text-white"
                  >
                    <MoreVertical className="h-5 w-5" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  align="end"
                  className="w-[200px] bg-zinc-900 border-zinc-800"
                >
                  <DropdownMenuItem className="text-white focus:bg-zinc-800 focus:text-white">
                    Share
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white focus:bg-zinc-800 focus:text-white">
                    Add to playlist
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-white focus:bg-zinc-800 focus:text-white">
                    View artist
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </Card>
    
     
    {/* </div> */}



    
    <div
      className="items-center justify-between py-4 border-b border-gray-700
  cursor-pointer hover:bg-[#3f3f3f] hidden sm:flex
  "
    >
      <div className="flex items-center gap-4">

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
            className="bg-[#3f3f3f] text-white text-xs px-2 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex">
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 flex text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
          <ShoppingCart size={16} className="mr-2" />₹{price}
        </button>
        <EllipsisVertical
          size={20}
          className="text-white relative top-2"
          color="#787878"
        />
      </div>
    </div>
  </div>
);

const BeatsList = () => {


  const {data} = useContext(dataContext);
  console.log("yo",data)

return (
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
         {data ? (
          data.map((beat: any) => (
            <BeatCard
              key={beat.id}
              title={beat.title}
              artist={beat.producer.store.general.name}
              // artist={"Producer"}
              bpm={beat.tempo}
              genere={beat.key}
              img={beat.cover_picture}
              price={beat.prices[0].final_price}
              tags={beat.tag}
            />
          ))
        ) : (
          <p>Loading beats...</p> 
        )}
      
    </div>
  </div>
);
}
export default BeatsList;
