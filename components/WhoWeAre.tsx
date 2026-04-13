"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";

const WhoWeAre = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoadImage) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadImage(true);
          observer.disconnect();
        }
      },
      { rootMargin: "280px 0px" },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, [shouldLoadImage]);

  return (
    <section
      ref={sectionRef}
      className="my-16 flex flex-col items-center justify-center gap-10 px-4 sm:my-20 sm:px-6 md:gap-12 lg:my-30 lg:flex-row lg:items-stretch lg:px-8 xl:px-0"
    >
      <div className="flex w-full max-w-3xl flex-col">
        <h2 className="font-jakarta inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center text-4xl font-regular uppercase text-transparent sm:text-5xl md:text-6xl lg:text-left">
          Who We Are
        </h2>
        <div className="font-jakarta mt-6 space-y-4 text-base leading-[1.7] text-[#777777] sm:mt-8 sm:text-lg md:mt-10">
          <p>
            NexiFire is a multi dimensional growth ecosystem built on the
            principle of specialized excellence. Instead of managing everything
            in one place, we’ve built a group of focused brands, each one
            specialized in a specific area.
          </p>
          <p>
            This means every challenge, whether it’s book services, writing,
            polishing it, working on book promotion and optimization on
            different platforms, content development for websites, website
            development on different e-commerce platforms, or marketing, is
            handled by experts who do that one thing exceptionally well and in
            an organized way.
          </p>
          <p>
            As the parent company, our role is to guide the strategy and bring
            everything together. We give our brands the direction, systems, and
            support they need to deliver real results. We connect strategy with
            execution. That means we don’t just plan, we build, launch, and
            optimize systems that actually grow your business. At NexiFire, we
            believe growth isn’t one dimensional. It comes from combining strong
            storytelling, reliable technology, and high performing marketing
            systems. Whether you're starting something new or scaling an
            existing business, we make sure every step is clear, every system is
            built to scale, and every result can be measured.
          </p>

          <motion.button
            style={{
              background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
            }}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-base font-light text-white sm:w-fit md:text-lg"
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
        </div>
      </div>

      <div className="relative aspect-[660/732] w-full max-w-[420px] overflow-hidden bg-[#eeeeee] sm:max-w-[520px] md:max-w-[600px] lg:ml-10 lg:aspect-auto lg:max-w-[520px] lg:self-stretch xl:ml-20 xl:max-w-[660px] rounded-3xl">
        {shouldLoadImage && (
          <Image
            src="/images/Rectangle 9.png"
            alt="Who We Are"
            fill
            sizes="(max-width: 640px) 420px, (max-width: 768px) 520px, (max-width: 1024px) 600px, (max-width: 1280px) 520px, 660px"
            loading="lazy"
            className="object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
