"use client";
import { Search } from "lucide-react";
import { Input } from "./ui/input";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SearchBar = () => {
 const [showSearch, setShowSearch] = useState(false);
 const searchRef = useRef<HTMLDivElement>(null);
 const inputRef = useRef<HTMLInputElement>(null);
 function handleClickOutside(event: MouseEvent) {
  if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
   setShowSearch(false);
  }
 }
 useEffect(() => {
  if (showSearch && searchRef) {
   document.addEventListener("click", handleClickOutside);
  }
  return () => {
   document.removeEventListener("click", handleClickOutside);
  };
 }, [showSearch]);
 function handleClick() {
  if (!showSearch && inputRef.current) {
   setShowSearch(true);
   inputRef.current.focus();
  }
 }
 return (
  <div ref={searchRef} className="flex items-center gap-1 relative">
   <Input
    ref={inputRef}
    onFocus={() => setShowSearch(true)}
    type="text"
    placeholder="Search"
    id="headerSearch"
    className={cn("pr-9 opacity-0 transition-all duration-200 sm:w-[300px] absolute sm:static", showSearch && "opacity-100")}
   />
   <div
    onClick={handleClick}
    className={cn(
     "absolute right-0 h-10 w-10 inline-flex items-center justify-center rounded-md cursor-pointer ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group hover:bg-accent hover:text-accent-foreground",
     showSearch && ""
    )}
   >
    <Search
     className={cn(
      "rotate-90 w-6 group-hover:stroke-emerald-500 transition-[transform_stroke_scale] duration-200 group-active:scale-[1.25]",
      showSearch && "scale-[.8]"
     )}
    />
   </div>
  </div>
 );
};
export default SearchBar;
