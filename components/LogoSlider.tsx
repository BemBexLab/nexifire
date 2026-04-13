"use client";

const logos = [
  {
    id: 1,
    name: "Vercel",
    src: "https://cdn.simpleicons.org/vercel/111111",
  },
  {
    id: 2,
    name: "Stripe",
    src: "https://cdn.simpleicons.org/stripe/635BFF",
  },
  {
    id: 3,
    name: "Notion",
    src: "https://cdn.simpleicons.org/notion/2F3437",
  },
  {
    id: 4,
    name: "Linear",
    src: "https://cdn.simpleicons.org/linear/5E6AD2",
  },
  {
    id: 5,
    name: "Figma",
    src: "https://cdn.simpleicons.org/figma/F24E1E",
  },
  {
    id: 6,
    name: "Supabase",
    src: "https://cdn.simpleicons.org/supabase/3ECF8E",
  },
  {
    id: 7,
    name: "Railway",
    src: "https://cdn.simpleicons.org/railway/7C3AED",
  },
  {
    id: 8,
    name: "Resend",
    src: "https://cdn.simpleicons.org/resend/000000",
  },
];

// Duplicate for seamless loop.
const track = [...logos, ...logos];

export default function LogoSlider() {
  return (
    <div className="relative mx-auto w-full overflow-hidden bg-white px-4 py-6 sm:px-6">
      <div
        className="flex w-max items-center gap-6 sm:gap-8 lg:gap-12"
        style={{ animation: "marquee 15s linear infinite" }}
      >
        {track.map((logo, i) => (
          <LogoCard
            key={`${logo.id}-${i}`}
            name={logo.name}
            src={logo.src}
          />
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

function LogoCard({
  name,
  src,
}: {
  name: string;
  src: string;
}) {
  return (
    <div className="flex h-12 min-w-[140px] shrink-0 select-none items-center justify-center gap-2 bg-white px-4 sm:min-w-[155px] sm:px-5 lg:min-w-[170px] lg:px-6">
      <img
        src={src}
        alt={`${name} logo`}
        className="h-7 w-7 shrink-0 object-contain"
        loading="lazy"
      />
      <span
        className="text-[11px] font-medium tracking-wide text-[#888] sm:text-[12px] lg:text-[13px]"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {name}
      </span>
    </div>
  );
}
