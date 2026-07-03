import Loader from "@/components/layout/Loader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Featured from "@/components/sections/Featured";
import About from "@/components/sections/About";
import Loved from "@/components/sections/Loved";
import Gallery from "@/components/sections/Gallery";
import Menu from "@/components/sections/Menu";
import Seasonal from "@/components/sections/Seasonal";
import InstagramFeed from "@/components/sections/InstagramFeed";
import Visit from "@/components/sections/Visit";

export default function Home() {
  return (
    <>
      <Loader />
      <Navbar />
      <WhatsAppButton />
      <main>
        <Hero />
        <Marquee />
        <Featured />
        <About />
        <Loved />
        <Gallery />
        <Menu />
        <Seasonal />
        <InstagramFeed />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
