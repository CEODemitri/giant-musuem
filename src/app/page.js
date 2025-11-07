import Image from "next/image";
import bg from "./img/mainbg.jpeg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="relative h-screen w-screen overflow-hidden">
        <Image
          src={bg}
          alt="Giant Museum Background"
          width={1920}
          height={1080}
          className="-z-10 h-full w-full object-cover"
        />
      </div>
      <div className="absolute top-0 left-0 h-screen w-screen bg-[var(--background)] opacity-70 -z-5">
        <section className="flex flex-col items-end justify-end h-screen w-screen gap-8 px-4">
          <article className="">
            <h2 className="text-2xl w-5/12">
              Explore the wonders of the Giant Museum, where history comes
              alive. Wonders of our World.
            </h2>
            <p></p>
          </article>

          {/* dont like this mt-60 below, find resolution/alt asap */}
          <h1 className="text-[250px] font-bold text-center text-[var(--foreground)]">
            JOURNEY
          </h1>
          <div>
            <p className="">Scroll to Explore</p>
          </div>
        </section>
      </div>
    </main>
  );
}
