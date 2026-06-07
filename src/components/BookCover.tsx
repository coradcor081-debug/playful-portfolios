import { useEffect, useState } from "react";
import cover from "@/assets/scrapbook-cover.png.asset.json";

export function BookCover() {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(() => setGone(true), 1700);
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

  const halfBase: React.CSSProperties = {
    position: "absolute",
    top: 0,
    bottom: 0,
    width: "50%",
    backgroundImage: `url(${cover.url})`,
    backgroundSize: "100vw 100vh",
    backgroundRepeat: "no-repeat",
    backfaceVisibility: "hidden",
    transition: "transform 1.4s cubic-bezier(.7,.04,.2,1), box-shadow 1.4s ease",
    willChange: "transform",
  };

  return (
    <div
      aria-hidden={opening}
      onClick={open}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && open()}
      className="fixed inset-0 z-[100] cursor-pointer select-none overflow-hidden bg-[#1a0f08]"
      style={{
        perspective: "2400px",
        perspectiveOrigin: "50% 50%",
        transition: "opacity .5s ease 1s",
        opacity: opening ? 0 : 1,
      }}
    >
      {/* Left half */}
      <div
        style={{
          ...halfBase,
          left: 0,
          backgroundPosition: "left center",
          transformOrigin: "left center",
          transform: opening ? "rotateY(-110deg)" : "rotateY(0deg)",
          boxShadow: opening
            ? "inset -40px 0 60px -20px rgba(0,0,0,0.6)"
            : "inset -8px 0 24px -10px rgba(0,0,0,0.35)",
        }}
      />
      {/* Right half */}
      <div
        style={{
          ...halfBase,
          right: 0,
          backgroundPosition: "right center",
          transformOrigin: "right center",
          transform: opening ? "rotateY(110deg)" : "rotateY(0deg)",
          boxShadow: opening
            ? "inset 40px 0 60px -20px rgba(0,0,0,0.6)"
            : "inset 8px 0 24px -10px rgba(0,0,0,0.35)",
        }}
      />
      {/* center spine seam (hidden when opening) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-1/2 -translate-x-1/2"
        style={{
          width: 14,
          background:
            "linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,0.35) 50%, rgba(0,0,0,0) 100%)",
          opacity: opening ? 0 : 1,
          transition: "opacity .4s ease",
        }}
      />
      {/* Tap to open badge */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-10 z-10 flex justify-center"
        style={{
          opacity: opening ? 0 : 1,
          transition: "opacity .35s ease",
        }}
      >
        <span className="flex items-center gap-2 rounded-full border-2 border-[var(--ink)] bg-[#fffdf6]/95 px-6 py-2.5 font-hand text-2xl shadow-xl animate-float backdrop-blur">
          <span className="inline-block h-2 w-2 rounded-full bg-[oklch(0.5_0.18_25)] animate-pulse" />
          tap to open ✿
        </span>
      </div>
    </div>
  );
}