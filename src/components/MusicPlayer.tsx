import { useEffect, useRef, useState } from "react";
import songs from "@/data/songs.json";

type Song = { title: string; artist: string; src: string };

function fmt(s: number) {
  if (!isFinite(s) || s < 0) return "0:00";
  const m = Math.floor(s / 60);
  const sec = Math.floor(s % 60);
  return `${m}:${sec.toString().padStart(2, "0")}`;
}

export function MusicPlayer() {
  const list = songs as Song[];
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [muted, setMuted] = useState(false);
  const [shuffle, setShuffle] = useState(false);
  const [repeat, setRepeat] = useState<"off" | "all" | "one">("off");
  const [open, setOpen] = useState(false);
  const [queueOpen, setQueueOpen] = useState(false);

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

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = muted ? 0 : volume;
  }, [volume, muted]);

  const next = () => {
    if (shuffle) {
      if (list.length <= 1) return;
      let n = idx;
      while (n === idx) n = Math.floor(Math.random() * list.length);
      setIdx(n);
    } else {
      setIdx((i) => (i + 1) % list.length);
    }
  };
  const prev = () => setIdx((i) => (i - 1 + list.length) % list.length);
  const toggle = () => setPlaying((p) => !p);

  const onEnded = () => {
    if (repeat === "one") {
      const a = audioRef.current;
      if (a) { a.currentTime = 0; a.play().catch(() => {}); }
      return;
    }
    if (repeat === "off" && idx === list.length - 1 && !shuffle) {
      setPlaying(false);
      setProgress(0);
      return;
    }
    next();
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a || !duration) return;
    const t = (Number(e.target.value) / 100) * duration;
    a.currentTime = t;
    setProgress(t);
  };

  const cycleRepeat = () => setRepeat((r) => (r === "off" ? "all" : r === "all" ? "one" : "off"));

  const label = `${current.title} — ${current.artist}   ✦   `;
  const pct = duration ? (progress / duration) * 100 : 0;

  // Collapsed cassette badge
  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        aria-label="Open music player"
        title="Open mixtape"
        className="animate-bob fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--ink)] font-hand text-2xl text-[#fffdf6] hover:scale-105"
        style={{
          background: "radial-gradient(circle at 30% 30%, oklch(0.55 0.09 50), oklch(0.32 0.07 45))",
          boxShadow: "3px 4px 0 rgba(0,0,0,0.25), inset 0 2px 4px rgba(255,255,255,0.25), inset 0 -3px 6px rgba(0,0,0,0.3)",
        }}
      >
        <span className={playing ? "animate-spin-slow" : ""}>♪</span>
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-4 right-4 z-50 w-[300px] select-none"
      style={{ transform: "rotate(-2deg)" }}
    >
      <div className="paper-card relative !p-3 !pt-4">
        <span className="tape tape-pink left-1/2 top-[-10px] -translate-x-1/2 rotate-[-4deg] !w-20 !h-4" />
        <span className="tape tape-yellow right-[-8px] top-6 rotate-[35deg] !w-12 !h-3" />

        <button
          onClick={() => setOpen(false)}
          aria-label="Close music player"
          title="Close"
          className="absolute -right-2 -top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--ink)] bg-[var(--pop-pink)] font-hand text-sm leading-none shadow-[2px_2px_0_rgba(0,0,0,0.2)] hover:rotate-12"
          style={{ transform: "rotate(8deg)" }}
        >
          ✕
        </button>

        {/* Header */}
        <div className="flex items-center gap-2">
          <span className="font-hand text-lg leading-none">my mixtape</span>
          <span className="ml-auto font-type text-[10px] tracking-widest text-muted-foreground">
            {String(idx + 1).padStart(2, "0")}/{String(list.length).padStart(2, "0")}
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Minimize player"
            className="ml-1 flex h-5 w-5 items-center justify-center rounded-full border border-[var(--ink)]/60 bg-[#fffdf6] font-type text-[10px] leading-none hover:bg-[var(--pop-yellow)]"
          >
            –
          </button>
        </div>

        {/* Cassette / reels art */}
        <div className="relative mt-2 flex items-center gap-3 rounded-sm border-2 border-[var(--ink)] bg-[oklch(0.3_0.05_55)] px-3 py-2 text-[#fffdf6]">
          <Reel spinning={playing} />
          <div className="min-w-0 flex-1">
            <div className="overflow-hidden">
              <div className="flex w-max animate-marquee gap-6 whitespace-nowrap font-marker text-[13px] leading-tight">
                <span>{label}</span>
                <span>{label}</span>
                <span>{label}</span>
              </div>
            </div>
            <div className="mt-1 flex items-end gap-[2px] h-3" aria-hidden>
              {[0,1,2,3,4,5,6,7,8,9,10,11].map((i) => (
                <span
                  key={i}
                  className="w-[3px] rounded-sm bg-[var(--pop-yellow)]"
                  style={{
                    height: playing ? `${30 + ((i * 37) % 70)}%` : "20%",
                    animation: playing ? `eq 0.${6 + (i % 5)}s ease-in-out ${i * 0.05}s infinite alternate` : undefined,
                  }}
                />
              ))}
            </div>
          </div>
          <Reel spinning={playing} delay />
        </div>

        {/* Seek bar */}
        <div className="mt-2">
          <input
            type="range"
            min={0}
            max={100}
            step={0.1}
            value={pct}
            onChange={seek}
            aria-label="Seek"
            className="scrap-range w-full"
            style={{ ["--pct" as never]: `${pct}%` }}
          />
          <div className="mt-0.5 flex justify-between font-type text-[10px] tracking-wider text-muted-foreground">
            <span>{fmt(progress)}</span>
            <span>{fmt(duration)}</span>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-1 flex items-center justify-between gap-1">
          <button
            onClick={() => setShuffle((s) => !s)}
            aria-label="Shuffle"
            title="Shuffle"
            className={`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--ink)] font-type text-[10px] transition hover:-translate-y-0.5 ${shuffle ? "bg-[var(--pop-lime)]" : "bg-[#fffdf6]"}`}
          >
            ⇄
          </button>
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
          <button
            onClick={cycleRepeat}
            aria-label={`Repeat ${repeat}`}
            title={`Repeat: ${repeat}`}
            className={`relative flex h-7 w-7 items-center justify-center rounded-full border-2 border-[var(--ink)] font-type text-[10px] transition hover:-translate-y-0.5 ${repeat !== "off" ? "bg-[var(--pop-yellow)]" : "bg-[#fffdf6]"}`}
          >
            ↻{repeat === "one" && <span className="absolute -right-1 -top-1 rounded-full bg-[var(--ink)] px-1 font-type text-[8px] leading-none text-[#fffdf6]">1</span>}
          </button>
        </div>

        {/* Volume + queue */}
        <div className="mt-2 flex items-center gap-2">
          <button
            onClick={() => setMuted((m) => !m)}
            aria-label={muted ? "Unmute" : "Mute"}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-[var(--ink)]/60 bg-[#fffdf6] font-type text-[10px] hover:bg-[var(--pop-yellow)]"
          >
            {muted || volume === 0 ? "✕" : volume < 0.5 ? "♪" : "♫"}
          </button>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={muted ? 0 : volume}
            onChange={(e) => { setMuted(false); setVolume(Number(e.target.value)); }}
            aria-label="Volume"
            className="scrap-range scrap-range-sm flex-1"
            style={{ ["--pct" as never]: `${(muted ? 0 : volume) * 100}%` }}
          />
          <button
            onClick={() => setQueueOpen((q) => !q)}
            aria-label="Show queue"
            className={`flex h-6 items-center gap-1 rounded-full border border-[var(--ink)]/60 px-2 font-type text-[10px] tracking-wider hover:bg-[var(--pop-yellow)] ${queueOpen ? "bg-[var(--pop-yellow)]" : "bg-[#fffdf6]"}`}
          >
            ≡ queue
          </button>
        </div>

        {/* Queue */}
        {queueOpen && (
          <ul className="mt-2 max-h-40 overflow-y-auto rounded-sm border-2 border-dashed border-[var(--ink)]/40 bg-[#fffdf6] p-1 font-marker text-[12px]">
            {list.map((s, i) => (
              <li key={i}>
                <button
                  onClick={() => { setIdx(i); setPlaying(true); }}
                  className={`flex w-full items-center gap-2 rounded-sm px-1.5 py-0.5 text-left hover:bg-[var(--pop-yellow)]/60 ${i === idx ? "bg-[var(--pop-pink)]/40" : ""}`}
                >
                  <span className="font-type text-[9px] text-muted-foreground w-4">{String(i + 1).padStart(2, "0")}</span>
                  <span className="truncate">{s.title}</span>
                  {i === idx && playing && <span className="ml-auto animate-pulse">♪</span>}
                </button>
              </li>
            ))}
          </ul>
        )}

        {/* Up next hint */}
        {!queueOpen && (
          <p className="mt-1 truncate font-type text-[10px] tracking-wider text-muted-foreground">
            up next · {list[(idx + 1) % list.length].title}
          </p>
        )}

        <audio
          ref={audioRef}
          src={current.src}
          onEnded={onEnded}
          onTimeUpdate={(e) => setProgress(e.currentTarget.currentTime)}
          onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
          preload="metadata"
        />
      </div>
    </div>
  );
}

function Reel({ spinning, delay }: { spinning: boolean; delay?: boolean }) {
  return (
    <div
      className={`relative h-9 w-9 shrink-0 rounded-full border-2 border-[#fffdf6]/30 bg-[oklch(0.2_0.03_55)] ${spinning ? "animate-spin-slow" : ""}`}
      style={delay ? { animationDelay: "-0.5s" } : undefined}
      aria-hidden
    >
      <span className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-[#fffdf6]" />
      {[0, 60, 120].map((deg) => (
        <span
          key={deg}
          className="absolute left-1/2 top-1/2 h-[2px] w-4 -translate-x-1/2 -translate-y-1/2 bg-[#fffdf6]/40"
          style={{ transform: `translate(-50%, -50%) rotate(${deg}deg)` }}
        />
      ))}
    </div>
  );
}

export default MusicPlayer;