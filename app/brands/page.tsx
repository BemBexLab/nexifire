import OurBrands from "@/components/OurBrands";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Our Brands"
        title={`BRANDS BUILT WITH PURPOSE`}
        description={`A strategic network of specialized entities, each meticulously engineered to solve complex growth\nchallenges and provide high level infrastructure in the global market.`}
      />
      <OurBrands />
    </section>
  );
};

export default page;
