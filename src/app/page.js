import Image from "next/image";
import bg from "./img/mainbg.jpeg";
import FeaturedGallery from "./components/featured-gallery";
import { Palette, Music, Calendar } from "lucide-react";

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

      {/* featured showcase */}
      <div className="h-screen py-20 px-6 md:px-12 lg:px-24">
        {/* featured exhibit details and showcase */}
        <section className="flex">
          <article>
            <h2 className="text-4xl font-bold text-orange-900 mb-4">
              Roaring 1800s Showcase
            </h2>
            <p className="max-w-4xl text-sm">
              Dive into the vibrant world of the 1800s with our exclusive
              gallery hidden above. Experience the artistry and culture that
              defined an era.
            </p>
          </article>
          <div className="my-6 italic uppercase flex">
            <div>
              <p>May 27 2025 - 2026</p>
              <p>London, Paris</p>
              <div>
                <Palette className="inline-block w-5 h-5 text-orange-600 mr-2" />
                <Music className="inline-block w-5 h-5 text-orange-600" />
              </div>
            </div>

            <h3 className="text-xs">
              Includes: Guided Tours, Interactive Displays, Period Performances,
              Art Workshops and Photography Sessions
            </h3>
          </div>
        </section>

        {/* sub: attractions */}
        <section id="events">
          <h3 className="text-2xl font-bold text-center text-orange-900 mb-12">
            Popular Attractions
          </h3>
          <div className="max-w-2xl mx-auto space-y-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {[...Array(2)].map((_, i) => (
              <div
                key={i}
                className="bg-gradient-to-r from-purple-50 to-amber-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <Calendar className="text-orange-600 w-6 h-6" />
                  <span className="text-purple-900 font-semibold">
                    June {5 + i}, 2026
                  </span>
                </div>
                <article>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">
                    Exhibition: The Color of Dreams
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Join us for an immersive journey through latest collection,
                    exploring the vivid landscapes of the subconscious mind.
                  </p>
                </article>
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
        {/* featured people and ideas */}

        {/* book visit */}
      </div>
      <div className="flex justify-between">
        <article className="bg-blue-300 w-1/2">
          <h4>Artists</h4>

          <div className="flex flex-wrap">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="bg-blue-200 p-6 rounded-md shadow-md hover:shadow-lg transition-shadow duration-300 w-1/2"
              >
                <div className="flex items-center space-x-4 mb-2">
                  <span className="text-purple-900 font-semibold">
                    Artist {1 + i}
                  </span>
                  {/* <Image src={} width={} height={}/> */}
                </div>
                <article>
                  <h3 className="text-xl font-bold text-amber-800 mb-2">
                    Exhibition: The Color of Dreams
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Join us for an immersive journey through latest collection,
                    exploring the vivid landscapes of the subconscious mind.
                  </p>
                </article>
              </div>
            ))}
          </div>
        </article>

        <article className="bg-blue-300 w-1/2">
          <h4>Ideas</h4>
        </article>
      </div>

      {/* about */}
      <section id="about" class="w-full py-20 bg-white">
        <div class="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div class="w-full h-64 bg-gray-200 md:h-80 rounded-lg"></div>

          <div class="max-w-xl">
            <h3 class="text-4xl font-bold mb-6">About the Museum</h3>
            <p class="text-gray-700 mb-4">
              Our museum is dedicated to preserving, showcasing, and celebrating
              the arts and cultures that shaped the world.
            </p>
            <p class="text-gray-700">
              With rotating exhibits, educational programs, and community
              events, we aim to inspire visitors of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* visit info */}
      <section id="visit" class="w-full py-20 bg-gray-100">
        <div class="max-w-5xl mx-auto px-4 text-center">
          <h3 class="text-4xl font-bold mb-8">Plan Your Visit</h3>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-xl font-semibold mb-2">Hours</h4>
              <p class="text-gray-700 text-sm">Mon–Sat: 10am – 6pm</p>
              <p class="text-gray-700 text-sm">Sun: 12pm – 5pm</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-xl font-semibold mb-2">Tickets</h4>
              <p class="text-gray-700 text-sm">Adults: $18</p>
              <p class="text-gray-700 text-sm">Students: $12</p>
              <p class="text-gray-700 text-sm">Kids: Free</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow">
              <h4 class="text-xl font-semibold mb-2">Location</h4>
              <p class="text-gray-700 text-sm">123 Museum St, Art City</p>
              <p class="text-gray-700 text-sm">Free parking available</p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer class="w-full py-8 bg-gray-900 text-white text-center">
        <p class="text-sm">
          &copy; 2025 Museum of Art & History. All rights reserved.
        </p>
      </footer>
    </>
  );
}
