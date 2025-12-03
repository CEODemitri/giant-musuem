import Image from "next/image";
import { ArrowRight } from "lucide-react";
import AmbianceParticles from "./particles";

export default function HeroSection() {
  return (
    <section className="relative h-auto min-h-screen w-full overflow-hidden pb-28">
      <AmbianceParticles />
      {/* Background overlay (optional texture) */}
      <div className="absolute inset-0 bg-[url('/textures/noise.png')] opacity-20 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 pt-24 h-full flex items-center mt-32">
        <div className="max-w-[1600px] mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left content */}
            <div className="space-y-8">
              <div className="inline-block px-3 py-1 bg-accentlight text-background backdrop-blur-sm rounded-full">
                <span className="text-xs font-medium tracking-wider uppercase">
                  Featured Showcase
                </span>
              </div>

              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[0.95]">
                <span>The Other</span>
                <br />
                <span>1800s</span>
              </h1>

              <p className="text-lg md:text-xl text-neutral-500/70 max-w-xl text-pretty leading-relaxed">
                Illuminating ancient masterpieces that awaken our true
                introspective senses. A groundbreaking showcase featuring{" "}
                <span className="font-bold">5000+</span> works from the hidden
                corners of the past.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4">
                <button className="hover:bg-accent border border-accent flex items-center bg-primary text-background backdrop-blur-sm px-3 py-2 rounded-md group">
                  Explore Exhibition
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <button className="hover:bg-neutral-500/20 px-4 py-2 rounded-md border border-neutral-500/40 backdrop-blur-sm">
                  View Schedule
                </button>
              </div>

              {/* Stats */}
              <div className="flex items-center gap-8 pt-6">
                <div>
                  <div className="text-3xl font-bold text-neutral-700">
                    500+
                  </div>
                  <div className="text-sm text-neutral-500">Masterworks</div>
                </div>

                <div className="h-12 w-px bg-neutral-300/50" />

                <div>
                  <div className="text-3xl font-bold text-neutral-700">
                    &gt;18th
                  </div>
                  <div className="text-sm text-neutral-500">Century</div>
                </div>

                <div className="h-12 w-px bg-neutral-300/50" />

                <div>
                  <div className="text-3xl font-bold text-neutral-700">
                    Dec 31
                  </div>
                  <div className="text-sm text-neutral-500">Limited Time</div>
                </div>
              </div>

              {/* Museum tagline */}
              <p className="pt-8 text-neutral-700/80 italic text-sm max-w-md">
                “Preserving the echoes of humanity — one masterpiece at a time.”
              </p>
            </div>

            {/* Right featured artwork */}
            <div className="relative">
              <div className="aspect-[2/3] rounded-2xl overflow-hidden bg-secondary/10 backdrop-blur-sm border border-secondary/20 shadow-2xl">
                <img
                  src="/img/gallery1.jpg"
                  alt="Featured artwork"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating info card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/95 backdrop-blur-md rounded-xl p-6 border border-border shadow-lg">
                <h3 className="font-semibold text-lg mb-1">
                  The Birth of Jotunheim
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Demitri Botticelli, c. 1885
                </p>
                <p className="text-sm text-foreground/80">
                  Oil on canvas, 172.5 cm × 278.9 cm
                </p>
              </div>
            </div>
          </div>

          {/* good reference so leaving — Curated Highlights */}
          {/* <div className="mt-20 grid md:grid-cols-3 gap-12">
            {["Highlight One", "Highlight Two", "Highlight Three"].map(
              (title, idx) => (
                <div
                  key={idx}
                  className="p-6 rounded-xl border border-neutral-200 bg-background/70 backdrop-blur-sm shadow-md"
                >
                  <h4 className="text-xl font-semibold mb-2">{title}</h4>
                  <p className="text-neutral-600 text-sm leading-relaxed">
                    Placeholder text for highlight description. Replace with
                    exhibit previews, artist info, or thematic notes.
                  </p>
                </div>
              )
            )}
          </div> */}

          {/* NEW — Visitor Info Section */}
          <div className="mt-24 bg-neutral-100/60 backdrop-blur-sm border border-neutral-300/50 rounded-xl p-10 grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="font-semibold mb-1">Museum Hours</h4>
              <p className="text-neutral-600 text-sm">Tue–Sun, 10am–6pm</p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Location</h4>
              <p className="text-neutral-600 text-sm">
                Placeholder street address City, Country
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-1">Admission</h4>
              <p className="text-neutral-600 text-sm">
                General • Students • Free Days
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
