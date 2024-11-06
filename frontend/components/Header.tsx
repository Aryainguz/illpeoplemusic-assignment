"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "./ui/input";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 py-4 px-6">
      <div className="flex items-center gap-4">
        <Image src="/main-logo-white.png" alt="logo" width={125} height={125} />
        <Input placeholder="Search top beats" className="w-80 bg-[#303030]" />
        <DropdownMenu open={open} onOpenChange={setOpen}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              className="h-8 px-8 py-2
            relative z-10 right-[134px]
            text-white
            bg-[#3f3f3f]"
            >
              General
              <ArrowDown
                size={16}
                className="absolute right-2 top-1/2 transform -translate-y-1/2"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align="end"
            className="bg-[#303030]
          text-white"
          >
            <DropdownMenuItem className="cursor-pointer">
              <span>General</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span>Beat</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span>Tag</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span>Mood</span>
            </DropdownMenuItem>
            <DropdownMenuItem className="cursor-pointer">
              <span>Genre</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-4">
        <Button
          variant="link"
          className="px-3 py-3 text-white text-sm font-semibold"
        >
          Sign In
        </Button>
        <Button
          variant="secondary"
          className="px-3 py-3 text-xs text-white font-semibold bg-gradient-to-r from-violet-600 to-indigo-600"
        >
          Start Selling
        </Button>
      </div>
    </header>
  );
};

export default Header;
