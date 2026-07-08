import { useEffect, useState } from "react";

const PHRASES = ["Welcome to my world", "Built by Alex Njugi"];

export function IntroLoader({ onDone }: { onDone: () => void }) {
  const [stage, setStage] = useState<"intro" | "fading" | "gone">("intro");
  const [phraseIdx, setPhraseIdx] = useState(0);

  // Cycle phrases
  useEffect(() => {
    if (stage !== "intro") return;
    // First phrase starts ~1.4s after mount (after dots+monkey), each ~2.2s
    const startDelay = 1500;
    const perPhrase = 2200;
    const timers: ReturnType<typeof setTimeout>[] = [];
    PHRASES.forEach((_, i) => {
      timers.push(setTimeout(() => setPhraseIdx(i), startDelay + i * perPhrase));
    });
    // Begin fade after both phrases
    timers.push(
      setTimeout(() => setStage("fading"), startDelay + PHRASES.length * perPhrase),
    );
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  // After fade completes, unmount and notify
  useEffect(() => {
    if (stage !== "fading") return;
    const t = setTimeout(() => {
      setStage("gone");
      onDone();
    }, 900);
    return () => clearTimeout(t);
  }, [stage, onDone]);

  if (stage === "gone") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black text-white"
      style={{
        transition: "opacity 800ms ease, visibility 800ms ease",
        opacity: stage === "fading" ? 0 : 1,
        pointerEvents: stage === "fading" ? "none" : "auto",
      }}
      aria-hidden={stage !== "intro"}
    >
      <div className="flex items-end gap-2 text-6xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none select-none">
        <span
          className="inline-block"
          style={{ animation: "loader-dot-in 400ms ease-out 100ms both" }}
        >
          .
        </span>
        <span
          className="inline-block"
          style={{ animation: "loader-dot-in 400ms ease-out 400ms both" }}
        >
          .
        </span>
        <span
          className="inline-block"
          style={{ animation: "loader-dot-in 400ms ease-out 700ms both" }}
        >
          .
        </span>
        <span
          className="inline-block ml-1"
          style={{ animation: "loader-monkey-in 700ms cubic-bezier(0.34, 1.56, 0.64, 1) 1050ms both" }}
        >
          🐒
        </span>
      </div>
      <div className="mt-8 h-8 sm:h-10">
        <p
          key={phraseIdx}
          className="text-lg sm:text-xl md:text-2xl font-light tracking-wide text-white/85"
          style={{ animation: "loader-text-cycle 2200ms ease-in-out both" }}
        >
          {PHRASES[phraseIdx]}
        </p>
      </div>
    </div>
  );
}