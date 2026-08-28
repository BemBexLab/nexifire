"use client";

import { motion } from "motion/react";
import React from "react";
import Link from "next/link";
import { TfiArrowTopRight } from "react-icons/tfi";
import { LuPhoneCall } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";

const FooterCTA = () => {
  return (
    <section className="w-full bg-[#F3F3F3] px-5 pb-8 pt-12 font-jakarta sm:px-8 sm:pb-2 sm:pt-16 lg:pt-20">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col">
        <div className="grid w-full grid-cols-1 justify-items-center gap-16 xl:grid-cols-[minmax(0,700px)_minmax(0,725px)] xl:items-start xl:justify-center xl:gap-20 2xl:gap-28">
          {/* Left Col div */}
          <div className="flex w-full max-w-[700px] flex-col items-center text-center font-jakarta lg:items-start lg:text-left">
            <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text py-3 text-center font-jakarta text-4xl font-normal leading-tight text-transparent sm:text-5xl lg:text-left lg:text-7xl">
              <span className="whitespace-nowrap">Got A Project</span>
              <br /> In Mind?
            </h2>
            <p className="mt-5 max-w-xl text-base text-[#777777] sm:text-lg xl:max-w-none xl:whitespace-nowrap">
              Nexifire is here to guide you to the right strategy and the right
              system.
            </p>
            <Link href="/contact" className="mt-4 w-full sm:w-fit">
              <motion.button
                style={{
                  background:
                    "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
                }}
                className="mt-2 flex min-h-[38px] w-full items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-light text-white sm:w-auto sm:text-base"
                whileHover={{
                  y: -3,
                  scale: 1.02,
                  boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
                }}
                whileTap={{ y: 0, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 320, damping: 20 }}
              >
                Schedule a Free Consultation
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

          {/* Right Col div */}
          <div className="mt-10 grid w-full grid-cols-1 justify-center gap-12 sm:grid-cols-2 sm:gap-14 md:mt-15 md:grid-cols-[minmax(140px,0.85fr)_minmax(300px,2.3fr)_minmax(160px,1fr)] md:gap-x-8 md:gap-y-10">
            <div className="w-full">
              <h4 className="mb-5 text-lg font-medium text-[#B24002]">
                Quick Links
              </h4>
              <ul className="list-inside list-disc space-y-4 text-base text-[#777777]">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <a href="/about">About us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/careers">Career</a>
                </li>
                <li>
                  <a href="/brands">Our Brands</a>
                </li>
                <li>
                  <Link href="/blogs">Blogs</Link>
                </li>
                <li>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="w-full sm:col-span-2 md:col-span-1">
              <h4 className="mb-5 text-lg font-medium text-[#B24002]">
                Contact Info
              </h4>
              <ul className="space-y-4 text-base text-[#777777]">
                <li className="flex items-center gap-3">
                  <LuPhoneCall className="shrink-0" />
                  <a href="tel:+14704707520" className="break-words">
                    United States: (470) 470-7520
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <LuPhoneCall className="shrink-0" />
                  <a href="tel:+61468285539" className="break-words">
                    Australia: (0468) 285-539
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <MdOutlineEmail className="shrink-0" />
                  <a
                    href="mailto:contact@nexifire.com"
                    className="break-words"
                  >
                    contact@nexifire.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <SlLocationPin className="mt-1 shrink-0" />
                  <a href="" className="break-words">
                    United States Office: 2300 Lakeview Pkwy Alpharetta, GA 30009
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <SlLocationPin className="mt-1 shrink-0" />
                  <a href="" className="break-words">
                    Australian Office: 16A Fox Cl, Kariong NSW 2250, Australia
                  </a>
                </li>
              </ul>
            </div>

            <div className="w-full">
              <h4 className="mb-5 text-lg font-medium text-[#B24002]">
                Support
              </h4>
              <ul className="list-outside list-disc space-y-4 pl-5 text-base text-[#777777]">
                <li>
                  <a href="/privacy-policy">Privacy policy</a>
                </li>
                <li>
                  <a href="/terms-condition">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-16 w-full">
          {/* Divider */}
          <div className="border-t border-[#77777766]" />

          {/* Bottom */}
          <p className="py-4 text-center text-sm font-medium text-[#777777]">
            &copy; 2026 NexiFire All Rights Reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FooterCTA;
