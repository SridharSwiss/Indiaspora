import dynamic from "next/dynamic";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Categories from "@/components/sections/Categories";

const Events = dynamic(() => import("@/components/sections/Events"));
const Cities = dynamic(() => import("@/components/sections/Cities"));
const LivingGuide = dynamic(() => import("@/components/sections/LivingGuide"));
const Testimonials = dynamic(() => import("@/components/sections/Testimonials"));
const Resources = dynamic(() => import("@/components/sections/Resources"));

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Categories />
      <Events />
      <Cities />
      <LivingGuide />
      <Testimonials />
      <Resources />
    </>
  );
}
