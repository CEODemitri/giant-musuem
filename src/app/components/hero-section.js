import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden">

            <div className="relative z-10 h-full flex items-center">
                <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                        {/* Left content */}
                        <div className="space-y-6">
                            <div className="inline-block px-3 py-1 bg-accentlight text-background backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium tracking-wider uppercase">
                  Featured Exhibition
                </span>
                            </div>

                            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95]">
                                <span className="">The Other</span>
                                <br />
                                <span className="">1800s</span>
                            </h1>

                            <p className="text-lg md:text-xl text-neutral-500/70 max-w-xl text-pretty leading-relaxed">
                                Illuminating ancient masterpieces that awaken our true introperspectives.
                                Groundbreaking showcase featuring <span className="font-bold">5000+</span> works from the not so distant past.
                            </p>

                            <div className="flex flex-wrap gap-4 pt-4">
                                <button className=" border border-accent flex items-center bg-primary text-background backdrop-blur-sm px-2 rounded-md">
                                    Explore Exhibition
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </button>
                                <button className="border-2 p-2 rounded-md border-neutral-500/60 backdrop-blur-sm">
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
                                    <div className="text-3xl font-bold text-neutral-500/70">&gt;18th</div>
                                    <div className="text-sm text-neutral-500/50">Century</div>
                                </div>
                                <div className="h-12 w-px bg-secondary/20" />
                                <div>
                                    <div className="text-3xl font-bold text-neutral-500/70">Dec 31</div>
                                    <div className="text-sm text-neutral-500/50">Limited Time</div>
                                </div>
                            </div>
                        </div>

                        {/* Right featured artwork */}
                        <div className="relative">
                            <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-secondary/10 backdrop-blur-sm border border-secondary/20 shadow-2xl">
                                <img
                                    src="/img/gallery1.jpg"
                                    alt="Featured Renaissance artwork"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Floating info card */}
                            <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-6 border border-border shadow-lg">
                                <h3 className="font-semibold text-lg mb-1">The Birth of Jotunheim</h3>
                                <p className="text-sm text-muted-foreground mb-3">Demitri Botticelli, c. 1885</p>
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