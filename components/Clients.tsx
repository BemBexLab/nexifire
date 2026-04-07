"use client";

import { useEffect, useState } from "react";
import { useRef } from "react";

export default function Clients() {
  const [animatedCount, setAnimatedCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const avatars = [
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/68.jpg",
    "https://randomuser.me/api/portraits/women/21.jpg",
  ];

  useEffect(() => {
    const node = rootRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    const target = 20;
    const duration = 1000;
    let start: number | null = null;
    let rafId = 0;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setAnimatedCount(Math.floor(progress * target));
      if (progress < 1) {
        rafId = requestAnimationFrame(tick);
      } else {
        setHasAnimated(true);
      }
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [hasAnimated, isInView]);

  return (
    <div
      ref={rootRef}
      className="flex w-full max-w-full flex-col items-center gap-3 px-2 pb-6 text-center md:px-0 md:pb-0 md:items-start md:text-left"
    >
      {/* Label */}
      <p className="font-nunito text-sm font-medium tracking-wide text-black md:text-[16px]">
        Trusted By Clients
      </p>

      {/* Avatars + Count */}
      <div className="flex w-full max-w-full flex-wrap items-center justify-center gap-3 md:justify-start md:gap-4">
        {/* Overlapping avatar stack */}
        <div className="flex max-w-full items-center pl-2 md:pl-0">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Client ${i + 1}`}
              className="h-12 w-12 rounded-full border-[3px] border-[#f0f0f0] object-cover md:h-16 md:w-16 xl:h-18 xl:w-18"
              style={{ marginLeft: i === 0 ? 0 : "-12px", zIndex: i }}
            />
          ))}
        </div>

        {/* Count */}
        <span
          className="font-jakarta text-[26px] font-semibold tracking-[-0.5px] text-[#1c1c1c] md:text-[32px]"
        >
          {animatedCount}+
        </span>
      </div>
    </div>
  );
}
