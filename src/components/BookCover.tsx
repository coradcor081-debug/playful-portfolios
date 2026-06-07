import { useEffect, useState } from "react";
import cover from "@/assets/scrapbook-cover.png.asset.json";

export function BookCover() {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(() => setGone(true), 1600);
    return () => clearTimeout(t);
  }, [opening]);

  useEffect(() => {
    if (gone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [gone]);

  if (gone) return null;

  const open = () => setOpening(true);

  return (
    <div
      aria-hidden={opening}
      className="fixed inset-0 z-[100] select-none overflow-hidden"
      style={{
        perspective: "2600px",
        perspectiveOrigin: "0% 50%",
        transition: "opacity .4s ease 1.1s",
        opacity: opening ? 0 : 1,
        background:
          "radial-gradient(ellipse at 60% 40%, #5a3a22 0%, #2a1808 55%, #120a04 100%)",
      }}
    >
      {/* warm desk-light wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 35%, rgba(255,210,150,0.18) 0%, transparent 60%)",
        }}
      />

      {/* Stage – holds the book centered */}
      <div className="relative h-full w-full flex items-center justify-center p-4 sm:p-8">
        {/* Cast shadow on the "desk" */}
        <div
          aria-hidden
          className="absolute bottom-[6%] left-1/2 -translate-x-1/2"
          style={{
            width: "min(78vw, 78vh * 0.8)",
            height: 40,
            background:
              "radial-gradient(ellipse, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0) 70%)",
            filter: "blur(8px)",
            opacity: opening ? 0.2 : 0.7,
            transition: "opacity 1.2s ease",
          }}
        />

        {/* Book wrapper – aspect ratio matches the cover art (roughly 4:5) */}
        <div
          className="relative"
          style={{
            height: "min(94vh, calc(94vw * 1.25))",
            aspectRatio: "4 / 5",
            transformStyle: "preserve-3d",
          }}
        >
          {/* "Inside page" peeking behind the cover */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #f4ecd8 0 4px, #ede2c6 4px 5px)",
              boxShadow:
                "inset 0 0 80px rgba(120,80,40,0.25), 0 30px 60px -20px rgba(0,0,0,0.6)",
              borderRadius: 4,
              transform: "translateZ(-2px)",
            }}
          />

          {/* Page edge stack (right side) */}
          <div
            aria-hidden
            className="absolute -right-2 top-2 bottom-2 w-2 rounded-r-sm"
            style={{
              background:
                "repeating-linear-gradient(to bottom, #fdf6e3 0 2px, #e8dcb8 2px 3px)",
              boxShadow: "1px 0 4px rgba(0,0,0,0.4)",
            }}
          />

          {/* The cover itself – flips on the LEFT spine */}
          <button
            type="button"
            onClick={open}
            aria-label="Open scrapbook"
            className="group absolute inset-0 cursor-pointer overflow-hidden rounded-[4px] focus:outline-none"
            style={{
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
              transform: opening
                ? "rotateY(-165deg)"
                : "rotateY(0deg)",
              transition:
                "transform 1.4s cubic-bezier(.66,.02,.28,1), box-shadow 1.4s ease",
              boxShadow: opening
                ? "0 40px 80px -20px rgba(0,0,0,0.7), -20px 0 40px rgba(0,0,0,0.4)"
                : "0 30px 60px -20px rgba(0,0,0,0.75), 0 10px 20px -10px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(0,0,0,0.2)",
              willChange: "transform",
              backfaceVisibility: "hidden",
            }}
          >
            {/* the cover artwork */}
            <img
              src={cover.url}
              alt="Scrapbook cover"
              className="absolute inset-0 h-full w-full object-cover"
              draggable={false}
            />

            {/* spine shadow gradient (left edge) */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 left-0 w-12"
              style={{
                background:
                  "linear-gradient(to right, rgba(0,0,0,0.45), rgba(0,0,0,0.15) 50%, transparent)",
              }}
            />
            {/* binding stitches */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-3 left-2 w-[3px] rounded-full"
              style={{
                background:
                  "repeating-linear-gradient(to bottom, #3a2412 0 8px, transparent 8px 14px)",
                opacity: 0.7,
              }}
            />
            {/* page edge highlight on right */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 right-0 w-1"
              style={{
                background:
                  "linear-gradient(to left, rgba(255,240,200,0.5), transparent)",
              }}
            />
            {/* subtle paper grain + vignette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, transparent 55%, rgba(0,0,0,0.28) 100%)",
              }}
            />

            {/* washi-tape "TAP TO OPEN" – sits on the cover */}
            <div
              className="pointer-events-none absolute left-1/2 top-6 -translate-x-1/2 rotate-[-3deg]"
              style={{
                opacity: opening ? 0 : 1,
                transition: "opacity .3s ease",
              }}
            >
              <div
                className="font-type text-[10px] tracking-[0.3em] text-[#3a2412] px-4 py-1"
                style={{
                  background:
                    "repeating-linear-gradient(45deg, oklch(0.9 0.14 95 / 0.85) 0 6px, oklch(0.88 0.16 90 / 0.85) 6px 10px)",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                }}
              >
                ✦ TAP TO OPEN ✦
              </div>
            </div>

            {/* hand-drawn pulsing CTA at bottom */}
            <div
              className="pointer-events-none absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
              style={{
                opacity: opening ? 0 : 1,
                transition: "opacity .25s ease",
              }}
            >
              <div className="relative animate-float">
                <span className="flex items-center gap-2 rounded-full border-[2.5px] border-[#3a2412] bg-[#fffdf6] px-6 py-2.5 font-hand text-2xl text-[#3a2412] shadow-[0_6px_0_-2px_#3a2412,0_8px_18px_rgba(0,0,0,0.35)] group-hover:translate-y-[-2px] transition-transform">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[oklch(0.65_0.2_25)] opacity-75" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[oklch(0.55_0.22_25)]" />
                  </span>
                  tap to open
                  <span className="text-xl">✿</span>
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* hint caption below the book */}
        <div
          aria-hidden
          className="pointer-events-none absolute bottom-6 left-1/2 -translate-x-1/2 font-hand text-[#f4e2c0]/70 text-lg tracking-wide"
          style={{
            opacity: opening ? 0 : 1,
            transition: "opacity .3s ease",
          }}
        >
          — a little scrapbook of alex —
        </div>
      </div>
    </div>
  );
}