"use client"

import { motion } from "motion/react";
import React from "react";
import { TfiArrowTopRight } from "react-icons/tfi";

const BuildSmarter = () => {
  return (
    <section className="flex justify-center bg-white px-4 py-8 md:px-6">
      <div className="w-full max-w-[1600px]">
        {/* HERO CARD */}
        <div className="relative h-[370px] w-full overflow-hidden rounded-[18px] md:h-[630px]">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="Team meeting"
            className="absolute inset-0 h-full w-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

          {/* Left Content */}
          <div className="relative z-10 flex h-full items-center">
            <div className="font-jakarta max-w-[600px] px-8 pt-[170px] md:px-12">
              <h1 className="text-white text-[34px] leading-[1.1] md:text-[60px] md:leading-[1.05] uppercase tracking-[-0.02em]">
                BUILD SMARTER.
                <br />
                GROW FASTER.
              </h1>

              <p className="mt-6 max-w-[550px] w-full text-white/75 text-[15px] leading-7 md:text-[20px] md:leading-8 font-light">
                Whether you're building a brand or scaling one, NexiFire gives
                you the structure, strategy, and execution to move forward with
                clarity.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <motion.button
                  style={{
                    background:
                      "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                  }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg py-3 text-base font-light text-white sm:w-[200px] md:text-lg"
                  whileHover={{
                    y: -3,
                    scale: 1.02,
                    boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                  }}
                  whileTap={{ y: 0, scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 320, damping: 20 }}
                >
                  Let’s Talk
                  <motion.span
                    whileHover={{ x: 4, y: -2 }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 18,
                    }}
                  >
                    <TfiArrowTopRight size={20} />
                  </motion.span>
                </motion.button>

                <button className="inline-flex items-center gap-2 rounded-[10px] border border-white/40 bg-white/5 px-6 py-3 text-white text-sm md:text-base font-medium backdrop-blur-[2px] transition hover:bg-white/10">
                  See Our Work
                  <TfiArrowTopRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 gap-8 pt-8 text-center md:grid-cols-4 md:gap-0">
          <div className="flex flex-col font-jakarta items-center md:border-r md:border-[#dfdfdf] md:px-6">
            <div className="relative mb-3 flex flex-col items-center">
              <h3 className="relative z-10 text-[42px] leading-none font-semibold text-[#2d2d2d] md:text-[48px]">
                25K+
              </h3>
              <div className="absolute -bottom-3 h-5 w-28 rounded-full bg-black/35 blur-lg" />
            </div>
            <p className="mt-2 text-[18px] text-[#9a9a9a] font-light">
              Leads Generated
            </p>
          </div>

          <div className="flex flex-col items-center md:border-r md:border-[#dfdfdf] md:px-6">
            <div className="relative mb-3 flex flex-col items-center">
              <h3 className="relative z-10 text-[42px] leading-none font-semibold text-[#2d2d2d] md:text-[48px]">
                50+
              </h3>
              <div className="absolute -bottom-3 h-5 w-28 rounded-full bg-black/35 blur-lg" />
            </div>
            <p className="mt-2 text-[18px] text-[#9a9a9a] font-light">
              Brands Scaled
            </p>
          </div>

          <div className="flex flex-col items-center md:border-r md:border-[#dfdfdf] md:px-6">
            <div className="relative mb-3 flex flex-col items-center">
              <h3 className="relative z-10 text-[42px] leading-none font-semibold text-[#2d2d2d] md:text-[48px]">
                120+
              </h3>
              <div className="absolute -bottom-3 h-5 w-28 rounded-full bg-black/35 blur-lg" />
            </div>
            <p className="mt-2 text-[18px] text-[#9a9a9a] font-light">
              Campaigns Launched
            </p>
          </div>

          <div className="flex flex-col items-center md:px-6">
            <div className="relative mb-3 flex flex-col items-center">
              <h3 className="relative z-10 text-[42px] leading-none font-semibold text-[#2d2d2d] md:text-[48px]">
                8+
              </h3>
              <div className="absolute -bottom-3 h-5 w-28 rounded-full bg-black/35 blur-lg" />
            </div>
            <p className="mt-2 text-[18px] text-[#9a9a9a] font-light">
              Years Experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildSmarter;
