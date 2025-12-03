import Header from "@/components/ui/header"
import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";

export default function Home() {
  return (

    <main className="flex min-h-screen items-center justify-center bg-gray-100 w-full">
      <Header />
      <section className="flex justify-between items-center relative w-full">
        <div className="absolute z-10 mr-200 pl-32">
          <h1 className="font-mono font-bold text-8xl">Human</h1>
          <h1 className="font-mono font-bold text-8xl">stories & ideas</h1>
          <p className="font-sans text-xl mt-10">A place to read, write, and deepen your understanding
          </p>
          <Button variant="default" size="lg" className="bg-mainPink hover:bg-darkPink rounded-3xl py-6 px-10 text-lg mt-8">Start reading</Button>
        </div>
        <img src="/typewriter_transparent.png" alt="Typewriter illustration" className="relative ml-[60%]" />
      </section>
    </main>
  );
}
