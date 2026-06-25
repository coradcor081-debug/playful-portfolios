import { useEffect, useRef, useState } from "react";
import songs from "@/data/songs.json";

type Song = { title: string; artist: string; src: string };

export function MusicPlayer() {
  const list = songs as Song[];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  const current = list[idx];

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    if (playing) {
      a.play().catch(() => setPlaying(false));
    } else {
      a.pause();
    }
  }, [playing, idx]);

  const next = () => setIdx((i) => (i + 1) % list.length);
  const prev = () => setIdx((i) => (i - 1 + list.length) % list.length);
  const toggle = () => setPlaying((p) => !p);

  const label = `${current.title} — ${current.artist}   ✦   `;

  return (
    <div
      className="fixed bottom-4 right-4 z-50 w-[260px] select-none"
      style={{ transform: "rotate(-2deg)" }}
    >
      <div className="paper-card relative !p-3 !pt-4">
        <span className="tape tape-pink left-1/2 top-[-10px] -translate-x-1/2 rotate-[-4deg] !w-20 !h-4" />
        <span className="tape tape-yellow right-[-8px] top-6 rotate-[35deg] !w-12 !h-3" />

        {/* Header */}
        <div className="flex items-center gap-2">
          <span
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-yellow)] font-hand text-base ${
              playing ? "animate-spin-slow" : ""
            }`}
            aria-hidden
          >
            ♪
          </span>
          <span className="font-hand text-lg leading-none">mixtape</span>
          <span className="ml-auto font-type text-[10px] tracking-widest text-muted-foreground">
            {String(idx + 1).padStart(2, "0")}/{String(list.length).padStart(2, "0")}
          </span>
        </div>

        {/* Scrolling title */}
        <div className="mt-2 overflow-hidden rounded-sm border-2 border-dashed border-[var(--ink)]/40 bg-[#fffdf6] px-1 py-1">
          <div className="flex w-max animate-marquee gap-6 whitespace-nowrap font-marker text-sm">
            <span>{label}</span>
            <span>{label}</span>
            <span>{label}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-3 flex items-center justify-center gap-2">
          <button
            onClick={prev}
            aria-label="Previous song"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[#fffdf6] font-hand text-base transition hover:-translate-y-0.5 hover:bg-[var(--pop-blue)]"
          >
            ⏮
          </button>
          <button
            onClick={toggle}
            aria-label={playing ? "Pause" : "Play"}
            className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-pink)] font-hand text-lg transition hover:-translate-y-0.5"
          >
            {playing ? "❚❚" : "▶"}
          </button>
          <button
            onClick={next}
            aria-label="Next song"
            className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[#fffdf6] font-hand text-base transition hover:-translate-y-0.5 hover:bg-[var(--pop-lime)]"
          >
            ⏭
          </button>
        </div>

        <audio
          ref={audioRef}
          src={current.src}
          onEnded={next}
          preload="none"
        />
      </div>
    </div>
  );
}

export default MusicPlayer;