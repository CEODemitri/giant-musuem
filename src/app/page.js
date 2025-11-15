import { Palette, Music, Calendar } from "lucide-react";
import HeroSection from "@/app/components/hero-section";

let date = new Date();
let currentYear = new Date().getFullYear();

export default function Home() {
  return (
    <>
        <HeroSection />


        {/* featured showcase */}
        <section className="min-h-screen py-10 md:py-20 px-6 md:px-12 lg:px-24 bg-neutral-50 text-neutral-900">
            {/* featured exhibit details and showcase */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-10">
                <article>
                    <h2 className="text-4xl font-semibold text-neutral-800 tracking-tight mb-4">
                        Roaring 1800s Showcase
                    </h2>
                    <p className="max-w-3xl text-sm text-neutral-600 leading-relaxed">
                        Dive into the vibrant world of the 1800s with our exclusive gallery.
                        Experience the artistry and culture that defined an era still standing centuries later.
                        The wise will see.
                    </p>
                </article>

                <div className="my-6 italic uppercase flex flex-col gap-3 text-neutral-700">
                    <div>
                        <p className="text-xs tracking-wide">
                            May 27 2025 – 2026
                        </p>

                        <p className="text-xs tracking-wide">
                            London, Jotunheim
                        </p>

                        <div className="flex items-center gap-2 mt-2">
                            <Palette className="inline-block w-5 h-5 text-neutral-500" />
                            <Music className="inline-block w-5 h-5 text-neutral-500" />
                        </div>
                    </div>

                    <h3 className="text-[0.65rem] text-neutral-500 leading-relaxed max-w-xs">
                        Includes: Guided Tours, Interactive Displays, Period Performances,
                        Art Workshops, and Photography Sessions
                    </h3>
                </div>
            </div>

            {/* sub: attractions */}
            <div id="events" className="mt-20">
                <h3 className="text-2xl font-semibold text-center text-neutral-800 tracking-tight mb-12">
                    Our Popular Attractions
                </h3>

                <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-white p-6 rounded-lg border border-neutral-200 shadow-sm hover:shadow-md transition-shadow duration-300"
                        >
                            <div className="flex items-center gap-3 mb-4">
                                <Calendar className="text-neutral-700 w-6 h-6" />
                                <span className="text-sm font-medium text-neutral-800">
              June {5 + i}, 2026
            </span>
                            </div>

                            <article>
                                <h3 className="text-xl font-medium text-neutral-800 mb-2 tracking-tight">
                                    Exhibition: The Color of Dreams
                                </h3>
                                <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                                    Join us for an immersive journey through the latest collection,
                                    exploring the vivid landscapes of the subconscious mind.
                                </p>
                            </article>

                            <button className="px-4 py-2 text-sm border border-neutral-800 text-neutral-800 rounded-md hover:bg-neutral-900 hover:text-white transition-all">
                                Learn More
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>



        {/* featured people and ideas */}
        <section className="flex flex-col gap-20 px-6 md:px-12 lg:px-24 py-16">
            <section className="px-6 md:px-12 lg:px-24 py-16">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">

                    {/* Brutalist title for Ideas */}
                    <h2 className="text-4xl font-extrabold uppercase border-b-4 border-black tracking-tight">
                        Explore the wonders of the Giant Museum
                    </h2>


                </div>
            </section>


            {/* -------------------- IDEAS  -------------------- */}
            <article className="bg-white p-6 rounded-xl shadow-lg text-neutral-900">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 ">
                    Ideas
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="hover:bg-black hover:text-white hover:border-2 border-b-red-400 transition-colors duration-200 p-6 rounded-xl"
                        >
                            <h3 className="text-xl font-extrabold uppercase mb-2">
                                Concept {i + 1}
                            </h3>
                            <p className="text-xs leading-snug">
                                Explore a groundbreaking concept shaping the museum experience.
                                Bold ideas that challenge the imagination and invite reflection.
                            </p>
                        </div>
                    ))}
                </div>
            </article>

            {/* -------------------- PEOPLE -------------------- */}
            <article className="bg-white p-6 rounded-xl shadow-lg">
                <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-neutral-900">
                    People
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
                    {[...Array(4)].map((_, i) => (
                        <div
                            key={i}
                            className="bg-neutral-50 rounded-xl shadow hover:shadow-xl transition-shadow duration-300 p-6"
                        >
                            <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium text-neutral-800">
              Artist {i + 1}
            </span>
                                {/* Placeholder for image */}
                            </div>

                            <article className="space-y-2">
                                <h3 className="text-lg md:text-xl font-semibold text-neutral-900">
                                    Exhibition: The Color of Dreams
                                </h3>
                                <p className="text-neutral-600 text-sm leading-relaxed">
                                    Join us for an immersive journey through the latest collection,
                                    exploring the vivid landscapes of the subconscious mind.
                                </p>
                            </article>
                        </div>
                    ))}
                </div>
            </article>

        </section>


        {/* about */}
      <section id="about" className="w-full py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
          <div className="w-full h-64 bg-gray-200 md:h-80 rounded-lg"></div>

          <div className="max-w-xl">
            <h3 className="text-4xl font-bold mb-6">About our Museum</h3>
            <p className="text-gray-700 mb-4">
              Dedicated to preserving the days of here and there. We present work in it&apos;s highest quality at each showcase. Our ultimate goal is to awaken and celebrating
              the true arts and cultures that shaped our reality and this world.
            </p>
            <p className="text-gray-700">
              With rotating exhibits, educational programs, and community
              events, we aim to inspire visitors of all ages.
            </p>
          </div>
        </div>
      </section>

      {/* visit info */}
      <section id="visit" className="w-full py-20 bg-gray-100">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h3 className="text-4xl font-bold mb-8">We&apos;d love for You to Visit</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Hours</h4>
              <p className="text-gray-700 text-sm">Moon–Saturn: 6am – 9pm</p>
              <p className="text-gray-700 text-sm">Sun: 10am – 9pm</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Entrance</h4>
              <p className="text-gray-700 text-sm">Adults: $8</p>
              <p className="text-gray-700 text-sm">Students: $3</p>
              <p className="text-gray-700 text-sm">Children: Free</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-xl font-semibold mb-2">Location</h4>
              <p className="text-gray-700 text-sm">8 Jotunheim Way, Art Land</p>
              <p className="text-gray-700 text-sm">Free parking available</p>
            </div>
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="w-full py-8 bg-neutral-900 text-white text-center">
        <p className="text-sm">
          &copy; {currentYear} Giant Museum of Art & History. All rights reserved.
        </p>

      </footer>
    </>
  );
}
