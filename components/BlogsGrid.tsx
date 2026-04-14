"use client";

import { motion } from "motion/react";
import { SlArrowRight } from "react-icons/sl";

type CardItem = {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
};

const cards: CardItem[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    title: "The Nexifire Ecosystem: One Brand, Six Pillars, Infinite Growth",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title: "How to Build a Scalable Content to Growth System",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    title: "How to Self-Publish a Book in 2026",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
    title: "The Nexifire Ecosystem: One Brand, Six Pillars, Infinite Growth",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    title: "How to Build a Scalable Content to Growth System",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
    title: "How to Self-Publish a Book in 2026",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    link: "#",
  },
];

export default function BlogsGrid() {
  return (
    <motion.section
      className="my-20 w-full px-4 md:px-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >
      <motion.div
        className="mx-auto grid max-w-[1250px] grid-cols-1 gap-4 [contain-intrinsic-size:0_430px] [content-visibility:auto] md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        transition={{ staggerChildren: 0.1 }}
      >
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="overflow-hidden rounded-[14px] border border-[#e4e4e4] [contain-intrinsic-size:0_380px] [content-visibility:auto]"
            variants={{
              hidden: { opacity: 0, y: 34, scale: 0.98 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
          >
            <div className="">
              <img
                src={card.image}
                alt={card.title}
                loading="lazy"
                decoding="async"
                className="h-[245px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="px-4 pb-5 pt-3">
              <h3 className="max-w-[95%] text-[16px] font-medium leading-[1.35] text-[#2a2a2a]">
                {card.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.7] text-[#8a8a8a]">
                {card.description}
              </p>

              <a
                href={card.link}
                className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#d56b3d] transition hover:opacity-80"
              >
                Learn More
                <span className="text-[15px] leading-none">
                  <SlArrowRight size={13} />
                </span>
              </a>

              <div className="mt-[2px] h-[1px] w-[93px] bg-[#d56b3d]" />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
