"use client";

import { getRecentBlogPosts } from "@/data/blogs";
import React from "react";
import Image from "next/image";

const RecentPosts = () => {
  const posts = getRecentBlogPosts(3);

  return (
    <aside className="w-full font-jakarta min-w-[350px]">
      <h3 className="text-[22px] font-semibold leading-none text-[#B24002]">
        Recent Posts
      </h3>

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <a
            key={post.slug}
            href={`/blogs/${post.slug}`}
            className="group flex items-center gap-3"
          >
            <div className="relative h-[90px] w-[150px] shrink-0 overflow-hidden rounded-[4px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                loading="lazy"
                unoptimized
              />
            </div>

            <p className="max-w-[405px] text-sm leading-[1.45] text-[#777777] transition group-hover:text-[#4a4a4a]">
              {post.title}
            </p>
          </a>
        ))}
      </div>
    </aside>
  );
};

export default RecentPosts;
