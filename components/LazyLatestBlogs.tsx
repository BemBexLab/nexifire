"use client";

import dynamic from "next/dynamic";

const LatestBlogs = dynamic(() => import("./LatestBlogs"), {
  loading: () => (
    <section className="w-full bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto max-w-[1180px] px-4 sm:px-6 lg:px-8">
        <div className="mb-10 h-10 w-64 max-w-full animate-pulse rounded bg-[#e3e3e3] md:mb-12 md:h-12" />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[14px] border border-[#e3e3e3] bg-white/60"
            >
              <div className="h-[158px] animate-pulse bg-[#dddddd] md:h-[160px]" />
              <div className="space-y-3 px-4 pb-5 pt-4">
                <div className="h-5 w-4/5 animate-pulse rounded bg-[#dddddd]" />
                <div className="h-5 w-3/5 animate-pulse rounded bg-[#e7e7e7]" />
                <div className="h-4 w-full animate-pulse rounded bg-[#e7e7e7]" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-[#ececec]" />
                <div className="h-4 w-24 animate-pulse rounded bg-[#f26a21]/20" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  ),
});

export default LatestBlogs;
