"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { TfiArrowTopRight } from "react-icons/tfi";

type WhoWeAreProps = {
  heading: string;
  paragraphs: Array<
    | string
    | {
        text: string;
        className?: string;
      }
  >;
  image: {
    src: string;
    alt: string;
    priority?: boolean;
    loading?: "eager" | "lazy";
  };
  buttonLabel: string;
  buttonHref: string;
};

const WhoWeAre = ({
  heading,
  paragraphs,
  image,
  buttonLabel,
  buttonHref,
}: WhoWeAreProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [shouldLoadImage, setShouldLoadImage] = useState(
    image.priority || image.loading === "eager",
  );

  useEffect(() => {
    const section = sectionRef.current;

    if (!section || shouldLoadImage || image.priority || image.loading === "eager") {
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
  }, [image.loading, image.priority, shouldLoadImage]);

  return (
    <section
      ref={sectionRef}
      className="my-16 flex flex-col items-center justify-center gap-10 px-4 sm:my-20 sm:px-6 md:gap-12 lg:my-30 lg:flex-row lg:items-stretch lg:px-8 xl:px-0"
    >
      <div className="flex w-full max-w-3xl flex-col">
        <h2 className="[word-spacing:0.5rem] w-4xl font-jakarta inline-block bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-center text-4xl font-regular uppercase text-transparent sm:text-5xl md:text-6xl lg:text-left">
          {heading}
        </h2>

        <div className="font-jakarta mt-6 space-y-4 text-base leading-[1.7] text-[#777777] sm:mt-8 sm:text-lg md:mt-10">
          {paragraphs.map((paragraph) => {
            const text =
              typeof paragraph === "string" ? paragraph : paragraph.text;
            const className =
              typeof paragraph === "string" ? undefined : paragraph.className;

            return (
              <p key={text} className={className}>
                {text}
              </p>
            );
          })}

          <motion.a
            href={buttonHref}
            style={{
              background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
            }}
            className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg px-7 py-3 text-base font-light text-white sm:w-fit md:text-lg"
            whileHover={{
              y: -3,
              scale: 1.02,
              boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
            }}
            whileTap={{ y: 0, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 320, damping: 20 }}
          >
            {buttonLabel}
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
          </motion.a>
        </div>
      </div>

      <div className="relative aspect-[660/732] w-full max-w-[420px] overflow-hidden bg-[#eeeeee] sm:max-w-[520px] md:max-w-[600px] lg:ml-10 lg:aspect-auto lg:max-w-[520px] lg:self-stretch xl:ml-20 xl:max-w-[660px] rounded-3xl">
        {shouldLoadImage && (
          <Image
            src={image.src}
            alt={image.alt}
            fill
            sizes="(max-width: 640px) 420px, (max-width: 768px) 520px, (max-width: 1024px) 600px, (max-width: 1280px) 520px, 660px"
            loading={image.loading ?? "lazy"}
            priority={image.priority}
            className="object-cover"
          />
        )}
      </div>
    </section>
  );
};

export default WhoWeAre;
