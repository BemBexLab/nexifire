"use client";

import { motion } from "motion/react";

type TextFluxUnveilProps = {
  text: string;
  className?: string;
  baseDelay?: number;
  stepDelay?: number;
};

export default function TextFluxUnveil({
  text,
  className,
  baseDelay = 0.05,
  stepDelay = 0.04,
}: TextFluxUnveilProps) {
  const chars = text.split("");
  const ranked = chars
    .map((char, index) => ({
      index,
      score: (index * 17 + char.charCodeAt(0) * 13) % 101,
    }))
    .sort((a, b) => a.score - b.score);

  const revealRank = new Array(chars.length).fill(0);
  ranked.forEach((item, rank) => {
    revealRank[item.index] = rank;
  });

  return (
    <span className={className}>
      {chars.map((char, index) => (
        <motion.span
          key={`${char}-${index}`}
          initial={{ opacity: 0, y: 6, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.35,
            ease: "easeOut",
            delay: baseDelay + revealRank[index] * stepDelay,
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

