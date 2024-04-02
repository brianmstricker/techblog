import Link from "next/link";
import { Button } from "./ui/button";
import { ThemeToggle } from "./ThemeToggle";
import SearchBar from "./SearchBar";
import MobileMenu from "./MobileMenu";

const Header = () => {
 return (
  <div className="py-2 bg-background/80 sticky top-0 backdrop-blur border-b shadow-md shadow-black/5 dark:shadow-white/5 z-10">
   <div className="flex justify-center sm:justify-between items-center px-4 mx-auto">
    <Link href="/" className="text-[2rem] sm:text-[2.5rem] font-bold tracking-wider">
     <span className="text-emerald-500">tec</span>hie
    </Link>
    <div className="sm:flex items-center gap-2 hidden">
     <SearchBar />
     <ThemeToggle />
     <Button>Sign in</Button>
    </div>
    <MobileMenu />
   </div>
  </div>
 );
};
export default Header;
