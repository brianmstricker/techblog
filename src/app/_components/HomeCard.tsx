import Image from "next/image";
import testImg from "@/app/assets/test.jpg";
import { Bookmark, CircleArrowUp, Link2, MessageCircleMore } from "lucide-react";
import { cn } from "@/lib/utils";

const userOptions = [
 {
  text: "Upvote",
  icon: CircleArrowUp,
 },
 {
  text: "Bookmark",
  icon: Bookmark,
 },
 {
  text: "Comment",
  icon: MessageCircleMore,
 },
 {
  text: "Share",
  icon: Link2,
 },
];

const HomeCard = () => {
 return (
  <div className="bg-background border-2 rounded-md py-2 w-full h-full shadow shadow-black/30">
   <h3 className="line-clamp-3 text-xl px-3 leading-6">
    How to Build a Full-Stack Kanban Task Management App With TypeScript, Next.js, Redux-toolkit, and Firebase
   </h3>
   <div className="my-2 rounded-md overflow-hidden bg-background mx-1 lg:max-h-[170px]">
    <Image src={testImg} alt="test" width={2000} height={170} className="object-cover" />
   </div>
   <div className="text-sm -mt-1 px-3 text-muted-foreground flex flex-col">
    <span className="line-clamp-1">By: Brian Stricker Michael the Fourth</span>
    <span className="shrink-0 font-medium">Mar 31, 2024</span>
   </div>
   <div className="flex justify-between px-3 mt-3 text-muted-light text-sm">
    {userOptions.map((option) => (
     <button
      key={option.text}
      className={cn(
       "p-1.5 group rounded-md relative duration-300 outline-none transition-[background]",
       option.text === "Upvote" && "hover:bg-orange-400/20 focus:bg-orange-400/20",
       option.text === "Comment" && "hover:bg-sky-400/20 focus:bg-sky-400/20",
       option.text === "Bookmark" && "hover:bg-emerald-500/20 focus:bg-emerald-500/20",
       option.text === "Share" && "hover:bg-violet-600/20 focus:bg-violet-600/20"
      )}
     >
      <span className="absolute opacity-0 left-1/2 -translate-x-1/2 bg-background border py-1.5 px-4 group-hover:opacity-100 transition-[opacity_top] duration-300 top-8 group-hover:-top-9 scale-0 group-hover:scale-100 group-focus:opacity-100 group-focus:scale-100 group-focus:-top-9 pointer-events-none select-none">
       {option.text}
      </span>
      {option.text === "Upvote" ? (
       <CircleArrowUp className="group-hover:stroke-orange-400 group-focus:stroke-orange-400" />
      ) : option.text === "Comment" ? (
       <MessageCircleMore className="group-hover:stroke-sky-400 group-focus:stroke-sky-400" />
      ) : option.text === "Bookmark" ? (
       <Bookmark className="group-hover:stroke-emerald-500 group-focus:stroke-emerald-500" />
      ) : (
       option.text === "Share" && <Link2 className="group-hover:stroke-violet-600 group-focus:stroke-violet-600" />
      )}
     </button>
    ))}
   </div>
  </div>
 );
};
export default HomeCard;
