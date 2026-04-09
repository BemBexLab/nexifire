"use client";

import dynamic from "next/dynamic";

const TestimonialsSection = dynamic(() => import("./Testimonials"), {
  loading: () => (
    <section className="w-full py-20">
      <div className="mx-auto max-w-[1480px] px-4">
        <div className="mb-[34px] text-center">
          <div className="mx-auto h-10 w-72 max-w-full animate-pulse rounded bg-[#e3e3e3] lg:h-12" />
        </div>

        <div className="grid grid-cols-1 gap-[16px] md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div
              key={index}
              className="rounded-[12px] border border-[#eaeaea] bg-white px-[16px] pb-[18px] pt-[14px]"
              style={{
                boxShadow:
                  "0 10px 24px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
              }}
            >
              <div className="mb-5 flex items-center gap-[3px]">
                {Array.from({ length: 5 }).map((__, starIndex) => (
                  <div
                    key={starIndex}
                    className="h-[26px] w-[27px] animate-pulse rounded bg-[#f0d4c0]"
                  />
                ))}
              </div>

              <div className="space-y-3">
                <div className="h-4 w-full animate-pulse rounded bg-[#e7e7e7]" />
                <div className="h-4 w-11/12 animate-pulse rounded bg-[#ececec]" />
                <div className="h-4 w-10/12 animate-pulse rounded bg-[#e7e7e7]" />
                <div className="h-4 w-9/12 animate-pulse rounded bg-[#ececec]" />
                <div className="h-4 w-8/12 animate-pulse rounded bg-[#e7e7e7]" />
              </div>

              <div className="mt-[18px] flex items-center gap-[12px]">
                <div className="h-[64px] w-[64px] animate-pulse rounded-full bg-[#dddddd]" />
                <div className="h-5 w-32 animate-pulse rounded bg-[#e7e7e7]" />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[26px] flex items-center justify-center gap-[6px]">
          <div className="h-[8px] w-[24px] animate-pulse rounded-full bg-[#e0b48e]" />
          <div className="h-[8px] w-[8px] animate-pulse rounded-full bg-[#d6d6d6]" />
        </div>
      </div>
    </section>
  ),
});

export default TestimonialsSection;
