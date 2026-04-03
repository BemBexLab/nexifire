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
    <div ref={rootRef} className="flex flex-col gap-2">
      {/* Label */}
      <p className="font-nunito text-[16px] text-black tracking-wide font-medium">
        Trusted By Clients
      </p>

      {/* Avatars + Count */}
      <div className="flex items-center gap-4">
        {/* Overlapping avatar stack */}
        <div className="flex items-center">
          {avatars.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Client ${i + 1}`}
              className="w-18 h-18 rounded-full object-cover border-[3px] border-[#f0f0f0]"
              style={{ marginLeft: i === 0 ? 0 : "-14px", zIndex: i }}
            />
          ))}
        </div>

        {/* Count */}
        <span
          className="text-[#1c1c1c] font-semibold"
          style={{ fontSize: "32px", letterSpacing: "-0.5px" }}
        >
          {animatedCount}+
        </span>
      </div>
    </div>
  );
}
