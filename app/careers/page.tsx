import CareerApplicationForm from "@/components/CareerApplicationForm";
import HowWeWork from "@/components/HowWeWork";
import PageHero from "@/components/PageHero";
import WhyYouBelongHere from "@/components/WhyYouBelongHere";
import React from "react";

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Career"
        title={`Join NexiFire`}
        description={`Join a growing ecosystem of specialized brands where your skills are\nvalued, your growth is supported, and your work contributes to creating the\nresults you want`}
      />
      <HowWeWork />
      <WhyYouBelongHere />
      <CareerApplicationForm />
    </section>
  );
};

export default page;
