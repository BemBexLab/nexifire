import BuildSmarter from "@/components/BuildSmarter";
import GetInTouchSection from "@/components/GetInTouch";
import HomeHero from "@/components/HomeHero";
import LazyLatestBlogs from "@/components/LazyLatestBlogs";
import LazyTestimonials from "@/components/LazyTestimonials";
import LogoSlider from "@/components/LogoSlider";
import NavBar from "@/components/NavBar";
import NotAnAgency from "@/components/NotAnAgency";
import TestimonialsSection from "@/components/Testimonials";
import WhatWeDo from "@/components/WhatWeDo";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative z-[100]">
        <NavBar />
      </div>
      <div className="relative z-30">
        <HomeHero />
      </div>
      <div className="relative z-20 mt-2 sm:mt-4 lg:mt-6 xl:z-10 xl:-mt-24">
        <LogoSlider />
      </div>
      <div className="pointer-events-none relative z-40 hidden h-0 xl:block">
        <div className="absolute left-0 top-[-132px] h-32 w-44 -translate-x-8 bg-[#F6F6F6]/95 blur-3xl" />
        <div className="absolute left-[43%] top-[-132px] h-28 w-40 -translate-x-1/2 bg-[#F6F6F6]/95 blur-3xl" />
        <div className="absolute left-[47%] top-[-120px] h-24 w-32 -translate-x-1/2 bg-[#F6F6F6]/90 blur-2xl" />
        <div className="absolute right-0 top-[-132px] h-32 w-44 translate-x-8 bg-[#F6F6F6]/95 blur-3xl" />
      </div>
      <WhatWeDo />
      <NotAnAgency />
      <BuildSmarter />
      <LazyTestimonials />
      <LazyLatestBlogs />
      <GetInTouchSection />
    </section>
  );
}
