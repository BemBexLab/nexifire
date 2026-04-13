"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";

const HowWeWork = () => {
  return (
    <section className="flex w-full justify-center py-16 md:py-20 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1230px] grid-cols-1 items-center justify-center gap-12 px-6 md:px-8 lg:grid-cols-[530px_620px] lg:gap-20">
        {/* Left Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative h-[260px] w-full max-w-[450px] overflow-hidden rounded-[14px] sm:h-[300px] sm:max-w-[390px] md:h-[430px] md:max-w-[530px]">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="How we work team"
              fill
              className="object-cover"
              unoptimized
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="mx-auto w-full max-w-[620px] lg:mx-0">
          <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
            How We Work
          </h2>

          <p className="mt-6 max-w-[620px] text-lg leading-[1.25] text-[#777777]">
            Our organization believes that excellent results emerge when people
            have a complete understanding of their tasks and work together while
            developing their skills. At NExiFire, you’ll join a work environment
            where teams work together to support your initiatives and teams work
            together to achieve their goals. Our organization creates a
            workplace environment that enables you to acquire new skills while
            developing your abilities to perform work that has a substantial
            impact.
          </p>

          <motion.button
            style={{
              background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
            }}
            className="flex min-h-[46px] mt-5 w-full items-center justify-center gap-2 whitespace-pre-line rounded-lg px-5 py-1 text-center text-base font-light text-white sm:w-fit sm:min-w-[200px] md:text-lg"
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
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
