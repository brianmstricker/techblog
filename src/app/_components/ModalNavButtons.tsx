import { ChevronLeft, ChevronRight } from "lucide-react";

const ModalNavButtons = () => {
 return (
  <div className="absolute top-4 left-4 flex gap-3">
   <button className="rounded-sm relative group">
    <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-background px-3 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 rounded-md border-2 text-sm font-medium pointer-events-none">
     Prev
    </span>
    <ChevronLeft
     className="w-6 h-6 opacity-70
      transition-[opacity] hover:opacity-100 duration-150"
    />
   </button>
   <button className="rounded-sm relative group">
    <span className="absolute -top-9 left-1/2 -translate-x-1/2 bg-background px-3 py-1 opacity-0 group-hover:opacity-100 group-focus:opacity-100 rounded-md border-2 text-sm font-medium pointer-events-none">
     Next
    </span>
    <ChevronRight
     className="w-6 h-6 opacity-70
      transition-[opacity] hover:opacity-100 duration-150"
    />
   </button>
  </div>
 );
};
export default ModalNavButtons;
