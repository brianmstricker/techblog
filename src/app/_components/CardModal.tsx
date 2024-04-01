"use client";
import { Dialog, DialogContent, DialogFooter, DialogTrigger } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

const CardModal = () => {
 const contentRef = useRef<HTMLDivElement>(null);
 return (
  <>
   <Dialog>
    <DialogTrigger asChild>
     <div className="w-full h-full absolute cursor-pointer"></div>
    </DialogTrigger>
    <DialogContent
     onOpenAutoFocus={(e) => {
      e.preventDefault();
      contentRef.current?.focus();
     }}
     className="w-full h-full sm:h-[90%] sm:max-w-[500px] md:max-w-[650px] lg:max-w-[900px]"
    >
     <div className="absolute top-3 left-4 flex gap-3">
      <button className="rounded-sm relative group">
       <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-background px-3 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 rounded-md border-2 text-sm font-medium">
        Prev
       </span>
       <ChevronLeft
        className="w-6 h-6 opacity-70
transition-[opacity] hover:opacity-100 duration-150"
       />
      </button>
      <button className="rounded-sm relative group">
       <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-background px-3 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 rounded-md border-2 text-sm font-medium">
        Next
       </span>
       <ChevronRight
        className="w-6 h-6 opacity-70
transition-[opacity] hover:opacity-100 duration-150"
       />
      </button>
     </div>
     <div ref={contentRef} tabIndex={0} className="mt-6 focus:outline-none">
      <h2>How to Build a Full-Stack Kanban Task Management App With TypeScript, Next.js, Redux-toolkit, and Firebase</h2>
     </div>
    </DialogContent>
   </Dialog>
  </>
 );
};
export default CardModal;
