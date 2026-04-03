"use client";

import { TfiArrowTopRight } from "react-icons/tfi";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useEffect, useState } from "react";
import Clients from "./Clients";
import RichTextLetterReveal from "./RichTextLetterReveal";
import TextFluxUnveil from "./TextFluxUnveil";

const stats = [
  { value: "24/7", label: "Active monitoring" },
  { value: "99.9%", label: "System uptime" },
  { value: "15m", label: "Average response time" },
];

export default function HomeHero() {
  // Manual size controls for the right-side card + image
  const statsCardSize = { width: 325, height: 380 };
  const heroImageSize = { width: 365, height: 380 };
  const [animatedCount, setAnimatedCount] = useState(0);
  const [cardTiltDone, setCardTiltDone] = useState(false);
  const [barGrowthDone, setBarGrowthDone] = useState(false);
  const heroHeading = "We Build and Scale Brands That Bring Real Growth";
  const heroDescription =
    "NexiFire is a collective of specialized brands delivering strategy, \nmarketing, content, and digital systems designed to grow businesses with clarity and precision.";
  const businessHeading =
    "Built For Businesses \nThat Are Serious About \nGrowth";
  const words = heroHeading.split(" ");
  const revealOrder = words.map((_, i) => (i * 7) % words.length);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const lineX = useSpring(
    useTransform(cursorX, (v) => v * 0.25),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const lineY = useSpring(
    useTransform(cursorY, (v) => v * 0.25),
    {
      stiffness: 180,
      damping: 22,
    },
  );

  const leftRingX = useSpring(
    useTransform(cursorX, (v) => v * 0.55),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const leftRingY = useSpring(
    useTransform(cursorY, (v) => v * 0.55),
    {
      stiffness: 180,
      damping: 22,
    },
  );

  const rightRingX = useSpring(
    useTransform(cursorX, (v) => v * 0.85),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const rightRingY = useSpring(
    useTransform(cursorY, (v) => v * 0.85),
    {
      stiffness: 180,
      damping: 22,
    },
  );
  const giftRibbonShapes = [
    { x: -56, y: -44, rotate: -62, scale: 1.05, delay: 0.05 },
    { x: 84, y: -60, rotate: -20, scale: 0.72, delay: 0.12 },
    { x: 220, y: -52, rotate: 14, scale: 0.64, delay: 0.18 },
    { x: 344, y: 18, rotate: 42, scale: 0.7, delay: 0.25 },
    { x: 356, y: 142, rotate: 28, scale: 0.58, delay: 0.31 },
    { x: 336, y: 292, rotate: -34, scale: 0.82, delay: 0.37 },
    { x: 190, y: 404, rotate: -6, scale: 0.68, delay: 0.44 },
    { x: 24, y: 418, rotate: -26, scale: 0.6, delay: 0.5 },
    { x: -64, y: 306, rotate: -48, scale: 0.76, delay: 0.56 },
    { x: -72, y: 94, rotate: -30, scale: 0.66, delay: 0.62 },
  ];

  useEffect(() => {
    const target = 230;
    const duration = 1400;
    let start: number | null = null;
    let rafId = 0;

    const tick = (timestamp: number) => {
      if (start === null) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setAnimatedCount(Math.floor(progress * target));
      if (progress < 1) rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const handlePanelMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
    const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

    cursorX.set(normalizedX * 12);
    cursorY.set(normalizedY * 12);
  };

  const handlePanelMouseLeave = () => {
    cursorX.set(0);
    cursorY.set(0);
  };

  return (
    <section
      className="flex min-h-[1040px] justify-center overflow-hidden bg-[#F6F6F6] text-[#1f1f1f]"
      style={{
        clipPath:
          "polygon(0% 0%, 100% 0%, 100% 100%, 48% 100%, 44% 92%, 0% 92%)",
      }}
    >
      <div className="absolute grid left-28 w-full max-w-7xl pb-20 lg:grid-cols-2">
        {/* First Col Heading and text col */}
        <div className="right-40 h-full w-[700px] pt-70 lg:self-stretch">
          <div
            className="font-mulish rounded-[10px] px-5 py-3 w-65 h-13 text-xl"
            style={{
              background:
                "linear-gradient(90deg, rgba(178, 64, 2, 0.13) 0%, rgba(178, 64, 2, 0.00) 79.96%)",
            }}
          >
            <TextFluxUnveil text="Welcome to NexiFire" />
          </div>

          <div className="relative max-w-2xl pt-5">
            <h1 className="text-4xl font-regular uppercase sm:text-5xl lg:text-[80px]">
              {words.map((word, index) => (
                <motion.span
                  key={`${word}-${index}`}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.45,
                    ease: "easeOut",
                    delay: 0.12 + revealOrder[index] * 0.06,
                  }}
                  className="inline-block mr-3"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            {/* Eclipse Image */}
            <Image
              src="/images/Ellipse 19.png"
              alt="Eclipse highlight"
              width={530}
              height={200}
              className="pointer-events-none absolute left-[25px] top-[23%] z-20 h-auto w-[520px] rotate-[1deg]"
            />
          </div>

          <div className="font-jakarta mt-6 max-w-[770px] text-[20px] text-[#777777]">
            <RichTextLetterReveal text={heroDescription} />
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <motion.button
              style={{
                background: "linear-gradient(90deg, #B24002 0%, #FF5B01 100%)",
              }}
              className="flex items-center justify-center gap-2 w-[250px] rounded-lg px-6 py-3 text-lg font-light text-white"
              whileHover={{
                y: -3,
                scale: 1.02,
                boxShadow: "0 10px 24px rgba(178,64,2,0.35)",
              }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              Explore Our Brands
              <motion.span
                whileHover={{ x: 4, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <TfiArrowTopRight size={20} />
              </motion.span>
            </motion.button>
            <motion.button
              className="flex items-center justify-center w-[220px] gap-2 rounded-lg border border-black px-6 py-3 text-lg font-light text-black transition hover:bg-white"
              whileHover={{ y: -3, scale: 1.02, backgroundColor: "#ffffff" }}
              whileTap={{ y: 0, scale: 0.98 }}
              transition={{ type: "spring", stiffness: 320, damping: 20 }}
            >
              Work With Us
              <motion.span
                whileHover={{ x: 4, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                <TfiArrowTopRight size={20} />
              </motion.span>
            </motion.button>
          </div>
        </div>

        {/* Second Col - Stats and Images */}
        <div className="absolute bottom-75 -right-100 mb-13 flex w-auto gap-x-8 lg:self-stretch lg:justify-end">
          {/* Animated Tilted Card */}
          <div
            className="relative"
            style={{
              width: `${statsCardSize.width}px`,
              height: `${statsCardSize.height}px`,
            }}
          >
            <div className="pointer-events-none absolute inset-0">
              {giftRibbonShapes.map((piece, index) => (
                <motion.svg
                  key={`gift-ribbon-shape-${index}`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                  className="absolute"
                  style={{ left: piece.x, top: piece.y }}
                  initial={{ opacity: 0, scale: 0.2, y: 8, rotate: 0 }}
                  animate={
                    cardTiltDone
                      ? {
                          opacity: [0, 1, 1],
                          scale: [0.2, piece.scale * 1.1, piece.scale],
                          y: [8, 0, -2, 0],
                          rotate: [0, piece.rotate],
                        }
                      : undefined
                  }
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: 0.75 + piece.delay,
                  }}
                >
                  <path
                    d="M25.1834 -5.26902e-06L30.0976 18.1419L35.012 36.2825L17.5054 32.0944L-2.85208e-05 27.9065L12.5909 13.9537L25.1834 -5.26902e-06Z"
                    fill="#B24002"
                  />
                </motion.svg>
              ))}
            </div>
            <motion.div
              className="relative shadow-lg pb-8 px-8 flex flex-col items-center font-jakarta rounded-3xl text-black text-light bg-[#E6E6E6]"
              initial={{ rotate: 0 }}
              animate={{ rotate: -5 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              onAnimationComplete={() => setCardTiltDone(true)}
              style={{
                width: `${statsCardSize.width}px`,
                height: `${statsCardSize.height}px`,
                transformOrigin: "left bottom",
              }}
            >
              <p className="pt-1 text-[105.429px]">{animatedCount}+</p>
              <p className="pb-14 w-5/5 text-md text-[#5C5D5F]">
                Global Brands Scaled. Trusted by industry leaders to dominate
                their markets through our specialized ecosystem.
              </p>
              <div className="w-[250px] mb-4 bg-[#D9D9D9] h-2.5">
                <motion.div
                  className="bg-[#B24002] h-2.5"
                  initial={{ width: "0%" }}
                  animate={{ width: "65%" }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.25 }}
                />
              </div>
            </motion.div>
          </div>

          <div
            className="relative"
            style={{ width: `${heroImageSize.width}px` }}
          >
            <div className="absolute left-10 top-18 z-20 flex h-[90px] items-center justify-center rounded-full bg-black px-5">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 0 48 48"
                fill="none"
                initial={{ y: 14, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <motion.path
                  d="M46 12L27 31L17 21L2 36"
                  stroke="#B24002"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                />
                <motion.path
                  d="M34 12H46V24"
                  stroke="#B24002"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 1 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.35, ease: "easeInOut", delay: 0.8 }}
                />
              </motion.svg>
            </div>

            <Image
              src="/images/Rectangle 23805.png"
              alt="Hero image 2"
              width={heroImageSize.width}
              height={heroImageSize.height}
              className="rounded-3xl object-cover"
              style={{
                width: `${heroImageSize.width}px`,
                height: `${heroImageSize.height}px`,
              }}
            />
          </div>

          <div
            className="absolute rounded-[25.102px] overflow-hidden -bottom-70 w-[770px] h-[261.102px] bg-[#111111] py-6 text-white"
            onMouseMove={handlePanelMouseMove}
            onMouseLeave={handlePanelMouseLeave}
          >
            <div className="gap-x-3">
              <div className="items-center w-[350px] px-8 gap-3 flex flex-row pt-5 pb-3">
                <motion.div style={{ x: lineX, y: lineY }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="68"
                    height="2"
                    viewBox="0 0 68 2"
                    fill="none"
                  >
                    <path
                      d="M0 0.627563H67.7755"
                      stroke="white"
                      strokeWidth="1.2551"
                    />
                  </svg>
                </motion.div>
                <p className="font-jakarta">Strategy. Execution. Scale.</p>
              </div>

              <div className="flex">
                <div className="relative grid grid-cols-1 w-[480px] grid-rows-1">
                  <div className="col-start-1 row-start-1">
                    <motion.div
                      className="absolute bottom-3"
                      style={{ x: leftRingX, y: leftRingY }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="97"
                        height="119"
                        viewBox="0 0 97 119"
                        fill="none"
                      >
                        <circle
                          cx="37.7549"
                          cy="59.1733"
                          r="45.1573"
                          transform="rotate(18.3221 37.7549 59.1733)"
                          stroke="url(#paint0_linear_269_568)"
                          strokeWidth="28"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_269_568"
                            x1="37.7549"
                            y1="0.016037"
                            x2="37.7549"
                            y2="85.0546"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#393939" />
                            <stop
                              offset="1"
                              stopColor="#1F1F1F"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>
                  <div className="z-10 col-start-1 w-[500px] leading-tight row-start-1 self-center px-8 text-[38px] font-medium font-jakarta">
                    <RichTextLetterReveal text={businessHeading} />
                  </div>
                </div>

                <div className="grid grid-cols-1 w-[480px] grid-rows-1">
                  <div className="col-start-1 row-start-1">
                    <motion.div
                      className="absolute top-0 right-0 rounded-tr-[25.102px]"
                      style={{ x: rightRingX, y: rightRingY }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="178"
                        height="177"
                        viewBox="0 0 178 177"
                        fill="none"
                      >
                        <circle
                          cx="110.298"
                          cy="65.7951"
                          r="90.1224"
                          transform="rotate(-42.8231 110.298 65.7951)"
                          stroke="url(#paint0_linear_269_566)"
                          strokeWidth="40.35"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_269_566"
                            x1="110.298"
                            y1="-44.5023"
                            x2="110.298"
                            y2="114.05"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="#393939" />
                            <stop
                              offset="1"
                              stopColor="#1F1F1F"
                              stopOpacity="0"
                            />
                          </linearGradient>
                        </defs>
                      </svg>
                    </motion.div>
                  </div>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="41"
                    viewBox="0 0 43 41"
                    fill="none"
                    className="absolute right-56 top-17 rotate-25"
                  >
                    <g filter="url(#filter0_f_279_717)">
                      <path
                        d="M39.5389 2.70002L32.7081 20.2105L25.8782 37.7201L14.2886 23.9467L2.69992 10.1743L21.1185 6.43712L39.5389 2.70002Z"
                        fill="#DA682A"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_279_717"
                        x="-4.88758e-05"
                        y="1.21593e-05"
                        width="42.239"
                        height="40.4201"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="1.35"
                          result="effect1_foregroundBlur_279_717"
                        />
                      </filter>
                    </defs>
                  </svg>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="41"
                    viewBox="0 0 43 41"
                    fill="none"
                    className="z-90 relative bottom-39 -right-85 rotate-43"
                  >
                    <g filter="url(#filter0_f_279_717)">
                      <path
                        d="M39.5389 2.70002L32.7081 20.2105L25.8782 37.7201L14.2886 23.9467L2.69992 10.1743L21.1185 6.43712L39.5389 2.70002Z"
                        fill="#DA682A"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_f_279_717"
                        x="-4.88758e-05"
                        y="1.21593e-05"
                        width="42.239"
                        height="40.4201"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood
                          floodOpacity="0"
                          result="BackgroundImageFix"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="BackgroundImageFix"
                          result="shape"
                        />
                        <feGaussianBlur
                          stdDeviation="1.35"
                          result="effect1_foregroundBlur_279_717"
                        />
                      </filter>
                    </defs>
                  </svg>

                  
                  <div className="absolute bottom-0 right-0 z-10 pr-5">
                    <div className="relative flex flex-row items-end gap-x-2">
                      <motion.div
                        className="bg-[#DA682A] rounded-t-xl w-[76.602px]"
                        initial={{ height: 0 }}
                        animate={{ height: 109.235 }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.2,
                        }}
                      />
                      <motion.div
                        className="bg-[#C65416] rounded-t-xl w-[76.602px]"
                        initial={{ height: 0 }}
                        animate={{ height: 160.694 }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.35,
                        }}
                      />
                      <motion.div
                        className="bg-[#B24002] rounded-t-xl w-[76.602px]"
                        initial={{ height: 0 }}
                        animate={{ height: 198.347 }}
                        transition={{
                          duration: 0.45,
                          ease: "easeOut",
                          delay: 0.5,
                        }}
                        onAnimationComplete={() => setBarGrowthDone(true)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Third Bottom Component */}
        <div className="absolute -bottom-20 -right-3">
          <Clients />
        </div>
      </div>
    </section>
  );
}
