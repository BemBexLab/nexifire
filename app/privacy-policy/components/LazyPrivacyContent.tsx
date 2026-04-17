"use client";

import dynamic from "next/dynamic";

const PrivacyContent = dynamic(() => import("./PrivacyContent"), {
  loading: () => <PrivacyContentSkeleton />,
});

const PrivacyContentSkeleton = () => (
  <div className="font-jakarta mx-auto max-w-7xl bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-6 lg:py-20">
    <div className="flex animate-pulse flex-col gap-10 lg:flex-row lg:gap-16">
      <aside className="w-full lg:w-[360px]">
        <div className="h-6 w-48 rounded bg-[#EDEDED]" />
        <div className="mt-4 h-px w-full bg-[#ECECEC]" />
        <div className="mt-[18px] flex flex-col gap-[10px] sm:gap-[12px]">
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className="min-h-[36px] rounded-[5px] border border-[#EFEFEF] bg-[#F7F7F7]"
            />
          ))}
        </div>
      </aside>

      <main className="w-full space-y-8 lg:w-3/4 lg:space-y-10">
        {Array.from({ length: 4 }).map((_, index) => (
          <section key={index}>
            <div className="mb-4 h-8 w-3/4 rounded bg-[#EDEDED] sm:w-1/2 lg:mb-6" />
            <div className="space-y-3">
              <div className="h-4 w-full rounded bg-[#F0F0F0]" />
              <div className="h-4 w-11/12 rounded bg-[#F0F0F0]" />
              <div className="h-4 w-4/5 rounded bg-[#F0F0F0]" />
            </div>
          </section>
        ))}
      </main>
    </div>
  </div>
);

export default PrivacyContent;
