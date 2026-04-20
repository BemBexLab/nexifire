"use client";

const logos = [
  {
    id: 1,
    src: "/clients/clients01.webp",
  },
  {
    id: 2,
    src: "/clients/clients02.webp",
  },
  {
    id: 3,
    src: "/clients/clients03.webp",
  },
  {
    id: 4,
    src: "/clients/clients04.webp",
  },
  {
    id: 5,
    src: "/clients/clients05.webp",
  },
  {
    id: 6,
    src: "/clients/clients06.webp",
  },
  {
    id: 7,
    src: "/clients/clients07.webp",
  },
  {
    id: 8,
    src: "/clients/clients08.webp",
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
            src={logo.src}
            index={logo.id}
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
  src,
  index,
}: {
  src: string;
  index: number;
}) {
  return (
    <div className="flex h-16 min-w-[140px] shrink-0 select-none items-center justify-center bg-white px-4 sm:min-w-[165px] sm:px-5 lg:min-w-[190px] lg:px-6">
      <img
        src={src}
        alt={`Client logo ${index}`}
        className="h-12 w-auto max-w-[130px] shrink-0 object-contain sm:h-14 sm:max-w-[150px] lg:max-w-[170px]"
        loading="lazy"
      />
    </div>
  );
}
