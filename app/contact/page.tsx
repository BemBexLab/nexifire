import GetInTouchContact from "@/components/GetInTouchContact";
import PageHero from "@/components/PageHero";
import React from "react";

const page = () => {
  return (
    <section className="bg-white overflow-hidden">
      <PageHero
        eyebrow="Contact Us"
        title={`Let’s Talk`}
        description="Looking to start something new or increase the visibility of an existing one. We are here to guide you with the right strategy and the right system. Let’s understand your goals and create a clear path ahead, together."
      />
      <GetInTouchContact />
    </section>
  );
};

export default page;
