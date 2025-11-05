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
      <div className="absolute top-0 left-0 h-screen w-screen bg-[var(--background)] opacity-70 -z-5 flex flex-col">
        <h2>ok</h2>

        {/* dont like this mt-60 below, find resolution/alt asap */}
        <h1 className="text-[250px] font-bold text-center mt-[60vh] text-[var(--foreground)]">
          JOURNEY
        </h1>
      </div>
    </main>
  );
}
