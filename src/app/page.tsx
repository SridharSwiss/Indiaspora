import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Categories from "@/components/sections/Categories";

// Lazy-load below-fold sections — reduces initial JS bundle
const Events = dynamic(() => import("@/components/sections/Events"));
const Cities = dynamic(() => import("@/components/sections/Cities"));
const LivingGuide = dynamic(() => import("@/components/sections/LivingGuide"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Resources = dynamic(() => import("@/components/sections/Resources"));

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
