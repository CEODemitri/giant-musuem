import Image from "next/image";
import bg from "./img/mainbg.jpeg";
import FeaturedGallery from "./components/featured-gallery";
import {
  Palette,
  Music,
  Calendar,
  Instagram,
  Twitter,
  Facebook,
} from "lucide-react";

export default function Home() {
  return (
    <>
      <main className="flex flex-col min-h-screen">
        <section className="relative h-screen w-full overflow-hidden">
          {/* Background Image */}
          <Image
            src={bg}
            alt="Giant Museum Background"
            fill
            priority
            className="object-cover -z-10"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[var(--background)] opacity-60 -z-5" />

          {/* Centered Content */}
          <div className="relative z-10 flex flex-col items-center h-full gap-8 text-center">
            <div className="max-w-6xl mt-[13vh]">
              <FeaturedGallery />
            </div>

            <article className="max-w-2xl">
              <h2 className="text-2xl md:text-3xl leading-snug">
                Explore the wonders of the Giant Museum, where history comes
                alive. Wonders of our World.
              </h2>
            </article>
          </div>

          {/* Bottom-Pinned “JOURNEY” Text */}
          <div className="absolute bottom-[10vh] left-1/2 -translate-x-1/2 z-10">
            <h1 className="text-[18vw] font-bold text-[var(--foreground)] leading-none select-none opacity-60">
              JOURNEY
            </h1>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-[2vh] left-1/2 -translate-x-1/2 text-sm opacity-80 z-10">
            <p>Scroll to Explore</p>
          </div>
        </section>
      </main>

      <div className="h-screen">
        {/* featured exhbit details and showcase */}
        {/* attractions */}
        <section id="events" className="py-20 px-6 md:px-12 lg:px-24 bg-white">
          <h2 className="text-4xl font-bold text-center text-purple-900 mb-12">
            Upcoming Events
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Calendar className="text-purple-600 w-6 h-6" />
                  <span className="text-purple-900 font-semibold">
                    June {15 + i}, 2025
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-purple-800 mb-2">
                  Exhibition: The Color of Dreams
                </h3>
                <p className="text-gray-700 mb-4">
                  Join us for an immersive journey through latest collection,
                  exploring the vivid landscapes of the subconscious mind.
                </p>
                <button
                  variant="outline"
                  className="bg-white text-purple-600 border-purple-600 hover:bg-purple-100"
                >
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </section>
        {/* info/details */}
        {/* featured people */}
        {/* featured ideas */}
        {/* book visit */}
      </div>
    </>
  );
}
