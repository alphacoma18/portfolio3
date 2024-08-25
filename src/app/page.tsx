import Competencies from "@/components/Competencies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Recommendations from "@/components/Recommendations";
export default function Home() {
  return (
    <span className="block md:flex w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Competencies />
        <Recommendations />
      </main>
    </span>
  );
}
