import Image from "next/image";
import bg from "@/app/img/mainbg.jpeg";
import FeaturedGallery from "@/app/components/featured-gallery";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            {/* Content overlay */}
            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left content */}
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-neutral-200/80 backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium tracking-wide uppercase">
                  Now Exhibiting
                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95]">
                                <span className="">Illuminating</span>
                                <br />
                                <span className="">1800s</span>
                            </h1>

                            <p className="text-lg md:text-xl text-neutral-500/70 max-w-xl text-pretty leading-relaxed">
                                Experience classical masterpieces through contemporary perspectives.
                                A groundbreaking exhibition featuring 50+ works from the not so distant past.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className="flex items-center">
                                    Explore Exhibition
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                                <button className="bg-neutral-400/80 backdrop-blur-sm">
                                    View Schedule
                                </button>
                            </div>

                            <div className="flex items-center gap-8 pt-6">
                                <div>
                                    <div className="text-3xl font-bold text-neutral-500/70">500+</div>
                                    <div className="text-sm text-neutral-500/50">Masterworks</div>
                                </div>
                                <div className="h-12 w-px bg-text-neutral-200/70" />
                                <div>
                                    <div className="text-3xl font-bold text-neutral-500/70">18th-20th</div>
                                    <div className="text-sm text-neutral-500/50">Centuries</div>
                                </div>
                                <div className="h-12 w-px bg-secondary/20" />
                                <div>
                                    <div className="text-3xl font-bold text-neutral-500/70">Until Dec 31</div>
                                    <div className="text-sm text-neutral-500/50">Limited Time</div>
                                </div>
                            </div>
                        </div>

                        {/* Right featured artwork */}
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-secondary/10 backdrop-blur-sm border border-secondary/20 shadow-2xl">
                                <img
                                    src="/renaissance-painting-masterpiece.jpg"
                                    alt="Featured Renaissance artwork"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating info card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-6 border border-border shadow-lg">
                                <h3 className="font-semibold text-lg mb-1">The Birth of Venus</h3>
                                <p className="text-sm text-muted-foreground mb-3">Sandro Botticelli, c. 1485</p>
                                <p className="text-sm text-foreground/80">
                                    Oil on canvas, 172.5 cm × 278.9 cm
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}