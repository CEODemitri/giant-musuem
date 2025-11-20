import { Palette, Music, Calendar } from "lucide-react";
import HeroSection from "./components/heroSection";
import FeaturedShowcase from "./components/featuredShowcase";
import {AboutGrid} from "@/app/components/about";
import Footer from "./components/footer";



export default function Home() {
  return (
    <>
        <HeroSection />


        {/* featured showcase */}
        <FeaturedShowcase />

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
