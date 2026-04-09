"use client";

import React, { useEffect, useMemo, useState } from "react";

type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  review: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Hannah Bertin",
    avatar: "https://i.pravatar.cc/100?img=1",
    review:
      "Nexfire has brought a level of structure I never realized I was missing. I am an author and worked with one of Nexfire's brands, Ink Founders. I must say they are very professional. Everything was aligned under one system. They helped me in editing, marketing, and publishing my book. I appreciated.",
  },
  {
    id: 2,
    name: "Benjamin Paul",
    avatar: "https://i.pravatar.cc/100?img=2",
    review:
      "I was worried about my website development because I wanted it to be unique and responsive across all devices. It is not false that the Nexfire's brand Web Founders helped me a lot in that. Web Founders keep everything connected from strategy to execution. It felt like a complete growth system.",
  },
  {
    id: 3,
    name: "John Alex",
    avatar: "https://i.pravatar.cc/100?img=3",
    review:
      "I was looking for the service creating my book website and book publishing, and the Nexfire brand, which is the Storyloom complete system I have worked with. No doubt they brought clarity and confidence. Everything is handled carefully, whether my author website or my book publishing on different platforms. Every step is well managed.",
  },
  {
    id: 4,
    name: "Sophie Lane",
    avatar: "https://i.pravatar.cc/100?img=4",
    review:
      "Their process gave me confidence from day one. Every milestone was clearly planned, and the team made sure my project moved forward smoothly without confusion or delays.",
  },
  {
    id: 5,
    name: "Marcus Lee",
    avatar: "https://i.pravatar.cc/100?img=5",
    review:
      "From branding to launch, everything felt organized and intentional. I appreciated how responsive the team was and how they connected every part of the work into one clear strategy.",
  },
  {
    id: 6,
    name: "Elena Cruz",
    avatar: "https://i.pravatar.cc/100?img=6",
    review:
      "Working with them made the whole journey stress-free. They handled details carefully, communicated well, and delivered a polished result that felt aligned with my goals.",
  },
];

const Stars = () => {
  return (
    <div className="mb-5 flex items-center gap-[3px]">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          width="27"
          height="26"
          viewBox="0 0 27 26"
          fill="none"
        >
          <path
            d="M13.3148 0L16.458 9.67376H26.6296L18.4006 15.6525L21.5438 25.3262L13.3148 19.3475L5.0858 25.3262L8.22899 15.6525L-2.86102e-06 9.67376H10.1716L13.3148 0Z"
            fill="#B24002"
          />
        </svg>
      ))}
    </div>
  );
};

export default function TestimonialsSection() {
  const slides = useMemo(() => {
    const grouped: Testimonial[][] = [];
    for (let i = 0; i < testimonials.length; i += 3) {
      grouped.push(testimonials.slice(i, i + 3));
    }
    return grouped;
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <section className="w-full py-20">
      <div className="mx-auto h-[500px] max-w-[1380px] px-4">
        <div className="mb-[34px] text-center">
          <h2 className="bg-gradient-to-r from-[#282828] to-[#8C8C8C] bg-clip-text font-jakarta text-4xl font-medium uppercase leading-tight text-transparent lg:text-5xl">
            WHAT ARE THEY
            <br />
            SAYING ABOUT US?
          </h2>
        </div>

        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${slides.length * 100}%`,
              transform: `translateX(-${(100 / slides.length) * currentSlide}%)`,
            }}
          >
            {slides.map((slide, slideIndex) => (
              <div
                key={slideIndex}
                className="grid w-full shrink-0 grid-cols-1 gap-[16px] rounded-[12px] px-[2px] md:grid-cols-3"
                style={{ width: `${100 / slides.length}%` }}
              >
                {slide.map((item) => (
                  <article
                    key={item.id}
                    className="rounded-[12px] border border-[#eaeaea] bg-white px-[16px] pb-[18px] pt-[14px]"
                    style={{
                      boxShadow:
                        "0 10px 24px rgba(0,0,0,0.04), 0 1px 2px rgba(0,0,0,0.03)",
                    }}
                  >
                    <Stars />

                    <p className="min-h-[154px] text-md leading-[1.58] text-[#7a7a7a]">
                      {item.review}
                    </p>

                    <div className="mt-[18px] flex items-center gap-[12px]">
                      <img
                        src={item.avatar}
                        alt={item.name}
                        className="h-[64px] w-[64px] rounded-full object-cover"
                      />
                      <span className="text-[16px] font-medium text-[#4d4d4d]">
                        {item.name}
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-[26px] flex items-center justify-center gap-[6px]">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setCurrentSlide(index)}
              className={
                index === currentSlide
                  ? "h-[8px] w-[24px] rounded-full bg-[#C65A12] transition-all duration-300"
                  : "h-[8px] w-[8px] rounded-full bg-[#d6d6d6] transition-all duration-300"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
