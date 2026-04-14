"use client";

import Image, { type StaticImageData } from "next/image";
import React from "react";
import { LiaArrowRightSolid } from "react-icons/lia";
import { motion } from "motion/react";

type BrandLogo =
  | {
      icon: React.ReactNode;
      image?: never;
    }
  | {
      icon?: never;
      image: {
        src: string | StaticImageData;
        alt?: string;
        sizes?: string;
        className?: string;
      };
    };

type BrandItem = BrandLogo & {
  name: string;
  description: string;
  url: string;
};

const LOGO_WIDTH = 180;
const LOGO_HEIGHT = 90;

const brands: BrandItem[] = [
  {
    name: "Ink Founders",
    description:
      "Ink Founders is where high-level ideas become professional manuscripts. Specialize in ghostwriting, developmental editing, industry-standard formatting, and cover design. All services under one roof that will convert the drafts into a polished book, ready for publishing on different major platforms and global distribution without the stress of managing vendors.",
    url: "https://www.inkfounders.com/",
    image: {
      src: "/icons/inkfounder logo-19 1.png",
      alt: "Inkfounders Logo",
    },
  },
  {
    name: "Story Loom Publishing",
    description:
      "Story Loom is a leading self-publishing partner with a portfolio of over 1,500 successful projects. We provide aspiring and established authors with the tools to navigate the complexities of the modern market, offering expert writing, editing, author website, custom cover design, and seamless publishing on major global platforms like Amazon, Barnes & Noble, and IngramSpark.",
    url: "https://storyloompublishing.com/",
    image: {
      src: "/icons/Group 1.png",
      alt: "Story Loom Publishing Logo",
    },
  },
  {
    name: "Web Geeks Global",
    description:
      "Web Geeks Global specializes in the science of ‘Attention-to-Revenue’ and provides an omnichannel marketing approach across Google, Meta, LinkedIn, YouTube, and TikTok to confirm that your brand resonates where your customers live. From precision-targeted ad campaigns, website development, digital marketing, to high-impact content creation, build automated systems designed to capture attention and convert it into high-value ROI.",
    url: "#",
    image: {
      src: "/icons/Group.png",
      alt: "Web Geeks Logo",
    },
  },
  {
    name: "Ink2Audiobook",
    description:
      "In an era of auditory consumption, Ink2Audiobook converts static text into high-fidelity listening experiences. Ink2Audiobook gives audiobook production services, including narration, editing, marketing, and publishing services. We merge world-class vocal talent with cinematic sound design and background scoring. Our technical engineers make sure that every file is mastered to elite industry standards, allowing your story to captivate audiences on Audible, Spotify, and beyond.",
    url: "https://ink2audiobook.com/",
    image: {
      src: "/icons/Group (1).png",
      alt: "Ink2Audiobook Logo",
    },
  },
  {
    name: "The Quill Book",
    description:
      "Mirroring our highest standards of literary creation, The Quill Book offers complete services from writing, editorial services, and cover design to marketing, publishing, and global distribution. Your story is not only told but polished for maximum market impact and reader engagement.",
    url: "https://thequillbook.com/",
    image: {
      src: "/icons/PNG file-01 1.png",
      alt: "The Quill Book Logo",
    },
  },
  {
    name: "Web Founders USA",
    description:
      "Web Founders USA engineers high-speed, conversion-centric digital platforms. That doesn't just build websites, but creates responsive, performance-first environments optimized for elite Google rankings and seamless lead generation. By integrating technical SEO with lightning-fast architecture, and make sure your brand maintains a dominant presence across every device and search engine.",
    url: "https://www.webfoundersusa.com/",
    image: {
      src: "/icons/Frame 156.png",
      alt: "WebFounders USA logo",
    },
  },
];

const renderBrandLogo = (brand: BrandItem) => {
  if (brand.image) {
    return (
      <Image
        src={brand.image.src}
        alt={brand.image.alt ?? `${brand.name} logo`}
        width={LOGO_WIDTH}
        height={LOGO_HEIGHT}
        loading="lazy"
        sizes={brand.image.sizes ?? "(max-width: 768px) 90vw, 440px"}
        className={`h-[90px] w-[180px] max-w-full object-contain object-left ${
          brand.image.className ?? ""
        }`}
      />
    );
  }

  return brand.icon;
};

const OurBrands = () => {
  return (
    <section className="w-full font-jakarta py-14 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[980px] px-5 sm:px-6 lg:px-0">
        <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
          Our Brands
        </h2>

        <div className="mt-8 grid grid-cols-1 gap-7 [contain-intrinsic-size:0_900px] [content-visibility:auto] md:mt-10 md:grid-cols-2 md:gap-8">
          {brands.map((brand, index) => (
            <motion.a
              key={brand.name}
              href={brand.url}
              className="group relative block rounded-[18px] border border-[#e8e8e8] bg-[#f5f5f5] px-5 pb-20 pt-5 shadow-[0_4px_18px_rgba(0,0,0,0.04)] transition [contain-intrinsic-size:0_360px] [content-visibility:auto] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{
                duration: 0.45,
                delay: Math.min(index * 0.08, 0.32),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="flex max-w-full items-start overflow-hidden">
                <div className="flex h-[90px] w-[180px] max-w-full items-start justify-start overflow-hidden [&>svg]:block [&>svg]:h-[90px] [&>svg]:w-[180px] [&>svg]:max-w-full [&>svg]:shrink-0">
                  {renderBrandLogo(brand)}
                </div>
              </div>

              <h3 className="mt-4 text-[20px] font-semibold leading-[1.2] tracking-[-0.02em] text-[#282828]">
                {brand.name}
              </h3>

              <p className="mt-4 text-[14px] leading-[1.4] text-[#444444]">
                {brand.description}
              </p>

              <div className="absolute bottom-5 left-5 inline-flex items-center gap-3 text-[15px] font-normal text-[#B24002]">
                <span>Visit Website</span>
                <LiaArrowRightSolid className="text-[18px] transition-transform duration-200 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
