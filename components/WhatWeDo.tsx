"use client"

import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { whatWeDoCards } from "@/data/whatWeDoCards";

const WhatWeDo = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="mx-auto mt-20 flex w-full max-w-[1330px] flex-col items-center justify-center px-4 md:mt-28 md:px-6 xl:mt-30">
        <div className="relative flex w-full flex-col gap-5 md:gap-6 xl:min-h-[90px] xl:flex-row xl:items-center">
          <m.h1
            className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-4xl font-jakarta font-medium uppercase tracking-tight text-transparent md:text-5xl xl:absolute xl:left-0 xl:text-6xl"
            initial={{ opacity: 0, y: 28, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            What We Do
          </m.h1>
          <m.p
            className="w-full max-w-[370px] text-sm text-[#777777] md:text-base xl:absolute xl:-right-19"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.12 }}
          >
            Through our brands, we deliver integrated solutions across key growth
            areas.
          </m.p>
        </div>

        <div className="mt-10 grid w-full grid-cols-1 gap-10 sm:grid-cols-2 xl:mt-18 xl:grid-cols-4">
          {whatWeDoCards.map((card, index) => (
            <m.div
              key={card.title}
              initial={{ opacity: 0, y: 26, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              className={`min-h-[180px] w-full origin-bottom-left rounded-2xl p-5 transition-transform duration-300 ease-out hover:-rotate-4 hover:shadow-[0_22px_50px_rgba(17,17,17,0.12)] md:p-6 xl:h-[200px] xl:w-[320px] ${
                card.featured
                  ? "bg-white shadow-[0_0_0_1px_rgba(17,17,17,0.05),0_18px_38px_rgba(17,17,17,0.1)]"
                  : "bg-white shadow-[0_0_0_1px_rgba(17,17,17,0.04),0_10px_24px_rgba(17,17,17,0.06)]"
              }`}
            >
              <div className="mb-4">{card.icon}</div>
              <p className="mb-2 font-jakarta text-md font-medium text-gray-900">
                {card.title}
              </p>
              <p className="text-[14px] font-jakarta leading-relaxed text-gray-500">
                {card.description}
              </p>
            </m.div>
          ))}
        </div>
      </section>
    </LazyMotion>
  );
};

export default WhatWeDo;
