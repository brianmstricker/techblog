import { cn } from "@/lib/utils";

const tags = ["React", "Software Development", "Javascript", "Coding", "Tech"];

const CardTags = ({ className }: { className?: string }) => {
 return (
  <div className="flex flex-wrap gap-2 mt-2">
   {tags.map((tag) => (
    <span
     key={tag}
     className={cn(
      "rounded-md px-2 py-1 text-xs bg-accent/40 border border-t-[3px] text-foreground/80 shadow-md dark:shadow-white/5",
      className && className
     )}
    >
     {tag}
    </span>
   ))}
  </div>
 );
};
export default CardTags;
