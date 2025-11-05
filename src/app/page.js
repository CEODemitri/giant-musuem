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
          className="absolute -z-10 h-full w-full object-cover"
        />
      </div>
      <h1 className="text-5xl text-center">Giant Musuem</h1>
    </main>
  );
}
