"use client";

import { blogPosts } from "@/data/blogs";
import { motion } from "motion/react";
import { SlArrowRight } from "react-icons/sl";

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
        {blogPosts.map((post) => (
          <motion.div
            key={post.slug}
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
                src={post.image}
                alt={post.title}
                loading="lazy"
                decoding="async"
                className="h-[245px] w-full rounded-[12px] object-cover"
              />
            </div>

            <div className="px-4 pb-5 pt-3">
              <h3 className="max-w-[95%] text-[16px] font-medium leading-[1.35] text-[#2a2a2a]">
                {post.cardTitle ?? post.title}
              </h3>

              <p className="mt-3 text-[13px] leading-[1.7] text-[#8a8a8a]">
                {post.description}
              </p>

              <a
                href={`/blogs/${post.slug}`}
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
