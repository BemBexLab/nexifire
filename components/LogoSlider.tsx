"use client";

// ── LogoSlider ────────────────────────────────────────────────────────────────
// Continuous infinite marquee with fade-blur mask on both edges.
// Replace the logo placeholders with your own <img> or <SVG> components.
// ─────────────────────────────────────────────────────────────────────────────

const logos = [
  { id: 1,  name: "Vercel"     },
  { id: 2,  name: "Stripe"     },
  { id: 3,  name: "Notion"     },
  { id: 4,  name: "Linear"     },
  { id: 5,  name: "Figma"      },
  { id: 6,  name: "Supabase"   },
  { id: 7,  name: "Railway"    },
  { id: 8,  name: "Resend"     },
];

// Duplicate for seamless loop
const track = [...logos, ...logos];

export default function LogoSlider() {
  return (
    <div className="relative mx-auto w-full overflow-hidden bg-white px-4 py-6 sm:px-6">

      {/* ── Blur / fade masks ── */}
      {/* <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 lg:w-32 xl:w-48"
        style={{
          background:
            "linear-gradient(to right, #ffffff 0%, rgba(255,255,255,0.85) 40%, transparent 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to right, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, black 0%, transparent 100%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 lg:w-32 xl:w-48"
        style={{
          background:
            "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.85) 40%, transparent 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      /> */}

      {/* ── Scrolling track ── */}
      <div
        className="flex w-max items-center gap-6 sm:gap-8 lg:gap-12"
        style={{ animation: "marquee 15s linear infinite" }}
      >
        {track.map((logo, i) => (
          <LogoCard key={`${logo.id}-${i}`} name={logo.name} />
        ))}
      </div>

      {/* ── Keyframe ── */}
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

// ── Placeholder logo card ─────────────────────────────────────────────────────
// Replace the inner content with your actual logo SVG or <img> tag.
// ─────────────────────────────────────────────────────────────────────────────
function LogoCard({ name }: { name: string }) {
  return (
    <div className="flex h-12 min-w-[96px] shrink-0 select-none items-center justify-center bg-white px-4 sm:min-w-[110px] sm:px-5 lg:min-w-[120px] lg:px-6">
      {/*
        ↓ Replace this placeholder with your logo:
        <img src={`/logos/${name.toLowerCase()}.svg`} alt={name} className="h-6 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
      */}
      <span
        className="text-[11px] font-medium tracking-wide text-[#888] sm:text-[12px] lg:text-[13px]"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {name}
      </span>
    </div>
  );
}
