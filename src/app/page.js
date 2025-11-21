import { Palette, Music, Calendar } from "lucide-react";
import HeroSection from "./components/heroSection";
import FeaturedShowcase from "./components/featuredShowcase";
import {AboutGrid} from "@/app/components/about";
import Footer from "./components/footer";
import UpcomingExhibit from "./components/upcomingExhibit";



export default function Home() {
  return (
    <>
        <HeroSection />


        {/* featured showcase */}
        <FeaturedShowcase />

        {/* about museum */}
        <AboutGrid />

        {/* upcoming exhibit info */}
        <UpcomingExhibit />

        {/* footer */}
        <Footer />
    </>
  );
}
