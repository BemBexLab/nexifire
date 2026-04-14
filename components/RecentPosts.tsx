"use client";

import React from "react";
import Image from "next/image";

type Post = {
  id: number;
  title: string;
  image: string;
};

const posts: Post[] = [
  {
    id: 1,
    title: "The Nexifire Ecosystem: One Brand, Six Pillars...",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    title: "How to Build a Scalable Content to Growth System",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    title: "How to Self-Publish a Book in 2026",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=80",
  },
];

const RecentPosts = () => {
  return (
    <aside className="w-full font-jakarta min-w-[350px]">
      <h3 className="text-[22px] font-semibold leading-none text-[#B24002]">
        Recent Posts
      </h3>

      <div className="mt-6 space-y-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href="#"
            className="group flex items-center gap-3"
          >
            <div className="relative h-[90px] w-[150px] shrink-0 overflow-hidden rounded-[4px]">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
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
