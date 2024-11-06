"use client";

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { useState } from 'react';
import { Input } from './ui/input';
import { ArrowDown01Icon } from 'lucide-react';

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between gap-4 py-4 px-6">
      <div className="flex items-center gap-4">
       <Image src="/main-logo-white.png" alt='logo' width={125} height={125}
   
       />
       <Input placeholder="Search top beats" className="w-80"
           
           style={
            {
              backgroundColor: "#303030",
            }
           }
       />
        <DropdownMenu open={open} onOpenChange={setOpen}
        >
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="h-8 px-8 py-2
            relative z-10 right-[134px]
            text-wite"
            style={{ backgroundColor: "#3f3f3f" }}
            >
              General
              <ArrowDown01Icon size={16} className="absolute right-2 top-1/2 transform -translate-y-1/2" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem>
              <span>General</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <span>Beat</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="link" className="px-6 py-3 text-white">
          Sign In
        </Button>
        <Button variant="secondary" className="px-6 py-3 text-white bg-gradient-to-r from-violet-600 to-indigo-600">
          Start Selling
        </Button>
      </div>
    </header>
  );
};

export default Header;
