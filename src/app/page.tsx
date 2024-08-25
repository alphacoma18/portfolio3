import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <span className="block sm:flex">
      <Navbar />
      <main className="p-2 h-[400vh]">
        <h1>Hello</h1>
      </main>
    </span>
  );
}
