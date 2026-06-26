import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Categories from "@/components/sections/Categories";
import Events from "@/components/sections/Events";
import Cities from "@/components/sections/Cities";
import LivingGuide from "@/components/sections/LivingGuide";
import Testimonials from "@/components/sections/Testimonials";
import Resources from "@/components/sections/Resources";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Marquee />
        <Categories />
        <Events />
        <Cities />
        <LivingGuide />
        <Testimonials />
        <Resources />
      </main>
      <Footer />
    </>
  );
}
