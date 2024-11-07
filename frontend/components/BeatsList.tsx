"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Input } from "@/components/ui/input";
import { dataContext } from "@/context/dataContext";
import {
  ArrowDown,
  EllipsisVertical,
  MoreVertical,
  Music,
  PlayCircle,
  Search,
  ShoppingCart,
  Waves,
} from "lucide-react";
import Image from "next/image";
import { useContext } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface Beat {
  id: number;
  title: string;
  producer: {
    store: {
      general: {
        name: string;
      };
    };
  };
  tempo: number;
  key: string;
  cover_picture: string;
  prices: { final_price: number }[];
  tag: string[];
  preview: string;
}

interface BeatCardProps {
  title: string;
  artist: string;
  bpm: number;
  genere: string;
  price: number;
  tags: string[];
  img: string;
  src: string;
}

const FilterDropdown = ({ title }: { title: string }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="text-[#787878] text-xs font-semibold flex">
      {title}
      <ArrowDown size={16} className="text-[#787878] relative ml-1" />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-[#303030] text-white">
      <DropdownMenuItem className="cursor-pointer">Beats</DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer">Beats With Hook</DropdownMenuItem>
      <DropdownMenuItem className="cursor-pointer">Switch Beat</DropdownMenuItem>
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

const BeatCard: React.FC<BeatCardProps> = ({ title, artist, bpm, genere, price, tags, img, src }) => {
  const { setPlayingSong, setSongOn } = useContext(dataContext);

  return (
    <div
      className="beat-card"
      onClick={() => {
        setPlayingSong({ title, artist, bpm, genere, price, tags, img, src });
        setSongOn(true);
      }}
    >
      <Card className="bg-zinc-900 border-[#1e1e1e] block sm:hidden">
        <div className="divide-y divide-zinc-800">
          <div className="flex items-center justify-between gap-4 bg-[#1e1e1e] p-4">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <Image
                src={img}
                alt="cover"
                className="w-14 h-14 rounded-md"
                width={48}
                height={48}
              />
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-medium text-white truncate">{title}</h3>
                <p className="text-sm text-zinc-400 truncate">{artist}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="bg-gradient-to-r from-violet-600 to-indigo-600 flex text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
                <ShoppingCart size={16} className="mr-2" />₹{price}
              </button>
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

      <div className="items-center justify-between py-4 border-b border-gray-700 cursor-pointer hover:bg-[#3f3f3f] hidden sm:flex">
        <div className="flex items-center gap-4">
          <PlayCircle className="text-white" size={24} />
          <Image src={img} alt="cover" className="w-12 h-12 rounded-md" width={48} height={48} />
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
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-[#3f3f3f] text-white text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        <button className="bg-gradient-to-r from-violet-600 to-indigo-600 flex text-white px-4 py-2 rounded-md text-sm font-semibold shadow-lg">
          <ShoppingCart size={16} className="mr-2" />₹{price}
        </button>
        <EllipsisVertical size={20} className="text-white relative top-2" />
      </div>
    </div>
  );
};

const BeatsList = () => {
  const { data, search, setSearch } = useContext(dataContext);

  return (
    <div className="min-h-screen p-6 text-white">
      <div className="flex">
        <Search className="text-white relative z-10 left-[32px] top-3" size={20} />
        <Input
          placeholder="Search top beats"
          className="w-80 bg-[#303030] h-11 px-4 py-2 rounded-lg text-center"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="flex items-center justify-between mt-6">
        <Filters />
        <SortDropdown />
      </div>
      <div className="mt-6">
        {data ? (
          data.map((beat: Beat) => (
            <BeatCard
              key={beat.id}
              title={beat.title}
              artist={beat.producer.store.general.name}
              bpm={beat.tempo}
              genere={beat.key}
              img={beat.cover_picture}
              price={beat.prices[0].final_price}
              tags={beat.tag}
              src={beat.preview}
            />
          ))
        ) : (
          <p>Loading beats...</p>
        )}
      </div>
    </div>
  );
};

export default BeatsList;
