import { useEffect, useState } from "react";
import cover from "@/assets/scrapbook-cover.png.asset.json";

export function BookCover() {
  const [opening, setOpening] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    if (!opening) return;
    const t = setTimeout(() => setGone(true), 1400);
    return () => clearTimeout(t);
  }, [opening]);

  // lock scroll while cover is up
  useEffect(() => {
    if (gone) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [gone]);

  if (gone) return null;

  return (
    <div
      aria-hidden={opening}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#c97f54]"
      style={{ perspective: "2000px" }}
    >
      <button
        type="button"
        onClick={() => setOpening(true)}
        aria-label="Open the scrapbook"
        className="group relative h-full w-full max-w-[680px] cursor-pointer outline-none"
        style={{
          transformStyle: "preserve-3d",
          transformOrigin: "left center",
          transition: "transform 1.2s cubic-bezier(.7,.05,.2,1), opacity .6s ease 0.8s",
          transform: opening ? "rotateY(-165deg)" : "rotateY(0deg)",
          opacity: opening ? 0 : 1,
          boxShadow: opening
            ? "40px 0 80px -20px rgba(0,0,0,0.5)"
            : "0 20px 60px -10px rgba(0,0,0,0.4)",
        }}
      >
        <img
          src={cover.url}
          alt="Scrapbook cover"
          className="h-full w-full object-cover object-center"
          style={{ backfaceVisibility: "hidden" }}
          draggable={false}
        />
        {/* spine shadow */}
        <div
          className="pointer-events-none absolute inset-y-0 left-0 w-8"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.35), rgba(0,0,0,0))",
          }}
        />
        {/* tap to open */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-10 flex justify-center transition-opacity"
          style={{ opacity: opening ? 0 : 1 }}
        >
          <span
            className="rounded-full border-2 border-[var(--ink)] bg-[#fffdf6] px-5 py-2 font-hand text-2xl shadow-lg animate-float"
          >
            tap to open ✿
          </span>
        </div>
      </button>
    </div>
  );
}