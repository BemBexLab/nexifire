"use client";

import { motion } from "motion/react";
import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";
import { TfiArrowTopRight } from "react-icons/tfi";
import Link from "next/link";

const WhyYouBelongHere = () => {
  const [open, setOpen] = useState(false);

  return (
    <section className="w-full font-jakarta pb-14 md:pb-20">
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div className="max-w-[520px]">
          <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-5xl">
            Why You Belong
            <br />
            Here
          </h2>

          <p className="mt-3 max-w-[500px] text-md leading-[1.27] text-[#777777]">
            Our organization provides more than employment opportunities because
            we create an environment that supports individuals who want to
            develop their skills. People who want to take control of their work
            and learn new things will find our organization to be their ideal
            place to work. At NexiFire, your work matters, your progress is
            noticed, and your potential is taken seriously.
          </p>

          <Link href="/contact">
            <motion.button
              style={{
                background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
              }}
              className="flex mt-5 min-h-[46px] w-full items-center justify-center gap-2 whitespace-pre-line rounded-lg px-5 py-1 text-center text-base font-light text-white sm:w-fit sm:min-w-[200px] md:text-lg"
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              Let's Talk
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
          </Link>
        </div>

        {/* Right Dropdown Card */}
        <div className="flex w-full justify-start lg:justify-end">
          <div className="w-full max-w-[430px]">
            <div className="overflow-hidden rounded-[10px] border border-[#ebebeb] bg-white shadow-[0_4px_18px_rgba(0,0,0,0.05)]">
              <button
                type="button"
                onClick={() => setOpen(!open)}
                className="flex h-[56px] w-full items-center justify-between px-8 text-left"
              >
                <span className="text-[15px] font-normal text-[#4b4b4b]">
                  Spring 2026 Internship Cohort
                </span>

                <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#B24002] text-white">
                  <FiPlus
                    className={`text-lg text-white transition-transform duration-300 ${
                      open ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ease-out ${
                  open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-[#f0f0f0] px-8 pb-6 pt-5">
                    <p className="text-[14px] leading-[1.7] text-[#777777]">
                      Join the elite pipeline of global-level talent. We are
                      looking for geniuses to join our Production, Tech, and
                      People teams for the Spring 2026 Immersive Internship
                      Cohort.
                    </p>

                    <p className="text-[14px] mt-3 font-semibold leading-[1.7] text-[#777777]">
                      Open Roles:
                    </p>

                    <ul className="list-outside list-disc space-y-1 pl-5 text-[14px] leading-[1.7] text-[#8a8a8a] marker:text-[#8a8a8a]">
                      <li>
                        Video Editor: Focus on high-retention storytelling and
                        cinematic edits.
                      </li>
                      <li>
                        Graphic Designer: Crafting premium visual identities and
                        high-end brand assets.
                      </li>
                      <li>
                        Content Writer: Writing persuasive, SEO-optimized copy
                        for an international audience.
                      </li>
                      <li>
                        SEO Intern: Dominating search engine rankings through
                        data-driven research.
                      </li>
                      <li>
                        WordPress Intern: Building responsive, high-performance
                        websites.
                      </li>
                      <li>
                        QA (Quality Assurance): Ensuring pixel-perfect delivery
                        through rigorous testing.
                      </li>
                      <li>
                        Talent Acquisition: Sourcing the next generation of
                        Koresys talent.
                      </li>
                    </ul>

                    <p className="text-[14px] mt-3 font-semibold leading-[1.7] text-[#777777]">
                      Perks:
                    </p>

                    <ul className="list-outside list-disc space-y-1 pl-5 text-[14px] leading-[1.7] text-[#8a8a8a] marker:text-[#8a8a8a]">
                      <li>Real projects</li>
                      <li>Real international clients from Day 1</li>
                      <li>Internship Certificate from Nexifire</li>
                      <li>
                        Learn the ropes directly from our department leads
                      </li>
                      <li>We hire our best interns</li>
                      <li>High-performers move to Full-Time roles</li>
                    </ul>

                    <motion.button
                      style={{
                        background:
                          "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                      }}
                      className="flex mt-5 min-h-[36px] w-full items-center justify-center gap-2 whitespace-pre-line rounded-lg px-3 py-1 text-center text-base font-light text-white sm:w-fit sm:min-w-[150px] md:text-lg"
                      whileHover={{
                        y: -3,
                        scale: 1.02,
                        boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                      }}
                      whileTap={{ y: 0, scale: 0.98 }}
                      transition={{
                        type: "spring",
                        stiffness: 320,
                        damping: 20,
                      }}
                    >
                      Apply Now
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyYouBelongHere;
