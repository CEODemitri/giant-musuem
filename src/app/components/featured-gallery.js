import Image from "next/image";
import gallery1 from "../img/gallery1.jpg";
import gallery2 from "../img/gallery2.jpg";
import gallery3 from "../img/gallery3.jpg";

export default function FeaturedGallery() {
  return (
    <section className="mb-8 bg-orange-700/40 p-6 rounded-lg backdrop-blur-3xl hover:bg-amber-500/60 transition-all duration-500 border-8 border-orange-100/30">
      <article>
        <h3 className="text-xl mb-4 text-[var(--foreground)]">
          Featured Gallery
        </h3>
        <h2 className="text-3xl mb-2 text-[var(--foreground)] font-bold">
          Masterpieces of the 1800s
        </h2>
        <p className="text-[var(--foreground)]">
          Discover our curated selection of masterpieces from around the world,
          showcasing art that transcends time and culture representing the
          1800s.
        </p>
      </article>
      {/* Gallery content goes here */}
      {/* three images and a video */}
      <div className="flex">
        <Image src={gallery1} alt="Gallery Image 1" width={300} height={200} />
        <Image src={gallery2} alt="Gallery Image 2" width={300} height={200} />
        <Image src={gallery3} alt="Gallery Image 3" width={300} height={200} />
        <video width="300" height="200" controls>
          <source src="/walk_in_history.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}
