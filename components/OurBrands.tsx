"use client";

import React from "react";
import { FiArrowRight } from "react-icons/fi";

type BrandItem = {
  name: string;
  description: string;
  url: string;
};

const brands: BrandItem[] = [
  {
    name: "Ink Founders",
    description:
      "Ink Founders is where high-level ideas become professional manuscripts. Specialize in ghostwriting, developmental editing, industry-standard formatting, and cover design. All services under one roof that will convert the drafts into a polished book, ready for publishing on different major platforms and global distribution without the stress of managing vendors.",
    url: "https://www.inkfounders.com/",
  },
  {
    name: "Story Loom Publishing",
    description:
      "Story Loom is a leading self-publishing partner with a portfolio of over 1,500 successful projects. We provide aspiring and established authors with the tools to navigate the complexities of the modern market, offering expert writing, editing, author website, custom cover design, and seamless publishing on major global platforms like Amazon, Barnes & Noble, and IngramSpark.",
    url: "https://storyloompublishing.com/",
  },
  {
    name: "Web Geeks Global",
    description:
      "Web Geeks Global specializes in the science of ‘Attention-to-Revenue’ and provides an omnichannel marketing approach across Google, Meta, LinkedIn, YouTube, and TikTok to confirm that your brand resonates where your customers live. From precision-targeted ad campaigns, website development, digital marketing, to high-impact content creation, build automated systems designed to capture attention and convert it into high-value ROI.",
    url: "#",
  },
  {
    name: "Ink2Audiobook",
    description:
      "In an era of auditory consumption, Ink2Audiobook converts static text into high-fidelity listening experiences. Ink2Audiobook gives audiobook production services, including narration, editing, marketing, and publishing services. We merge world-class vocal talent with cinematic sound design and background scoring. Our technical engineers make sure that every file is mastered to elite industry standards, allowing your story to captivate audiences on Audible, Spotify, and beyond.",
    url: "https://ink2audiobook.com/",
  },
  {
    name: "The Quill Book",
    description:
      "In an era of auditory consumption, Ink2Audiobook converts static text into high-fidelity listening experiences. Ink2Audiobook gives audiobook production services, including narration, editing, marketing, and publishing services. We merge world-class vocal talent with cinematic sound design and background scoring. Our technical engineers make sure that every file is mastered to elite industry standards, allowing your story to captivate audiences on Audible, Spotify, and beyond.",
    url: "#",
  },
  {
    name: "Web Founders USA",
    description:
      "In an era of auditory consumption, Ink2Audiobook converts static text into high-fidelity listening experiences. Ink2Audiobook gives audiobook production services, including narration, editing, marketing, and publishing services. We merge world-class vocal talent with cinematic sound design and background scoring. Our technical engineers make sure that every file is mastered to elite industry standards, allowing your story to captivate audiences on Audible, Spotify, and beyond.",
    url: "https://www.webfoundersusa.com/",
  },
];

const OurBrands = () => {
  return (
    <section className="w-full font-jakarta py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[980px] px-5 sm:px-6 lg:px-0">
        <h2 className="text-center text-[32px] font-light uppercase leading-none tracking-[-0.03em] text-[#555555] sm:text-[40px] md:text-[46px]">
          Our Brands
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-7 md:mt-10 md:grid-cols-2 md:gap-8">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href={brand.url}
              className="group block rounded-[18px] border border-[#e8e8e8] bg-[#f5f5f5] px-5 pb-5 pt-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] transition hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              {/* Logo Space */}
              <div className="flex h-[56px] items-start">
                <div className="h-[42px] w-[120px] rounded-[4px] border border-dashed border-transparent">
                  {/* Add your logo here */}
                </div>
              </div>

              <h3 className="mt-2 text-[20px] font-medium leading-[1.2] tracking-[-0.02em] text-[#282828]">
                {brand.name}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.4] text-[#444444]">
                {brand.description}
              </p>

              <div className="mt-8 inline-flex items-center gap-3 text-[15px] font-normal text-[#ef6a1a]">
                <span>Visit Website</span>
                <FiArrowRight className="text-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;