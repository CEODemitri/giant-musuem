import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="bg-[url(/img/mainbg.jpeg)] h-full w-full bg-center"></div>
      <h1 className="text-5xl text-center">Giant Musuem</h1>
    </main>
  );
}
