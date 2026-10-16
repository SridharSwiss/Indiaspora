import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Categories from "@/components/sections/Categories";

const ImageCards = dynamic(() => import("@/components/sections/ImageCards"));
const Events = dynamic(() => import("@/components/sections/Events"));
const Cities = dynamic(() => import("@/components/sections/Cities"));
const LivingGuide = dynamic(() => import("@/components/sections/LivingGuide"));
const TravelBanner = dynamic(() => import("@/components/sections/TravelBanner"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Resources = dynamic(() => import("@/components/sections/Resources"));

export default function Home() {
  return (
    <>
      <Hero />
      <ImageCards />
      <Categories />
      <Events />
      <Cities />
      <LivingGuide />
      <TravelBanner />
      <Testimonials />
      <Resources />
    </>
  );
}
