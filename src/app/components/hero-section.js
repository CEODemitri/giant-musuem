import Image from "next/image";
import bg from "@/app/img/mainbg.jpeg";
import FeaturedGallery from "@/app/components/featured-gallery";

export default function HeroSection() {
    return (
        <main className="flex flex-col min-h-screen bg-white text-neutral-900 mt-16 md:mt-8">
            <section className="relative flex flex-col min-h-screen w-full overflow-hidden">

                {/* Background */}
                {/* will replace when i find suitable bg */}
                <Image
                    src={bg}
                    alt="Giant Museum Background"
                    fill
                    priority
                    className="object-cover object-center -z-10"
                />
                <div className="absolute inset-0 bg-neutral-900/30 backdrop-blur-[1px] -z-5" />

                {/* Main Content – centered vertically but allows bottom content */}
                <div className="flex flex-col items-center justify-center flex-grow gap-10 px-6 text-center mt-16">

                    <div className="max-w-6xl drop-shadow-xl">
                        <FeaturedGallery />
                    </div>

                    <article className="max-w-2xl">
                        <h2 className="text-2xl md:text-3xl font-light leading-snug text-black/40 tracking-wide">
                            Explore the wonders of the Giant Museum—where history becomes
                            an experience. Discover the magic in our world.
                        </h2>
                    </article>
                </div>

                {/* Bottom Area */}
                <div className="flex flex-col items-center mb-8 space-y-4">

                    <h1 className="text-[16vw] md:text-[14vw] font-bold text-black/40 leading-none select-none tracking-wider">
                        JOURNEY
                    </h1>

                    <p className="text-sm text-black/60 tracking-wide">
                        Scroll to Explore
                    </p>

                </div>

            </section>
        </main>

    )
}