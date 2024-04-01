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

const UserButtons = () => {
 return (
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
 );
};
export default UserButtons;
