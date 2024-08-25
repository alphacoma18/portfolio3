import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Competency from "@/components/Competencies";
export default function Home() {
  return (
    <span className="block md:flex w-full">
      <Navbar />
      <main className="h-[400vh] w-full">
        <Hero />
        <Competency />
      </main>
    </span>
  );
}
