import Image from "next/image";
import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";

export default function FeaturedGallery() {
  return (
    <section className="mb-10 bg-white/10 p-8 rounded-xl backdrop-blur-xl border border-white/20 transition-all duration-500">
      <article className="mb-8">
        <h3 className="text-md mb-2 text-black/40 tracking-wide uppercase">
          Featured Presentation:
        </h3>

        <h2 className="text-5xl mb-4 text-black/40 font-bold leading-tight">
          Illuminating the 1800s
        </h2>

        <p className="text-black/40 text-base text-center m-auto max-w-2xl">
          Did you think you knew the real history of the 1800s? Highly doubt you did; Giant museum uncovers the truth in mindblowing showcases. We made our truth assessable to everyone, for the world to explore.
        </p>
      </article>

      {/* Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="w-full h-full overflow-hidden rounded-lg bg-black/10">
          <Image
            src={gallery1}
            alt="Gallery Image 1"
            width={300}
            height={200}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="w-full h-full overflow-hidden rounded-lg bg-black/10">
          <Image
            src={gallery2}
            alt="Gallery Image 2"
            width={300}
            height={200}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="w-full h-full overflow-hidden rounded-lg bg-black/10">
          <Image
            src={gallery3}
            alt="Gallery Image 3"
            width={300}
            height={200}
            className="w-full h-full object-cover grayscale"
          />
        </div>

        <div className="w-full h-full overflow-hidden rounded-lg bg-black/10 flex items-center justify-center">
          <video className="w-full h-full object-cover grayscale" controls>
            <source src="/walk_in_history.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
