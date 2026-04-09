"use client";

import Image from "next/image";
import React from "react";
import { LazyMotion, domAnimation, m } from "motion/react";
import { SlArrowRight } from "react-icons/sl";

type BlogCard = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const blogs: BlogCard[] = [
  {
    id: 1,
    title: "The Nexifire Ecosystem: One Brand, Six Pillars, Infinite Growth",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "How to Build a Scalable Content to Growth System",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "How to Self-Publish a Book in 2026",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
];

const LatestBlogs = () => {
  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full bg-white flex items-center justify-center py-15">
        <div className="flex flex-col mx-auto max-w-3/4 px-4 sm:px-6 lg:px-8">
          <m.h2
            className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-4xl text-center py-10 font-medium uppercase leading-tight text-transparent lg:text-5xl"
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
          >
            Our Latest Blogs
          </m.h2>

          <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-3">
            {blogs.map((blog, index) => (
              <m.article
                key={blog.id}
                className="w-[390px] rounded-2xl border border-[#EEEEEE] bg-[#FEFEFE]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.45,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
              >
                <div className="relative h-[158px] w-full overflow-hidden rounded-t-2xl md:h-[160px]">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover"
                    unoptimized
                    loading="lazy"
                    sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  />
                </div>

                <div className="px-4 pb-5 pt-4">
                  <h3 className="min-h-[64px] text-[17px] font-normal leading-[1.45] text-[#444444]">
                    {blog.title}
                  </h3>

                  <p className="mt-2 text-[14px] leading-[1.65] text-[#777777]">
                    {blog.description}
                  </p>

                  <a
                    href="#"
                    className="mt-4 inline-flex items-center gap-2 border-b border-[#f26a21] pb-[1px] text-[14px] font-normal leading-loose text-[#B24002]"
                  >
                    Learn More
                    <span className="text-[16px] leading-none"><SlArrowRight size={13} /></span>
                  </a>
                </div>
              </m.article>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  );
};

export default LatestBlogs;
