"use client";

import { useEffect, useState } from "react";

type LoaderOverlayProps = {
  label?: string;
};

export function LoaderOverlay({
  label = "Loading NexiFire",
}: LoaderOverlayProps) {
  return (
    <div className="fixed inset-0 z-[999] grid place-items-center bg-[#F6F6F6] text-black">
      <div className="relative flex min-h-[260px] w-[min(86vw,440px)] flex-col items-center justify-center overflow-hidden rounded-lg border border-white bg-white/70 px-8 py-10 shadow-[0_24px_70px_rgba(31,31,31,0.14)]">
        <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border-[28px] border-[#B24002]/15" />
        <div className="absolute -bottom-14 -left-12 h-36 w-36 rounded-full border-[24px] border-black/5" />

        <div className="relative mb-7 grid h-20 w-20 place-items-center">
          <div className="absolute inset-0 rounded-full border border-[#B24002]/20" />
          <div className="absolute inset-2 animate-spin rounded-full border-2 border-[#B24002] border-r-transparent border-t-transparent" />
          <div
            className="h-12 w-12 rounded-[7px]"
            style={{
              backgroundImage: 'url("/Vector.png")',
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          />
        </div>

        <p className="font-jakarta text-sm font-semibold uppercase tracking-[0.36em] text-[#B24002]">
          NexiFire
        </p>
        <p className="mt-3 text-center font-jakarta text-[28px] font-medium leading-tight text-[#222222] sm:text-[34px]">
          Build. Scale. Grow.
        </p>
        <p className="mt-3 text-center font-jakarta text-sm text-[#707070]">
          {label}
        </p>

        <div className="mt-8 h-[5px] w-full overflow-hidden rounded-full bg-[#E3E3E3]">
          <div className="h-full w-1/2 animate-[loaderSlide_1s_ease-in-out_infinite] rounded-full bg-[#B24002]" />
        </div>
      </div>
    </div>
  );
}

type DelayedLoaderOverlayProps = LoaderOverlayProps & {
  delayMs?: number;
};

export function DelayedLoaderOverlay({
  label,
  delayMs = 180,
}: DelayedLoaderOverlayProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setVisible(true), delayMs);

    return () => window.clearTimeout(timer);
  }, [delayMs]);

  if (!visible) return null;

  return <LoaderOverlay label={label} />;
}

export default DelayedLoaderOverlay;
