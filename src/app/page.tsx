import About from "@/components/About";
import Delivery from "@/components/Delivery";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Menu from "@/components/Menu";
import Nav from "@/components/Nav";
import Reviews from "@/components/Reviews";
import Visit from "@/components/Visit";

export default function HomePage() {
  return (
    <>
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Menu />
      <Gallery />
      <Delivery />
      <Visit />
      <Reviews />
      <Footer />
    </>
  );
}
