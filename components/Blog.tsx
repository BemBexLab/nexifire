"use client";

import type { BlogPost } from "@/data/blogs";
import Image from "next/image";
import React from "react";
import RecentPosts from "./RecentPosts";

type BlogProps = {
  post: BlogPost;
};

const Blog = ({ post }: BlogProps) => {
  return (
    <section className="mt-30 w-full py-8 font-jakarta md:py-10">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_270px] lg:gap-12">
          <div>
            <div className="relative h-[420px] w-full overflow-hidden rounded-[4px] sm:h-[300px] md:h-[360px] lg:h-[445px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>

            <div className="mt-10 space-y-8 md:mt-12">
              <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left font-jakarta text-3xl font-medium uppercase leading-tight text-transparent sm:text-4xl lg:text-4xl">
                {post.title}
              </h2>

              {post.content.map((section, index) => (
                <React.Fragment
                  key={`${section.heading ?? "intro"}-${index}`}
                >
                  {section.heading && (
                    <h3 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text text-left font-jakarta text-3xl font-medium leading-tight text-transparent sm:text-4xl lg:text-4xl">
                      {section.heading}
                    </h3>
                  )}

                  <div
                    className={`max-w-[760px] space-y-6 text-[#777777] ${
                      index === 0
                        ? "mt-8 text-md leading-[1.5]"
                        : "mt-6 text-[15px] leading-[1.9]"
                    }`}
                  >
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div className="lg:pt-1">
            <RecentPosts />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;
