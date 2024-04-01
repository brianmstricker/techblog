import Image from "next/image";
import testImg from "@/app/assets/test.jpg";
import CardModal from "./CardModal";
import UserButtons from "./UserButtons";

const tags = ["React", "Software Development", "Javascript", "Coding", "Tech"];

const HomeCard = () => {
 return (
  <div className="bg-background border-2 border-b-4 rounded-md w-full h-full shadow shadow-black/30 hover:border-b-emerald-500 focus-within:border-b-emerald-500 transition-[border] duration-300 ease-in-out relative">
   <CardModal />
   <h3 className="line-clamp-3 text-xl px-3 leading-6 mt-1">
    How to Build a Full-Stack Kanban Task Management App With TypeScript, Next.js, Redux-toolkit, and Firebase
   </h3>
   <div className="my-2 rounded-md overflow-hidden bg-background mx-1 lg:max-h-[170px]">
    <Image src={testImg} alt="test" width={2000} height={170} className="object-cover" />
   </div>
   <div className="text-sm -mt-1 px-3 text-muted-foreground flex flex-col">
    <span className="line-clamp-1">By: Brian Stricker Michael the Fourth King Julian</span>
    <span className="shrink-0 font-medium">Mar 31, 2024</span>
    <div className="flex flex-wrap gap-2 mt-2">
     {tags.map((tag) => (
      <span key={tag} className="rounded-md px-2 py-1 text-xs bg-black/20">
       {tag}
      </span>
     ))}
    </div>
   </div>
   <div className="mb-1">
    <UserButtons />
   </div>
  </div>
 );
};
export default HomeCard;
