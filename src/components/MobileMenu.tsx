"use client";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const MobileMenu = () => {
 const [showMenu, setShowMenu] = useState(false);
 const menuRef = useRef<HTMLDivElement>(null);
 function handleClickOutside(event: MouseEvent) {
  if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
   setShowMenu(false);
  }
 }
 useEffect(() => {
  if (showMenu && menuRef) {
   document.addEventListener("click", handleClickOutside);
  }
  return () => {
   document.removeEventListener("click", handleClickOutside);
  };
 }, [showMenu]);
 return (
  <div className="sm:hidden absolute right-4 mt-1.5">
   <Button variant={"ghost"} className="group" onClick={() => setShowMenu(true)}>
    <Menu className="group-active:scale-[1.15] group-active:stroke-emerald-500 transition-[scale_stroke]" />
   </Button>
   <div
    ref={menuRef}
    className={cn(
     "fixed sm:hidden top-0 right-[600px] bg-background border-l h-screen scale-0 opacity-0 w-[240px] transition-[scale_opacity_right] duration-300 ease-in-out z-50",
     showMenu && "scale-100 opacity-100 right-0"
    )}
   >
    menu
   </div>
  </div>
 );
};
export default MobileMenu;
