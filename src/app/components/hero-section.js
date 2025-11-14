import Image from "next/image";
import bg from "@/app/img/mainbg.jpeg";
import FeaturedGallery from "@/app/components/featured-gallery";

export default function HeroSection() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-neutral-900 mt-8">
            <section className="relative h-screen w-full overflow-hidden">

                {/* Background Image */}
                <Image
                    src={bg}
                    alt="Giant Museum Background"
                    fill
                    priority
                    className="object-cover object-center -z-10"
                />

                {/* Soft Overlay */}
                <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-[1px] -z-5" />

                {/* Centered Content */}
                <div className="relative z-16 flex flex-col items-center h-full gap-10 text-center px-6">

                    {/* Featured Gallery Block */}
                    <div className="max-w-6xl mt-[14vh] drop-shadow-xl">
                        <FeaturedGallery />
                    </div>

                    {/* Subtitle / Tagline */}
                    <article className="max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-light leading-snug text-white tracking-wide">
                            Explore the wonders of the Giant Museum—where history becomes
                            an experience. Discover the wonders of our world.
                        </h2>
                    </article>
                </div>

                {/* Bottom-Pinned JOURNEY Text */}
                <div className="absolute bottom-[12vh] left-1/2 -translate-x-1/2 z-10">
                    <h1 className="text-[16vw] md:text-[14vw] font-bold text-white/40 leading-none select-none tracking-tight">
                        JOURNEY
                    </h1>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-[3vh] left-1/2 -translate-x-1/2 z-10">
                    <p className="text-sm text-white/80 tracking-wide">
                        Scroll to Explore
                    </p>
                </div>
            </section>
        </main>
    )
}