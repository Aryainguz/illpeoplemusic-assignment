'use client'

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { ArrowDown, Menu, Search } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { useMediaQuery } from "react-responsive"

export default function Component() {
  const [open, setOpen] = useState(false)
  const isMobile = useMediaQuery({ maxWidth: 768 })

  const menuItems = [
    { label: "General", value: "general" },
    { label: "Beat", value: "beat" },
    { label: "Tag", value: "tag" },
    { label: "Mood", value: "mood" },
    { label: "Genre", value: "genre" },
  ]

  const renderDesktopMenu = () => (
    <>
      <div className="flex items-center gap-4">
        <Image src="/main-logo-white.png" alt="logo" width={125} height={125} />
        <div className="relative">
          <Input placeholder="Search top beats" className="w-80 bg-[#303030]" />
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-7 px-8 py-2 absolute right-1 top-1 bottom-0 text-white bg-[#3f3f3f]"
              >
                General
                <ArrowDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#303030] text-white">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.value} className="cursor-pointer">
                  <span>{item.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button variant="link" className="px-3 py-3 text-white text-sm font-semibold">
          Sign In
        </Button>
        <Button
          variant="secondary"
          className="px-3 py-3 text-xs text-white font-semibold bg-gradient-to-r from-violet-600 to-indigo-600"
        >
          Start Selling
        </Button>
      </div>
    </>
  )

  const renderMobileMenu = () => (
    <div className="flex flex-col w-full">
      <div className="flex items-center justify-between w-full py-2">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="text-white">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-[300px] bg-[#303030] text-white">
            <nav className="flex flex-col gap-4 mt-8">
              <Button variant="link" className="justify-start text-white text-sm font-semibold">
                Sign In
              </Button>
              <Button variant="link" className="justify-start text-white text-sm font-semibold">
                Browse Beats
              </Button>
              <Button variant="link" className="justify-start text-white text-sm font-semibold">
                Top Charts
              </Button>
              <Button variant="link" className="justify-start text-white text-sm font-semibold">
                Sell Beats
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

        <Image src="/main-logo-white.png" alt="logo" width={80} height={80} className="mx-auto" />

        <Button
          variant="secondary"
          className="px-3 py-1.5 text-xs text-white font-semibold bg-gradient-to-r from-violet-600 to-indigo-600"
        >
          Start Selling
        </Button>
      </div>

      <div className="px-4 py-2 bg-[#1e1e1e]">
        <div className="relative">
          <Input 
            placeholder="Search top beats" 
            className="w-full bg-[#303030] pr-24" 
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="h-full px-4 absolute right-0 top-0 text-white bg-[#3f3f3f] border-l border-[#505050]"
              >
                General
                <ArrowDown size={16} className="ml-2" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-[#303030] text-white">
              {menuItems.map((item) => (
                <DropdownMenuItem key={item.value} className="cursor-pointer">
                  <span>{item.label}</span>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  )

  return (
    <header className="flex items-center justify-between gap-4 py-4 px-6 bg-[#1e1e1e]">
      {isMobile ? renderMobileMenu() : renderDesktopMenu()}
    </header>
  )
}