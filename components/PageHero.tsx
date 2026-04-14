"use client";

import React from "react";
import { motion, type Variants } from "motion/react";
import TextFluxUnveil from "./TextFluxUnveil";

type Logo = {
  id: number;
  name: string;
  src: string;
};

type PageHeroProps = {
  eyebrow?: string;
  title?: string;
  description?: string;
  logos?: Logo[];
};

const defaultLogos: Logo[] = [
  {
    id: 1,
    name: "Vercel",
    src: "https://cdn.simpleicons.org/vercel/A9A9A9",
  },
  {
    id: 2,
    name: "Stripe",
    src: "https://cdn.simpleicons.org/stripe/A9A9A9",
  },
  {
    id: 3,
    name: "Notion",
    src: "https://cdn.simpleicons.org/notion/A9A9A9",
  },
  {
    id: 4,
    name: "Linear",
    src: "https://cdn.simpleicons.org/linear/A9A9A9",
  },
  {
    id: 5,
    name: "Figma",
    src: "https://cdn.simpleicons.org/figma/A9A9A9",
  },
  {
    id: 6,
    name: "Supabase",
    src: "https://cdn.simpleicons.org/supabase/A9A9A9",
  },
];

const defaultEyebrow = "About NexiFire";
const defaultTitle = "A Global Ecosystem of\nIndustry Leaders.";
const defaultDescription =
  "NexiFire is a strategic parent organization overseeing a diverse portfolio of specialized brands in media, technology, and digital growth. We provide the high level governance and operational infrastructure that allows our subsidiary companies to deliver world class execution and sustainable market leadership.";

const heroContainerVariants: Variants = {
  hidden: { opacity: 0, y: 28, scale: 0.985 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.14,
    },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const logoBarVariants: Variants = {
  hidden: { opacity: 0, y: 36, scaleX: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scaleX: 1,
    transition: {
      duration: 0.75,
      delay: 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const logoItemVariants: Variants = {
  hidden: { opacity: 0, y: 12 },
  visible: (index: number) => ({
    opacity: 0.7,
    y: 0,
    transition: {
      duration: 0.45,
      delay: 0.65 + (index % 6) * 0.04,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const PageHero = ({
  eyebrow = defaultEyebrow,
  title = defaultTitle,
  description = defaultDescription,
  logos = defaultLogos,
}: PageHeroProps) => {
  const marqueeLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white">
      <div className="relative max-w-full">
        <motion.div
          className="shape-section flex min-h-[520px] flex-col items-center overflow-hidden bg-[#F6F6F6] px-4 pb-28 pt-34 text-black sm:min-h-[600px] sm:px-8 sm:pb-32 sm:pt-28 md:px-10 md:pb-36 lg:min-h-[550px] lg:px-14 lg:pb-40 lg:pt-45"
          variants={heroContainerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={heroItemVariants}
            className="font-mulish mx-auto w-fit rounded-[8px] px-4 py-3 text-sm sm:text-base md:px-5 md:text-xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text={eyebrow} />
          </motion.div>
          <motion.h1
            variants={heroItemVariants}
            className="font-jakarta mx-auto mt-5 max-w-[1540px] whitespace-pre-line text-center text-4xl font-medium uppercase leading-[1.08] [word-spacing:0.5rem]  text-black sm:text-5xl md:text-6xl lg:text-7xl"
          >
            {title}
          </motion.h1>
          <motion.p
            variants={heroItemVariants}
            className="font-jakarta mx-auto [word-spacing:0.3rem]  mt-4 max-w-[1120px] whitespace-pre-line text-center text-base leading-[1.7] text-[#777777] sm:text-lg md:leading-[1.65]"
          >
            {description}
          </motion.p>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-1/2 z-50 flex w-screen -translate-x-1/2 justify-center overflow-hidden"
          variants={logoBarVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="logo-slider-cut relative h-[58px] w-screen overflow-hidden bg-white sm:h-[70px] md:h-[84px] lg:h-[98px]">
            <div className="logo-track flex h-full w-max items-center">
              {[0, 1].map((groupIndex) => (
                <div
                  key={groupIndex}
                  aria-hidden={groupIndex === 1}
                  className="logo-group flex h-full shrink-0 items-center gap-5 px-5 sm:gap-7 sm:px-8 lg:gap-9 lg:px-10"
                >
                  {marqueeLogos.map((logo, logoIndex) => (
                    <motion.div
                      key={`${groupIndex}-${logo.id}-${logoIndex}`}
                      custom={logoIndex}
                      variants={logoItemVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex min-w-[96px] shrink-0 items-center justify-center gap-2 sm:min-w-[112px] lg:min-w-[126px]"
                    >
                      <img
                        src={logo.src}
                        alt={`${logo.name} logo`}
                        className="h-5 w-5 object-contain sm:h-6 sm:w-6"
                        loading="lazy"
                      />
                      <span className="text-sm font-semibold text-[#A9A9A9] sm:text-base">
                        {logo.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .shape-section {
          clip-path: polygon(
            0 0,
            100% 0,
            100% 100%,
            86% 100%,
            78% 86%,
            22% 86%,
            14% 100%,
            0 100%
          );
        }

        .logo-slider-cut {
          border: 0;
          clip-path: polygon(
            0 100%,
            0 100%,
            14% 100%,
            22% 0,
            78% 0,
            86% 100%,
            100% 100%,
            100% 100%
          );
        }

        .logo-slider-cut::after {
          position: absolute;
          right: 0;
          bottom: -1px;
          left: 0;
          z-index: 20;
          height: 4px;
          background: #ffffff;
          content: "";
          pointer-events: none;
        }

        .logo-track {
          animation: aboutLogoMarquee 18s linear infinite;
        }

        .logo-group {
          min-width: 100vw;
        }

        @keyframes aboutLogoMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .logo-track {
            animation: none;
          }
        }

        @media (max-width: 1024px) {
          .shape-section {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              88% 100%,
              79% 88%,
              21% 88%,
              12% 100%,
              0 100%
            );
          }

          .logo-slider-cut {
            clip-path: polygon(
              0 100%,
              0 100%,
              12% 100%,
              21% 0,
              79% 0,
              88% 100%,
              100% 100%,
              100% 100%
            );
          }
        }

        @media (max-width: 768px) {
          .shape-section {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              90% 100%,
              80% 90%,
              20% 90%,
              10% 100%,
              0 100%
            );
          }

          .logo-slider-cut {
            clip-path: polygon(
              0 100%,
              0 100%,
              10% 100%,
              20% 0,
              80% 0,
              90% 100%,
              100% 100%,
              100% 100%
            );
          }
        }

        @media (max-width: 640px) {
          .shape-section {
            clip-path: polygon(
              0 0,
              100% 0,
              100% 100%,
              92% 100%,
              81% 92%,
              19% 92%,
              8% 100%,
              0 100%
            );
          }

          .logo-slider-cut {
            clip-path: polygon(
              0 100%,
              0 100%,
              8% 100%,
              19% 0,
              81% 0,
              92% 100%,
              100% 100%,
              100% 100%
            );
          }
        }
      `}</style>
    </section>
  );
};

export default PageHero;
