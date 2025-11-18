import { Palette, Music, Calendar } from "lucide-react";
import HeroSection from "./components/hero-section";
import Footer from "./components/footer";
import {AboutGrid} from "@/app/components/about";

export default function Home() {
  return (
    <>
        <HeroSection/>


        {/* featured showcase */}
        <section className="min-h-screen py-10 md:py-16 px-6 md:px-12 lg:px-24 bg-neutral-50 text-neutral-900">
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
            <div id="events" className="mt-10">
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

        {/* about museum */}
        <AboutGrid />

        {/* upcoming exhibit info */}
        <section className="py-32 px-6 bg-neutral-100">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                    <div className="space-y-8">
                        <div className="space-y-4">
                            <p className="text-sm font-medium tracking-widest uppercase">
                                Coming Soon
                            </p>
                            <h2 className="text-5xl md:text-6xl text-balance">
                                Upcoming Exhibitions
                            </h2>
                            <p className="text-lg leading-relaxed">
                                Discover our carefully curated selection of upcoming exhibitions
                                that will transport you through time, culture, and artistic
                                innovation.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="border-l-2 border-b-neutral-300 pl-6 space-y-2">
                                <p className="text-sm">March 2026</p>
                                <h3 className="text-2xl">Ancient Civilizations</h3>
                                <p className="text-neutral-500/70">
                                    Explore the mysteries of ancient Egypt, Rome, and Greece
                                </p>
                            </div>

                            <div className="border-l-2 border-accent pl-6 space-y-2">
                                <p className="text-sm">April 2026</p>
                                <h3 className="text-2xl">Modern Masters</h3>
                                <p className="text-neutral-500/70">
                                    A retrospective of 20th century artistic movements
                                </p>
                            </div>
                        </div>

                        <button className="mt-4 bg-white">
                            View Full Calendar
                        </button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        <div className="space-y-6">
                            <div className="aspect-[3/4] bg-neutral-500/70 rounded-lg" />
                            <div className="aspect-square bg-neutral-500/70 rounded-lg" />
                        </div>
                        <div className="space-y-6 pt-12">
                            <div className="aspect-square bg-neutral-500/70 rounded-lg" />
                            <div className="aspect-[3/4] bg-neutral-500/70 rounded-lg" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* footer */}
        <Footer />
    </>
  );
}
