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
    <div className="w-[920px] overflow-hidden relative py-6 bg-white">

      {/* ── Blur / fade masks ── */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 sm:w-48"
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
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 sm:w-48"
        style={{
          background:
            "linear-gradient(to left, #ffffff 0%, rgba(255,255,255,0.85) 40%, transparent 100%)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
          maskImage: "linear-gradient(to left, black 0%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to left, black 0%, transparent 100%)",
        }}
      />

      {/* ── Scrolling track ── */}
      <div
        className="flex items-center gap-12 w-max"
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
    <div className="flex items-center justify-center h-12 px-6 bg-white select-none shrink-0 min-w-[120px]">
      {/*
        ↓ Replace this placeholder with your logo:
        <img src={`/logos/${name.toLowerCase()}.svg`} alt={name} className="h-6 w-auto object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
      */}
      <span
        className="text-[13px] font-medium text-[#888] tracking-wide"
        style={{ fontFamily: "'Georgia', serif" }}
      >
        {name}
      </span>
    </div>
  );
}