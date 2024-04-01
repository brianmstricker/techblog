import HomeCard from "./_components/HomeCard";

export default function Home() {
 return (
  <main className="grid min-[740px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mt-4">
   {Array.from({ length: 10 }).map((_, i) => (
    <HomeCard key={i} />
   ))}
  </main>
 );
}
