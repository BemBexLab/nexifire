import BuildSmarter from "@/components/BuildSmarter";
import OurValues from "@/components/OurValues";
import PageHero from "@/components/PageHero";
import WhoWeAre from "@/components/WhoWeAre";
import WhyNexifire from "@/components/WhyNexifire";
import React from "react";

const page = () => {
  return (
    <section className="relative overflow-hidden bg-white">
      <PageHero
        eyebrow="About NexiFire"
        title={`A Global Ecosystem of Industry Leaders.`}
        description="NexiFire is a strategic parent organization overseeing a diverse portfolio of specialized brands in media, technology, and digital growth. We provide the high level governance and operational infrastructure that allows our subsidiary companies to deliver world class execution and sustainable market leadership."
      />
      <WhoWeAre />
      <WhyNexifire />
      <OurValues />
      <BuildSmarter
        title={`Ready to Align with\na Higher Standard\nof Growth?`}
        description={`Stop searching for a vendor and start partnering with an ecosystem. Let the\nNexiFire Group provide the specialized expertise and strategic\ninfrastructure your brand needs to lead its industry.`}
        primaryButtonText="Explore Our Portfolio"
        secondaryButtonText="Consult with the Head Office"
        backgroundImageSrc="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
        backgroundImageAlt="Team meeting"
      />
    </section>
  );
};

export default page;
