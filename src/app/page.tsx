import Competencies from "@/components/Competencies";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Recommendations from "@/components/Recommendations";
import Affiliations from "@/components/Affiliations";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
export default function Home() {
  return (
    <span className="block lg:flex w-full">
      <Navbar />
      <main className="w-full">
        <Hero />
        <Competencies />
        <Projects />
        <Affiliations />
        <Recommendations />
        <Footer />
      </main>
      <BackToTop />
    </span>
  );
}
