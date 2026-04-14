"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";

interface HeroProps {
    title: string;
    description: string;
}

const Hero: React.FC<HeroProps> = ({ title, description }) => {
    const logos = [
        { src: "/privacy-policy/Logo.webp", alt: "Logoipsum", width: 140, height: 36 },
        { src: "/privacy-policy/Logo (1).webp", alt: "Logo mark", width: 120, height: 36 },
        { src: "/privacy-policy/Logo (2).webp", alt: "LOOO", width: 140, height: 36 },
        { src: "/privacy-policy/Logo (3).webp", alt: "IPSUM", width: 140, height: 36 },
        { src: "/privacy-policy/Logo (4).webp", alt: "Logo", width: 120, height: 36 }
    ];

    const trackRef = useRef<HTMLDivElement | null>(null);
    const animationRef = useRef<number | null>(null);
    const posRef = useRef(0);
    const contentWidthRef = useRef(0);

    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const updateWidth = () => {
            contentWidthRef.current = track.scrollWidth / 2;
        };

        updateWidth();

        let ro: ResizeObserver | null = null;
        if (typeof ResizeObserver !== "undefined") {
            ro = new ResizeObserver(() => updateWidth());
            ro.observe(track);
        } else {
            window.addEventListener("resize", updateWidth);
        }

        posRef.current = 0;

        const prefersReduced =
            typeof window !== "undefined" &&
            window.matchMedia &&
            window.matchMedia("(prefers-reduced-motion: reduce)").matches;

        let lastTs = performance.now();
        const pxPerSecond = 66;

        function animate(ts: number) {
            const trackEl = trackRef.current;
            if (!trackEl) return;

            const delta = ts - lastTs;
            lastTs = ts;

            if (!prefersReduced) {
                posRef.current -= (pxPerSecond * delta) / 1000;
                const w = contentWidthRef.current;

                if (w > 0) {
                    const translateX = posRef.current % w;
                    trackEl.style.transform = `translate3d(${translateX}px,0,0)`;
                } else {
                    trackEl.style.transform = `translate3d(${posRef.current}px,0,0)`;
                }
            }

            animationRef.current = requestAnimationFrame(animate);
        }

        animationRef.current = requestAnimationFrame(animate);

        return () => {
            if (animationRef.current) cancelAnimationFrame(animationRef.current);
            if (ro) ro.disconnect();
            else window.removeEventListener("resize", updateWidth);
        };
    }, [logos.length]);

    return (
        <section className="relative flex flex-col items-center justify-center min-h-[500px] md:min-h-[600px] bg-[#F6F6F6] px-4 overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

            {/* Main Content */}
            <div className="max-w-3xl text-center z-10 mb-12">
                <div className="relative inline-block">
                    <h1 className="text-5xl md:text-6xl font-light tracking-tight text-[#1a1a1a] uppercase">
                        {title}
                    </h1>

                    <svg
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-[70%] h-auto text-orange-400/60"
                        viewBox="0 0 200 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M2 10C30 4 170 2 198 8"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                        />
                    </svg>
                </div>

                <p className="mt-8 text-sm md:text-base text-gray-500 leading-relaxed max-w-2xl mx-auto font-light">
                    {description}
                </p>
            </div>

            {/* Logo Bar */}
            <div className="absolute bottom-0 w-full flex justify-center">
                <div
                    className="bg-white w-full max-w-5xl h-20 md:h-24 flex items-center justify-center px-12 shadow-sm"
                    style={{
                        clipPath: "polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%)"
                    }}
                >
                    <div className="relative w-full overflow-hidden">
                        <div
                            ref={trackRef}
                            className="flex items-center gap-12"
                            style={{ willChange: "transform", width: "max-content" }}
                        >
                            {[...logos, ...logos].map((logo, idx) => (
                                <div
                                    key={`${logo.src}-${idx}`}
                                    className="flex-shrink-0 h-[36px] md:h-[54px] flex items-center justify-center"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                        className="h-[26px] md:h-[34px] w-auto object-contain"
                                        priority
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;